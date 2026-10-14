import AboutWhyWeStarted, {
  type AboutWhyWeStartedProps,
} from "./aboutWhyWeStarted";
import AboutVisionMission, {
  type AboutVisionMissionProps,
} from "./aboutVisionMission";
import AboutPrinciplesGrid, {
  type AboutPrinciplesGridProps,
} from "./aboutPrinciplesGrid";

export type AboutMainContentProps = {
  whyWeStarted: AboutWhyWeStartedProps;
  visionMission: AboutVisionMissionProps;
  principlesGrid: AboutPrinciplesGridProps;
};

export default function AboutMainContent({
  whyWeStarted,
  visionMission,
  principlesGrid,
}: AboutMainContentProps) {
  return (
    <section className="w-full border-t border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-4 py-16 sm:px-8 lg:gap-20 lg:px-24 lg:py-24">
        <AboutWhyWeStarted {...whyWeStarted} />
        <AboutVisionMission {...visionMission} />
        <AboutPrinciplesGrid {...principlesGrid} />
      </div>
    </section>
  );
}
