import Image, { type StaticImageData } from "next/image";

export type OverviewCard = {
  title: string;
  /** Small red uppercase line between the title and subtitle; omit for none. */
  eyebrow?: string;
  /** Bold line under the title; omit for none. */
  subtitle?: string;
  /** Show the eyebrow in red (otherwise dark). */
  eyebrowAccent?: boolean;
  /** Show the subtitle in red. */
  accent?: boolean;
  /** Show the description in red. */
  descriptionAccent?: boolean;
  /** Use "\n" for the design's line breaks (applied from lg up). */
  description: string;
  /** Image shown in a 56px tile above the title; omit for none. */
  icon?: { src: StaticImageData; fill?: boolean };
};

export type CourseOverviewProps = {
  title: string;
  tagline?: string;
  cards: OverviewCard[];
  id?: string;
};

/** Grey band with the course title and a 2-column grid of centered cards (Figma 425:2897). */
export function CourseOverview({ title, tagline, cards, id = "overview" }: CourseOverviewProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-b border-hairline bg-mist pt-16 pb-16"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-5 sm:px-8 lg:px-16">
        <div data-reveal className="flex flex-col gap-2">
          {/* The design reserves an empty second heading line before the tagline. */}
          <h2
            id={headingId}
            className="font-display text-3xl font-bold tracking-[-0.9px] text-balance text-ink sm:text-[36px] sm:leading-10 lg:pb-10"
          >
            {title}
          </h2>
          {tagline && <p className="font-jakarta text-base leading-6 text-ink-muted">{tagline}</p>}
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <li key={card.title} data-reveal>
              <article className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-2xl border border-hairline bg-white p-6 text-center font-jakarta sm:p-8">
                {card.icon && (
                  <span className="mb-4 flex size-14 items-center justify-center overflow-clip rounded-2xl border border-hairline bg-[#fafafa]">
                    <Image
                      src={card.icon.src}
                      alt=""
                      className={card.icon.fill ? "size-[54px] object-cover" : "size-9"}
                    />
                  </span>
                )}
                <h3 className="pb-2 font-display text-xl leading-7 font-bold tracking-[-0.5px] text-ink">
                  {card.title}
                </h3>
                <div className="flex flex-col gap-[3.25px]">
                  {card.eyebrow && (
                    <p
                      className={`text-xs leading-4 font-bold tracking-[0.3px] uppercase ${card.eyebrowAccent ? "text-signal" : "text-ink"}`}
                    >
                      {card.eyebrow}
                    </p>
                  )}
                  {card.subtitle && (
                    <p className={`text-sm leading-5 font-semibold ${card.accent ? "text-signal" : "text-ink"}`}>
                      {card.subtitle}
                    </p>
                  )}
                  <p
                    className={`text-sm leading-[22.75px] ${
                      // Only text with the design's own line breaks is kept unwrapped; anything else wraps inside the card.
                      card.description.includes("\n") ? "lg:whitespace-pre-line xl:whitespace-pre" : "text-pretty"
                    } ${card.descriptionAccent ? "text-signal" : "text-ink-muted"}`}
                  >
                    {card.description}
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
