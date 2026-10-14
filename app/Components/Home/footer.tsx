import type { ReactNode } from "react";
import Link from "next/link";

const RED = "#E90D21";

type FooterLink = { label: string; href: string; tag?: string };

const trainingTracks: FooterLink[] = [
  { label: "Certified Offensive Security Professional + AI Red Teaming (COSP AI+)", href: "#" },
  { label: "Bug Hunting with AI Automation (BHAI)", href: "#" },
  { label: "Certified Network Penetration Testing Specialist (CNPTS)", href: "#" },
  { label: "Certified Container Security Specialist (CCSS)", href: "#" },
  { label: "Certified Web Penetration Testing Specialist (CWPTS)", href: "#" },
  { label: "Certified Mobile Application Security Specialist (CMASS)", href: "#" },
  { label: "Certified AI Red Teaming Specialist (CAIRTS)", href: "#" },
  { label: "Certified Reverse Engineering Specialist (CRES)", href: "#" },
  { label: "Cloud-Native Adversary Emulation", href: "#" },
  { label: "API & Microservices Offensive Security", href: "#" },
];

const astralivaServices: FooterLink[] = [
  { label: "Red Team Operations & Adversary Simulation", href: "#" },
  { label: "Vulnerability Assessment & Penetration Testing", href: "#" },
  { label: "Automotive & Connected IoT Security", href: "#" },
  { label: "Cloud & Kubernetes Security Hardening", href: "#" },
  { label: "Digital Forensics & Incident Response (DFIR)", href: "#" },
  { label: "Source Code Review & Static Binary Auditing", href: "#" },
  { label: "AI Model Security & LLM Jailbreak Defense", href: "#" },
  { label: "Adversary-Led Ransomware Simulation", href: "#" },
  { label: "Critical Infrastructure OT/SCADA Testing", href: "#" },
];

const complianceAudits: FooterLink[] = [
  { label: "ISO/IEC 27001 Readiness & Surveillance Audit", href: "#" },
  { label: "SOC 2 Type II Certification Preparation", href: "#" },
  { label: "PCI DSS v4.0 & PCI PIN Compliance", href: "#" },
  { label: "HIPAA Security & Privacy Assessment", href: "#" },
  { label: "GDPR & DPDPA (India) Data Governance", href: "#" },
  { label: "NIST CSF & SP 800-53 Architecture", href: "#" },
  { label: "HITRUST Alliance Assessment", href: "#" },
  { label: "Regulatory Audits (RBI, SEBI, CERT-In)", href: "#" },
];

const corporateTrainingCompliance: FooterLink[] = [
  { label: "Security Awareness", href: "#" },
  { label: "Cybersecurity Workshops", href: "#" },
  { label: "Phishing & Social Engineering Training", href: "#" },
  { label: "Secure Workplace Practices", href: "#" },
  { label: "Data Protection & Privacy Training", href: "#" },
  { label: "Incident Response Awareness", href: "#" },
];

const globalDeliveryLocations = [
  {
    name: "HQ & Core Security Lab",
    location: "Kozhikode Cyberpark, Kerala, India",
  },
  {
    name: "Bangalore Hub",
    location: "koramangala,koramangala",
  },
];

const corporateTrainingGlobal: FooterLink[] = [
  { label: "About Astraliva LLP", href: "#" },
  { label: "Executive Leadership", href: "#" },
  { label: "Faculty & Operator Recruitment", href: "#", tag: "HIRING" },
  { label: "why Hacliva", href: "#" },
  { label: "Vission &  Mission", href: "#" },
];

const blogLinks: FooterLink[] = [{ label: "0-Day Threat Research Blog", href: "#" }];

const highlightLinks: FooterLink[] = [
  { label: "OpusNexus Strategic Career Bridge", href: "#" },
  { label: "Cyber Operations Intel Reports", href: "#" },
];

const accreditations = [
  "ISO/IEC 27001:2022",
  "ISO 21001:2025",
  "ISO 9001:2026",
  "Startup India",
  "KSUM Certified",
];

const socialLinks: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.39.2 2.42.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M18.3 2H21l-6.4 7.3L22 22h-6.6l-5-6.6L4.6 22H2l6.9-7.9L2 2h6.7l4.5 6.1L18.3 2Zm-1.2 18h1.5L7 4h-1.6l11.7 16Z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M20 5.5A17.6 17.6 0 0 0 15.6 4l-.3.6a13 13 0 0 1 3.7 1.4 15 15 0 0 0-14 0A13 13 0 0 1 8.7 4.6L8.4 4a17.6 17.6 0 0 0-4.4 1.5C1.6 9 1 12.4 1.3 15.8a17.7 17.7 0 0 0 5.2 2.6l.7-1.1a11 11 0 0 1-1.8-.9l.4-.3a12.8 12.8 0 0 0 10.4 0l.4.3a11 11 0 0 1-1.8.9l.7 1.1a17.6 17.6 0 0 0 5.2-2.6c.4-3.9-.6-7.3-2.7-10.3ZM8.7 13.9c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Zm6.6 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8L18 7.5c.4-.4-.1-.6-.6-.2L6.7 13.9l-4.7-1.5c-1-.3-1-1 .2-1.5L20.6 3.4c.8-.3 1.6.2 1.3.9Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M22 12s0-3.4-.4-5A2.8 2.8 0 0 0 19.6 5C18 4.6 12 4.6 12 4.6s-6 0-7.6.4A2.8 2.8 0 0 0 2.4 7C2 8.6 2 12 2 12s0 3.4.4 5A2.8 2.8 0 0 0 4.4 19c1.6.4 7.6.4 7.6.4s6 0 7.6-.4a2.8 2.8 0 0 0 2-2C22 15.4 22 12 22 12ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
];

function FooterColumn({
  heading,
  headingHref,
  links,
  headingColor = RED,
}: {
  heading: string;
  headingHref?: string;
  links: FooterLink[];
  headingColor?: string;
}) {
  return (
    <div>
      {headingHref ? (
        <Link
          href={headingHref}
          className="text-xs font-bold uppercase tracking-wide transition-colors duration-300 hover:opacity-80"
          style={{ color: headingColor }}
        >
          {heading}
        </Link>
      ) : (
        <h3
          className="text-xs font-bold uppercase tracking-wide"
          style={{ color: headingColor }}
        >
          {heading}
        </h3>
      )}
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-xs leading-5 text-[#4B4B4B] transition-colors duration-300 hover:text-[#0A0A0A]"
            >
              {link.label}
              {link.tag && (
                <span className="ml-1 font-bold" style={{ color: RED }}>
                  [{link.tag}]
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-4 pb-10 pt-16 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <p
              className="text-xl font-extrabold uppercase tracking-wide"
              style={{ color: RED }}
            >
              Hackliva
            </p>
            <p className="mt-4 max-w-sm text-sm leading-5 text-[#4B4B4B]">
              Build real-world skills in offensive security, red teaming, and
              AI security. Learn from industry professionals through
              practical training, hands-on labs, and real-world scenarios.
              Start your cybersecurity journey with Hackliva offensive
              training division operating under{" "}
              <span className="font-bold text-[#0A0A0A]">
                The Astraliva LLP.
              </span>
            </p>

            <h3
              className="mt-8 text-xs font-bold uppercase tracking-wide"
              style={{ color: RED }}
            >
              Accreditations &amp; Institutional Alignments
            </h3>
            <p className="mt-3 flex flex-wrap gap-x-1 gap-y-1 text-xs text-[#4B4B4B]">
              {accreditations.map((item) => (
                <span key={item}>{item} /</span>
              ))}
            </p>

            <hr className="mt-5 border-[#EBEBEB]" />

            <h3
              className="mt-5 text-xs font-bold uppercase tracking-wide"
              style={{ color: RED }}
            >
              Direct Contact &amp; Admissions
            </h3>
            <div className="mt-3 space-y-2">
              <Link
                href="mailto:admissions@hackliva.com"
                className="flex items-center gap-2 text-sm text-[#4B4B4B] transition-colors duration-300 hover:text-[#0A0A0A]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="size-4 shrink-0"
                  style={{ color: RED }}
                >
                  <path d="M4 6h16v12H4V6Zm0 0 8 7 8-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                admissions@hackliva.com
              </Link>
              <Link
                href="tel:+919037981682"
                className="flex items-center gap-2 text-sm text-[#4B4B4B] transition-colors duration-300 hover:text-[#0A0A0A]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 shrink-0"
                  style={{ color: RED }}
                >
                  <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.5c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" />
                </svg>
                +91 90379 81682
              </Link>
            </div>
          </div>

          <FooterColumn
            heading="Training Tracks"
            headingHref="/Training_Tracks"
            links={trainingTracks}
          />
          <FooterColumn heading="Astraliva Services" links={astralivaServices} />

          <div>
            <FooterColumn heading="Compliance & Audits" links={complianceAudits} />
            <hr className="mt-5 border-[#EBEBEB]" />
            <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-[#0A0A0A]">
              Corporate Training &amp; Awareness
            </h3>
            <ul className="mt-4 space-y-3">
              {corporateTrainingCompliance.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs leading-5 text-[#4B4B4B] transition-colors duration-300 hover:text-[#0A0A0A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-bold uppercase tracking-wide"
              style={{ color: RED }}
            >
              Global Delivery Nodes
            </h3>
            <div className="mt-4 space-y-4">
              {globalDeliveryLocations.map((loc) => (
                <div key={loc.name}>
                  <p className="text-sm font-bold text-[#0A0A0A]">{loc.name}</p>
                  <p className="text-xs leading-5 text-[#4B4B4B]">{loc.location}</p>
                </div>
              ))}
            </div>

            <hr className="mt-5 border-[#EBEBEB]" />

            <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-[#0A0A0A]">
              Corporate Training &amp; Awareness
            </h3>
            <ul className="mt-4 space-y-3">
              {corporateTrainingGlobal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs leading-5 text-[#4B4B4B] transition-colors duration-300 hover:text-[#0A0A0A]"
                  >
                    {link.label}
                    {link.tag && (
                      <span className="ml-1 font-bold" style={{ color: RED }}>
                        [{link.tag}]
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-5 space-y-3">
              {blogLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs leading-5 text-[#4B4B4B] transition-colors duration-300 hover:text-[#0A0A0A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-3 space-y-3">
              {highlightLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium leading-5 transition-colors duration-300 hover:opacity-80"
                    style={{ color: RED }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-16 border-[#F2D6D6]" />

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-5">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="flex items-center gap-2 text-sm text-[#0A0A0A] transition-colors duration-300 hover:text-[#4B4B4B]"
            >
              {social.icon}
              {social.label}
            </Link>
          ))}
        </div>

        <hr className="border-[#EBEBEB]" />

        <div className="flex flex-col gap-4 pt-6 lg:flex-row lg:items-start lg:justify-between">
          <p className="text-xs leading-5 text-[#4B4B4B]">
            © 2026 HACKLIVA Academy Global. A Division of The Astraliva LLP.
            Enterprise verification secured by Astraliva LLP. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#4B4B4B]">
            <Link href="#" className="transition-colors duration-300 hover:text-[#0A0A0A]">
              Privacy Protocol
            </Link>
            <Link href="#" className="transition-colors duration-300 hover:text-[#0A0A0A]">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors duration-300 hover:text-[#0A0A0A]">
              Responsible Disclosure Policy
            </Link>
            <Link href="#" className="basis-full transition-colors duration-300 hover:text-[#0A0A0A] lg:basis-auto">
              Vulnerability SLA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
