import Image, { type StaticImageData } from "next/image";

export type Skill = {
  /** Short category shown as a tag, e.g. "Offensive AI". */
  tag: string;
  title: string;
  description: string;
  /** Monochrome icon on a transparent background. */
  icon: StaticImageData;
};

export function SkillCard({ tag, title, description, icon }: Skill) {
  return (
    <article className="h-full rounded-2xl border border-zinc-100 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <span className="flex size-14 items-center justify-center rounded-xl bg-[#f5f5f5]">
        <Image src={icon} alt="" width={28} height={28} className="size-7" />
      </span>
      <p className="mt-6 inline-block rounded bg-[#f2f2f2] px-2 py-1 font-mono text-[10px] font-bold tracking-[0.08em] text-[#242525] uppercase">
        {tag}
      </p>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#191a1a]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#606060]">{description}</p>
    </article>
  );
}
