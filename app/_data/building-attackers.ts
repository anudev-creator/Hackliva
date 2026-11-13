import type { PillarsSectionProps } from "../_components/pillars-section";

export const buildingAttackers: PillarsSectionProps = {
  id: "building-attackers",
  title: "Building Attackers",
  description:
    "Cybersecurity is learned differently when you stop watching and start doing. Hackliva is built around practical learning, hands-on labs and real-world security challenges with AI Automation.",
  pillars: [
    {
      title: "Learning Through Real Systems",
      description:
        "Students learn through hands-on labs and real world scenarios, understanding how vulnerabilities impact applications and infrastructure.",
      tag: "Real-world infrastructure",
    },
    {
      title: "Think Like an Attacker",
      description:
        "Learn how to approach applications, networks, APIs, and Cloud env from an attacker's perspective and learn how systems work, identify weaknesses, and discover ways they can be exploited.",
      tag: "Adversary mindset",
    },
    {
      title: "Break. Investigate. Understand.",
      description:
        "Get practical guidance from experienced security professionals through practical assessments, identify vulnerabilities, secure code reviews, validate findings, and guided exploitation exercises.",
      tag: "Exploitation & analysis",
    },
  ],
};
