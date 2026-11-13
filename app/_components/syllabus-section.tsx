import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import arrowIcon from "../_assets/course/syllabus/arrow.svg";
import enrollmentIcon from "../_assets/course/syllabus/enrollment.svg";

export type SyllabusItem = {
  title: string;
  /** Use "\n" for the design's line breaks (applied from lg up). */
  description: string;
};

export type SyllabusGroup = {
  title: string;
  icon: StaticImageData;
  items: SyllabusItem[];
};

export type SyllabusCard = {
  /** A card usually has one group; later groups get a divider above their heading. */
  groups: SyllabusGroup[];
};

export type SyllabusSectionProps = {
  title: string;
  subtitle?: string;
  cards: SyllabusCard[];
  enroll: {
    label: string;
    /** Use "\n" for the design's line breaks. */
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
  id?: string;
};

/** Three-column syllabus (Figma 425:3046): title, module cards, and a red enrolment card. */
export function SyllabusSection({ title, subtitle, cards, enroll, id = "syllabus" }: SyllabusSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-b border-hairline bg-mist px-5 pt-20 pb-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1152px] gap-8 lg:grid-cols-12">
        {/* Title and enrolment card stay in view while the long syllabus scrolls past. */}
        <div className="lg:col-span-3 lg:row-start-1">
          <div data-reveal className="flex flex-col gap-2 lg:sticky lg:top-[95px]">
            <h2
              id={headingId}
              className="font-display text-4xl font-bold tracking-[-1.2px] text-ink sm:text-[48px] sm:leading-[48px]"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="font-mono text-xs leading-4 tracking-[0.6px] text-ink-muted uppercase">{subtitle}</p>
            )}
          </div>
        </div>

        <aside className="lg:col-span-3 lg:col-start-10 lg:row-start-1">
          <div data-reveal className="lg:sticky lg:top-[95px]">
            <EnrollCard {...enroll} />
          </div>
        </aside>

        {/* The design leaves ~52px of extra room under the last card before the section edge. */}
        <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-4 lg:row-start-1 lg:pb-[52.25px]">
          {cards.map((card) => (
            <article
              key={card.groups[0].title}
              data-reveal
              className="flex flex-col gap-4 rounded-2xl border border-hairline bg-white p-5 font-jakarta sm:p-7"
            >
              {card.groups.map((group, index) => {
                const isFirst = index === 0;
                const hasNext = index < card.groups.length - 1;
                return (
                  <Fragment key={group.title}>
                    <h3
                      className={`flex items-center gap-2 font-mono text-xs leading-4 font-semibold tracking-[1.2px] text-ink uppercase ${
                        isFirst ? "border-b border-hairline pb-3" : "border-t border-hairline pt-6"
                      }`}
                    >
                      <Image src={group.icon} alt="" unoptimized className="shrink-0" />
                      {group.title}
                    </h3>
                    <ul className={`flex flex-col gap-4 ${hasNext ? "pb-4" : ""}`}>
                      {group.items.map((item) => (
                        <li key={item.title} className="relative pl-5">
                          <span aria-hidden="true" className="absolute top-[7px] left-0 size-2 rounded-full bg-signal" />
                          <p className="text-sm leading-5 font-bold text-ink">{item.title}</p>
                          <p className="text-sm leading-[22.75px] text-ink-muted xl:whitespace-pre">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Fragment>
                );
              })}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollCard({ label, title, description, cta }: SyllabusSectionProps["enroll"]) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-signal p-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-[7.3px] pb-4">
        <p className="flex items-center gap-2 font-mono text-[10px] leading-[15px] font-semibold tracking-[1px] text-white/90 uppercase">
          <span className="flex size-7 items-center justify-center rounded-lg bg-white/20">
            <Image src={enrollmentIcon} alt="" unoptimized />
          </span>
          {label}
        </p>
        <h3 className="pb-[0.75px] font-display text-lg leading-[22.5px] font-bold tracking-[-0.45px] whitespace-pre-line text-white">
          {title}
        </h3>
        <p className="pt-[0.7px] font-jakarta text-xs leading-[19.5px] text-white/85 xl:whitespace-pre-line">
          {description}
        </p>
      </div>
      <Link
        href={cta.href}
        className="flex items-center justify-between rounded-xl bg-white px-4 py-3 font-mono text-xs leading-4 font-semibold tracking-[0.6px] text-ink uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-colors hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {cta.label}
        <Image src={arrowIcon} alt="" unoptimized />
      </Link>
    </div>
  );
}
