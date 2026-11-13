import aiAutomation from "../_assets/course/overview/ai-automation.png";
import courseDetails from "../_assets/course/overview/course-details.jpg";
import type { CourseOverviewProps } from "../_components/course-overview";

/** Overview content per course, keyed by the /courses/<slug> segment. */
export const courseOverviews: Record<string, CourseOverviewProps> = {
  "cospai-plus": {
    title: "Certified Offensive Security Professional + AI RedTeaming",
    tagline: "Hands-on challenges, practical labs and learning vulnerabilities.",
    cards: [
      {
        title: "Course Details",
        subtitle: "6-Month Online Training Programme",
        description:
          "Start with security fundamentals and progress to advanced penetration testing\nacross enterprise networks, Active Directory, web applications,\nAPIs, cloud environments, and AI security.",
        icon: { src: courseDetails, fill: true },
      },
      {
        title: "AI-Powered Security Automation",
        subtitle: "AI-Driven Offensive Security",
        description:
          "Learn AI-assisted penetration testing, AI automation, LLM security testing,\nprompt injection, jailbreaks, and Model Context Protocol (MCP)\nsecurity testing.",
        icon: { src: aiAutomation },
      },
      {
        title: "Learn from Experienced Pentesters",
        subtitle: "Mentorship & Real World Assessments",
        description:
          "Learn directly from experienced security professionals through practical\nassessments, code reviews, report analysis, and guided\nvulnerability exploitation.",
      },
      {
        title: "Live Hands-On Training",
        subtitle: "Dedicated Practice Environments",
        description:
          "Practice reconnaissance, exploitation, privilege escalation, lateral\nmovement, pivoting through realistic attack and multi-domain attack scenarios in\ncontrolled labs.",
      },
    ],
  },
};
