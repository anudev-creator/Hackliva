import Link from "next/link";

export type CourseModule = {
  title: string;
  description: string;
};

export type CourseModulesHeading = {
  /** First line, in the ink colour. */
  title: string;
  /** Second line, in red. */
  highlight: string;
  /** Intro paragraph with a red rule on its left. */
  description: string;
};

export type CourseModulesCta = {
  /** Small caps tag above the title, e.g. "Certification Track". */
  tag: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export type CourseModulesProps = {
  /** Accessible name for the list. */
  label: string;
  heading?: CourseModulesHeading;
  modules: CourseModule[];
  /** Red call-to-action card under the modules. */
  cta?: CourseModulesCta;
  /** Background of the band: white (default) or the light grey used by the overview. */
  tone?: "white" | "mist";
  id?: string;
};

/** Optional heading, a two-column grid of module cards (an odd last card spans both columns) and an optional red CTA. */
export function CourseModules({ label, heading, modules, cta, tone = "white", id = "modules" }: CourseModulesProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={heading ? headingId : undefined}
      aria-label={heading ? undefined : label}
      className={`border-b border-hairline pb-16 lg:pb-20 ${tone === "mist" ? "bg-mist" : "bg-white"} ${
        heading ? "pt-20" : "pt-16"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-5 sm:px-8 lg:px-16">
        {heading && (
          <div data-reveal className="flex max-w-[720px] flex-col gap-6">
            <h2
              id={headingId}
              className="font-display text-4xl leading-none font-bold tracking-[-1.2px] text-ink sm:text-[48px] sm:leading-[48px]"
            >
              {heading.title}
              <span className="block text-signal">{heading.highlight}</span>
            </h2>
            <p className="border-l-2 border-signal pl-4 font-jakarta text-base leading-7 text-ink-muted sm:text-lg">
              {heading.description}
            </p>
          </div>
        )}

        <ul className="grid gap-6 md:grid-cols-2">
          {modules.map((module, index) => (
            <li
              key={module.title}
              data-reveal
              className={modules.length % 2 === 1 && index === modules.length - 1 ? "md:col-span-2" : undefined}
            >
              <article className="flex h-full flex-col gap-2 rounded-2xl border border-hairline bg-white p-6 font-jakarta">
                <h3 className="font-display text-lg leading-7 font-bold tracking-[-0.45px] text-ink">
                  {module.title}
                </h3>
                <p className="text-sm leading-[22.75px] text-ink-muted">{module.description}</p>
              </article>
            </li>
          ))}
        </ul>

        {cta && (
          <div
            data-reveal
            className="flex flex-col gap-8 rounded-2xl bg-signal px-6 py-8 font-jakarta sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex max-w-[460px] flex-col gap-3">
              <span className="w-fit rounded bg-white/20 px-2.5 py-1 font-mono text-[11px] leading-4 font-semibold tracking-[1.2px] text-white uppercase">
                {cta.tag}
              </span>
              <h3 className="font-display text-3xl leading-9 font-bold tracking-[-0.9px] text-white">{cta.title}</h3>
              <p className="text-base leading-6 text-white/90">{cta.description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href={cta.primary.href}
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm leading-5 font-bold text-signal transition-colors hover:bg-red-50"
              >
                {cta.primary.label}
              </Link>
              <Link
                href={cta.secondary.href}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3.5 text-sm leading-5 font-bold text-white transition-colors hover:bg-white/10"
              >
                {cta.secondary.label}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
