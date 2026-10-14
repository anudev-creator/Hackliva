import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/app/lib/paths";

export type HeroCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
};

export default function HeroCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "",
  href,
}: HeroCardProps) {
  const content = (
    <>
      <div className="relative aspect-356/176 w-full shrink-0 overflow-hidden lg:aspect-auto lg:w-[122px]">
        <Image
          src={assetPath(imageSrc)}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 728px, (max-width: 400px) 100vw, 358px"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex min-h-[150px] flex-1 flex-col px-4 pt-4 pb-[22px] lg:min-h-[358px]">
        <h3 className="text-[17px] leading-5 font-semibold tracking-[-0.005em] text-[#0A0A0A] lg:text-[26px] lg:leading-8 lg:tracking-normal">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-xs leading-4 text-[#555555] lg:text-[17px] lg:leading-6">
            {subtitle}
          </p>
        )}
        <p className="mt-2 text-xs leading-4 text-[#555555] lg:text-[17px] lg:leading-6">
          {description}
        </p>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="mt-auto size-4 self-end text-[#F00012] transition-transform duration-300 ease-out group-hover:translate-x-1"
        >
          <path
            d="M1 8h14M8 1l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </>
  );

  const className =
    "group flex w-full max-w-[358px] flex-col overflow-hidden lg:max-w-[368px] lg:flex-row rounded-xl border border-[#F2D6D6] bg-white transition-colors duration-300 hover:border-[#F00012]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012]";

  return href ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}
