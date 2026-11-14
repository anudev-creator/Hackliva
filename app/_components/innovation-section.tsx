import Image, { type StaticImageData } from "next/image";
import { InnovationCarousel } from "./innovation-carousel";
import { MaterialSymbol } from "./material-symbol";

export type InnovationCard = {
  /** Bold lead-in, e.g. "Hackliva Academy". */
  brand: string;
  text: string;
  /** "video" shows a play button on the photo; "case-study" shows a case-study badge. */
  kind: "video" | "case-study";
  /** Call-to-action text under the copy, e.g. "Watch the video". */
  cta: string;
  href: string;
  image: StaticImageData;
};

export type InnovationSectionProps = {
  title: string;
  /** Last part of the heading, shown in red. */
  highlight?: string;
  cards: InnovationCard[];
  id?: string;
};

export function InnovationSection({ title, highlight, cards, id = "innovation" }: InnovationSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-zinc-200 bg-white px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-[1216px]">
        <h2
          id={headingId}
          data-reveal
          className="text-center text-3xl leading-tight font-bold tracking-tight text-balance text-zinc-950 sm:text-4xl"
        >
          {title}
          {highlight && <span className="text-[#dc2626]"> {highlight}</span>}
        </h2>

        <div data-reveal className="mt-12 sm:mt-14">
          <InnovationCarousel label={title}>
            {cards.map((card) => (
              <InnovationCardView key={card.cta + card.href + card.image.src} {...card} />
            ))}
          </InnovationCarousel>
        </div>
      </div>
    </section>
  );
}

function InnovationCardView({ brand, text, kind, cta, href, image }: InnovationCard) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#f4d6da] bg-white">
      <div className="flex-1 px-8 pt-8 pb-6">
        <p className="text-[15px] leading-6 text-zinc-600">
          <strong className="font-bold text-zinc-950">{brand}</strong> {text}
        </p>
        <a
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-[13px] leading-5 font-bold text-[#dc2626] hover:text-[#b91c1c]"
        >
          {cta}
          <MaterialSymbol name={kind === "video" ? "arrow_forward" : "person_search"} size={15} />
        </a>
      </div>

      <a href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-[1.94/1] overflow-hidden rounded-b-2xl">
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 390px, 85vw" className="object-cover" />
        {/* Sits over the button that is part of the photo; centered at the same spot and slightly larger. */}
        <span
          className={`absolute top-1/2 left-1/2 flex aspect-square w-[15%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#dc2626] shadow-[0_2px_10px_rgba(0,0,0,0.12)] ${
            kind === "case-study" ? "ring-1 ring-[#dc2626]" : ""
          }`}
        >
          {kind === "video" ? (
            <svg viewBox="0 0 24 24" className="ml-[6%] size-[38%]" fill="currentColor">
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          ) : (
            <MaterialSymbol name="person_search" size={26} />
          )}
        </span>
      </a>
    </article>
  );
}
