/**
 * Jump so `element`'s top sits `offset` px below the top of the screen, instantly
 * (even when the page has smooth in-page link scrolling turned on).
 */
export function jumpTo(element: HTMLElement, offset = 0) {
  // A plain number, so the browser doesn't add the element's scroll-margin on top.
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "instant" });
}

const MIN_DURATION = 700;
const MAX_DURATION = 1500;

/** Slow start, quick middle, soft landing. */
const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);

let cancelCurrent: (() => void) | null = null;

/** Where the section's heading should land: just under the sticky header, with a little air. */
function targetTop(section: HTMLElement) {
  const header = document.querySelector("header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const anchor = section.querySelector<HTMLElement>("h1, h2") ?? section;
  return Math.max(0, anchor.getBoundingClientRect().top + window.scrollY - headerHeight - 32);
}

/**
 * Glide to a section with an eased tween whose length grows with the distance.
 * Any wheel, touch, key or drag input hands control straight back to the user.
 * Returns false when the section doesn't exist on this page.
 */
export function scrollToSection(id: string): boolean {
  const section = document.getElementById(id);
  if (!section) return false;

  cancelCurrent?.();

  const from = window.scrollY;
  const to = Math.min(targetTop(section), document.documentElement.scrollHeight - window.innerHeight);
  const distance = to - from;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || Math.abs(distance) < 4) {
    window.scrollTo({ top: to, behavior: "instant" });
    return true;
  }

  const duration = Math.min(MAX_DURATION, Math.max(MIN_DURATION, 500 + Math.abs(distance) * 0.25));
  const start = performance.now();
  let frame = 0;

  const stop = () => {
    cancelAnimationFrame(frame);
    for (const type of interrupts) window.removeEventListener(type, stop);
    cancelCurrent = null;
  };
  const interrupts = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
  for (const type of interrupts) window.addEventListener(type, stop, { passive: true });
  cancelCurrent = stop;

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    window.scrollTo({ top: from + distance * easeInOutQuart(t), behavior: "instant" });
    if (t < 1) frame = requestAnimationFrame(step);
    else stop();
  };
  frame = requestAnimationFrame(step);
  return true;
}
