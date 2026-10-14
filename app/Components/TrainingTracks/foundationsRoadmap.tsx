export type RoadmapModule = {
  title: string;
  description: string;
  tags: string[];
};

export type FoundationsRoadmapProps = {
  heading: string;
  modules: RoadmapModule[];
};

export default function FoundationsRoadmap({
  heading,
  modules,
}: FoundationsRoadmapProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
        <h2 className="max-w-[768px] text-3xl font-bold tracking-[-1.2px] text-[#050505] lg:text-[48px] lg:leading-[52px]">
          {heading}
        </h2>

        <div className="mt-10 flex flex-col gap-6 lg:mt-16">
          {modules.map((module, index) => (
            <div key={module.title} className="relative flex gap-4 lg:gap-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#F2D6D6] bg-white text-sm font-medium text-[#050505]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 rounded-2xl border border-[#F2D6D6] bg-white p-6 lg:p-[33px]">
                <h3 className="text-lg font-bold text-[#050505] lg:text-[18px] lg:leading-7">
                  {module.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#555] lg:text-[16px]">
                  {module.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {module.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#F2D6D6] px-2.5 py-1 text-xs text-[#555]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
