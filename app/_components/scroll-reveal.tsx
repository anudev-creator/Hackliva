"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const KEYFRAMES: Keyframe[] = [
  { opacity: 0, transform: "translate3d(0, 24px, 0)" },
  { opacity: 1, transform: "none" },
];
const DURATION = 700;
const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";
/** Delay between elements that come on screen together (e.g. a row of cards). */
const STAGGER = 70;
const MAX_STAGGER_STEPS = 4;

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

    // Elements armed for reveal, each held invisible by an animation.
    const hidden = new Map<HTMLElement, Animation>();

    // Reveals an armed element the moment it nears the bottom of the screen.
    const revealObserver = new IntersectionObserver(
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
          revealObserver.unobserve(element);
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
      { rootMargin: "0px 0px -5% 0px" },
    );

    // A held animation gives its element its own GPU layer, so on a long page hundreds
    // of them slow scrolling. Elements are only armed once they are about to matter
    // (within a couple of screens below), and are still far off screen when that happens.
    const armObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          armObserver.unobserve(element);
          // Already (partly) on screen, e.g. after a jump or fast scroll: show it as it is.
          if (element.getBoundingClientRect().top < window.innerHeight) return;
          hidden.set(element, element.animate([KEYFRAMES[0]], { fill: "forwards" }));
          revealObserver.observe(element);
        });
      },
      { rootMargin: "0px 0px 150% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      // Already on (or above) the screen: leave it exactly as it is.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      armObserver.observe(element);
    });

    return () => {
      armObserver.disconnect();
      revealObserver.disconnect();
      hidden.forEach((hold) => hold.cancel());
    };
  }, [pathname]);

  return null;
}
