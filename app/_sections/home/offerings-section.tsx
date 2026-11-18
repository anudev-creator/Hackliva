import { TiltCard } from "../../_components/hero-interactions";
import {
  MaterialSymbol,
  type MaterialSymbolName,
} from "../../_components/material-symbol";

type Offering = {
  title: string;
  /** Rendered one entry per line, matching the design. */
  detail: [string, string];
  icon: MaterialSymbolName;
};

const offerings: Offering[] = [
  {
    title: "Cyber Training",
    detail: ["Live courses &", "mentorship"],
    icon: "school",
  },
  {
    title: "AI Security",
    detail: ["AI pentesting &", "automation"],
    icon: "smart_toy",
  },
  {
    title: "Bug Hunting",
    detail: ["Bug bounty &", "vulnerability research"],
    icon: "paid",
  },
  {
    title: "Internships",
    detail: ["Hands-on industry", "experience"],
    icon: "work",
  },
  {
    title: "Career Growth",
    detail: ["Portfolio, projects &", "career readiness"],
    icon: "trending_up",
  },
];

export function OfferingsSection() {
  return (
    <section aria-labelledby="offerings-heading" className="relative px-5 pt-16 sm:px-10">
      <div className="mx-auto max-w-5xl border-t border-zinc-200 pt-10">
        <h2 id="offerings-heading" className="sr-only">
          What we offer
        </h2>
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 lg:grid lg:grid-cols-5 lg:gap-6">
          {offerings.map((offering, index) => (
            <OfferingCard key={offering.title} index={index} {...offering} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function OfferingCard({ title, detail, icon, index }: Offering & { index: number }) {
  return (
    <li
      style={{ "--d": `${2.1 + index * 0.12}s`, "--i": index } as React.CSSProperties}
      className="hero-rise group w-[calc((100%-0.75rem)/2)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 sm:w-[calc((100%-2.5rem)/3)] lg:w-auto"
    >
      {/* Entrance + hover lift on <li>, float loop here, mouse tilt inside: each on its own element so they never fight. */}
      <div className="hero-float h-full">
        <TiltCard className="relative h-full rounded-2xl">
          <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-zinc-200 bg-white px-3 pt-10 pb-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300 group-hover:border-transparent group-hover:shadow-[0_24px_44px_-18px_rgba(233,13,33,0.4)]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(220px_circle_at_var(--sx,50%)_var(--sy,30%),rgba(233,13,33,0.1),transparent_70%)]"
            />
            <MaterialSymbol
              name={icon}
              size={40}
              className="relative text-[#1f1f1f] transition-[transform,color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-125 group-hover:text-brand"
            />
            <h3 className="relative mt-6 text-lg font-semibold text-zinc-950">{title}</h3>
            <p className="relative mt-2 text-[11px] leading-snug font-bold tracking-wide text-zinc-900 uppercase">
              {detail.map((line) => (
                <span key={line} className="block">
                  {/* Keep "&" attached to the previous word when narrow cards wrap. */}
                  {line.replace(/ &$/, " &")}
                </span>
              ))}
            </p>
          </div>
          <span aria-hidden="true" className="card-ring" />
        </TiltCard>
      </div>
    </li>
  );
}
