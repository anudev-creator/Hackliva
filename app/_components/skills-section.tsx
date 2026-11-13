import type { ReactNode } from "react";
import { SkillCard, type Skill } from "./skill-card";

export type SkillsSectionProps = {
  /** Small red label above the heading. */
  eyebrow?: string;
  title: string;
  /** Words appended to the title in brand red. */
  highlight?: string;
  description?: ReactNode;
  skills: Skill[];
  id?: string;
};

export function SkillsSection({
  eyebrow,
  title,
  highlight,
  description,
  skills,
  id = "skills",
}: SkillsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-white px-5 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div data-reveal className="text-center">
          {eyebrow && (
            <p className="font-mono text-xs font-bold tracking-[0.12em] text-brand uppercase">
              {eyebrow}
            </p>
          )}
          <h2
            id={headingId}
            className="mt-3 text-3xl font-bold tracking-tight text-[#090909] sm:text-4xl lg:text-5xl"
          >
            {title}
            {highlight && <span className="text-brand"> {highlight}</span>}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-[52rem] text-base leading-relaxed text-[#4b4b4b]">
              {description}
            </p>
          )}
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white pt-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] sm:mt-14 sm:pt-10">
          <div className="border-t-[3px] border-brand px-5 pt-8 pb-10 sm:px-10 sm:pt-10 sm:pb-16">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {skills.map((skill) => (
                <li key={skill.title} data-reveal>
                  <SkillCard {...skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
