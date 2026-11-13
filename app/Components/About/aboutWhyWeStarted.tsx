export type AboutWhyWeStartedProps = {
  heading: string;
  cardHeading: string;
  paragraph1: string;
  quote: string;
  paragraph2: string;
};

export default function AboutWhyWeStarted({
  heading,
  cardHeading,
  paragraph1,
  quote,
  paragraph2,
}: AboutWhyWeStartedProps) {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-extrabold tracking-[-0.9px] text-[#171717] lg:text-[36px] lg:leading-[40px]">
        {heading}
      </h2>
      <div className="mt-6 rounded-2xl border border-[rgba(229,229,229,0.9)] bg-white p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:p-[41px]">
        <h3 className="text-xl font-bold leading-snug text-[#171717] lg:text-[24px] lg:leading-[32px]">
          {cardHeading}
        </h3>
        <p className="mt-4 text-sm leading-6 text-[#525252] lg:text-[16px]">
          {paragraph1}
        </p>
        <blockquote className="mt-4 border-l-2 border-[#DF0A16] py-1 pl-[18px] text-sm font-medium italic text-[#171717] lg:text-[16px] lg:leading-[24px]">
          {quote}
        </blockquote>
        <p className="mt-4 text-sm leading-6 text-[#525252] lg:text-[16px]">
          {paragraph2}
        </p>
      </div>
    </div>
  );
}
