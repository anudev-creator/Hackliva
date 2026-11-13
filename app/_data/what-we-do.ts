import complianceAudit from "../_assets/services/compliance-audit.jpg";
import cyberTraining from "../_assets/services/cyber-training.jpg";
import securityConsulting from "../_assets/services/security-consulting.jpg";
import type { Service } from "../_components/service-card";
import type { ServiceTileData } from "../_components/service-tile";

export const whatWeDo: {
  title: string;
  description: string;
  /** Featured services shown as stacking cards. */
  services: Service[];
  /** Every service, shown as a grid after "View All". */
  allServices: ServiceTileData[];
  toggle: { viewAll: string; showLess: string };
} = {
  title: "What We Do",
  description:
    "We provide practical cybersecurity services and expert guidance to help organizations identify risks, strengthen their security, and stay resilient.",
  services: [
    {
      title: "Cyber Training & Awareness Program",
      description:
        "Comprehensive workforce training, phishing simulations, and hands-on workshops designed to reinforce enterprise cyber hygiene.",
      image: cyberTraining,
    },
    {
      title: "Cyber Security Consulting",
      description:
        "Strategic security advisory, threat modeling, cloud architecture hardening, and zero-trust engineering for resilient operations.",
      image: securityConsulting,
    },
    {
      title: "Compliance & Audit",
      description:
        "Prepare for security audits and regulatory requirements with end-to-end support across ISO 27001, SOC 2, PCI DSS, and ongoing security and governance reviews.",
      image: complianceAudit,
    },
  ],
  allServices: [
    {
      title: "Application Security",
      description:
        "Secure web applications and APIs through testing, code reviews, and vulnerability assessments.",
      icon: "lock_open",
      href: "/services/application-security",
    },
    {
      title: "IoT Security",
      description:
        "Secure IoT devices and connected systems by identifying firmware flaws, fixing device weaknesses, and protecting device-to-network communication.",
      icon: "gpp_good",
      href: "/services/iot-security",
    },
    {
      title: "Cloud Security",
      description:
        "Protect cloud environments by securing configurations, managing access, and preventing unauthorised access to sensitive data.",
      icon: "analytics",
      href: "/services/cloud-security",
    },
    {
      title: "Critical Infrastructure",
      description:
        "Protect essential systems by identifying security gaps, assessing risks, and strengthening their resilience against cyberattacks.",
      icon: "terminal",
      href: "/services/critical-infrastructure",
    },
    {
      title: "Network Security",
      description:
        "Secure network infrastructure by identifying weaknesses, testing defences, and protecting systems from network-based attacks.",
      icon: "language",
      href: "/services/network-security",
    },
    {
      title: "Red Teaming",
      description:
        "We test an organisation's defences through controlled attacks to uncover weaknesses and demonstrate how attackers could access critical systems and data.",
      icon: "sync",
      href: "/services/red-teaming",
    },
    {
      title: "ISO/IEC 27001",
      description:
        "We provide a stronger information security programme through risk assessments, security controls, and ongoing compliance improvements.",
      icon: "database",
      href: "/services/iso-27001",
    },
    {
      title: "SOC 2 Readiness",
      description:
        "Preparing organizations for SOC 2 audits by reviewing security practices, identifying gaps, and improving internal controls.",
      icon: "person",
      href: "/services/soc-2-readiness",
    },
    {
      title: "GDPR Compliance",
      description:
        "We help organisations handle personal data responsibly through privacy assessments, secure data practices, and access controls.",
      icon: "notifications",
      href: "/services/gdpr-compliance",
    },
    {
      title: "PCI-DSS",
      description:
        "We protect payment card information by securing payment environments, reducing risks, and meeting PCI DSS requirements.",
      icon: "desktop_windows",
      href: "/services/pci-dss",
    },
    {
      title: "HIPAA Compliance",
      description:
        "We help healthcare organizations protect sensitive patient information through security controls, risk assessments, and proper data handling.",
      icon: "support",
      href: "/services/hipaa-compliance",
    },
    {
      title: "Training & Awareness",
      description:
        "Our expert trainers help employees recognize cyber threats and build safer habits through practical security training and awareness sessions.",
      icon: "code",
      href: "/services/training-awareness",
    },
  ],
  toggle: { viewAll: "View All", showLess: "Show Less" },
};
