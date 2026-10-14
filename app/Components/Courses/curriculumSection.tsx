import CurriculumModuleCard, {
  type CurriculumModuleCardProps,
} from "./curriculumModuleCard";

export type CurriculumSectionProps = {
  heading: string;
  highlight: string;
  description: string;
  modules: CurriculumModuleCardProps[];
};

export default function CurriculumSection({
  heading,
  highlight,
  description,
  modules,
}: CurriculumSectionProps) {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto max-w-[1536px] px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
        <h2 className="text-3xl font-bold leading-tight tracking-[-1.2px] text-[#050505] lg:text-[42px] lg:leading-[48px]">
          {heading}
          <br />
          <span className="text-[#F00012]">{highlight}</span>
        </h2>
        <p className="mt-4 max-w-[720px] border-l-2 border-[#F00012] pl-4 text-sm leading-6 text-[#555] lg:text-[16px] lg:leading-[26px]">
          {description}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:mt-14">
          {modules.map((module) => (
            <CurriculumModuleCard key={module.label} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
}
