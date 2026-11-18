import clientMeeting from "../_assets/course/benefits/client-meeting.svg";
import collaboration from "../_assets/course/benefits/collaboration.svg";
import community from "../_assets/course/benefits/community.svg";
import realProjects from "../_assets/course/benefits/real-projects.svg";
import type { BenefitsSectionProps } from "../_components/benefits-section";
import { additionalBenefits } from "./benefits";

/** Courses whose "Additional Benefits" differ from the default (divided card, shorter client-meeting label). */
const dividedBenefits: BenefitsSectionProps = {
  ...additionalBenefits,
  variant: "divided",
  benefits: [
    { title: "Team Collaboration", icon: collaboration },
    { title: "Access to Client\nMeeting", icon: clientMeeting },
    { title: "Real Time Projects", icon: realProjects },
    { title: "Community Access", icon: community },
  ],
};

export const courseBenefits: Record<string, BenefitsSectionProps> = {
  cnpts: dividedBenefits,
  cmass: dividedBenefits,
};
