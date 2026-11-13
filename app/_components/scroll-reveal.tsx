"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const KEYFRAMES: Keyframe[] = [
  { opacity: 0, transform: "translate3d(0, 36px, 0)" },
  { opacity: 1, transform: "none" },
];
const DURATION = 900;
const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";
/** Delay between elements that come on screen together (e.g. a row of cards). */
const STAGGER = 90;
const MAX_STAGGER_STEPS = 6;

/**
 * Elements marked with `data-reveal` fade and rise into place the first time
 * they scroll into view; ones that arrive together are staggered.
 *
 * Only elements still below the screen when the page loads are hidden, and
 * they are hidden with a held animation rather than a style attribute, so the
 * server HTML is never changed (no hydration mismatches, nothing hidden without
 * JS). Skipped entirely for visitors who prefer reduced motion.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Elements waiting to be revealed, each held invisible by an animation.
    const hidden = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        const arriving = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          // Top-to-bottom, then left-to-right, so rows stagger naturally.
          .sort((a, b) => {
            const ra = a.getBoundingClientRect();
            const rb = b.getBoundingClientRect();
            return Math.round(ra.top - rb.top) || ra.left - rb.left;
          });

        arriving.forEach((element, index) => {
          observer.unobserve(element);
          hidden.get(element)?.cancel();
          hidden.delete(element);
          element.animate(KEYFRAMES, {
            duration: DURATION,
            delay: Math.min(index, MAX_STAGGER_STEPS) * STAGGER,
            easing: EASING,
            fill: "backwards",
          });
        });
      },
      // Start a little before the element's top reaches the bottom of the screen.
      { rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      // Already on (or above) the screen: leave it exactly as it is.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      hidden.set(element, element.animate([KEYFRAMES[0]], { fill: "forwards" }));
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      hidden.forEach((hold) => hold.cancel());
    };
  }, [pathname]);

  return null;
}
