export type CourseHeroProps = {
  headingLines: string[];
  accentLine: string;
  subtitle: string;
};

export default function CourseHero({
  headingLines,
  accentLine,
  subtitle,
}: CourseHeroProps) {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center px-4 py-20 text-center sm:px-8 lg:py-28">
        <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
          {headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="mt-1 block font-serif italic text-[#F00012]">
            {accentLine}
          </span>
        </h1>
        <p className="mt-6 max-w-[620px] text-sm leading-6 text-[#B9B9B9] sm:text-base lg:text-[17px] lg:leading-[26px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
