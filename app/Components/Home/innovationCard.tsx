import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/app/lib/paths";

export type InnovationCardProps = {
  boldText: string;
  text: string;
  linkLabel: string;
  linkIcon: "play" | "search";
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export default function InnovationCard({
  boldText,
  text,
  linkLabel,
  linkIcon,
  imageSrc,
  imageAlt,
  href,
}: InnovationCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#F2D6D6] bg-white">
      <div className="flex flex-col px-6 pb-5 pt-7">
        <p className="text-sm leading-5 text-[#4B4B4B] lg:text-[14px] lg:leading-[20px]">
          <span className="font-bold text-[#0A0A0A]">{boldText}</span> {text}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#F00012] transition-colors duration-300 hover:text-[#D2000F]"
        >
          {linkLabel}
          {linkIcon === "play" ? (
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
              <path
                d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 8c0-2.8 2.2-5 5-5s5 2.2 5 5M15 15l3 3m-2-6a3 3 0 1 0 0-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Link>
      </div>

      <div className="relative mt-1 aspect-[366/192] w-full shrink-0">
        <Image src={assetPath(imageSrc)} alt={imageAlt} fill className="object-cover" />
        <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md lg:size-10">
          {linkIcon === "play" ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-0.5 size-4 text-[#F00012]">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px] text-[#F00012]">
              <path
                d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 8c0-2.8 2.2-5 5-5s5 2.2 5 5M15 15l3 3m-2-6a3 3 0 1 0 0-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
}
