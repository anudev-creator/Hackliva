import type { CourseHeroProps } from "./courseHero";
import type { CourseHighlightCardProps } from "../TrainingTracks/courseHighlightCard";
import type { TrainingPillar } from "../TrainingTracks/trainingTracksPillars";
import type { CurriculumSectionProps } from "./curriculumSection";
import type { CertificationBannerProps } from "./certificationBanner";
import type { AdditionalFeaturesBarProps } from "./additionalFeaturesBar";
import type { CourseTab } from "./courseSelectorTabs";

export type CourseData = {
  slug: string;
  tabLabel: string;
  hero: CourseHeroProps;
  pillars: TrainingPillar[];
  overview: CourseHighlightCardProps;
  curriculum: CurriculumSectionProps;
  certification: CertificationBannerProps;
  additional: AdditionalFeaturesBarProps;
};

export const courseTabs: CourseTab[] = [
  {
    label: "Certified Offensive Security Professional + AI Redteaming",
    href: "#",
  },
  {
    label: "Bug Hunting with AI Automation",
    href: "/Courses/bug-hunting-with-ai-automation",
  },
  {
    label: "Certified Web Penetration Testing Specialist",
    href: "/Courses/certified-web-penetration-testing-specialist",
  },
  {
    label: "Certified Network Penetration Testing Specialist",
    href: "/Courses/certified-network-penetration-testing-specialist",
  },
  {
    label: "Certified Mobile Application Security Specialist",
    href: "/Courses/certified-mobile-application-security-specialist",
  },
  {
    label: "Certified AI Red Teaming Specialist",
    href: "/Courses/certified-ai-red-teaming-specialist",
  },
  {
    label: "Certified Reverse Engineering Specialist",
    href: "/Courses/certified-reverse-engineering-specialist",
  },
];

const additionalFeatures: AdditionalFeaturesBarProps = {
  heading: "Additional",
  features: [
    { icon: "collaboration", label: "Team Collaboration" },
    { icon: "clientMeeting", label: "Access to Client Meeting" },
    { icon: "liveProjects", label: "Real Time Projects" },
    { icon: "community", label: "Community Access" },
  ],
};

const sharedHero: CourseHeroProps = {
  headingLines: ["Your Offensive Security", "Academy for the"],
  accentLine: "AI-Driven Threat Era",
  subtitle:
    "Learn to think like an attacker, hunt vulnerabilities with AI, and build the skills to break — and secure — modern systems.",
};

function buildPillars(pillarThree: TrainingPillar): TrainingPillar[] {
  return [
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
    pillarThree,
  ];
}

export const courses: Record<string, CourseData> = {
  "bug-hunting-with-ai-automation": {
    slug: "bug-hunting-with-ai-automation",
    tabLabel: "Bug Hunting with AI Automation",
    hero: sharedHero,
    pillars: buildPillars({
      label: "PILLAR 03",
      title: "Break. Investigate. Understand.",
      description:
        "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
    }),
    overview: {
      heading: "Bug Hunting with AI Automation (BHAI)",
      subheading:
        "Master modern API security, Web Application Security, automated vulnerability discovery, and advanced LLM security testing methodologies.",
      courseDetails: {
        duration: "3-Month Online Program",
        description:
          "From Security Fundamentals to AI-Assisted Bug Bounty Hunting. Covering modern vulnerability discovery, AI-assisted Bug bounty hunting, LLM security, AI Automation, and real-world offensive security workflows.",
      },
      aiAutomation: {
        title: "AI-Powered Security Automation",
        description:
          "Learn AI-assisted web pentesting, security automation, prompt injection, AI-powered vulnerability discovery and exploitation workflows, and build practical AI agents for offensive security tasks.",
      },
      mentorship: {
        title: "Learn Through Bug Bounty Mentorship",
        description:
          "Get practical guidance from experienced bug hunters through live hunting sessions, vulnerability analysis, report reviews, reconnaissance techniques, and real world exploitation walkthroughs.",
      },
      liveLabs: {
        title: "Live Hands-On Training",
        description:
          "Practice reconnaissance, exploitation, privilege escalation, lateral movement, pivoting, and multi-domain attack scenarios in controlled labs.",
      },
    },
    curriculum: {
      heading: "16-Week Intensive Training",
      highlight: "Curriculum & Syllabus",
      description:
        "A structured, hands-on pathway to help you find, test, and understand real vulnerabilities in bug bounty programs using AI-assisted techniques. Cover API security, automated fuzzing, AI-powered vulnerability discovery, reconnaissance, and adversarial LLM testing while learning how to use AI throughout the bug hunting process.",
      modules: [
        {
          label: "MODULES 1–3",
          icon: "wrench",
          title: "Foundations & Testing Methodology",
          description:
            "Core testing mindset, modern lab environment setup, Burp Suite Professional mastery, and rigorous technical note-taking with ethics & scopes.",
          tags: [
            { label: "Burp Suite" },
            { label: "Scope Mapping" },
            { label: "Ethics" },
          ],
        },
        {
          label: "MODULE 4",
          icon: "compass",
          title: "Reconnaissance & Endpoint Discovery at Scale",
          description:
            "Automated asset discovery, subdomain brute-forcing , active & passive content discovery, JS endpoint mining, and attack surface indexing.",
          tags: [
            { label: "Asset Discovery" },
            { label: "JS Mining" },
            { label: "Subfinder" },
          ],
        },
        {
          label: "MODULE 5",
          icon: "document",
          title: "API Documentation Analysis and Object Modeling",
          description:
            "API documentation analysis, object modeling, OpenAPI/Swagger Specification Extraction, Postman Collection Generation and hidden route discovery.",
          tags: [
            { label: "OpenAPI / Swagger" },
            { label: "Postman" },
            { label: "Hidden Endpoints" },
          ],
        },
        {
          label: "MODULE 6",
          icon: "key",
          title: "Authentication Mechanics & Token Attacks",
          description:
            "In-depth analysis of modern session management, JWT signing, ignature validation and bypass, OAuth 2.0 Grant-Type vulnerabilities , and OAuth 2.0 Grant-Type vulnerabilities",
          tags: [
            { label: "JWT Attacks" },
            { label: "OAuth 2.0" },
            { label: "OIDC" },
          ],
        },
        {
          label: "MODULE 7",
          icon: "shield",
          title: "BOLA, BFLA & Multi-Tenant Bypasses",
          description:
            "Broken Object Level Authorization (IDOR), Broken Function Level Authorization (BFLA), BOPLA (property-level authorization), object ownership validation and tenant-context isolation and crossing tenant boundaries in cloud SaaS architectures.",
          tags: [
            { label: "BOLA (IDOR)" },
            { label: "BFLA" },
            { label: "Tenant Isolation" },
          ],
        },
        {
          label: "MODULE 8",
          icon: "shieldCheck",
          title: "OWASP API Top 10 Hands-on Labs",
          description:
            "Comprehensive practical testing against real-world vulnerability scenarios, covering SSRF, mass assignment,  API inventory management, schema validation, authentication and lack of resource/rate limiting.",
          tags: [
            { label: "OWASP API 10" },
            { label: "Rate Limiting" },
            { label: "Mass Assignment" },
          ],
        },
        {
          label: "MODULE 9",
          icon: "branch",
          title: "REST Advanced Logic Flaws",
          description:
            "Complex state machine exploitation, race conditions in coupon/balance flows, asynchronous processing tampering, API inventory management, schema validation, authentication and high-payout business logic bugs.",
          tags: [
            { label: "Race Conditions" },
            { label: "Business Logic" },
            { label: "State Machines" },
          ],
        },
        {
          label: "MODULE 10",
          icon: "network",
          title: "GraphQL, gRPC & WebSockets",
          description:
            "GraphQL depth and complexity limits,introspection bypass, query batching & circular DoS, gRPC authentication and websocket message authorization. proto-reconstruction, and WebSocket protocol manipulation and CSWSH.",
          tags: [
            { label: "GraphQL Introspection" },
            { label: "gRPC" },
            { label: "WebSockets" },
          ],
        },
        {
          label: "MODULE 11",
          icon: "terminal",
          title: "Deep Injections, SSRF & Deserialization",
          description:
            "Cloud metadata exfiltration via blind SSRF,out-of-band SSRF detection and safe deserialization testing in isolated environments, second-order SQL injection, template injection (SSTI), and insecure deserialization payload chaining.",
          tags: [
            { label: "Blind SSRF" },
            { label: "SSTI" },
            { label: "Deserialization" },
          ],
        },
        {
          label: "MODULE 12",
          icon: "bolt",
          title: "Nuclei Automation & Custom Tooling",
          description:
            "Building high-speed YAML Nuclei templates for customized bug bounty discovery, integrating rate limits, signature deduction, and custom Go/Python harnesses,template regression testing, false-positive reduction, CI integration and responsible scanning controls.",
          tags: [
            { label: "Nuclei YAML" },
            { label: "Automated Fuzzing" },
            { label: "Go Tooling" },
          ],
        },
        {
          label: "MODULE 13",
          icon: "brain",
          title: "LLM Architecture & Attack Surfaces",
          description:
            "Foundations of transformer models, embeddings, RAG architectures, prompt templates and orchestration , prompt wrappers, and understanding the unique threat surface of modern AI apps.",
          tags: [
            { label: "LLM Architecture" },
            { label: "Tokenization" },
            { label: "RAG Vectors" },
          ],
        },
        {
          label: "MODULE 14",
          icon: "robot",
          title: "OWASP LLM Top 10 Practical Exploits",
          description:
            "Practical execution of direct and indirect prompt injections, jailbreaks, training data poisoning, model denial of service, and insecure output handling.",
          tags: [
            { label: "Prompt Injection", highlighted: true },
            { label: "Jailbreaking" },
            { label: "OWASP LLM 10" },
          ],
        },
        {
          label: "MODULE 15",
          icon: "radar",
          title: "LLM Bug Bounty Methodology & Scoring",
          description:
            "Translating theoretical model weaknesses into critical Critical CVSS-rated findings and bounty submissions, demonstrating concrete business loss,Critical CVSS-rated findings and bounty submissions and high-impact writeup formulations.",
          tags: [
            { label: "Threat Modeling" },
            { label: "CVSS Scoring" },
            { label: "Bounty Writeups" },
          ],
        },
        {
          label: "MODULE 16",
          icon: "roboticArm",
          title: "AI Red Teaming: Promptfoo, PyRIT, Garak",
          description:
            "Automating redteaming using Promptfoo evaluation and testing suites , Microsoft PyRIT orchestrators, Garak vulnerability scanners, and Giskard security assertions.",
          tags: [
            { label: "Promptfoo" },
            { label: "PyRIT" },
            { label: "Garak & Giskard" },
          ],
        },
        {
          label: "MODULES 17–18",
          icon: "hierarchy",
          title: "Agentic Chains & Third-Party Integrations",
          description:
            "Attacking LangChain/AutoGPT agents, tool execution hijack via indirect prompt injection, plugin privilege escalation, and MCP (Model Context Protocol) security testing ) interface testing.",
          tags: [
            { label: "Agentic Exploits" },
            { label: "MCP Protocols" },
            { label: "Chained Impact" },
          ],
        },
        {
          label: "MODULES 19–20",
          icon: "badgeCheck",
          title: "Capstone Defense & Bounty Reporting",
          description:
            "Comprehensive live target bug hunting capstone, producing audit-grade advisory deliverables, client remediation reporting, Hall of Fame submissions, subject to program eligibility and BHAI Certification, if this refers to the program's own credential.",
          tags: [
            { label: "Live Capstone" },
            { label: "Audit Reporting" },
            { label: "BHAI Certification" },
          ],
        },
      ],
    },
    certification: {
      eyebrow: "Certification Track",
      heading: "BHAI Certification",
      description:
        "Equip yourself with the industry benchmark in automated vulnerability discovery and AI redteaming.",
      primaryLabel: "Enroll in BHAI Track",
      primaryHref: "#",
      secondaryLabel: "Download Full Syllabus",
      secondaryHref: "#",
    },
    additional: additionalFeatures,
  },
  "certified-web-penetration-testing-specialist": {
    slug: "certified-web-penetration-testing-specialist",
    tabLabel: "Certified Web Penetration Testing Specialist",
    hero: sharedHero,
    pillars: buildPillars({
      label: "PILLAR 03",
      title: "Break. Investigate. Understand.",
      description:
        "Work through practical challenges, analyse what happened, trace the root cause, and understand how seemingly small weaknesses lead to larger problems.",
    }),
    overview: {
      heading: "Certified Web Penetration Testing Specialist (CWPTS)",
      subheading:
        "Master modern web application security, advanced exploitation techniques, and enterprise application pentesting.",
      courseDetails: {
        duration: "3-Month Online Program",
        durationHighlighted: true,
        description:
          "From Security Fundamentals to Advanced Web Application Security. Covering web application security testing, reconnaissance, vulnerability discovery, API security, exploitation, and real-world penetration testing workflows.",
      },
      aiAutomation: {
        title: "AI-Powered Security Automation",
        tagline: "AI-Driven Offensive Security",
        description:
          "Learn AI-assisted pentesting, AI automation, LLM security testing, prompt injection, jailbreaks, and MCP security testing.",
      },
      mentorship: {
        title: "Learn from Experienced Pentesters",
        description:
          "Get practical guidance from experienced bug hunters through live hunting sessions, vulnerability analysis, report reviews, reconnaissance techniques, and real world exploitation walkthroughs.",
      },
      liveLabs: {
        title: "Live Hands-On Training",
        description:
          "Practice reconnaissance, exploitation, privilege escalation, lateral movement, pivoting, and multi-domain attack scenarios in controlled labs.",
        descriptionHighlighted: true,
      },
    },
    curriculum: {
      heading: "20-Week Intensive",
      highlight: "Curriculum & Syllabus",
      description:
        "A structured, hands-on pathway covering client- and server-side exploitation, API auditing, vulnerability discovery, and modern web application security.",
      modules: [
        {
          label: "MODULE 01",
          icon: "compass",
          title: "Web Reconnaissance",
          description:
            "OWASP Top 10, web and API reconnaissance, Burp Suite/ZAP, subdomain discovery, technology fingerprinting, content discovery, endpoint enumeration, JavaScript analysis, parameter discovery, web fuzzing, attack surface mapping, hidden endpoint discovery, and reconnaissance automation",
          tags: [
            { label: "OWASP Top 10" },
            { label: "REST / GraphQL APIs" },
            { label: "Burp Suite / ZAP" },
            { label: "Ffuf" },
            { label: "Passive Recon" },
            { label: "Content Discovery" },
          ],
        },
        {
          label: "MODULE 02",
          icon: "key",
          title: "Injection & Auth Attacks",
          description:
            "SQL Injection, NoSQL Injection, Command Injection, SSTI, XXE, LDAP Injection, XPath Injection, template injection, authentication bypass, brute force, credential stuffing, session attacks, JWT vulnerabilities, OAuth attacks, MFA bypass techniques, and input validation weaknesses.",
          tags: [
            { label: "SQL Injection" },
            { label: "SQLMap" },
            { label: "Command Injection" },
            { label: "Auth Bypass" },
            { label: "Brute Force" },
            { label: "Session Tampering" },
          ],
        },
        {
          label: "MODULE 03",
          icon: "terminal",
          title: "Client Side Exploitation",
          description:
            "Reflected, Stored, and DOM XSS, CSRF, CORS misconfiguration, Clickjacking, Open Redirect, IDOR, BOLA, privilege escalation, prototype pollution, client-side security testing, DOM clobbering, postMessage vulnerabilities, and client-side authorization bypass.",
          tags: [
            { label: "Reflected XSS", highlighted: true },
            { label: "Stored XSS" },
            { label: "DOM XSS" },
            { label: "CSRF" },
            { label: "CORS Misconfiguration" },
            { label: "Clickjacking" },
          ],
        },
        {
          label: "MODULE 04",
          icon: "shield",
          title: "API,File & Server Attacks",
          description:
            "REST API and GraphQL testing, SSRF, LFI/RFI, Path Traversal, File Upload Bypass, API authorization, rate-limit bypass, HTTP Request Smuggling, deserialization, server-side exploitation, SSTI exploitation, request splitting, host-header attacks, and server-side parameter pollution.",
          tags: [
            { label: "LFI" },
            { label: "RFI" },
            { label: "File Upload Bypass" },
            { label: "Path Traversal" },
            { label: "SSRF" },
            { label: "Web Cache Poisoning" },
          ],
        },
        {
          label: "MODULE 05",
          icon: "badgeCheck",
          title: "Advanced Application Security",
          description:
            "Business Logic Flaws, Race Conditions, OAuth and JWT attacks, WebSockets, framework vulnerabilities, microservice security, request smuggling, vulnerability chaining, advanced SSRF exploitation, cache poisoning, cache deception, HTTP/2 attacks, prototype pollution exploitation, deserialization attacks, and advanced exploitation techniques.",
          tags: [
            { label: "IDOR" },
            { label: "Business Logic Flaws" },
            { label: "OAuth Flaws" },
            { label: "JWT Attacks" },
            { label: "Framework Exploits" },
            { label: "Capstone Web Audit" },
          ],
        },
        {
          label: "MODULE 06",
          icon: "bug",
          title: "Bug Bounty & Vulnerability Research",
          description:
            "Bug bounty methodology, target reconnaissance, attack surface discovery, automated testing, manual vulnerability validation, advanced fuzzing, vulnerability chaining, exploit development, impact analysis, proof-of-concept development, duplicate avoidance, triage strategy, responsible disclosure, and professional report writing.",
          tags: [
            { label: "Bug Bounty" },
            { label: "Reconnaissance" },
            { label: "Vulnerability Chaining" },
            { label: "Exploit Dev" },
            { label: "Responsible Disclosure" },
            { label: "Report Writing" },
          ],
        },
      ],
    },
    certification: {
      eyebrow: "Certification Track",
      heading: "CWPTS Certification",
      description:
        "Equip yourself with the industry benchmark in web application penetration testing and modern web defense.",
      primaryLabel: "Enroll in CWPTS Track",
      primaryHref: "#",
      secondaryLabel: "Download Full Syllabus",
      secondaryHref: "#",
    },
    additional: {
      heading: "Additional Benefits",
      features: additionalFeatures.features,
    },
  },
  "certified-network-penetration-testing-specialist": {
    slug: "certified-network-penetration-testing-specialist",
    tabLabel: "Certified Network Penetration Testing Specialist",
    hero: sharedHero,
    pillars: buildPillars({
      label: "PILLAR 03",
      title: "Break. Investigate. Understand.",
      description:
        "Work through practical challenges, analyse what happened, trace the root cause, and understand how seemingly small weaknesses lead to larger problems.",
    }),
    overview: {
      heading: "Network Penetration Testing Specialist (CNPTS)",
      subheading: "Exploit. Pivot. Dominate Enterprise Networks.",
      courseDetails: {
        duration: "16-Week Intensive Training",
        description:
          "From core reconnaissance and enumeration to enterprise exploitation, lateral movement, Active Directory, domain compromise, and a real-world capstone.",
      },
      aiAutomation: {
        title: "Enterprise Lab Powered",
        tagline: "Active Directory Forests & Dual-Homed Pivots",
        description:
          "Train in realistic enterprise environments featuring Active Directory forests, dual-homed systems, segmented networks, vulnerable enterprise services, and corporate-style architectures.",
        icon: "hierarchy",
      },
      mentorship: {
        title: "Learn from Experienced Pentesters",
        description:
          "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
        icon: "mindset",
      },
      liveLabs: {
        title: "Live Hands-On Training",
        description:
          "Practice reconnaissance, exploitation, privilege escalation, lateral movement, pivoting, and multi-domain attack scenarios in controlled labs.",
        descriptionHighlighted: true,
        icon: "terminal",
      },
    },
    curriculum: {
      heading: "16-Week Intensive",
      highlight: "Curriculum & Syllabus",
      description:
        "Network Penetration Testing Specialist: Master enterprise network exploitation, pivoting through complex environments, and Active Directory domain dominance.",
      modules: [
        {
          label: "MODULE 01",
          icon: "compass",
          title: "Core Reconnaissance",
          description:
            "This module establishes the technical foundation required for professional network penetration testing. Students learn how to understand network architecture, identify systems and services, and systematically build an attack surface before any exploitation attempted.",
          tags: [
            { label: "PTES" },
            { label: "Linux Foundations" },
            { label: "TCP/IP" },
            { label: "Nmap Engineering" },
            { label: "Vuln Analysis" },
          ],
        },
        {
          label: "MODULE 02",
          icon: "terminal",
          title: "Exploitation & Access",
          description:
            "This module introduces controlled exploitation and the techniques used to validate whether discovered vulnerabilities can result in unauthorized access. The emphasis is on understanding the complete path from vulnerability identification to an initial foothold.",
          tags: [
            { label: "Shell Stabilization" },
            { label: "Metasploit" },
            { label: "Password Attacks" },
            { label: "Service Exploitation" },
          ],
        },
        {
          label: "MODULE 03",
          icon: "branch",
          title: "Infrastructure Lateral Movement",
          description:
            "Once an initial foothold has been obtained, this module focuses on understanding internal infrastructure and determining whether an attacker could move between systems.",
          tags: [
            { label: "Subnet Pivoting" },
            { label: "Tunneling" },
            { label: "Linux PrivEsc" },
            { label: "Windows PrivEsc" },
          ],
        },
        {
          label: "MODULE 04",
          icon: "shield",
          title: "Reconnaissance, Access & Initial Exploitation",
          description:
            "This module introduces deeper internal reconnaissance, with a strong focus on enterprise Windows environments and Active Directory.",
          tags: [
            { label: "LLMNR / NBT-NS" },
            { label: "NTLM Relay" },
            { label: "MSSQL Exploitation" },
            { label: "AD Recon" },
          ],
        },
        {
          label: "MODULE 05",
          icon: "shield",
          title: "Advanced Infrastructure & Domain Dominance",
          description:
            "This is the advanced Active Directory and enterprise infrastructure section of the program. The focus shifts from individual vulnerabilities toward relationships, privileges, delegation and attack paths across an entire domain.",
          tags: [
            { label: "Domain Admin", highlighted: true },
            { label: "ADCS Abuse" },
            { label: "Kerberos Delegations" },
            { label: "Forest Trusts" },
            { label: "GPO / ACLs" },
          ],
        },
        {
          label: "MODULE 06",
          icon: "badgeCheck",
          title: "Deliverables & Capstone",
          description:
            "The final module transforms technical testing results into professional penetration-testing deliverables. Students learn how to communicate vulnerabilities to both technical teams and management.",
          tags: [
            { label: "Audit Reporting" },
            { label: "Evidence Logging" },
            { label: "Remediation" },
            { label: "CNPTS Capstone" },
          ],
        },
      ],
    },
    certification: {
      eyebrow: "Certification Track",
      heading: "CNPTS Certification",
      description:
        "Equip yourself with the industry benchmark in network exploitation and Active Directory dominance.",
      primaryLabel: "Enroll in CNPTS Track",
      primaryHref: "#",
      secondaryLabel: "Download Full Syllabus",
      secondaryHref: "#",
    },
    additional: {
      heading: "Additional Benefits",
      features: additionalFeatures.features,
    },
  },
  "certified-mobile-application-security-specialist": {
    slug: "certified-mobile-application-security-specialist",
    tabLabel: "Certified Mobile Application Security Specialist",
    hero: sharedHero,
    pillars: buildPillars({
      label: "PILLAR 03",
      title: "Break. Investigate. Understand.",
      description:
        "Work through practical challenges, analyse what happened, trace the root cause, and understand how seemingly small weaknesses lead to larger problems.",
    }),
    overview: {
      heading: "Certified Mobile Application Security Specialist (CMASS)",
      subheading:
        "Master Android ecosystem architecture, mobile reverse engineering, Frida dynamic instrumentation, and advanced application exploitation.",
      courseDetails: {
        duration: "16-Week Intensive Training",
        description:
          "From mobile security fundamentals to native binary analysis, exploitation, and a real-world capstone.",
      },
      aiAutomation: {
        title: "Android Offensive Security",
        tagline:
          "Dynamic Instrumentation, Forensics, Reverse Engineering & Static Analysis",
        description:
          "Break down Android applications through APK analysis, runtime instrumentation, reverse engineering, API testing, and vulnerability analysis.",
        icon: null,
      },
      mentorship: {
        title: "Learn from Experienced Pentesters",
        description:
          "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
        icon: "mindset",
      },
      liveLabs: {
        title: "Live Hands-On Training",
        description:
          "Develop practical expertise in mobile application testing, reverse engineering, API exploitation, runtime manipulation, and advanced vulnerability analysis through controlled attack scenarios.",
        icon: "terminal",
      },
    },
    curriculum: {
      heading: "16-Week Intensive",
      highlight: "Curriculum & Syllabus",
      description:
        "A rigorous, structured pathway covering Android internals, runtime analysis, Frida method hooking, and native library exploitation.",
      modules: [
        {
          label: "MODULE 01",
          icon: "compass",
          title: "Android Ecosystem & Foundations",
          description:
            "Architecture & Kernel, OS File System, Software Isolation, and Application Signing/Usage.",
          tags: [
            { label: "Android Architecture" },
            { label: "Linux Kernel" },
            { label: "Sandbox Isolation" },
            { label: "APK Signing" },
            { label: "File System Hierarchy" },
          ],
        },
        {
          label: "MODULE 02",
          icon: "shield",
          title: "Attack Surface & Component Security",
          description:
            "Manifest analysis, Activities, Intents, WebViews, Content Providers, and Permissions. Native Library Hooking & OWASP Mobile Top 10.",
          tags: [
            { label: "AndroidManifest.xml" },
            { label: "Exported Components" },
            { label: "Intent Spoofing" },
            { label: "WebView Vulnerabilities" },
            { label: "Content Providers" },
            { label: "OWASP Mobile Top 10" },
          ],
        },
        {
          label: "MODULE 03",
          icon: "code",
          title: "Reverse Engineering & Static Analysis",
          description:
            "JadX GUI, Smali Code basics, Application Patching, and Ghidra fundamentals.",
          tags: [
            { label: "JadX Decompilation" },
            { label: "Smali Bytecode" },
            { label: "APK Repackaging & Patching" },
            { label: "Ghidra Reverse Engineering" },
            { label: "DEX Analysis" },
          ],
        },
        {
          label: "MODULE 04",
          icon: "exchange",
          title: "Dynamic Analysis & Interception",
          description:
            "Traffic Interception, API Calls, Burp Suite Role, Certificate Installation, and Pinning Bypass.",
          tags: [
            { label: "Burp Suite Mobile" },
            { label: "SSL/TLS Pinning Bypass" },
            { label: "Network Security Config" },
            { label: "Custom CA Certs" },
            { label: "Proxy Interception" },
          ],
        },
        {
          label: "MODULE 05",
          icon: "mobile",
          title: "Frida Instrumentation & Runtime Hooking",
          description:
            "Installation, Hooking Java/Native Methods, Custom Scripts, Root Bypass, and Tracing.",
          tags: [
            { label: "Frida CLI / Gadget", highlighted: true },
            { label: "Java Method Hooking" },
            { label: "Native (JNI) Hooking" },
            { label: "Root Detection Evasion" },
            { label: "Frida-Trace & Objections" },
          ],
        },
        {
          label: "MODULE 06",
          icon: "shieldCheck",
          title: "Advanced Debugging & Emerging Tech",
          description:
            "Flutter Exploitation, LLDB Debugger Tool, Process Debugging, and Insecure Library Loading.",
          tags: [
            { label: "Flutter / Dart Reverse Engineering" },
            { label: "LLDB Debugger" },
            { label: "GDB / Native Debugging" },
            { label: "Insecure Shared Objects (.so)" },
            { label: "Capstone Mobile Audit" },
          ],
        },
      ],
    },
    certification: {
      eyebrow: "Certification Track",
      heading: "CMASS Certification",
      description:
        "Equip yourself with the industry benchmark in mobile application penetration testing, reverse engineering, and runtime hooking.",
      primaryLabel: "Enroll in CMASS Track",
      primaryHref: "#",
      secondaryLabel: "Download Full Syllabus",
      secondaryHref: "#",
    },
    additional: {
      heading: "Additional Benefits",
      features: additionalFeatures.features,
    },
  },
  "certified-ai-red-teaming-specialist": {
    slug: "certified-ai-red-teaming-specialist",
    tabLabel: "Certified AI Red Teaming Specialist",
    hero: sharedHero,
    pillars: buildPillars({
      label: "PILLAR 03",
      title: "Break. Investigate. Understand.",
      description:
        "Work through practical challenges, analyse what happened, trace the root cause, and understand how seemingly small weaknesses lead to larger problems.",
    }),
    overview: {
      eyebrow: "Specialist Diploma // CAIRTS-V1",
      heading: "Certified AI Red Teaming Specialist (CAIRTS)",
      subheading:
        "Master LLM security architectures, adversarial jailbreaking, direct & indirect prompt injection, RAG exploitation, agentic toolchain subversion, and AI supply chain compromise.",
      courseDetails: {
        duration: "16-Week Intensive Training",
        description:
          "From LLM fundamentals to advanced AI red teaming, autonomous agent exploitation, and a real-world capstone.",
      },
      aiAutomation: {
        title: "Adversarial AI Toolchain",
        description:
          "Probe AI systems, test defenses, exploit vulnerabilities, and red team LLMs, chatbots, agents, and MCP environments to uncover real-world attack paths.",
        icon: "aiShield",
      },
      mentorship: {
        title: "Learn from Experienced Pentesters",
        description:
          "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
        icon: "mindset",
      },
      liveLabs: {
        title: "Live Hands-On Training",
        description:
          "Build practical expertise in AI reconnaissance, prompt injection, model attacks, MCP security, agent exploitation, AI API security, AI automation, and adversarial testing through realistic attack scenarios in controlled labs.",
        icon: "terminal",
      },
    },
    curriculum: {
      heading: "16-Week Intensive",
      highlight: "Curriculum & Syllabus",
      description:
        "A comprehensive, highly technical 11-module pathway engineered for security researchers, penetration testers, and AI safety engineers.",
      modules: [
        {
          label: "MODULE 01 // WEEK 01-02",
          icon: "brain",
          title: "Introduction to LLMs",
          description:
            "LLM architecture, training paradigms, and the OpenAI/Anthropic/open weight API landscape. Tokenization, context windows, and probabilistic attack surfaces.",
          tags: [
            { label: "LLM Architecture" },
            { label: "Training Paradigms" },
            { label: "Tokenization" },
            { label: "Context Windows" },
            { label: "API Surfaces" },
          ],
        },
        {
          label: "MODULE 02 // WEEK 03",
          icon: "robot",
          title: "Working with LLMs",
          description:
            "Prompting strategies, system/user/assistant roles, RAG pipelines, and embeddings — production deployment fluency before exploitation.",
          tags: [
            { label: "System/User Roles" },
            { label: "RAG Pipelines" },
            { label: "Vector Embeddings" },
            { label: "Prompt Engineering" },
            { label: "Deployment Fluency" },
          ],
        },
        {
          label: "MODULE 03 // WEEK 04-05",
          icon: "puzzle",
          title: "Extending and Customizing LLMs",
          description:
            "Fine tuning, RAG augmentation, plugin/tool integration, and agentic frameworks (LangChain, function calling, MCP).",
          tags: [
            { label: "Fine-Tuning" },
            { label: "LoRA" },
            { label: "LangChain" },
            { label: "Tool Calling" },
            { label: "MCP Protocol" },
            { label: "Agentic Frameworks" },
          ],
        },
        {
          label: "MODULE 04 // WEEK 06",
          icon: "shield",
          title: "Security Considerations of LLMs",
          description:
            "Mapping the OWASP Top 10 for LLM Applications: Sensitive Info Disclosure, Data/Model Poisoning, System Prompt Leakage, Vector/Embedding Weaknesses, and Misinformation.",
          tags: [
            { label: "OWASP LLM Top 10" },
            { label: "Data Poisoning" },
            { label: "System Prompt Leakage" },
            { label: "Vector Inversion" },
            { label: "Sensitive Disclosure" },
          ],
        },
        {
          label: "MODULE 05 // WEEK 07",
          icon: "radar",
          title: "LLM Reconnaissance and Enumeration",
          description:
            "Fingerprinting the model, extracting system prompts, mapping tools/plugins/RAG sources, and enumerating guardrails.",
          tags: [
            { label: "Model Fingerprinting" },
            { label: "System Prompt Extraction" },
            { label: "Tool Mapping" },
            { label: "Guardrail Enumeration" },
            { label: "RAG Recon" },
          ],
        },
        {
          label: "MODULE 06 // WEEK 08",
          icon: "lock",
          title: "LLM Jailbreaking",
          description:
            "Bypassing alignment and safety training via role play framing, encoding tricks, multi turn escalation, and adversarial suffixes.",
          tags: [
            { label: "Alignment Bypass" },
            { label: "Roleplay Framing" },
            { label: "Multi-Turn Escalation" },
            { label: "Base64/Cipher Encoding" },
            { label: "Adversarial Suffixes" },
          ],
        },
        {
          label: "MODULE 07 // WEEK 09-10",
          icon: "inject",
          title: "Prompt Injection in LLMs",
          description:
            "Direct and indirect prompt injection via user input, documents, tool outputs, and third party content.",
          tags: [
            { label: "Direct Injection", highlighted: true },
            { label: "Indirect Injection" },
            { label: "Document Ingestion" },
            { label: "Tool Output Poisoning" },
            { label: "Secondary Payloads" },
          ],
        },
        {
          label: "MODULE 08 // WEEK 11",
          icon: "terminal",
          title: "Improper Output Handling in LLMs",
          description:
            "Exploiting downstream XSS, SSRF, SQL injection, and RCE where unsanitized LLM output reaches browsers, shells, or databases.",
          tags: [
            { label: "Downstream XSS" },
            { label: "SSRF" },
            { label: "Command Injection" },
            { label: "Code Execution" },
            { label: "Unsanitized Render" },
          ],
        },
        {
          label: "MODULE 09 // WEEK 12",
          icon: "network",
          title: "LLM Supply Chain Attacks",
          description:
            "Compromising base models, fine tuning datasets, LoRA adapters, plugins, and third party dependencies.",
          tags: [
            { label: "HuggingFace Security" },
            { label: "Poisoned Weights" },
            { label: "Malicious Adapters" },
            { label: "Dependency Hijacking" },
            { label: "Dataset Contamination" },
          ],
        },
        {
          label: "MODULE 10 // WEEK 13-14",
          icon: "checklist",
          title: "Excessive Agency in LLMs",
          description:
            "Abusing over permissioned tool access and autonomous function calling to escalate to unauthorized file writes, API calls, and transactions.",
          tags: [
            { label: "Autonomous Tool Abuse" },
            { label: "Unauthorized API Calls" },
            { label: "File System Escalation" },
            { label: "Privilege Escalation" },
            { label: "Agent Sandboxing" },
          ],
        },
        {
          label: "MODULE 11 // WEEK 15-16",
          icon: "alert",
          title: "LLM Unbounded Consumption & Capstone",
          description:
            "Denial of wallet and denial of service via unbounded token generation, recursive agent loops, and resource exhaustion prompts. Final practical model breach defense capstone.",
          wide: true,
          tags: [
            { label: "Denial of Wallet" },
            { label: "Recursive Agent Loops" },
            { label: "Token Bombing" },
            { label: "Context Exhaustion" },
            { label: "Resource Depletion" },
            { label: "CAPSTONE ASSESSMENT", highlighted: true },
          ],
        },
      ],
    },
    certification: {
      eyebrow: "Certification Track",
      heading: "CAIRTS Certification",
      description:
        "Equip yourself with the industry benchmark in adversarial artificial intelligence red teaming, LLM exploitation, and AI security architecture.",
      primaryLabel: "Enroll in CAIRTS Track",
      primaryHref: "#",
      secondaryLabel: "Download Full Syllabus",
      secondaryHref: "#",
    },
    additional: {
      heading: "Additional",
      features: additionalFeatures.features,
    },
  },
  "certified-reverse-engineering-specialist": {
    slug: "certified-reverse-engineering-specialist",
    tabLabel: "Certified Reverse Engineering Specialist",
    hero: sharedHero,
    pillars: buildPillars({
      label: "PILLAR 03",
      title: "Break. Investigate. Understand.",
      description:
        "Work through practical challenges, analyse what happened, trace the root cause, and understand how seemingly small weaknesses lead to larger problems.",
    }),
    overview: {
      eyebrow: "Specialist Diploma // CRES-V1",
      heading: "Certified Reverse Engineering Specialist (CRES)",
      subheading:
        "Master binary analysis, reverse engineering, dynamic instrumentation, firmware analysis, and exploit development.",
      courseDetails: {
        duration: "16-Week Intensive Training",
        description:
          "From binary fundamentals to advanced reverse engineering, exploit development, and a hands-on capstone defense.",
      },
      aiAutomation: {
        title: "Reverse Engineering",
        description:
          "Learn to analyze binaries, debug code, explore firmware, understand low-level behavior, and investigate malware with industry-standard tools.",
        icon: "binary",
      },
      mentorship: {
        title: "Learn from Experienced Pentesters",
        description:
          "Get practical guidance from experienced security professionals through live assessments, code reviews, report reviews, and exploitation walkthroughs.",
      },
      liveLabs: {
        title: "Live Hands-On Training",
        description:
          "Dedicated private sandboxes with real enterprise architectures, obfuscated malware dumps, unpacked firmware images, and stripped adversarial targets across x86/x64, ARM, and MIPS.",
      },
    },
    curriculum: {
      heading: "16-Week Intensive",
      highlight: "Curriculum & Syllabus",
      description:
        "A comprehensive, highly technical 11-module pathway engineered for security researchers, reverse engineers, and malware analysts.",
      modules: [
        {
          label: "MODULE 01 // WEEK 01-02",
          icon: "code",
          title: "x86/x64 Architecture & Assembly Foundations",
          description:
            "CPU registers, the stack, calling conventions, and core instruction sets — building the disassembly mindset every reverse engineer needs.",
          tags: [
            { label: "x86/x64 ISA" },
            { label: "Registers & Stack" },
            { label: "Calling Conventions" },
            { label: "Assembly Fundamentals" },
            { label: "Endianness" },
          ],
        },
        {
          label: "MODULE 02 // WEEK 03",
          icon: "document",
          title: "Static Analysis with IDA Pro & Ghidra",
          description:
            "Disassembly workflows, cross-references, control flow graphs, and recovering function boundaries and symbols from stripped binaries.",
          tags: [
            { label: "IDA Pro" },
            { label: "Ghidra" },
            { label: "Control Flow Graphs" },
            { label: "Symbol Recovery" },
            { label: "Decompilation" },
          ],
        },
        {
          label: "MODULE 03 // WEEK 04-05",
          icon: "terminal",
          title: "Dynamic Analysis & Debugging",
          description:
            "Breakpoints, memory inspection, and runtime behavior analysis using x64dbg, WinDbg, and GDB across Windows and Linux targets.",
          tags: [
            { label: "x64dbg" },
            { label: "WinDbg" },
            { label: "GDB" },
            { label: "Runtime Tracing" },
            { label: "Memory Inspection" },
          ],
        },
        {
          label: "MODULE 04 // WEEK 06",
          icon: "lock",
          title: "Anti-Analysis & Obfuscation Techniques",
          description:
            "Anti-debugging tricks, VM and sandbox detection, control-flow flattening, and code virtualization used to resist analysis.",
          tags: [
            { label: "Anti-Debugging" },
            { label: "VM Detection" },
            { label: "Control-Flow Flattening" },
            { label: "Code Virtualization" },
          ],
        },
        {
          label: "MODULE 05 // WEEK 07",
          icon: "puzzle",
          title: "Packers, Crypters & Unpacking",
          description:
            "Identifying and manually unpacking UPX, custom packers, and encrypted payloads to recover the original executable code.",
          tags: [
            { label: "UPX" },
            { label: "Manual Unpacking" },
            { label: "Import Table Reconstruction" },
            { label: "Custom Packers" },
          ],
        },
        {
          label: "MODULE 06 // WEEK 08",
          icon: "bug",
          title: "Malware Analysis & Behavioral Triage",
          description:
            "Static and dynamic triage of real-world malware samples, YARA rule authoring, and identifying persistence mechanisms.",
          tags: [
            { label: "YARA Rules" },
            { label: "Behavioral Triage" },
            { label: "Persistence Mechanisms" },
            { label: "Sandbox Detonation" },
            { label: "IOC Extraction" },
          ],
        },
        {
          label: "MODULE 07 // WEEK 09-10",
          icon: "mobile",
          title: "Firmware Extraction & Embedded Analysis",
          description:
            "Dumping firmware via JTAG/UART/SPI, filesystem extraction with binwalk, and bootloader analysis on embedded devices.",
          tags: [
            { label: "Binwalk" },
            { label: "JTAG/UART" },
            { label: "Bootloader Analysis" },
            { label: "Filesystem Extraction" },
            { label: "SPI Flash Dumping" },
          ],
        },
        {
          label: "MODULE 08 // WEEK 11",
          icon: "hierarchy",
          title: "ARM & MIPS Reverse Engineering",
          description:
            "Architecture-specific calling conventions and instruction sets, with cross-architecture disassembly for routers, IoT, and mobile targets.",
          tags: [
            { label: "ARM Architecture" },
            { label: "MIPS Architecture" },
            { label: "Cross-Compilation" },
            { label: "Thumb Mode" },
            { label: "Register Conventions" },
          ],
        },
        {
          label: "MODULE 09 // WEEK 12",
          icon: "bolt",
          title: "Memory Corruption & Exploit Primitives",
          description:
            "Stack and heap overflow fundamentals, format string bugs, and building reliable crash-to-primitive exploitation workflows.",
          tags: [
            { label: "Stack Overflows" },
            { label: "Heap Exploitation" },
            { label: "Format Strings" },
            { label: "Fuzzing" },
            { label: "Crash Triage" },
          ],
        },
        {
          label: "MODULE 10 // WEEK 13-14",
          icon: "exchange",
          title: "Exploit Development & Mitigation Bypass",
          description:
            "Shellcode crafting, ROP chain construction, and bypassing ASLR, DEP, and stack canaries on modern hardened targets.",
          tags: [
            { label: "ROP Chains" },
            { label: "Shellcode Development" },
            { label: "ASLR Bypass" },
            { label: "DEP/NX Bypass" },
            { label: "Stack Canary Bypass" },
          ],
        },
        {
          label: "MODULE 11 // WEEK 15-16",
          icon: "alert",
          title: "Kernel Internals & Capstone Breach",
          description:
            "Windows and Linux driver analysis, kernel exploitation fundamentals, and a final end-to-end reverse engineering and exploit development capstone.",
          wide: true,
          tags: [
            { label: "Kernel Drivers" },
            { label: "Privilege Escalation" },
            { label: "Rootkit Analysis" },
            { label: "Capstone Exploit Chain" },
            { label: "CAPSTONE ASSESSMENT", highlighted: true },
          ],
        },
      ],
    },
    certification: {
      eyebrow: "Certification Track",
      heading: "CRES Certification",
      description:
        "Equip yourself with the industry benchmark in reverse engineering, binary analysis, and adversarial exploit development.",
      primaryLabel: "Enroll in CRES Track",
      primaryHref: "#",
      secondaryLabel: "Download Full Syllabus",
      secondaryHref: "#",
    },
    additional: {
      heading: "Additional",
      features: additionalFeatures.features,
    },
  },
};
