"use client";

import { Children, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { MaterialSymbol } from "../../_components/material-symbol";
import { jumpTo } from "../../_components/smooth-scroll";
import { StackCards } from "../../_components/stack-cards";

type WhatWeDoPanelProps = {
  /** Classes for the dark panel (shared by both views). */
  className: string;
  /** Heading block, shown in both views. */
  header: ReactNode;
  /** Featured cards, shown stacking on scroll. */
  featured: ReactNode;
  /** Every service, shown as a grid after "View All". */
  all: ReactNode;
  label: string;
  viewAllLabel: string;
  showLessLabel: string;
};

/**
 * "What We Do" panel: stacking featured cards with a "View All" button that
 * swaps them for a grid of every service ("Show Less" swaps back). Scrolling
 * on past the finished stack opens the grid automatically.
 */
export function WhatWeDoPanel({
  className,
  header,
  featured,
  all,
  label,
  viewAllLabel,
  showLessLabel,
}: WhatWeDoPanelProps) {
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  /** What caused the last change: null on first render. */
  const toggledBy = useRef<"button" | "scroll" | null>(null);

  // Runs before StackCards measures itself, so it sees the final scroll position.
  useLayoutEffect(() => {
    if (!toggledBy.current) return;
    // Only move focus when the visitor pressed the button themselves.
    const moveFocus = toggledBy.current === "button";
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // If the panel's top is above the pin line (we were mid-stack or deep in the
    // grid), bring it back so the panel stays put on screen instead of jumping.
    const pinLine = parseFloat(getComputedStyle(wrapper).scrollMarginTop) || 0;
    if (wrapper.getBoundingClientRect().top < pinLine) jumpTo(wrapper, pinLine);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (expanded) {
      if (moveFocus) gridRef.current?.focus({ preventScroll: true });
      if (!reduceMotion) {
        Array.from(gridRef.current?.children ?? []).forEach((tile, i) =>
          tile.animate(
            [
              { opacity: 0, transform: "translateY(16px)" },
              { opacity: 1, transform: "none" },
            ],
            { duration: 450, delay: i * 35, easing: "cubic-bezier(.2,.7,.2,1)", fill: "backwards" },
          ),
        );
      }
    } else {
      if (moveFocus) toggleRef.current?.focus({ preventScroll: true });
      if (!reduceMotion) {
        wrapper.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: "ease-out" });
      }
    }
  }, [expanded]);

  const toggle = (
    <div className="flex justify-center pt-8">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={expanded}
        onClick={() => {
          toggledBy.current = "button";
          setExpanded((value) => !value);
        }}
        className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-8 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-[#c90b1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {expanded ? showLessLabel : viewAllLabel}
        <MaterialSymbol name={expanded ? "arrow_upward" : "arrow_forward"} size={18} />
      </button>
    </div>
  );

  return (
    // scroll-margin matches StackCards' pin line (below the sticky site header).
    <div ref={wrapperRef} className="scroll-mt-20 md:scroll-mt-28">
      {expanded ? (
        <div className={className}>
          {header}
          <ul
            ref={gridRef}
            tabIndex={-1}
            aria-label={label}
            className="grid gap-4 outline-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          >
            {Children.map(all, (tile) => (
              <li>{tile}</li>
            ))}
          </ul>
          {toggle}
        </div>
      ) : (
        <StackCards
          label={label}
          className={className}
          header={header}
          footer={toggle}
          onComplete={() => {
            toggledBy.current = "scroll";
            setExpanded(true);
          }}
        >
          {featured}
        </StackCards>
      )}
    </div>
  );
}
