import aiRedteaming from "../_assets/course/syllabus/ai-redteaming.svg";
import android from "../_assets/course/syllabus/android.svg";
import certification from "../_assets/course/syllabus/certification.svg";
import cloudNative from "../_assets/course/syllabus/cloud-native.svg";
import foundations from "../_assets/course/syllabus/foundations.svg";
import webApi from "../_assets/course/syllabus/web-api.svg";
import type { SyllabusSectionProps } from "../_components/syllabus-section";

/** Comprehensive syllabus per course, keyed by the /courses/<slug> segment. Line breaks follow the Figma design. */
export const courseSyllabi: Record<string, SyllabusSectionProps> = {
  "cospai-plus": {
    id: "syllabus",
    title: "COSP AI+",
    subtitle: "Offensive Security Specification",
    enroll: {
      label: "Enrollment Open",
      title: "Know More About COSP\nAI+",
      description: "Access comprehensive offensive labs,\nreal-time exploit chains, and AI\nautomation modules.",
      cta: { label: "Request Syllabus", href: "/contact?topic=syllabus" },
    },
    cards: [
      {
        groups: [
          {
            title: "Offensive Foundations & Infrastructure",
            icon: foundations,
            items: [
              {
                title: "Reconnaissance & Assessment",
                description:
                  "Penetration Testing Execution Standard (PTES) engagement lifecycle,\nLinux and TCP/IP foundations, advanced Nmap engineering, and\nautomated vulnerability analysis.",
              },
              {
                title: "Exploitation & Access",
                description:
                  "File transfers, shell stabilization, Metasploit, password attacks, and\nexploitation of common network services.",
              },
              {
                title: "Lateral Movement & Privilege Escalation",
                description:
                  "Pivoting and tunneling across subnets with Linux and Windows privilege\nescalation techniques.",
              },
              {
                title: "Reconnaissance, Access & Initial Exploitation",
                description:
                  "Active Directory mapping, user discovery, LLMNR/NBT-NS poisoning,\nNTLM relay, and MSSQL attacks to establish domain access.",
              },
              {
                title: "Advanced Infrastructure & Domain Dominance",
                description:
                  "GPO and ACL abuse, ADCS exploitation, Kerberos delegation, domain\nand forest trusts, and advanced paths to Domain Admin.",
              },
              {
                title: "Professional Deliverables",
                description:
                  "Evidence collection, screenshots and logs, technical documentation,\nfindings, and remediation reporting.",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Web Application & API Security",
            icon: webApi,
            items: [
              {
                title: "Web Reconnaissance",
                description:
                  "OWASP Top 10, REST and GraphQL APIs, information gathering, web\nproxies, and application fuzzing with Burp Suite, ZAP, and Ffuf.",
              },
              {
                title: "Injection & Authentication Attacks",
                description:
                  "Login attacks, SQL injection fundamentals, SQLMap automation,\ncommand injection, and authentication testing.",
              },
              {
                title: "Client-Side Exploitation",
                description:
                  "Identify and exploit reflected, stored, and DOM-based Cross-Site\nScripting vulnerabilities.",
              },
              {
                title: "File & Server Attacks",
                description:
                  "Test Local and Remote File Inclusion, file upload vulnerabilities, and\ntechniques for bypassing upload restrictions.",
              },
              {
                title: "Advanced Application Security",
                description:
                  "Discover business logic flaws, IDOR vulnerabilities, and security\nweaknesses in common applications and frameworks.",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Android Security",
            icon: android,
            items: [
              {
                title: "Android Ecosystem",
                description:
                  "Understand Android architecture, kernel, filesystem, software isolation,\napplication signing, and the mobile security ecosystem",
              },
              {
                title: "Android Attack Surface",
                description:
                  "Analyze manifests, activities, intents, WebViews, content providers,\npermissions, and native application components.",
              },
              {
                title: "Reverse Engineering",
                description:
                  "Work with JADX, Smali, application patching, and Ghidra to analyze and\nunderstand Android applications.",
              },
              {
                title: "Dynamic Analysis",
                description:
                  "Intercept application traffic, analyze API calls, configure Burp Suite, install\ncertificates, and assess certificate pinning.",
              },
              {
                title: "Frida Instrumentation",
                description:
                  "Hook Java and native methods, create custom Frida scripts, perform root\ndetection bypass, and trace application behavior",
              },
              {
                title: "Advanced Debugging",
                description:
                  "Explore Flutter security, LLDB, process debugging, and insecure native\nlibrary loading.",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Cloud-Native & Container Security",
            icon: cloudNative,
            items: [
              {
                title: "Core Curriculum",
                description:
                  "Mastering Docker security, container hardening, runtime security, LLM\ntesting, prompt injection, and AI application security.",
              },
              {
                title: "Container Foundations",
                description:
                  "Understand container fundamentals, architecture, isolation, and the\nsecurity model behind modern containerized environments.",
              },
              {
                title: "Docker & Runtime Architecture",
                description:
                  "Containers vs. VMs, Docker CLI, networking, persistent storage,\nDockerfiles, multi-container management, snapshots, and resource\ncontrols.",
              },
              {
                title: "Components & Visibility",
                description:
                  "Analyze image metadata, environment secrets, volume mounts,\nregistries, and native container inspection techniques.",
              },
              {
                title: "Container Attack Techniques",
                description:
                  "Explore supply-chain threats, runtime exploitation, Docker daemon\nattacks, and container-to-host privilege escalation paths.",
              },
              {
                title: "Defense & Hardening",
                description:
                  "Apply secure image engineering, registry access controls, network\nsegmentation, security fundamentals, and host hardening.",
              },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "AI Redteaming",
            icon: aiRedteaming,
            items: [
              {
                title: "LLM Architecture, Prompting & Production Workflows",
                description:
                  "Understand how LLMs are built, how they process inputs, and\nhow they behave in real production environments.",
              },
              {
                title: "OWASP Top 10 for LLMs & Security Fundamentals",
                description:
                  "Learn the 10 most critical security risks in LLM applications and how\nto identify them in any AI system.",
              },
              {
                title: "LLM Jailbreaking, Reconnaissance & Supply Chain Attacks",
                description:
                  "Discover how LLMs get bypassed, fingerprinted, and compromised\nthrough third-party components and adversarial inputs.",
              },
              {
                title: "Agentic Architecture, MCP Protocol & Memory Security",
                description:
                  "Learn how agentic systems are built, how MCP works, and where memory\nand context get exploited.",
              },
              {
                title: "Multi-Agent Attacks, Manipulation & Threat Modeling",
                description:
                  "Understand how attacks move across connected AI agents and how\nto map risk before deployment.",
              },
              {
                title: "AI Supply Chain, Auditing & Coding Assistant Security",
                description:
                  "Identify risks in third-party AI components, audit agent behavior\nand secure AI-powered development tools.",
              },
              {
                title: "AI Threat Modeling & Pre-Deployment Risk Assessment",
                description:
                  "Build the skill to look at any AI system and find where it will fail\nbefore it goes live.",
              },
              {
                title: "Offensive LLM Testing & Adversarial Input Techniques",
                description:
                  "Run structured attacks against LLMs using the same methods real\nadversaries use in the field.",
              },
              {
                title: "Prompt Injection, Output Handling & Excessive Agency",
                description:
                  "Test how AI systems process untrusted inputs and what happens when\nthey act beyond their intended boundaries.",
              },
              {
                title: "Agentic System Exploitation & Agent Hijacking",
                description:
                  "Learn how autonomous agents get taken over, redirected, and\nabused in complex pipelines.",
              },
              {
                title: "AI Red Teaming Methodology & Attack Simulation",
                description:
                  "Apply a structured red teaming process to any AI system from scoping\nto full attack simulation.",
              },
            ],
          },
          {
            title: "Certification & Bughunting",
            icon: certification,
            items: [
              {
                title: "Professional Deliverables",
                description:
                  "Learn to prepare professional security assessment reports through\nevidence collection, vulnerability documentation, risk analysis,\nand remediation recommendations.",
              },
              {
                title: "Bug Hunting Methodologies",
                description:
                  "Learn how to approach bug bounty programmes, identify security\nvulnerabilities, validate findings, prepare proof-of-concept\ndemonstrations, and submit clear reports through responsible disclosure.",
              },
            ],
          },
        ],
      },
    ],
  },
};
