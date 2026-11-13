import type { ReactNode } from "react";

export type Pillar = {
  title: string;
  description: string;
  /** Small mono caption at the bottom of the card. */
  tag: string;
};

export type PillarsSectionProps = {
  title: string;
  description?: ReactNode;
  pillars: Pillar[];
  id?: string;
};

/** Heading plus three pillar cards (Figma 425:2823 "Building Attackers"). */
export function PillarsSection({ title, description, pillars, id = "pillars" }: PillarsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-b border-hairline bg-white pt-24 pb-16 lg:pt-[144px] lg:pb-20"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-5 sm:px-8 lg:px-16">
        <div data-reveal className="flex max-w-[768px] flex-col gap-4">
          <h2
            id={headingId}
            className="font-display text-4xl font-bold tracking-[-1.2px] text-ink sm:text-[48px] sm:leading-[48px]"
          >
            {title}
          </h2>
          {description && (
            <p className="font-jakarta text-base leading-7 text-ink-muted sm:text-lg">{description}</p>
          )}
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <li key={pillar.title} data-reveal>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-hairline bg-mist p-6 sm:p-8">
                <div className="flex flex-col gap-3">
                  <p className="flex items-center gap-2 font-mono text-xs leading-4 font-semibold tracking-[1.2px] text-ink-muted uppercase">
                    <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
                    Pillar {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="pt-2 font-display text-2xl leading-8 font-bold tracking-[-0.6px] text-ink">
                    {pillar.title}
                  </h3>
                  <p className="font-jakarta text-base leading-6 text-ink-muted">{pillar.description}</p>
                </div>
                <div className="pt-6">
                  <p className="border-t border-[rgba(228,232,238,0.6)] pt-6 font-mono text-xs leading-4 text-[#a1a1aa] uppercase">
                    {pillar.tag}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
