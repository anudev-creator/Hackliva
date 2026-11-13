import clientMeeting from "../_assets/course/benefits/client-meeting.svg";
import collaboration from "../_assets/course/benefits/collaboration.svg";
import community from "../_assets/course/benefits/community.svg";
import realProjects from "../_assets/course/benefits/real-projects.svg";
import type { BenefitsSectionProps } from "../_components/benefits-section";

export const additionalBenefits: BenefitsSectionProps = {
  id: "benefits",
  title: "Additional Benefits",
  benefits: [
    { title: "Team Collaboration", icon: collaboration },
    { title: "Direct Access to Client\nMeeting", icon: clientMeeting },
    { title: "Real Time Projects", icon: realProjects },
    { title: "Community Access", icon: community },
  ],
};
