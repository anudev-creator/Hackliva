import Link from "next/link";

export type CtaBannerProps = {
  description: string;
  buttonLabel: string;
  href: string;
};

export default function CtaBanner({
  description,
  buttonLabel,
  href,
}: CtaBannerProps) {
  return (
    <div className="flex w-full max-w-[1152px] flex-col items-start gap-4 rounded-xl border border-[#F2D6D6] bg-[#FAFAFA] px-4 py-4 text-left lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-[66px] lg:py-4">
      <p className="text-sm leading-[22px] text-[#5F5F5F] lg:max-w-[680px] lg:text-[17px] lg:leading-[26px]">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex h-8 shrink-0 items-center justify-center rounded-lg bg-[#F00012] px-4 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[#D2000F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012] lg:h-9 lg:px-6"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
