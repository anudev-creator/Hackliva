"use client";

import { Children, type ReactNode } from "react";
import { MaterialSymbol } from "./material-symbol";
import { useScrollCarousel } from "./use-scroll-carousel";

type CarouselProps = {
  /** Content shown to the left of the arrow buttons (usually a heading). */
  header: ReactNode;
  /** Accessible name for the list of slides. */
  label: string;
  /** One child per slide. */
  children: ReactNode;
};

/**
 * Horizontally scrolling row of slides with previous/next buttons.
 * Slides line up with the page's max-w-7xl content column and bleed off
 * the right edge of the screen; touch users can swipe.
 */
export function Carousel({ header, label, children }: CarouselProps) {
  const { trackRef, onScroll, scrollBySlide, canPrev, canNext } =
    useScrollCarousel<HTMLUListElement>();

  return (
    <div>
      <div className="mx-auto flex max-w-7xl items-end gap-6 px-5 sm:px-10">
        <div className="min-w-0 flex-1">{header}</div>
        <div className="hidden shrink-0 gap-3 sm:flex">
          <ArrowButton
            icon="chevron_left"
            label="Previous"
            disabled={!canPrev}
            onClick={() => scrollBySlide(-1)}
          />
          <ArrowButton
            icon="chevron_right"
            label="Next"
            disabled={!canNext}
            onClick={() => scrollBySlide(1)}
          />
        </div>
      </div>

      <ul
        ref={trackRef}
        data-reveal
        onScroll={onScroll}
        aria-label={label}
        // `relative` keeps absolutely positioned slide content (e.g. sr-only
        // text) clipped by the track instead of widening the whole page.
        className="relative mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-(--edge) pb-2 [--edge:max(var(--gutter),calc((100%-80rem)/2+var(--gutter)))] [--gutter:1.25rem] [scrollbar-width:none] scroll-px-(--edge) sm:[--gutter:2.5rem] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <li className="w-[85%] max-w-[300px] shrink-0 snap-start sm:w-[300px]">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArrowButton({
  icon,
  label,
  disabled,
  onClick,
}: {
  icon: "chevron_left" | "chevron_right";
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex size-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-xs transition hover:border-zinc-300 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <MaterialSymbol name={icon} size={20} />
    </button>
  );
}
