"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll feedback for the sticky header it sits in: a red progress line along the bottom edge,
 * and a `data-scrolled` flag (the header adds a soft shadow while it's set).
 * Writes straight to the DOM from one throttled scroll handler, so scrolling never re-renders React.
 */
export function HeaderEffects() {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const line = bar.current;
    const header = line?.closest("header");
    if (!line || !header) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      line.style.transform = `scaleX(${progress})`;
      header.toggleAttribute("data-scrolled", window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <span
      ref={bar}
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="pointer-events-none absolute -bottom-px left-0 h-0.5 w-full origin-left bg-brand will-change-transform"
    />
  );
}
