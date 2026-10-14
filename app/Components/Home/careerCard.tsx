import CareerIcon, { type CareerIconName } from "./careerIcons";

export type CareerCardProps = {
  title: string;
  description: string;
  icon: CareerIconName;
};

export default function CareerCard({
  title,
  description,
  icon,
}: CareerCardProps) {
  return (
    <div className="flex h-full min-h-[230px] flex-col rounded-xl border border-[#F2D6D6] bg-white px-4 py-4 lg:min-h-[304px] lg:px-5 lg:py-5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#EEEEEE] text-[#F00012]">
        <CareerIcon name={icon} className="size-[18px]" />
      </span>
      <h3 className="mt-3 text-base font-bold leading-6 text-[#0A0A0A] lg:text-[18px] lg:leading-[24px]">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-5 text-[#555555] lg:text-[13px] lg:leading-5">
        {description}
      </p>
    </div>
  );
}
