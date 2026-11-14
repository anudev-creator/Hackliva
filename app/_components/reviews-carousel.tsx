"use client";

import { Children, type ReactNode } from "react";
import { MaterialSymbol } from "./material-symbol";
import { useScrollCarousel } from "./use-scroll-carousel";

type ReviewsCarouselProps = {
  /** Short heading shown beside the cards on large screens, above them otherwise. */
  intro: ReactNode;
  label: string;
  /** One child per slide. */
  children: ReactNode;
};

/**
 * Cards scroll sideways and bleed off the right edge of the screen.
 * The intro sits in the left column on lg+; the arrows and progress bar sit centered below the cards.
 */
export function ReviewsCarousel({ intro, label, children }: ReviewsCarouselProps) {
  const { trackRef, onScroll, scrollBySlide, canPrev, canNext, progress, visible } =
    useScrollCarousel<HTMLUListElement>();

  return (
    // --edge: distance from the screen edge to the max-w-7xl content column.
    <div className="relative [--edge:max(var(--gutter),calc((100%-80rem)/2+var(--gutter)))] [--gutter:1.25rem] [--intro:17rem] sm:[--gutter:2.5rem]">
      <div className="px-(--edge) lg:pointer-events-none lg:absolute lg:inset-y-0 lg:left-(--edge) lg:flex lg:w-(--intro) lg:items-center lg:px-0">
        <div className="lg:pointer-events-auto">{intro}</div>
      </div>

      <ul
        ref={trackRef}
        onScroll={onScroll}
        aria-label={label}
        // `relative` keeps absolutely positioned slide content clipped by the track.
        className="relative mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-(--edge) pb-2 [scrollbar-width:none] scroll-px-(--edge) lg:mt-0 lg:ml-[calc(var(--edge)+var(--intro)+2.5rem)] lg:pl-0 lg:scroll-pl-0 [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <li className="w-[85%] max-w-80 shrink-0 snap-start sm:w-80">{child}</li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-5 px-(--edge)">
        <ArrowButton
          icon="arrow_back"
          label="Previous reviews"
          disabled={!canPrev}
          onClick={() => scrollBySlide(-1)}
        />
        <div aria-hidden="true" className="relative h-0.5 w-32 overflow-hidden sm:w-48 rounded-full bg-zinc-300">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-zinc-900"
            style={{
              width: `${visible * 100}%`,
              transform: `translateX(${(progress * (1 - visible) * 100) / visible}%)`,
            }}
          />
        </div>
        <ArrowButton
          icon="arrow_forward"
          label="Next reviews"
          disabled={!canNext}
          onClick={() => scrollBySlide(1)}
        />
      </div>
    </div>
  );
}

function ArrowButton({
  icon,
  label,
  disabled,
  onClick,
}: {
  icon: "arrow_back" | "arrow_forward";
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
      className="flex size-9 items-center justify-center rounded-full text-zinc-900 transition hover:bg-zinc-200/70 disabled:cursor-not-allowed disabled:opacity-30"
    >
      <MaterialSymbol name={icon} size={22} />
    </button>
  );
}
