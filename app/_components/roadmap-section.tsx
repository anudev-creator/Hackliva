import Image, { type StaticImageData } from "next/image";

export type RoadmapTag = { label: string; highlight?: boolean };

export type RoadmapModule = {
  title: string;
  description: string;
  /** Small outline icon in the card's top-right corner. */
  icon: StaticImageData;
  tags: RoadmapTag[];
};

export type RoadmapSectionProps = {
  /** First heading line (dark) and second line (red). */
  title: [string, string];
  /** Use "\n" for the design's line break (applied from lg up). */
  intro?: string;
  modules: RoadmapModule[];
  id?: string;
};

/** Numbered vertical timeline of module cards (Figma 425:2948, "5-Step Roadmap"). */
export function RoadmapSection({ title, intro, modules, id = "roadmap" }: RoadmapSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-b border-hairline bg-white pt-20 pb-20"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-5 sm:px-8 lg:px-16">
        <div data-reveal className="flex max-w-[768px] flex-col gap-4">
          <h2
            id={headingId}
            className="font-display text-4xl font-bold tracking-[-1.2px] text-ink sm:text-[48px] sm:leading-[48px]"
          >
            {title[0]}
            <br />
            <span className="text-signal">{title[1]}</span>
          </h2>
          {intro && (
            <p className="border-l-2 border-signal py-1 pl-[18px] font-jakarta text-base leading-7 text-ink-muted sm:text-lg xl:w-max xl:whitespace-pre-line">
              {intro}
            </p>
          )}
        </div>

        <ol className="flex flex-col gap-6">
          {modules.map((module, index) => {
            const isLast = index === modules.length - 1;
            return (
              <li key={module.title} data-reveal className="relative pl-14 sm:pl-16">
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute top-9 -bottom-8 left-5 w-0.5 bg-linear-to-b from-signal to-[#e2e6ed] to-70%"
                  />
                )}
                <span className="absolute top-3 left-0 z-10 flex size-10 items-center justify-center rounded-full border-2 border-signal bg-white font-mono text-sm leading-5 font-semibold text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <article className="flex flex-col rounded-2xl border border-hairline bg-mist p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 pb-3">
                    <h3 className="font-display text-xl leading-7 font-bold tracking-[-0.5px] text-ink">
                      {module.title}
                    </h3>
                    <Image src={module.icon} alt="" unoptimized className="mt-1 shrink-0" />
                  </div>
                  <p className="pb-5 font-jakarta text-base leading-6 text-ink-muted">
                    {module.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {module.tags.map((tag) => (
                      <li
                        key={tag.label}
                        className={`rounded-full border px-3 py-1 font-mono text-xs leading-4 ${
                          tag.highlight
                            ? "border-[rgba(240,0,18,0.3)] bg-[rgba(240,0,18,0.1)] font-semibold text-signal"
                            : "border-hairline bg-white font-medium text-ink-muted"
                        }`}
                      >
                        {tag.label}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
