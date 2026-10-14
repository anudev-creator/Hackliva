"use client";

import { useState } from "react";

export type ServiceAccordionItem = {
  title: string;
  points?: string[];
};

export type ServicesAccordionProps = {
  items: ServiceAccordionItem[];
  defaultOpenIndex?: number;
};

export default function ServicesAccordion({
  items,
  defaultOpenIndex = 0,
}: ServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="flex w-full flex-col gap-2.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className={`rounded-xl border border-[#F2D6D6] transition-colors duration-300 ${
              isOpen ? "bg-[#F9F9F9]" : "bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-bold text-[#0A0A0A] lg:px-6 lg:py-[15px] lg:text-[15px]"
            >
              {item.title}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-4 shrink-0 text-[#F00012] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isOpen && item.points && item.points.length > 0 && (
              <ul className="flex flex-col gap-3 px-4 pb-5 lg:gap-4 lg:px-6 lg:pb-6">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 size-4 shrink-0 text-[#F00012]"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-xs leading-5 text-[#555555] lg:text-[14px] lg:leading-[21px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
