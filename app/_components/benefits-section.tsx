import Image, { type StaticImageData } from "next/image";

export type Benefit = {
  /** Use "\n" for the design's line break. */
  title: string;
  icon: StaticImageData;
};

export type BenefitsSectionProps = {
  title: string;
  benefits: Benefit[];
  /** "tiles": white tiles on a grey tray (default). "divided": one white card with thin dividers. */
  variant?: "tiles" | "divided";
  id?: string;
};

/** Heading above a rounded mist tray of white benefit tiles (Figma 425:3253). */
export function BenefitsSection({ title, benefits, variant = "tiles", id = "benefits" }: BenefitsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-b border-hairline bg-white pt-20 pb-20"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-5 sm:px-8 lg:px-16">
        <h2
          id={headingId}
          data-reveal
          className="font-display text-4xl font-bold tracking-[-1.2px] text-ink sm:text-[48px] sm:leading-[48px]"
        >
          {title}
        </h2>

        {variant === "divided" ? (
        <ul
          data-reveal
          className="grid grid-cols-2 gap-y-8 rounded-2xl border border-hairline bg-white py-8 lg:grid-cols-4 lg:gap-y-0 lg:py-10"
        >
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="flex flex-col items-center justify-center gap-3 px-4 text-center lg:border-l lg:border-hairline lg:first:border-l-0"
            >
              <Image src={benefit.icon} alt="" unoptimized />
              <h3 className="font-display text-base leading-6 font-bold tracking-[-0.4px] whitespace-pre-line text-ink">
                {benefit.title}
              </h3>
            </li>
          ))}
        </ul>
        ) : (
        <ul
          data-reveal
          className="grid gap-4 rounded-2xl border border-hairline bg-mist p-4 sm:grid-cols-2 sm:gap-6 sm:p-8 lg:flex"
        >
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="flex min-h-[162px] flex-1 flex-col items-center justify-center rounded-xl border border-[rgba(228,232,238,0.6)] bg-white p-6 text-center"
            >
              <span className="mb-4 flex size-12 items-center justify-center rounded-xl border border-hairline bg-mist">
                <Image src={benefit.icon} alt="" unoptimized />
              </span>
              <h3 className="font-display text-base leading-6 font-bold tracking-[-0.4px] whitespace-pre-line text-ink">
                {benefit.title}
              </h3>
            </li>
          ))}
        </ul>
        )}
      </div>
    </section>
  );
}
