import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/app/lib/paths";

export type FeaturedModuleTag = {
  icon: "calendar" | "video" | "lab";
  label: string;
};

export type FeaturedModuleCardProps = {
  badgeLabel: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: FeaturedModuleTag[];
  buttonLabel: string;
  href: string;
};

const tagIcons: Record<FeaturedModuleTag["icon"], ReactNode> = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1ZM5 10v10h14V10H5Z" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2.4l4.2 3.15A1 1 0 0 0 22 16V8a1 1 0 0 0-1.6-.8L16 10.4V8a2 2 0 0 0-2-2H4Z" />
    </svg>
  ),
  lab: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M9 2a1 1 0 0 0 0 2v6.59L3.7 19.1A2 2 0 0 0 5.4 22h13.2a2 2 0 0 0 1.7-2.9L15 10.59V4a1 1 0 1 0 0-2H9Zm2 2h2v7a1 1 0 0 0 .15.53L14.4 14H9.6l1.25-2.47A1 1 0 0 0 11 11V4Z" />
    </svg>
  ),
};

export default function FeaturedModuleCard({
  badgeLabel,
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
  buttonLabel,
  href,
}: FeaturedModuleCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#F2D6D6] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr]">
        <div className="relative aspect-[479/300] w-full">
          <Image src={assetPath(imageSrc)} alt={imageAlt} fill className="object-cover" />
          <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#0A0A0A] shadow-sm">
            <span className="size-1.5 shrink-0 rounded-full bg-[#F00012]" />
            {badgeLabel}
          </span>
        </div>

        <div className="flex flex-col justify-center px-6 py-8 lg:px-10 lg:py-6">
          <h3 className="text-xl font-extrabold text-[#0A0A0A] lg:text-[26px]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#555555] lg:text-[14.5px] lg:leading-[22px]">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2 rounded-lg border border-[#F2D6D6] px-3 py-2 text-xs font-medium text-[#0A0A0A] lg:text-[13px]"
              >
                <span className="text-[#F00012]">{tagIcons[tag.icon]}</span>
                {tag.label}
              </span>
            ))}
          </div>

          <div className="mt-6 flex justify-end lg:mt-8">
            <Link
              href={href}
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F00012] px-5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#D2000F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012]"
            >
              {buttonLabel}
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
