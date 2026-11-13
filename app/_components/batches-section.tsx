import type { ReactNode } from "react";
import { BatchCard, type Batch } from "./batch-card";

export type BatchesSectionProps = {
  /** Use "\n" to force a line break. */
  title: string;
  description?: ReactNode;
  /** Delivery mode shown as a pill, e.g. "Online". */
  mode?: string;
  batches: Batch[];
  id?: string;
};

export function BatchesSection({
  title,
  description,
  mode,
  batches,
  id = "batches",
}: BatchesSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-white px-5 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="flex flex-col items-center gap-6 border-b border-zinc-100 pb-10 sm:flex-row sm:items-end">
          <div className="min-w-0 flex-1 text-center">
            <h2
              id={headingId}
              className="text-3xl leading-[1.15] font-bold tracking-tight whitespace-pre-line text-[#191a1a] sm:text-4xl lg:text-[2.75rem]"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-5 text-base text-[#533734]">{description}</p>
            )}
          </div>
          {mode && (
            <span className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#191a1a] px-5 text-sm font-medium text-white">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
              {mode}
            </span>
          )}
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {batches.map((batch) => (
            <li key={batch.title} data-reveal>
              <BatchCard {...batch} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
