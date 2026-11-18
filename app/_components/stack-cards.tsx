"use client";

import { Children, useEffect, useEffectEvent, useRef, type ReactNode } from "react";

type StackCardsProps = {
  /** One child per card. */
  children: ReactNode;
  /** Classes for the panel that pins while the cards stack (background, radius, padding). */
  className?: string;
  /** Shown above the cards and stays visible while they stack (e.g. a heading). */
  header?: ReactNode;
  /** Shown below the cards and stays visible while they stack (e.g. a button). */
  footer?: ReactNode;
  /** Pixels each stacked card sits below the previous one, so the deck's edges peek out. */
  peek?: number;
  /** Scale a card loses for each card stacked on top of it. */
  shrink?: number;
  /** Darkness (0–1) a card gains for each card stacked on top of it. */
  dim?: number;
  /** Accessible name for the list. */
  label?: string;
  /**
   * Called once when, with the deck complete, the visitor keeps scrolling
   * down while the panel is still pinned. Only fires in pinned mode.
   */
  onComplete?: () => void;
};

/** Fraction of the remaining distance eased per 60fps frame. */
const EASE = 0.2;
const MAX_DIM = 0.7;
/** Extra scroll, as a fraction of the viewport, that the finished deck stays pinned. */
const HOLD = 0.3;
/** Height of the faded strip at the bottom of the card area where the next card appears. */
const PREVIEW = 40;
/** Space kept free below the pinned panel. */
const BOTTOM_GAP = 24;
/** Scroll past the finished deck (px) that counts as "keep scrolling" for onComplete. */
const COMPLETE_AFTER = 40;

/**
 * Pinned stacking cards. When the panel reaches the top of the screen it
 * stops (position: sticky) and further scrolling stacks the cards inside it:
 * each card slides up over the previous one, which shrinks and darkens.
 * Once the deck is complete the panel releases and the page scrolls on.
 *
 * Falls back to a plain list with prefers-reduced-motion, before JS loads, or
 * when the screen is too short to show the whole pinned panel.
 */
export function StackCards({
  children,
  className = "",
  header,
  footer,
  peek = 12,
  shrink = 0.05,
  dim = 0.25,
  label,
  onComplete,
}: StackCardsProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const count = Children.count(children);
  const fireComplete = useEffectEvent(() => onComplete?.());

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const list = listRef.current;
    if (!root || !stage || !viewport || !list) return;

    const items = Array.from(list.children) as HTMLElement[];
    const cards = items.map((item) => item.firstElementChild as HTMLElement);
    const shades = cards.map((card) => card.lastElementChild as HTMLElement);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let enabled = false;
    let offsets: number[] = []; // each card's resting top, relative to the first card
    let maxProgress = 0; // scroll distance needed to stack every card
    let pinTop = 0;
    let hold = 0; // scroll distance the finished deck stays pinned
    let progress = 0; // eased scroll progress, in px
    let frame = 0;
    let lastTime = 0;
    let inView = false;
    let lastScrolled = 0;
    let completePending = false;
    let completed = false;

    // How far the page has scrolled since the panel pinned (can be < 0 or past the end).
    const scrolledSincePin = () => pinTop - root.getBoundingClientRect().top;
    const targetProgress = () => Math.min(Math.max(scrolledSincePin(), 0), maxProgress);

    const render = () => {
      const tops = offsets.map((offset, i) => Math.max(offset - progress, i * peek));
      // depth[i]: how many cards (fractionally) are stacked on top of card i
      const depth = offsets.map(() => 0);
      for (let i = items.length - 2; i >= 0; i--) {
        const next = i + 1;
        // 0 while the next card is still at rest, 1 once it sits in its stack slot.
        const travel = offsets[next] - offsets[i] - peek;
        const covered = 1 - (tops[next] - next * peek) / travel;
        depth[i] = depth[next] + Math.min(Math.max(covered, 0), 1);
      }
      cards.forEach((card, i) => {
        const y = tops[i] - offsets[i];
        const scale = 1 - depth[i] * shrink;
        card.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
        shades[i].style.opacity = String(Math.min(depth[i] * dim, MAX_DIM));
      });
    };

    const tick = (time: number) => {
      const frames = lastTime ? Math.min((time - lastTime) / (1000 / 60), 4) : 1;
      // Native scrolling jumps in steps; easing toward it keeps the stacking smooth.
      const ease = 1 - Math.pow(1 - EASE, frames);
      lastTime = time;

      const scrolled = scrolledSincePin();
      const target = Math.min(Math.max(scrolled, 0), maxProgress);
      progress += (target - progress) * ease;
      if (Math.abs(target - progress) < 0.1) progress = target;
      render();

      // Moving down past the finished deck, while the panel is still pinned.
      const movingDown = scrolled > lastScrolled;
      if (movingDown && scrolled > maxProgress + COMPLETE_AFTER && scrolled < maxProgress + hold) {
        completePending = true;
      }
      if (scrolled < maxProgress) completePending = false;
      lastScrolled = scrolled;
      // Wait until the last card has visibly settled before announcing completion.
      if (completePending && !completed && progress === maxProgress) {
        completed = true;
        fireComplete();
      }

      if (progress === target) {
        frame = 0;
        lastTime = 0;
      } else {
        frame = requestAnimationFrame(tick);
      }
    };

    const schedule = () => {
      if (enabled && inView && !frame) frame = requestAnimationFrame(tick);
    };

    const disable = () => {
      enabled = false;
      delete root.dataset.pinned;
      root.style.height = "";
      viewport.style.height = "";
      cards.forEach((card, i) => {
        card.style.transform = "";
        shades[i].style.opacity = "0";
      });
    };

    const setup = () => {
      if (reduceMotion.matches) return disable();
      root.dataset.pinned = "";

      // Size the card area to the finished deck (tallest card + peeking edges)
      // plus a strip where the next card fades in, so the footer sits right below.
      const tallest = Math.max(...items.map((item) => item.offsetHeight));
      viewport.style.height = `${tallest + (items.length - 1) * peek + PREVIEW}px`;

      // Pin only if the whole panel fits on screen below the pin line.
      pinTop = parseFloat(getComputedStyle(stage).top) || 0;
      if (stage.offsetHeight > window.innerHeight - pinTop - BOTTOM_GAP) return disable();

      enabled = true;
      offsets = items.map((item) => item.offsetTop - items[0].offsetTop);
      maxProgress = Math.max(offsets[offsets.length - 1] - (items.length - 1) * peek, 0);
      // The stage stays pinned for (runway height - stage height) of scrolling.
      hold = Math.round(window.innerHeight * HOLD);
      root.style.height = `${stage.offsetHeight + maxProgress + hold}px`;
      progress = targetProgress();
      lastScrolled = scrolledSincePin();
      render();
    };

    setup();

    const onResize = () => {
      setup();
      schedule();
    };

    // Card content changes size (fonts, images); the window changes the stage.
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(list);
    window.addEventListener("resize", onResize);

    // Only do work while the stack is on screen.
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      schedule();
    });
    intersectionObserver.observe(root);

    window.addEventListener("scroll", schedule, { passive: true });
    reduceMotion.addEventListener("change", onResize);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", schedule);
      reduceMotion.removeEventListener("change", onResize);
    };
  }, [count, peek, shrink, dim]);

  return (
    // Runway: JS sets its height so the stage has scroll distance to stay pinned.
    <div
      ref={rootRef}
      className="group/stack [--pin-top:5rem] md:[--pin-top:7rem]"
    >
      <div
        ref={stageRef}
        className={`group-data-pinned/stack:sticky group-data-pinned/stack:top-(--pin-top) ${className}`}
      >
        {header}
        {/* While pinned, cards slide into this area from its faded bottom edge. */}
        <div
          ref={viewportRef}
          className="group-data-pinned/stack:overflow-clip group-data-pinned/stack:mask-[linear-gradient(to_bottom,black_calc(100%-40px),transparent)]"
        >
          <ul ref={listRef} aria-label={label} className="flex flex-col gap-8">
            {Children.map(children, (child) => (
              <li>
                <div className="relative origin-top overflow-hidden rounded-3xl will-change-transform">
                  {child}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-black opacity-0 will-change-[opacity]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        {footer}
      </div>
    </div>
  );
}
