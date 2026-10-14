"use client";

import { useRef } from "react";
import Link from "next/link";

export type CourseTab = {
  label: string;
  href: string;
  active?: boolean;
};

export type CourseSelectorTabsProps = {
  tabs: CourseTab[];
};

export default function CourseSelectorTabs({ tabs }: CourseSelectorTabsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({
      left: direction * 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full border-y border-[#F2D6D6] bg-[#FAFAFA]">
      <div className="mx-auto max-w-[1536px] px-4 py-5 sm:px-8 lg:px-16">
        <div className="flex justify-end gap-3 pb-4">
          <button
            type="button"
            aria-label="Previous courses"
            onClick={() => scrollByAmount(-1)}
            className="flex size-9 items-center justify-center rounded-lg border border-[#F2D6D6] bg-white text-[#0A0A0A] transition-colors duration-300 hover:border-[#F00012]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012]"
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
              <path
                d="M10 2 4 8l6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next courses"
            onClick={() => scrollByAmount(1)}
            className="flex size-9 items-center justify-center rounded-lg border border-[#F2D6D6] bg-white text-[#0A0A0A] transition-colors duration-300 hover:border-[#F00012]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012]"
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
              <path
                d="m6 2 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`shrink-0 whitespace-nowrap rounded-lg border px-5 py-3 text-xs font-semibold uppercase tracking-[0.5px] transition-colors duration-300 ${
                tab.active
                  ? "border-black bg-black text-white"
                  : "border-[#F2D6D6] bg-white text-[#555] hover:border-[#F00012]/40 hover:text-[#0A0A0A]"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
