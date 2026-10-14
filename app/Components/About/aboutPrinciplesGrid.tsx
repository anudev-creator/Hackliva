export type AboutPrinciple = {
  title: string;
  description: string;
};

export type AboutPrinciplesGridProps = {
  heading: string;
  description: string;
  principles: AboutPrinciple[];
};

export default function AboutPrinciplesGrid({
  heading,
  description,
  principles,
}: AboutPrinciplesGridProps) {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-extrabold tracking-[-0.9px] text-[#171717] lg:text-[36px] lg:leading-[40px]">
        {heading}
      </h2>
      <p className="mt-3 max-w-[672px] text-sm leading-6 text-[#525252] lg:text-[16px]">
        {description}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="rounded-xl border border-[#E5E5E5] bg-white p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:p-[29px]"
          >
            <h3 className="text-lg font-bold leading-7 text-[#171717]">
              {principle.title}
            </h3>
            <p className="mt-2 text-sm leading-[22.75px] text-[#525252]">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
