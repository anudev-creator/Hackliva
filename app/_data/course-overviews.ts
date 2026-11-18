import aiAutomation from "../_assets/course/overview/ai-automation.png";
import bhai from "../_assets/course/overview/bhai.png";
import cairtsBadge from "../_assets/certifications/cairts.png";
import cmassBadge from "../_assets/certifications/cmass.png";
import cnptsBadge from "../_assets/certifications/cnpts.png";
import cresBadge from "../_assets/certifications/cres.png";
import cwpts from "../_assets/course/overview/cwpts.png";
import courseDetails from "../_assets/course/overview/course-details.jpg";
import network from "../_assets/course/overview/network.svg";
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
  bhai: {
    title: "Bug Hunting with AI Automation (BHAI)",
    tagline:
      "Master modern API security, Web Application Security, automated vulnerability discovery, and advanced LLM security testing methodologies.",
    cards: [
      {
        title: "Course Details",
        subtitle: "3-Month Online Programme",
        accent: true,
        description:
          "From Security Fundamentals to AI-Assisted Bug Bounty Hunting.\nCovering modern vulnerability discovery, AI-assisted Bug bounty\nhunting, LLM security, AI Automation, and real-world offensive\nsecurity workflows.",
        icon: { src: bhai, fill: true },
      },
      {
        title: "AI-Powered Security Automation",
        subtitle: "AI-Driven Bug Hunting",
        accent: true,
        description:
          "Learn AI-assisted web pentesting, security automation, prompt\ninjection, AI-powered vulnerability discovery and exploitation\nworkflows, and build practical AI agents for offensive security tasks.",
        icon: { src: aiAutomation },
      },
      {
        title: "Learn Through Bug Bounty Mentorship",
        description:
          "Get practical guidance from experienced bug hunters through live\nhunting sessions, vulnerability analysis, report reviews,\nreconnaissance techniques, and real world exploitation\nwalkthrough.",
      },
      {
        title: "Live Hands-On Training",
        description:
          "Practice reconnaissance, exploitation, privilege escalation, lateral\nmovement, pivoting, and multi-domain attack scenarios in\ncontrolled labs.",
      },
    ],
  },
  cwpts: {
    title: "Certified Web Penetration Testing Specialist (CWPTS)",
    tagline:
      "Master modern web application security, advanced exploitation techniques, and enterprise application pentesting.",
    cards: [
      {
        title: "Course Details",
        eyebrow: "3-Month Online Program",
        eyebrowAccent: true,
        subtitle: "From Security Fundamentals to Advanced Web Application Security",
        description:
          "Covering web application security testing, reconnaissance, vulnerability\ndiscovery, API security, exploitation, and real-world penetration testing\nworkflows.",
        icon: { src: cwpts, fill: true },
      },
      {
        title: "AI-Powered Security Automation",
        subtitle: "AI-Driven Offensive Security",
        description:
          "Learn AI-assisted pentesting, AI automation, LLM security testing, prompt\ninjection, jailbreaks, and MCP security testing.",
        icon: { src: aiAutomation },
      },
      {
        title: "Learn from Experienced Pentesters",
        subtitle: "Senior Pentester Guidance",
        description:
          "Get practical guidance from experienced bug hunters through live hunting\nsessions, vulnerability analysis, report reviews, reconnaissance techniques,\nand real world exploitation walkthroughs.",
      },
      {
        title: "Live Hands-On Training",
        subtitle: "Controlled Lab Scenarios",
        accent: true,
        description:
          "Practice reconnaissance, exploitation, privilege escalation, lateral movement,\npivoting, and multi-domain attack scenarios in controlled labs.",
      },
    ],
  },
  cairts: {
    title: "Certified AI Red Teaming Specialist (CAIRTS)",
    tagline:
      "Master LLM security architectures, adversarial jailbreaking, direct & indirect prompt injection, RAG exploitation, agentic toolchain subversion, and AI supply chain compromise.",
    cards: [
      {
        title: "Course Details",
        eyebrow: "16-Week Intensive Training",
        description:
          "From LLM fundamentals to advanced AI red teaming, autonomous agent exploitation, and a real-world capstone.",
        icon: { src: cairtsBadge, fill: true },
      },
      {
        title: "Adversarial AI Toolchain",
        description:
          "Probe AI systems, test defenses, exploit vulnerabilities, and red team LLMs, chatbots, agents, and MCP environments to uncover real-world attack paths.",
        icon: { src: aiAutomation },
      },
      {
        title: "Learn from Experienced Pentesters",
        description:
          "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
      },
      {
        title: "Live Hands-On Training",
        description:
          "Build practical expertise in AI reconnaissance, prompt injection, model attacks, MCP security, agent exploitation, AI API security, AI automation, and adversarial testing through realistic attack scenarios in controlled labs.",
      },
    ],
  },
  cnpts: {
    title: "Network Penetration Testing Specialist (CNPTS)",
    tagline: "Exploit. Pivot. Dominate Enterprise Networks.",
    cards: [
      {
        title: "Course Details",
        subtitle: "16-Week Intensive Training",
        description:
          "From core reconnaissance and enumeration to enterprise exploitation, lateral movement, Active Directory, domain compromise, and a real-world capstone.",
        icon: { src: cnptsBadge, fill: true },
      },
      {
        title: "Enterprise Lab Powered",
        subtitle: "Active Directory Forests & Dual-Homed Pivots",
        description:
          "Train in realistic enterprise environments featuring Active Directory forests, dual-homed systems, segmented networks, vulnerable enterprise services, and corporate-style architectures.",
        icon: { src: network },
      },
      {
        title: "Learn from Experienced Pentesters",
        description:
          "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
      },
      {
        title: "Live Hands-On Training",
        description:
          "Practice reconnaissance, exploitation, privilege escalation, lateral movement, pivoting, and multi-domain attack scenarios in controlled labs.",
        descriptionAccent: true,
      },
    ],
  },
  cmass: {
    title: "Certified Mobile Application Security Specialist (CMASS)",
    tagline:
      "Master Android ecosystem architecture, mobile reverse engineering, Frida dynamic instrumentation, and advanced application exploitation.",
    cards: [
      {
        title: "Course Details",
        eyebrow: "16-Week Intensive Training",
        eyebrowAccent: true,
        description:
          "From mobile security fundamentals to native binary analysis, exploitation, and a real-world capstone.",
        icon: { src: cmassBadge, fill: true },
      },
      {
        title: "Android Offensive Security",
        subtitle: "Dynamic Instrumentation, Forensics, Reverse Engineering & Static Analysis",
        description:
          "Break down Android applications through APK analysis, runtime instrumentation, reverse engineering, API testing, and vulnerability analysis.",
        icon: { src: aiAutomation },
      },
      {
        title: "Learn from Experienced Pentesters",
        eyebrow: "Mentorship & Real Engagements",
        eyebrowAccent: true,
        description:
          "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
      },
      {
        title: "Live Hands-On Training",
        eyebrow: "Dedicated Attack Environments",
        eyebrowAccent: true,
        description:
          "Develop practical expertise in mobile application testing, reverse engineering, API exploitation, runtime manipulation, and advanced vulnerability analysis through controlled attack scenarios.",
      },
    ],
  },
  cres: {
    title: "Certified Reverse Engineering Specialist (CRES)",
    tagline:
      "Master binary analysis, reverse engineering, dynamic instrumentation, firmware analysis, and exploit development.",
    cards: [
      {
        title: "Course Details",
        eyebrow: "16-Week Intensive Training",
        description: "From malware analysis and binary exploitation to real-world capstone.",
        icon: { src: cresBadge, fill: true },
      },
      {
        title: "Reverse Engineering & Vulnerability Research",
        description: "Advanced binary exploitation, unpackers, Ghidra & IDA Pro workflows.",
        icon: { src: aiAutomation },
      },
      {
        title: "Learn from Experienced Pentesters",
        description:
          "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
      },
      {
        title: "Live Hands-On Training",
        description:
          "Dedicated private sandboxes with real enterprise architectures, obfuscated malware dumps, unpacked firmware images, and stripped adversarial targets across x86/x64, ARM, and MIPS.",
      },
    ],
  },
};
