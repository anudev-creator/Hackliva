"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

let lenis: Lenis | null = null;

/** The running smooth-scroll instance, or null (reduced motion, or not mounted yet). */
export function getLenis() {
  return lenis;
}

/**
 * Jump so `element`'s top sits `offset` px below the top of the screen, cancelling
 * any smooth scroll in progress so the two don't fight.
 */
export function jumpTo(element: HTMLElement, offset = 0) {
  // A plain number, so neither Lenis nor the browser adds the element's scroll-margin on top.
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  if (lenis) {
    lenis.scrollTo(top, { immediate: true, force: true });
  } else {
    window.scrollTo({ top, behavior: "instant" });
  }
}

/**
 * Site-wide smooth scrolling for mouse wheels and trackpads. Touch scrolling
 * stays native, and it is off for visitors who prefer reduced motion.
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = () => {
      if (lenis || reduceMotion.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        // Scrollable areas inside the page (carousels, menus) keep their own scroll.
        allowNestedScroll: true,
        // In-page #links glide too, landing below the sticky header.
        anchors: { offset: -96 },
      });
    };
    const stop = () => {
      lenis?.destroy();
      lenis = null;
    };
    const onPreferenceChange = () => (reduceMotion.matches ? stop() : start());

    start();
    reduceMotion.addEventListener("change", onPreferenceChange);
    return () => {
      reduceMotion.removeEventListener("change", onPreferenceChange);
      stop();
    };
  }, []);

  // After client-side navigation, drop any glide still running from the old
  // page so the router's own scroll position (top, or restored) wins.
  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    lenis?.stop();
    lenis?.start();
  }, [pathname]);

  return null;
}
