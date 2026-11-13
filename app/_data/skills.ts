import agents from "../_assets/skills/agents.png";
import apiNetwork from "../_assets/skills/api-network.png";
import cloudContainer from "../_assets/skills/cloud-container.png";
import interview from "../_assets/skills/interview.png";
import offensiveAi from "../_assets/skills/offensive-ai.png";
import presentation from "../_assets/skills/presentation.png";
import promptAttacks from "../_assets/skills/prompt-attacks.png";
import reportWriting from "../_assets/skills/report-writing.png";
import webMobile from "../_assets/skills/web-mobile.png";
import type { SkillsSectionProps } from "../_components/skills-section";

export const skillsYouWillMaster: SkillsSectionProps = {
  id: "skills",
  eyebrow: "Industry Relevant Skills",
  title: "Skills You Will",
  highlight: "Master",
  description:
    "The skills covered here are the same ones security teams and AI engineering roles are actively hiring for — hands-on, current, and built around how attacks actually happen.",
  skills: [
    {
      tag: "Offensive AI",
      title: "Offensive AI Testing",
      description:
        "End-to-end browser automation framework for reconnaissance crawling, authenticated session fuzzing, and headless vulnerability simulation.",
      icon: offensiveAi,
    },
    {
      tag: "Prompt Attacks",
      title: "Prompt Manipulation",
      description:
        "Open-weight coding intelligence models fine-tuned for security analysis, source audit triage, and exploit payload synthesis.",
      icon: promptAttacks,
    },
    {
      tag: "Protocol & Agents",
      title: "Agentic & System Exploitation",
      description:
        "Learn how autonomous AI agents get hijacked, redirected, and abused across complex pipelines.",
      icon: agents,
    },
    {
      tag: "Application Security",
      title: "Web & Mobile Security",
      description:
        "Find real vulnerabilities in web apps and mobile platforms — the ones attackers actually use.",
      icon: webMobile,
    },
    {
      tag: "API & Network Security",
      title: "API & Network Security",
      description:
        "Learn how APIs get abused and how attackers move through networks undetected.",
      icon: apiNetwork,
    },
    {
      tag: "Cloud & Container Security",
      title: "Cloud, Container & Kubernetes",
      description:
        "Test cloud environments and find the infrastructure misconfigurations most teams never catch.",
      icon: cloudContainer,
    },
    {
      tag: "Reporting Skills",
      title: "Security Report Writing",
      description:
        "Advanced semantic code comprehension engines for reversing decompiled binaries, mapping control-flow graphs, and vulnerability triage.",
      icon: reportWriting,
    },
    {
      tag: "Communication Skills",
      title: "Finding Presentation",
      description:
        "High-capacity chain-of-thought models for deep vulnerability root-cause analysis, complex CVE dissection, and long-context trace auditing.",
      icon: presentation,
    },
    {
      tag: "Career Readiness",
      title: "Interview Preparation",
      description:
        "Next-gen agentic CLI tool assisting operators in codebase multi-file exploration, automated test writing, and secure patch remediation.",
      icon: interview,
    },
  ],
};
