"use client";

import { useRef, useState } from "react";
import InnovationCard, { type InnovationCardProps } from "./innovationCard";

export type InnovationSectionProps = {
  heading: string;
  highlight: string;
  cards: InnovationCardProps[];
};

export default function InnovationSection({
  heading,
  highlight,
  cards,
}: InnovationSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1 / cards.length);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const scrolled = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    const min = 1 / cards.length;
    setProgress(Math.min(1, Math.max(min, scrolled * (1 - min) + min)));
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16">
        <h2 className="text-center text-3xl font-extrabold text-[#0A0A0A] lg:text-[40px]">
          {heading} <span className="text-[#F00012]">{highlight}</span>
        </h2>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card, index) => (
            <div
              key={`${index}-${card.boldText}`}
              className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-40px)/3)]"
            >
              <InnovationCard {...card} />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 h-1 w-40 overflow-hidden rounded-full bg-[#F2D6D6]">
          <div
            className="h-full rounded-full bg-[#F00012] transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
