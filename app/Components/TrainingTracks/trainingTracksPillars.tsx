export type TrainingPillar = {
  label: string;
  title: string;
  description: string;
};

export type TrainingTracksPillarsProps = {
  heading: string;
  description: string;
  pillars: TrainingPillar[];
};

export default function TrainingTracksPillars({
  heading,
  description,
  pillars,
}: TrainingTracksPillarsProps) {
  return (
    <section className="w-full border-b border-[#F2D6D6] bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
        <div className="max-w-[672px]">
          <h2 className="text-3xl font-bold tracking-[-1.2px] text-[#050505] lg:text-[48px] lg:leading-[52px]">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#555] lg:text-[18px] lg:leading-[28px]">
            {description}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-[#F2D6D6] bg-white px-6 py-8 lg:px-[33px] lg:py-[33px]"
            >
              <div className="flex items-center gap-2">
                <span className="size-2 shrink-0 rounded-full bg-[#F00012]" />
                <span className="text-xs font-medium uppercase tracking-[1.2px] text-[#555]">
                  {pillar.label}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold tracking-[-0.6px] text-[#050505] lg:text-[24px] lg:leading-[32px]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#555] lg:text-[16px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
