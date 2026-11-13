import icon1 from "../_assets/course/roadmap/icon-1.svg";
import icon2 from "../_assets/course/roadmap/icon-2.svg";
import icon3 from "../_assets/course/roadmap/icon-3.svg";
import icon4 from "../_assets/course/roadmap/icon-4.svg";
import icon5 from "../_assets/course/roadmap/icon-5.svg";
import type { RoadmapSectionProps } from "../_components/roadmap-section";

/** "Learn the basics" roadmap per course, keyed by the /courses/<slug> segment. */
export const courseRoadmaps: Record<string, RoadmapSectionProps> = {
  "cospai-plus": {
    id: "roadmap",
    title: ["Learn The Basics of", "Offensive Security"],
    intro:
      "Starting Point will build a strong foundation in cybersecurity through a structured, hands-on training\ncurriculum designed to take you from the fundamentals to real world offensive security assessments.",
    modules: [
      {
        title: "Offensive Security Foundations",
        description:
          "Build essential skills in networking, Linux, reconnaissance, enumeration, scripting, and penetration testing methodologies. Learn to use security tools and understand how to identify, analyse, and exploit vulnerabilities in controlled environments.",
        icon: icon1,
        tags: [{ label: "Networking" }, { label: "Linux OS" }, { label: "Reconnaissance" }],
      },
      {
        title: "Infrastructure & Active Directory Security",
        description:
          "Learn how to assess enterprise networks through internal and external penetration testing. Explore Windows security, Active Directory attacks, network segmentation, privilege escalation, lateral movement, and infrastructure exploitation.",
        icon: icon2,
        tags: [{ label: "Active Directory" }, { label: "Privilege Escalation" }],
      },
      {
        title: "Web, Mobile & API Security",
        description:
          "Develop practical application security skills by testing web applications, APIs, and Android applications. Explore thick-client security, reverse engineering, dynamic instrumentation, source code analysis, and bug bounty techniques.",
        icon: icon3,
        tags: [{ label: "AppSec" }, { label: "APIs" }, { label: "Bug Hunting" }],
      },
      {
        title: "AI Red Teaming & Container Security",
        description:
          "Explore security challenges in modern cloud-native and AI environments. Learn Docker and Kubernetes security, container hardening, runtime protection, container image and software supply chain security, LLM testing, prompt injection, jailbreaks, MCP security, and AI agent security testing.",
        icon: icon4,
        tags: [
          { label: "AI/LLM Testing & MCP Attack", highlight: true },
          { label: "AI Automation" },
          { label: "AI Agent Attacks" },
          { label: "Cloud Native" },
        ],
      },
      {
        title: "Career and Interview Preparation",
        description:
          "Prepare for cybersecurity roles with practical guidance on technical reporting, client communication, professional presentations, portfolio development, résumé and LinkedIn optimisation, and technical interview preparation.",
        icon: icon5,
        tags: [{ label: "Reporting" }, { label: "Interviews" }, { label: "Portfolio" }],
      },
    ],
  },
};
