import type { ConsultationBannerProps } from "../_components/consultation-banner";
import type { SocialNetwork } from "../_components/social-icon";

export type FooterLink = { label: string; href: string; highlight?: boolean };
export type FooterGroup = { title?: string; links: FooterLink[] };
export type FooterNode = { name: string; address: string };

// Content follows the Figma footer (425:3286). Links marked "#" are placeholders until those pages exist.
export const consultationCta: ConsultationBannerProps = {
  title: "Request a Free Consultation",
  description:
    "Schedule a free consultation or live demo to explore our courses, experience our training,\nand choose the right cybersecurity path for your career.",
  actions: [
    { label: "Schedule Demo", href: "/contact?topic=demo", variant: "light" },
    { label: "Enterprise Inquiry", href: "/contact?topic=enterprise", variant: "dark" },
  ],
};

export const footer = {
  about:
    "Hackliva helps individuals build practical cybersecurity skills through hands-on training, real-world labs, and guidance from experienced security professionals. Explore offensive security, red teaming, and AI security with training designed around industry requirements. Hackliva operates as the offensive security training division of",
  parentCompany: "Astraliva LLP",
  accreditations: {
    title: "Accreditations & Institutional Alignments",
    // Double spaces and the line break follow the design (kept from lg up).
    text: "ISO/IEC 27001:2022  /  ISO 21001:2025  /  ISO 9001:2026  /  Startup\nIndia Recognised /  KSUM Certified",
  },
  contact: {
    title: "Direct Contact & Admissions",
    email: "admissions@hackliva.com",
    phone: "+91 90379 81682",
  },
  /** One entry per column; a column can hold several groups. */
  columns: [
    [
      {
        title: "Training Tracks",
        links: [
          { label: "Certified Offensive Security Professional + AI Red Teaming (COSP AI+)", href: "/courses/cospai-plus" },
          { label: "Bug Hunting with AI Automation (BHAI)", href: "/courses/bhai" },
          { label: "Certified Network Penetration Testing Specialist (CNPTS)", href: "/courses/cnpts" },
          { label: "Certified Container Security Specialist (CCSS)", href: "/courses/ccss" },
          { label: "Certified Web Penetration Testing Specialist (CWPTS)", href: "/courses/cwpts" },
          { label: "Certified Mobile Application Security Specialist (CMASS)", href: "/courses/cmass" },
          { label: "Certified AI Red Teaming Specialist (CAIRTS)", href: "/courses/cairts" },
          { label: "Certified Reverse Engineering Specialist (CRES)", href: "/courses/cres" },
          { label: "Cloud-Native Adversary Emulation", href: "#" },
          { label: "API & Microservices Offensive Security", href: "#" },
        ],
      },
    ],
    [
      {
        title: "Astraliva Services",
        links: [
          { label: "Red Team Operations & Adversary Simulation", href: "#" },
          { label: "Vulnerability Assessment & Penetration Testing", href: "#" },
          { label: "Automotive & Connected IoT Security", href: "#" },
          { label: "Cloud & Kubernetes Security Hardening", href: "#" },
          { label: "Digital Forensics & Incident Response (DFIR)", href: "#" },
          { label: "Source Code Review & Static Binary Auditing", href: "#" },
          { label: "AI Model Security & LLM Jailbreak Defense", href: "#" },
          { label: "Adversary-Led Ransomware Simulation", href: "#" },
          { label: "Critical Infrastructure OT/SCADA Testing", href: "#" },
        ],
      },
    ],
    [
      {
        title: "Compliance & Audits",
        links: [
          { label: "ISO/IEC 27001 Readiness and Surveillance Audit", href: "#" },
          { label: "SOC 2 Type II Certification Preparation", href: "#" },
          { label: "PCI DSS v4.0 & PCI PIN Compliance", href: "#" },
          { label: "HIPAA Security & Privacy Assessment", href: "#" },
          { label: "GDPR and DPDPA (India) Data Governance", href: "#" },
          { label: "NIST CSF & SP 800-53 Architecture", href: "#" },
          { label: "HITRUST Alliance Assessment", href: "#" },
          { label: "Regulatory Audits (RBI, SEBI, CERT-In)", href: "#" },
        ],
      },
      {
        title: "Corporate Training & Awareness",
        links: [
          { label: "Security Awareness Training", href: "#" },
          { label: "Cybersecurity Workshops", href: "#" },
          { label: "Phishing and Social Engineering Awareness Training", href: "#" },
          { label: "Secure Workplace Practices Training", href: "#" },
          { label: "Data Protection & Privacy Training", href: "#" },
          { label: "Incident Response Awareness", href: "#" },
        ],
      },
    ],
  ] satisfies FooterGroup[][],
  nodes: {
    title: "Global Delivery Nodes",
    items: [
      { name: "HQ & Core Security Lab", address: "Kozhikode Cyberpark, Kerala, India" },
      { name: "Bangalore Hub", address: "Koramangala, Bengaluru" },
    ] satisfies FooterNode[],
  },
  /** Shown under the delivery nodes, in the last column. */
  companyGroups: [
    {
      // The design repeats this heading over the company links.
      title: "Corporate Training & Awareness",
      links: [
        { label: "About Astraliva LLP", href: "/about" },
        { label: "Executive Leadership", href: "#" },
        { label: "Faculty & Operator Recruitment", href: "#" },
        { label: "Why Hackliva", href: "#" },
        { label: "Vision & Mission", href: "#" },
      ],
    },
    {
      links: [
        { label: "0-Day Threat Research Blog", href: "/blog" },
        { label: "OpusNexus Strategic Career Bridge", href: "#", highlight: true },
      ],
    },
  ] satisfies FooterGroup[],
  socials: [
    { network: "linkedin", label: "LinkedIn", href: "#" },
    { network: "github", label: "GitHub", href: "#" },
    { network: "x", label: "X (Twitter)", href: "#" },
    { network: "discord", label: "Discord", href: "#" },
    { network: "telegram", label: "Telegram", href: "#" },
    { network: "youtube", label: "YouTube", href: "#" },
  ] satisfies { network: SocialNetwork; label: string; href: string }[],
  copyright:
    "© 2026 HACKLIVA Academy Global. A Division of The Astraliva LLP. Enterprise verification secured by Astraliva LLP. All rights reserved.",
  legal: [
    { label: "Privacy Protocol", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Responsible Disclosure Policy", href: "#" },
    { label: "Vulnerability SLA", href: "#" },
  ] satisfies FooterLink[],
};
