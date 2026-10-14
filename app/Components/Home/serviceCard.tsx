import ServiceIcon, { type ServiceIconName } from "./serviceIcons";

export type ServiceCardProps = {
  title: string;
  icon: ServiceIconName;
  variant?: "highlight-text";
};

export default function ServiceCard({
  title,
  icon,
  variant,
}: ServiceCardProps) {
  return (
    <div className="group flex min-h-[100px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-[#F2D6D6] bg-white px-4 py-6 text-center transition-colors duration-300 hover:bg-[#EEEEEE]">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EEEEEE] text-[#F00012] transition-colors duration-300 group-hover:bg-white">
        <ServiceIcon name={icon} className="size-4" />
      </span>
      <h3
        className={`text-xs font-bold uppercase leading-5 lg:text-[13px] ${
          variant === "highlight-text" ? "text-[#F00012]" : "text-[#0A0A0A]"
        }`}
      >
        {title}
      </h3>
    </div>
  );
}
