import Link from "next/link";
import CareerCard, { type CareerCardProps } from "./careerCard";

export type CareerSectionProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  href: string;
  cards: CareerCardProps[];
};

export default function CareerSection({
  heading,
  description,
  buttonLabel,
  href,
  cards,
}: CareerSectionProps) {
  return (
    <div className="rounded-2xl border border-[#F2D6D6] bg-white px-6 py-10 sm:px-10 lg:px-14 lg:py-30">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-extrabold leading-tight text-[#0A0A0A] lg:text-[40px] lg:leading-[46px]">
            {heading}
          </h2>
          <p className="mt-4 max-w-[320px] text-sm leading-6 text-[#555555] lg:text-[15px] lg:leading-[24px]">
            {description}
          </p>
          <Link
            href={href}
            className="mt-6 inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-[#F00012] px-4 text-xs font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#D2000F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012] lg:px-5"
          >
            {buttonLabel}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {cards.map((card) => (
            <CareerCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
