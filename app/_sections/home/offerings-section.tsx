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
    <section aria-labelledby="offerings-heading" className="px-5 pt-16 sm:px-10">
      <div className="mx-auto max-w-5xl border-t border-zinc-200 pt-10">
        <h2 id="offerings-heading" className="sr-only">
          What we offer
        </h2>
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 lg:grid lg:grid-cols-5 lg:gap-6">
          {offerings.map((offering, index) => (
            <OfferingCard key={offering.title} introStep={index + 5} {...offering} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function OfferingCard({ title, detail, icon, introStep }: Offering & { introStep: number }) {
  return (
    <li data-intro={introStep} className="flex w-[calc((100%-0.75rem)/2)] flex-col items-center rounded-2xl border border-zinc-200 bg-white px-3 pt-10 pb-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md sm:w-[calc((100%-2.5rem)/3)] lg:w-auto">
      <MaterialSymbol name={icon} size={40} className="text-[#1f1f1f]" />
      <h3 className="mt-6 text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="mt-2 text-[11px] leading-snug font-bold tracking-wide text-zinc-900 uppercase">
        {detail.map((line) => (
          <span key={line} className="block">
            {/* Keep "&" attached to the previous word when narrow cards wrap. */}
            {line.replace(/ &$/, " &")}
          </span>
        ))}
      </p>
    </li>
  );
}
