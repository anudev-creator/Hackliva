import Link from "next/link";

export type QuoteCalloutProps = {
  text: string;
  buttonLabel: string;
  href: string;
};

export default function QuoteCallout({
  text,
  buttonLabel,
  href,
}: QuoteCalloutProps) {
  return (
    <div className="w-full min-w-0 border-l-[3px] border-[#F00012] py-1 pl-6 lg:w-auto lg:pl-10">
      <p className="text-xl font-bold leading-8 text-[#0A0A0A] lg:max-w-[488px] lg:text-[24.5px] lg:font-extrabold lg:leading-[30px]">
        {text}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center rounded border border-[#EBEEF1] px-4 py-2 text-xs font-medium uppercase text-[#0A0A0A] transition-colors duration-300 hover:border-[#F00012]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012] lg:px-5 lg:py-2.5 lg:text-[13px]"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
