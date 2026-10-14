"use client";

import { useRef } from "react";
import Link from "next/link";
import CourseCard, { type CourseCardProps } from "./courseCard";

export type TrainingTracksProps = {
  eyebrow: string;
  eyebrowHref?: string;
  heading: string;
  courses: CourseCardProps[];
};

export default function TrainingTracks({
  eyebrow,
  eyebrowHref,
  heading,
  courses,
}: TrainingTracksProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({
      left: direction * (320 + 32),
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full border-y border-[#F2D6D6] mt-20 bg-[#FAFAFA]">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16">
        <div className="flex items-end justify-between">
          <div>
            {eyebrowHref ? (
              <Link
                href={eyebrowHref}
                className="text-[13px] font-bold uppercase tracking-[2px] text-[#F00012] transition-colors duration-300 hover:text-[#D2000F]"
              >
                {eyebrow}
              </Link>
            ) : (
              <p className="text-[13px] font-bold uppercase tracking-[2px] text-[#F00012]">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-1 text-[17px] font-bold uppercase text-[#0A0A0A]">
              {heading}
            </h2>
          </div>
          <div className="hidden shrink-0 gap-4 lg:flex">
            <button
              type="button"
              aria-label="Previous courses"
              onClick={() => scrollByCard(-1)}
              className="flex size-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-[#0A0A0A] transition-colors duration-300 hover:border-[#F00012]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012]"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="size-4"
              >
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
              onClick={() => scrollByCard(1)}
              className="flex size-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-[#0A0A0A] transition-colors duration-300 hover:border-[#F00012]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012]"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="size-4"
              >
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
        </div>

        <div
          ref={scrollerRef}
          className="mt-[59px] flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {courses.map((course, index) => (
            <div key={`${index}-${course.code}`} className="snap-start">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
