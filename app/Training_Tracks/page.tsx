import AboutMenuBar from "../Components/About/aboutMenuBar";
import TrainingTracksPillars, {
  type TrainingPillar,
} from "../Components/TrainingTracks/trainingTracksPillars";
import CourseHighlightCard from "../Components/TrainingTracks/courseHighlightCard";
import FoundationsRoadmap, {
  type RoadmapModule,
} from "../Components/TrainingTracks/foundationsRoadmap";
import TrainingTracksFooter from "../Components/TrainingTracks/trainingTracksFooter";

const pillars: TrainingPillar[] = [
  {
    label: "PILLAR 01",
    title: "Learning Through Real Systems",
    description:
      "Hackliva takes students beyond theory and into environments where security concepts become tangible.",
  },
  {
    label: "PILLAR 02",
    title: "Think Like an Attacker",
    description:
      "Understand how applications, networks, APIs, cloud platforms, and operating systems behave and learn to question the assumptions behind them.",
  },
  {
    label: "PILLAR 03",
    title: "Break. Investigate. Understand.",
    description:
      "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
  },
];

const roadmapModules: RoadmapModule[] = [
  {
    title: "Offensive Foundations",
    description:
      "Build the core skills needed to enter offensive security through networking, Linux, reconnaissance, enumeration, scripting, penetration testing methodologies, and essential security tools. Develop a strong foundation for identifying, analyzing, and exploiting security weaknesses in real-world environments.",
    tags: ["Networking", "Linux", "Recon & Enumeration"],
  },
  {
    title: "Infrastructure & Active Directory",
    description:
      "Learn to assess enterprise infrastructure through internal and external network testing, Windows security, Active Directory, network segmentation, privilege escalation, lateral movement, and infrastructure exploitation.",
    tags: ["Active Directory", "Privilege Escalation"],
  },
  {
    title: "Web, Mobile & API Security",
    description:
      "Develop practical application security skills across web applications, APIs, Android, thick-client applications, reverse engineering, dynamic instrumentation, source code analysis, bug bounty hunting, and real-world exploitation.",
    tags: ["Web & API", "Mobile", "Bug Bounty"],
  },
  {
    title: "AI Red Teaming & Container Security",
    description:
      "Secure modern cloud-native and AI environments by mastering Docker security, container hardening, Kubernetes security, runtime security, image and supply-chain security, LLM testing, AI application and API security, MCP attacks, prompt injection, jailbreaks, and AI agent security.",
    tags: ["Containers & K8s", "AI Red Teaming"],
  },
  {
    title: "Interview Preparation",
    description:
      "Transform technical skills into professional capability through security reporting, client communication, presentations, portfolio development, resume and LinkedIn optimization, and technical interview preparation.",
    tags: ["Reporting", "Career Prep"],
  },
];

export default function TrainingTracksPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutMenuBar />

      <TrainingTracksPillars
        heading="Building Attackers"
        description="Cybersecurity is learned differently when you stop watching and start doing. Hackliva is built around practical learning..."
        pillars={pillars}
      />

      <CourseHighlightCard
        heading="Certified Offensive Security Professional"
        subheading="Active challenges and intelligence feeds."
        courseDetails={{
          duration: "6-Month Online Program",
          description:
            "From security fundamentals to advanced penetration testing, covering enterprise networks, Active Directory, web, API, cloud, and AI security.",
        }}
        aiAutomation={{
          title: "AI-Powered Automation",
          tagline: "AI-Driven Offensive Security",
          description:
            "Learn AI-assisted pentesting, AI automation, LLM security testing, prompt injection, jailbreaks, and MCP security testing.",
        }}
        mentorship={{
          title: "Learn from Senior Pentesters",
          description:
            "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
        }}
        liveLabs={{
          title: "Live Hands-On Training",
          description:
            "Practice reconnaissance, exploitation, privilege escalation, lateral movement, pivoting, and multi-domain attack scenarios in controlled labs.",
        }}
      />

      <FoundationsRoadmap
        heading="Learn the basics of Offensive Security"
        modules={roadmapModules}
      />

      <TrainingTracksFooter />
    </div>
  );
}
