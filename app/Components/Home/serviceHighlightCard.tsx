import Image from "next/image";
import { assetPath } from "../assetPath";
import Link from "next/link";

export type ServiceHighlightCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};

export default function ServiceHighlightCard({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonLabel,
  href,
}: ServiceHighlightCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#F2D6D6] bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F00012]/40 hover:shadow-xl hover:shadow-black/5">
      <div className="relative aspect-[366/256] w-full shrink-0 overflow-hidden">
        <Image
          src={assetPath(imageSrc)}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-start px-6 py-6">
        <h3 className="text-base font-bold text-[#0A0A0A] lg:text-[18px]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-5 text-[#555555] lg:text-[13px] lg:leading-[21px]">
          {description}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-[#F00012] px-4 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#D2000F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012]"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
