"use client";

import { Children, type ReactNode } from "react";
import { useScrollCarousel } from "./use-scroll-carousel";

type InnovationCarouselProps = {
  /** Accessible name for the list of slides. */
  label: string;
  /** One child per slide. */
  children: ReactNode;
};

/** Row of cards that fits three across on desktop and scrolls sideways when there are more (or less room). */
export function InnovationCarousel({ label, children }: InnovationCarouselProps) {
  const { trackRef, onScroll, dragHandlers, progress, visible } = useScrollCarousel<HTMLUListElement>();

  return (
    <div>
      <ul
        ref={trackRef}
        onScroll={onScroll}
        {...dragHandlers}
        aria-label={label}
        className="relative flex lg:cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] lg:gap-7 [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <li className="w-[85%] max-w-[26rem] shrink-0 snap-start sm:w-[max(17.5rem,calc((100%-3rem)/3))] sm:max-w-none lg:w-[calc((100%-3.5rem)/3)]">
            {child}
          </li>
        ))}
      </ul>

      {/* Progress: the red part is the share of cards currently in view. */}
      <div aria-hidden="true" className="relative mx-auto mt-8 h-0.5 w-64 overflow-hidden rounded-full bg-zinc-200">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[#dc2626]"
          style={{
            width: `${visible * 100}%`,
            transform: `translateX(${(progress * (1 - visible) * 100) / visible}%)`,
          }}
        />
      </div>
    </div>
  );
}
