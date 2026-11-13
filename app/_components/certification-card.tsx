import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type Certification = {
  /** Short code shown as the card title, e.g. "CMASS". */
  code: string;
  /** Full certification name. */
  name: string;
  /** Label for the course switcher pill when it differs from `name`. */
  tabLabel?: string;
  highlights: string[];
  badge: StaticImageData;
  href: string;
};

export function CertificationCard({
  code,
  name,
  highlights,
  badge,
  href,
}: Certification) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-zinc-200 p-7 transition-colors hover:border-brand/40">
      <Image
        src={badge}
        alt={`${code} certification badge`}
        width={52}
        height={52}
        className="size-13 rounded-full"
      />

      <h3 className="mt-7 font-mono text-[22px] leading-tight font-extrabold text-zinc-950">
        {code}
      </h3>
      <p className="mt-2 text-[11px] leading-4 font-bold tracking-wide text-[#4b4b4b] uppercase">
        {name}
      </p>

      <ul className="mt-6 space-y-2.5">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2.5 text-[12.5px] leading-[1.45] text-zinc-900"
          >
            <span aria-hidden="true" className="text-[10px] leading-4 text-brand">
              →
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <div className="border-t border-zinc-200 pt-6">
          <Link
            href={href}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#191a1a] font-mono text-[11px] font-bold tracking-[0.12em] text-white uppercase transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Explore dossier
            <span className="sr-only"> for {code}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
