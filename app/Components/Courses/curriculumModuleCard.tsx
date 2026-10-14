import CurriculumIcon, { type CurriculumIconName } from "./curriculumIcons";

export type CurriculumTag = {
  label: string;
  highlighted?: boolean;
};

export type CurriculumModuleCardProps = {
  label: string;
  icon: CurriculumIconName;
  title: string;
  description: string;
  tags: CurriculumTag[];
  /** Span both grid columns on large screens, for a standalone final module. */
  wide?: boolean;
};

export default function CurriculumModuleCard({
  label,
  icon,
  title,
  description,
  tags,
  wide,
}: CurriculumModuleCardProps) {
  return (
    <div
      className={`group flex h-full flex-col rounded-2xl border border-[#F2D6D6] bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F00012]/40 hover:shadow-xl hover:shadow-black/5 lg:p-[33px] ${
        wide ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#F00012]">
          {label}
        </span>
        <CurriculumIcon
          name={icon}
          className="size-5 shrink-0 text-[#555] transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-[#F00012]"
        />
      </div>
      <h3 className="mt-3 text-lg font-bold tracking-[-0.5px] text-[#050505] lg:text-[20px] lg:leading-7">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#555] lg:text-[15px]">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`rounded-md border px-2.5 py-1 text-xs ${
              tag.highlighted
                ? "border-[#F00012] text-[#F00012]"
                : "border-[#F2D6D6] text-[#555]"
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
