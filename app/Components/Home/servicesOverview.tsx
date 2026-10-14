import ServiceCard, { type ServiceCardProps } from "./serviceCard";
import ServiceHighlightCard, {
  type ServiceHighlightCardProps,
} from "./serviceHighlightCard";

export type ServicesOverviewProps = {
  heading: string;
  description: string;
  highlight: ServiceHighlightCardProps;
  services: ServiceCardProps[];
};

export default function ServicesOverview({
  heading,
  description,
  highlight,
  services,
}: ServicesOverviewProps) {
  return (
    <section className="w-full mt-40">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16">
        <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight text-[#0A0A0A] lg:text-[40px]">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-[480px] text-center text-sm leading-6 text-[#555555] lg:text-[15px] lg:leading-[23px]">
          {description}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
          <ServiceHighlightCard {...highlight} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
