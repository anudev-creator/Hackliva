"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import chevronLeft from "../_assets/course/tabs/chevron-left.svg";
import chevronRight from "../_assets/course/tabs/chevron-right.svg";
import { useScrollCarousel } from "./use-scroll-carousel";

export type CourseTab = {
  label: string;
  href: string;
};

type CourseTabsProps = {
  tabs: CourseTab[];
  /** href of the tab to highlight (the course being viewed). */
  activeHref?: string;
};

/** Course switcher bar (Figma 425:2873): arrow buttons on the right, then a scrolling row of pills. */
export function CourseTabs({ tabs, activeHref }: CourseTabsProps) {
  const { trackRef, onScroll, scrollBySlide, canPrev, canNext } =
    useScrollCarousel<HTMLUListElement>();
  const activeRef = useRef<HTMLLIElement>(null);

  // Bring the current course's pill into view (horizontally only).
  useEffect(() => {
    const track = trackRef.current;
    const active = activeRef.current;
    if (!track || !active) return;
    track.scrollLeft = Math.max(0, active.offsetLeft - track.offsetLeft - 8);
  }, [activeHref, trackRef]);

  return (
    <div className="border-b border-hairline bg-mist pt-8 pb-8 font-jakarta">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 sm:px-8 lg:px-16">
        <div className="flex justify-end gap-2">
          <ArrowButton icon={chevronLeft} label="Previous courses" disabled={!canPrev} onClick={() => scrollBySlide(-1)} />
          <ArrowButton icon={chevronRight} label="Next courses" disabled={!canNext} onClick={() => scrollBySlide(1)} />
        </div>

        <ul
          ref={trackRef}
          onScroll={onScroll}
          aria-label="Courses"
          className="relative flex h-[42px] gap-3 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab) => {
            const active = tab.href === activeHref;
            return (
              <li key={tab.href} ref={active ? activeRef : undefined} className="shrink-0">
                <Link
                  href={tab.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-center rounded-[4px] text-xs leading-4 font-medium tracking-[0.6px] whitespace-nowrap uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                    active
                      ? "bg-ink px-6 pt-[8.5px] pb-[9.5px] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                      : "border border-hairline bg-white px-6 py-2 text-ink-muted hover:border-[#c9d0da] hover:text-ink"
                  }`}
                >
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
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
  icon: typeof chevronLeft;
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
      className="flex size-10 items-center justify-center rounded-[4px] border border-hairline bg-white transition hover:border-[#c9d0da] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <Image src={icon} alt="" unoptimized />
    </button>
  );
}
