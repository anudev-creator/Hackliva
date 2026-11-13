import { darkPanelSurface } from "../../_components/dark-panel-section";
import { ServiceCard } from "../../_components/service-card";
import { ServiceTile } from "../../_components/service-tile";
import { whatWeDo } from "../../_data/what-we-do";
import { WhatWeDoPanel } from "./what-we-do-panel";

const headingId = "what-we-do-heading";

export function WhatWeDoSection() {
  const { title, description, services, allServices, toggle } = whatWeDo;

  return (
    <section
      id="what-we-do"
      aria-labelledby={headingId}
      className="bg-white px-5 py-16 sm:px-10 sm:py-24"
    >
      <WhatWeDoPanel
        className={`${darkPanelSurface} py-[clamp(1.5rem,6svh,4rem)]`}
        label={title}
        viewAllLabel={toggle.viewAll}
        showLessLabel={toggle.showLess}
        header={
          <div className="pb-8 text-center sm:pb-10">
            <h2
              id={headingId}
              className="text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl lg:text-5xl"
            >
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#9aa3ae] sm:text-[17px]">
              {description}
            </p>
          </div>
        }
        featured={services.map((service, index) => (
          <ServiceCard key={service.title} number={index + 1} {...service} />
        ))}
        all={allServices.map((service) => (
          <ServiceTile key={service.title} {...service} />
        ))}
      />
    </section>
  );
}
