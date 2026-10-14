export type AboutHeroSectionProps = {
  heading: string;
  highlight: string;
  description: string;
};

export default function AboutHeroSection({
  heading,
  highlight,
  description,
}: AboutHeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-[192px] lg:py-[128px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(223,10,22,0.12) 0%, rgba(223,10,22,0) 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[896px] flex-col items-center">
        <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]">
          {heading}
        </h1>

        <p className="mt-4 text-center font-serif text-2xl italic text-[#DF0A16] sm:text-3xl lg:text-[48px] lg:leading-[48px] lg:tracking-[1.2px]">
          {highlight}
        </p>

        <p className="mt-6 max-w-[672px] text-center text-sm leading-6 text-[#A3A3A3] lg:text-[18px] lg:leading-[28px]">
          {description}
        </p>

        <div className="mt-8 h-14 w-px bg-[#404040]" />
      </div>
    </section>
  );
}
