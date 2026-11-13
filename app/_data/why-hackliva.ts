import type { ComparisonSectionProps } from "../_components/comparison-section";
import type { CtaBannerProps } from "../_components/cta-banner";

export const whyHacklivaComparison: Omit<ComparisonSectionProps, "children"> = {
  id: "why-hackliva",
  title: "Why Hackliva Security Academy\nOutperforms Traditional Training",
  description:
    "Equip yourself with hands-on AI red teaming skills built for the threats that exist today, not the ones from five years ago.",
  columns: {
    feature: "Features & Capabilities",
    ours: "Hackliva Security Academy",
    theirs: "Traditional Institutes",
  },
  rows: [
    {
      feature: "Training Approach",
      ours: "100% Offensive, Lab-First & Real-Time Adversary Simulation",
      theirs: "Theory-heavy textbook learning with static multiple-choice tests",
    },
    {
      feature: "AI-Powered Hacking",
      ours: "Autonomous Reconnaissance, Smart Fuzzing & AI-Driven Exploitation",
      theirs: "Zero modern AI integration; relying solely on legacy manual checklists",
    },
    {
      feature: "Technical Coverage",
      ours: "Cloud Pivoting, AD Dominance, Microservices & Zero-Day Payload Engineering",
      theirs: "Outdated standard web top 10 and basic network scanning",
    },
    {
      feature: "Real-World Experience",
      ours: "Live Enterprise Cyber Range Environments & Red Team Engagement Briefs",
      theirs: "Simulated pre-packaged canned VMs without dynamic perimeter response",
    },
    {
      feature: "AI Red Teaming",
      ours: "Certified LLM Attack Vectors, Prompt Injection & Agent Tool Abuse",
      theirs: "No curriculum or capabilities tailored to AI & LLM system vulnerabilities",
    },
    {
      feature: "Career Readiness",
      ours: "OpusNexus Career Bridge, 1-on-1 Mentorship & Verified Security Portfolios",
      theirs: "Generic certification attendance certificate without proof of work",
    },
  ],
};

export const placementAssistanceCta: CtaBannerProps = {
  title: "100% Placement Assistance",
  description:
    "Direct pipeline to top cyber defense firms, hiring partners, and red team departments through our OpusNexus Strategic Career Network.",
  icon: "verified",
  cta: { label: "Apply Now", href: "/contact" },
};
