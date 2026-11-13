"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * State and actions for a horizontally scrolling list of slides:
 * whether previous/next are possible, how far it has scrolled, and a
 * scroll-by-one-slide action. Attach `trackRef` and `onScroll` to the list.
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

  return { trackRef, onScroll, scrollBySlide, ...state };
}
