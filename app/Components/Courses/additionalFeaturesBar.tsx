import type { ReactNode } from "react";

export type AdditionalFeature = {
  icon: "collaboration" | "clientMeeting" | "liveProjects" | "community";
  label: string;
};

export type AdditionalFeaturesBarProps = {
  heading: string;
  features: AdditionalFeature[];
};

const icons: Record<AdditionalFeature["icon"], ReactNode> = {
  collaboration: (
    <path d="M12 3 4 21l8-5 8 5-8-18Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  clientMeeting: (
    <path
      d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20c0-3.3 3.1-6 7-6s7 2.7 7 6M15 14.2c3.4.4 6 2.7 6 5.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  liveProjects: (
    <path
      d="M7 3h7l4 4v14H7V3Zm7 0v4h4M12 14v4m-2-2h4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  community: (
    <path
      d="M6 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.7 10.8l8.6-4.6M7.7 13.2l8.6 4.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function AdditionalFeaturesBar({
  heading,
  features,
}: AdditionalFeaturesBarProps) {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto max-w-[1536px] px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
        <h2 className="text-3xl font-bold tracking-[-1.2px] text-[#050505] lg:text-[42px]">
          {heading}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 rounded-2xl border border-[#F2D6D6] bg-white px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#F2D6D6] lg:gap-0 lg:px-0">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="group flex flex-col items-center gap-3 text-center lg:px-6"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="size-7 text-[#555] transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-[#F00012]"
              >
                {icons[feature.icon]}
              </svg>
              <span className="text-base font-bold text-[#050505]">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
