import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type CurriculumModule = {
  title: string;
  /** Square icon tile image (gradient background included). */
  icon: StaticImageData;
};

export type CurriculumSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  /** Each group renders as its own panel of modules. */
  groups: CurriculumModule[][];
  id?: string;
};

export function CurriculumSection({
  title,
  description,
  groups,
  id,
}: CurriculumSectionProps) {
  return (
    <section id={id} className="px-5 py-16 sm:px-10 sm:py-24">
      <div
        className="mx-auto max-w-7xl rounded-[2rem] bg-[#0b0a10] px-5 py-14 text-center shadow-2xl shadow-zinc-950/30 sm:px-10 sm:py-20 lg:px-12"
        style={{
          backgroundImage:
            "radial-gradient(45% 55% at 92% 0%, rgba(120, 70, 90, 0.28), transparent 70%), radial-gradient(55% 60% at 35% 55%, rgba(76, 54, 130, 0.16), transparent 70%)",
        }}
      >
        <h2 data-reveal className="mx-auto max-w-5xl text-3xl leading-[1.12] font-bold tracking-tight text-balance text-white sm:text-5xl sm:text-wrap lg:text-[3.5rem]">
          {title}
        </h2>
        {description && (
          <p data-reveal className="mx-auto mt-6 max-w-[50rem] text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
            {description}
          </p>
        )}

        <div className="mt-12 grid gap-6 text-left sm:mt-14 lg:grid-cols-2 lg:gap-10">
          {groups.map((modules, index) => (
            <ModuleGroup key={index} modules={modules} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleGroup({ modules }: { modules: CurriculumModule[] }) {
  return (
    <ul data-reveal className="grid gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 sm:grid-cols-2 sm:p-7">
      {modules.map((module) => (
        <ModuleCard key={module.title} {...module} />
      ))}
    </ul>
  );
}

function ModuleCard({ title, icon }: CurriculumModule) {
  return (
    <li className="flex min-h-18 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] px-3.5 py-3 transition-colors hover:border-white/15 hover:bg-white/[0.07]">
      <Image src={icon} alt="" width={44} height={44} className="size-11 shrink-0" />
      <span className="text-[13px] leading-[1.125rem] font-semibold text-white">
        {title}
      </span>
    </li>
  );
}
