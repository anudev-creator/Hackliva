import Link from "next/link";

export type CertificationBannerProps = {
  eyebrow: string;
  heading: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export default function CertificationBanner({
  eyebrow,
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CertificationBannerProps) {
  return (
    <div className="rounded-2xl bg-[#F00012] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[1.2px] text-white">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-white lg:text-[40px] lg:leading-[1.1]">
            {heading}
          </h2>
          <p className="mt-3 max-w-[440px] text-sm leading-6 text-white/90 lg:text-[15px] lg:leading-[23px]">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-4">
          <Link
            href={primaryHref}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-bold text-[#F00012] transition-colors duration-300 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex h-11 items-center justify-center rounded-lg border-2 border-white px-6 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
