"use client";

import { useCallback, useEffect, useRef, useState, type DragEvent, type MouseEvent, type PointerEvent } from "react";

/**
 * State and actions for a horizontally scrolling list of slides:
 * whether previous/next are possible, how far it has scrolled, and a
 * scroll-by-one-slide action. Attach `trackRef` and `onScroll` to the list, and
 * spread `dragHandlers` on it so a mouse can drag the row sideways like a finger.
 */
export function useScrollCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null);
  const [state, setState] = useState({
    canPrev: false,
    canNext: false,
    /** Scroll position, 0 (start) to 1 (end). */
    progress: 0,
    /** Fraction of the list that is visible, 0 to 1. */
    visible: 1,
  });

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setState({
      canPrev: track.scrollLeft > 1,
      canNext: track.scrollLeft < max - 1,
      progress: max > 0 ? Math.min(track.scrollLeft / max, 1) : 0,
      visible: track.scrollWidth ? track.clientWidth / track.scrollWidth : 1,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Fires once on observe, then whenever the track is resized.
    const observer = new ResizeObserver(onScroll);
    observer.observe(track);
    return () => observer.disconnect();
  }, [onScroll]);

  const scrollBySlide = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    const slide = track?.firstElementChild;
    if (!track || !slide) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: direction * (slide.getBoundingClientRect().width + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, []);

  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });

  const dragHandlers = {
    onPointerDown: (event: PointerEvent<T>) => {
      // Touch and pens already scroll natively; only the primary mouse button drags.
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      const track = trackRef.current;
      if (!track) return;
      drag.current = { active: true, moved: false, startX: event.clientX, startScroll: track.scrollLeft };
    },
    onPointerMove: (event: PointerEvent<T>) => {
      const state = drag.current;
      const track = trackRef.current;
      if (!state.active || !track) return;
      const dx = event.clientX - state.startX;
      if (!state.moved) {
        if (Math.abs(dx) < 5) return;
        state.moved = true;
        // Snapping would fight the drag; it is restored when the mouse is released.
        track.style.scrollSnapType = "none";
        track.style.cursor = "grabbing";
        track.style.userSelect = "none";
        track.setPointerCapture(event.pointerId);
      }
      track.scrollLeft = state.startScroll - dx;
    },
    onPointerUp: (event: PointerEvent<T>) => {
      const track = trackRef.current;
      if (!drag.current.active || !track) return;
      drag.current.active = false;
      if (!drag.current.moved) return;
      track.releasePointerCapture?.(event.pointerId);
      track.style.scrollSnapType = "";
      track.style.cursor = "";
      track.style.userSelect = "";
    },
    // A drag must not also click the link or card under the mouse.
    onClickCapture: (event: MouseEvent<T>) => {
      if (!drag.current.moved) return;
      drag.current.moved = false;
      event.preventDefault();
      event.stopPropagation();
    },
    // Stops the browser's own image/link drag ghost from hijacking the gesture.
    onDragStart: (event: DragEvent<T>) => event.preventDefault(),
  };

  return { trackRef, onScroll, scrollBySlide, dragHandlers, ...state };
}
