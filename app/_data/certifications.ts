import bhai from "../_assets/certifications/bhai.png";
import cairts from "../_assets/certifications/cairts.png";
import cmass from "../_assets/certifications/cmass.png";
import cnpts from "../_assets/certifications/cnpts.png";
import cospaiPlus from "../_assets/certifications/cospai-plus.png";
import cres from "../_assets/certifications/cres.png";
import cwpts from "../_assets/certifications/cwpts.png";
import type { CertificationsSectionProps } from "../_components/certifications-section";

export const offensiveSecurityCertifications: CertificationsSectionProps = {
  id: "certifications",
  title: "Offensive Security & AI Red Teaming Certifications",
  description:
    "Synthesized hands-on operational tracks built for cyber operators, penetration testers, and autonomous AI red teamers.",
  certifications: [
    {
      code: "COSPAI+",
      name: "Certified Offensive Security Professional",
      tabLabel: "Certified Offensive Security Professional+AI Redteaming",
      badge: cospaiPlus,
      href: "/courses/cospai-plus",
      highlights: [
        "Full-stack offensive security",
        "Training coverage: Cloud, Native Cloud & AI Red Teaming, Network, Web, API, Mobile Application & Active Directory Security",
        "Professional penetration test reporting & documentation, security interview preparation & career readiness skills",
      ],
    },
    {
      code: "BHAI",
      name: "Bug Hunting with AI Automation",
      badge: bhai,
      href: "/courses/bhai",
      highlights: [
        "AI-powered recon & automated attack surface mapping",
        "Automated triage pipelines & finding prioritization",
        "Proof-of-concept generation & bounty submission workflows",
      ],
    },
    {
      code: "CAIRTS",
      name: "Certified AI Red Teaming Specialist",
      badge: cairts,
      href: "/courses/cairts",
      highlights: [
        "Offensive LLM testing & AI model attack simulation",
        "Prompt manipulation & AI behavior bypass techniques",
        "AI supply chain risk mapping & attack surface analysis · Memory & context poisoning against deployed AI systems",
      ],
    },
    {
      code: "CNPTS",
      name: "Certified Network Penetration Specialist",
      tabLabel: "Network Penetration Testing Specialist",
      badge: cnpts,
      href: "/courses/cnpts",
      highlights: [
        "Network scanning, enumeration, service fingerprinting & exploitation",
        "Active Directory domain attacks & Kerberos abuse",
        "Lateral movement pathways & stealth pivot techniques",
      ],
    },
    {
      code: "CWPTS",
      name: "Certified Web Penetration Testing Specialist",
      badge: cwpts,
      href: "/courses/cwpts",
      highlights: [
        "Web application attacks: injection, auth & logic flaws",
        "Smart fuzzing & AI-driven web input payload generation",
        "Cloud-hosted web application testing & bypass techniques",
      ],
    },
    {
      code: "CMASS",
      name: "Certified Mobile App Security Specialist",
      tabLabel: "Certified Mobile Application Security Specialist",
      badge: cmass,
      href: "/courses/cmass",
      highlights: [
        "Automated mobile reconnaissance & telemetry synthesis",
        "Runtime instrumentation & dynamic hooking (Frida/ADB)",
        "Cryptographic keystore & memory exploit analysis",
      ],
    },
    {
      code: "CRES",
      name: "Certified Reverse Engineering Specialist",
      badge: cres,
      href: "/courses/cres",
      highlights: [
        "Static & dynamic binary disassembly (Ghidra/IDA)",
        "Anti-analysis, VM detection defeat & packer stripping",
        "Custom payload deconstruction & kernel exploitation",
      ],
    },
  ],
};
