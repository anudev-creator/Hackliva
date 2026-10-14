import FeatureIcon, { type FeatureIconName } from "./featureIcons";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: FeatureIconName;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="group relative flex min-h-[150px] flex-col rounded-xl border border-[#F2D6D6] bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F00012]/40 hover:shadow-xl hover:shadow-black/5">
      <h3 className="pr-8 text-sm font-bold uppercase text-[#0A0A0A] lg:pr-0 lg:text-[15px]">
        {title}
      </h3>
      <p className="mt-2 max-w-[210px] text-xs font-medium leading-5 text-[#555555] lg:text-[13px] lg:leading-5">
        {description}
      </p>
      <FeatureIcon
        name={icon}
        className="absolute bottom-4 right-4 size-6 text-[#EFC3C6] transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-[#F00012] lg:size-7"
      />
    </div>
  );
}
