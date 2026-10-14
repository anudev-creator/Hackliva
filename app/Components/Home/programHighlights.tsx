"use client";

import { useState } from "react";
import FeatureCard, { type FeatureCardProps } from "./featureCard";

export type ProgramHighlightsTab = {
  label: string;
  cards: FeatureCardProps[];
};

export type ProgramHighlightsProps = {
  tabs: ProgramHighlightsTab[];
};

export default function ProgramHighlights({ tabs }: ProgramHighlightsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16">
        <div className="border-b border-[#F9EBEC]">
          <div className="flex flex-wrap items-center gap-6 lg:gap-10">
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`-mb-px flex items-center gap-2 border-b-2 pb-3 text-xs font-bold uppercase transition-colors duration-300 lg:text-[13px] ${
                    isActive
                      ? "border-[#F00012] text-[#F00012]"
                      : "border-transparent text-[#555555] hover:text-[#0A0A0A]"
                  }`}
                >
                  <span
                    className={`size-1.5 shrink-0 rounded-full ${
                      isActive ? "bg-[#F00012]" : "bg-[#757575]"
                    }`}
                  />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 h-[10px] w-[4px] bg-[#F00012]" />

        <div className="mt-[9px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {active.cards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
