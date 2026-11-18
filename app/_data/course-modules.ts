import type { CourseModulesProps } from "../_components/course-modules";

/** Module cards per course, keyed by the /courses/<slug> segment. Read left to right, row by row. */
export const courseModules: Record<string, CourseModulesProps> = {
  bhai: {
    id: "modules",
    label: "BHAI curriculum modules",
    modules: [
      {
        title: "Foundations & Testing Methodology",
        description:
          "Core testing mindset, modern lab environment setup, Burp Suite Professional mastery, and rigorous technical note-taking with ethics & scopes.",
      },
      {
        title: "Reconnaissance & Endpoint Discovery at Scale",
        description:
          "Automated asset discovery, subdomain brute-forcing, active & passive content discovery, JS endpoint mining, and attack surface indexing.",
      },
      {
        title: "API Documentation Analysis and Object Modeling",
        description:
          "Learn to analyse API documentation, understand application objects and relationships, and identify exposed endpoints. Work with OpenAPI specifications, Swagger tools, and Postman collections to map API functionality and discover potential security weaknesses.",
      },
      {
        title: "Authentication Mechanics & Token Attacks",
        description:
          "In-depth analysis of modern session management, JWT signing, signature validation and bypass, and OAuth 2.0 Grant-Type vulnerabilities.",
      },
      {
        title: "BOLA, BFLA & Multi-Tenant Bypasses",
        description:
          "Broken Object Level Authorization (IDOR), Broken Function Level Authorization (BFLA), BOPLA (property-level authorization), object ownership validation and tenant-context isolation and crossing tenant boundaries in cloud SaaS architectures.",
      },
      {
        title: "OWASP API Top 10 Hands-on Labs",
        description:
          "Practise testing APIs against common security weaknesses using real-world scenarios. Explore SSRF, mass assignment, API inventory management, schema validation, authentication flaws, and missing resource and rate limits.",
      },
      {
        title: "REST API Logic & Advanced Logic Flaws",
        description:
          "Investigate complex API weaknesses involving state transitions, race conditions in coupon and balance operations, asynchronous processing, API inventory management, and business logic flaws. Learn how to identify and validate vulnerabilities that automated scanners often miss.",
      },
      {
        title: "GraphQL, gRPC & WebSocket Security",
        description:
          "GraphQL depth and complexity limits, introspection bypass, query batching & circular DoS, gRPC authentication and websocket message authorization, proto-reconstruction, and WebSocket protocol manipulation and CSWSH.",
      },
      {
        title: "Advanced Injections, SSRF & Deserialization",
        description:
          "Cloud metadata exfiltration via blind SSRF, out-of-band SSRF detection and safe deserialization testing in isolated environments, second-order SQL injection, template injection (SSTI), and insecure deserialization payload chaining.",
      },
      {
        title: "Nuclei Automation & Custom Tooling",
        description:
          "Build custom Nuclei YAML templates for vulnerability discovery and automate repetitive security testing tasks. Develop Go and Python scripts for rate-limit handling, signature detection, custom fuzzing, and CI integration while maintaining responsible scanning practices.",
      },
      {
        title: "LLM Architecture & Attack Surfaces",
        description:
          "Foundations of transformer models, embeddings, RAG architectures, prompt templates and orchestration, prompt wrappers, and understanding the unique threat surface of modern AI apps.",
      },
      {
        title: "OWASP LLM Top 10 Practical Exploits",
        description:
          "Practise identifying and testing common LLM security weaknesses, including direct and indirect prompt injection, jailbreak attacks, training data and model poisoning, unbounded consumption, and insecure output handling.",
      },
      {
        title: "LLM Bug Bounty Methodology & Vulnerability Scoring",
        description:
          "Translating theoretical model weaknesses into critical CVSS-rated findings and bounty submissions, demonstrating concrete business loss, and high-impact writeup formulations.",
      },
      {
        title: "AI Red Teaming: Promptfoo, PyRIT, Garak",
        description:
          "Learn AI red teaming using specialised testing frameworks. Learn to evaluate LLM responses with Promptfoo, automate adversarial testing using Microsoft PyRIT, scan models for security weaknesses with Garak, and validate AI application security using Giskard.",
      },
      {
        title: "Agentic Chains & Third-Party Integrations",
        description:
          "Attacking LangChain/AutoGPT agents, tool execution hijack via indirect prompt injection, plugin privilege escalation, and MCP (Model Context Protocol) interface security testing.",
      },
      {
        title: "Capstone Defense & Bounty Reporting",
        description:
          "Comprehensive live target bug hunting capstone, producing audit-grade advisory deliverables, client remediation reporting, Hall of Fame submissions, subject to program eligibility and BHAI Certification.",
      },
    ],
  },
  cwpts: {
    id: "modules",
    label: "CWPTS curriculum modules",
    modules: [
      {
        title: "Web Reconnaissance",
        description:
          "OWASP Top 10, web and API reconnaissance, Burp Suite/ZAP, subdomain discovery, technology fingerprinting, content discovery, endpoint enumeration, JavaScript analysis, parameter discovery, web fuzzing, attack surface mapping, hidden endpoint discovery, and reconnaissance automation.",
      },
      {
        title: "Injection & Auth Attacks",
        description:
          "SQL Injection, NoSQL Injection, Command Injection, SSTI, XXE, LDAP Injection, XPath Injection, template injection, authentication bypass, brute force, credential stuffing, session attacks, JWT vulnerabilities, OAuth attacks, MFA bypass techniques, and input validation weaknesses.",
      },
      {
        title: "Client Side Exploitation",
        description:
          "Reflected, Stored, and DOM XSS, CSRF, CORS misconfiguration, Clickjacking, Open Redirect, IDOR, BOLA, privilege escalation, prototype pollution, client-side security testing, DOM clobbering, postMessage vulnerabilities, and client-side authorization bypass.",
      },
      {
        title: "API, File & Server Attacks",
        description:
          "REST API and GraphQL testing, SSRF, LFI/RFI, Path Traversal, File Upload Bypass, API authorization, rate-limit bypass, HTTP Request Smuggling, deserialization, server-side exploitation, SSTI exploitation, request splitting, host-header attacks, and server-side parameter pollution.",
      },
      {
        title: "Advanced Application Security",
        description:
          "Business Logic Flaws, Race Conditions, OAuth and JWT attacks, WebSockets, framework vulnerabilities, microservice security, request smuggling, vulnerability chaining, advanced SSRF exploitation, cache poisoning, cache deception, HTTP/2 attacks, prototype pollution exploitation, deserialization attacks, and advanced exploitation techniques.",
      },
      {
        title: "Bug Bounty & Vulnerability Research",
        description:
          "Bug bounty methodology, target reconnaissance, attack surface discovery, automated testing, manual vulnerability validation, advanced fuzzing, vulnerability chaining, exploit development, impact analysis, proof-of-concept development, duplicate avoidance, triage strategy, responsible disclosure, and professional report writing.",
      },
    ],
  },
  cairts: {
    id: "modules",
    label: "CAIRTS curriculum modules",
    heading: {
      title: "16-Week Intensive",
      highlight: "Curriculum & Syllabus",
      description:
        "A comprehensive, highly technical 11-module pathway engineered for security researchers, penetration testers, and AI safety engineers.",
    },
    modules: [
      {
        title: "Working with LLMs",
        description:
          "Prompting strategies, system/user/assistant roles, RAG pipelines, and embeddings — production deployment fluency before exploitation.",
      },
      {
        title: "Extending and Customizing LLMs",
        description:
          "Fine tuning, RAG augmentation, plugin/tool integration, and agentic frameworks (LangChain, function calling, MCP).",
      },
      {
        title: "Security Considerations of LLMs",
        description:
          "Mapping the OWASP Top 10 for LLM Applications: Sensitive Info Disclosure, Data/Model Poisoning, System Prompt Leakage, Vector/Embedding Weaknesses, and Misinformation.",
      },
      {
        title: "LLM Reconnaissance and Enumeration",
        description:
          "Fingerprinting the model, extracting system prompts, mapping tools/plugins/RAG sources, and enumerating guardrails.",
      },
      {
        title: "LLM Jailbreaking",
        description:
          "Bypassing alignment and safety training via role play framing, encoding tricks, multi turn escalation, and adversarial suffixes.",
      },
      {
        title: "Prompt Injection in LLMs",
        description:
          "Direct and indirect prompt injection via user input, documents, tool outputs, and third party content.",
      },
      {
        title: "Improper Output Handling in LLMs",
        description:
          "Exploiting downstream XSS, SSRF, SQL injection, and RCE where unsanitized LLM output reaches browsers, shells, or databases.",
      },
      {
        title: "LLM Supply Chain Attacks",
        description:
          "Compromising base models, fine tuning datasets, LoRA adapters, plugins, and third party dependencies.",
      },
      {
        title: "Excessive Agency in LLMs",
        description:
          "Abusing over permissioned tool access and autonomous function calling to escalate to unauthorized file writes, API calls, and transactions.",
      },
      {
        title: "LLM Unbounded Consumption & Capstone",
        description:
          "Denial of wallet and denial of service via unbounded token generation, recursive agent loops, and resource exhaustion prompts. Final practical model breach defense capstone.",
      },
    ],
  },
  cnpts: {
    id: "modules",
    label: "CNPTS curriculum modules",
    heading: {
      title: "16-Week Intensive",
      highlight: "Curriculum & Syllabus",
      description:
        "Network Penetration Testing Specialist: Master enterprise network exploitation, pivoting through complex environments, and Active Directory domain dominance.",
    },
    modules: [
      {
        title: "Core Reconnaissance",
        description:
          "This module establishes the technical foundation required for professional network penetration testing. Students learn how to understand network architecture, identify systems and services, and systematically build an attack surface before any exploitation is attempted.",
      },
      {
        title: "Exploitation & Access",
        description:
          "This module introduces controlled exploitation and the techniques used to validate whether discovered vulnerabilities can result in unauthorized access. The emphasis is on understanding the complete path from vulnerability identification to an initial foothold.",
      },
      {
        title: "Infrastructure Lateral Movement",
        description:
          "Once an initial foothold has been obtained, this module focuses on understanding internal infrastructure and determining whether an attacker could move between systems.",
      },
      {
        title: "Reconnaissance, Access & Initial Exploitation",
        description:
          "This module introduces deeper internal reconnaissance, with a strong focus on enterprise Windows environments and Active Directory.",
      },
      {
        title: "Advanced Infrastructure & Domain Dominance",
        description:
          "This is the advanced Active Directory and enterprise infrastructure section of the program. The focus shifts from individual vulnerabilities toward relationships, privileges, delegation and attack paths across an entire domain.",
      },
      {
        title: "Deliverables & Capstone",
        description:
          "The final module transforms technical testing results into professional penetration-testing deliverables. Students learn how to communicate vulnerabilities to both technical teams and management.",
      },
    ],
  },
  cmass: {
    id: "modules",
    label: "CMASS curriculum modules",
    tone: "mist",
    heading: {
      title: "16-Week Intensive",
      highlight: "Curriculum & Syllabus",
      description:
        "A rigorous, structured pathway covering Android internals, runtime analysis, Frida method hooking, and native library exploitation.",
    },
    modules: [
      {
        title: "Android Ecosystem & Foundations",
        description:
          "Architecture & Kernel, OS File System, Software Isolation, and Application Signing/Usage.",
      },
      {
        title: "Attack Surface & Component Security",
        description:
          "Manifest analysis, Activities, Intents, WebViews, Content Providers, and Permissions. Native Library Hooking & OWASP Mobile Top 10.",
      },
      {
        title: "Reverse Engineering & Static Analysis",
        description:
          "JadX GUI, Smali Code basics, Application Patching, and Ghidra fundamentals.",
      },
      {
        title: "Dynamic Analysis & Interception",
        description:
          "Traffic Interception, API Calls, Burp Suite Role, Certificate Installation, and Pinning Bypass.",
      },
      {
        title: "Frida Instrumentation & Runtime Hooking",
        description:
          "Installation, Hooking Java/Native Methods, Custom Scripts, Root Bypass, and Tracing.",
      },
      {
        title: "Advanced Debugging & Emerging Tech",
        description:
          "Flutter Exploitation, LLDB Debugger Tool, Process Debugging, and Insecure Library Loading.",
      },
    ],
    cta: {
      tag: "Certification Track",
      title: "CMASS Certification",
      description:
        "Equip yourself with the industry benchmark in mobile application penetration testing, reverse engineering, and runtime hooking.",
      primary: { label: "Enroll in CMASS Track", href: "/contact?topic=enroll-cmass" },
      secondary: { label: "Download Full Syllabus", href: "/contact?topic=syllabus" },
    },
  },
  cres: {
    id: "modules",
    label: "CRES curriculum modules",
    heading: {
      title: "16-Week Intensive",
      highlight: "Curriculum & Syllabus",
      description:
        "A comprehensive, highly technical 11-module pathway engineered for security researchers, reverse engineers, and malware analysts.",
    },
    modules: [
      {
        title: "Introduction to LLMs",
        description:
          "LLM architecture, training paradigms, and the OpenAI/Anthropic/open weight API landscape. Tokenization, context windows, and probabilistic attack surfaces.",
      },
      {
        title: "Working with LLMs",
        description:
          "Prompting strategies, system/user/assistant roles, RAG pipelines, and embeddings — production deployment fluency before exploitation.",
      },
      {
        title: "Extending and Customizing LLMs",
        description:
          "Fine tuning, RAG augmentation, plugin/tool integration, and agentic frameworks (LangChain, function calling, MCP).",
      },
      {
        title: "Security Considerations of LLMs",
        description:
          "Mapping the OWASP Top 10 for LLM Applications: Sensitive Info Disclosure, Data/Model Poisoning, System Prompt Leakage, Vector/Embedding Weaknesses, and Misinformation.",
      },
      {
        title: "LLM Reconnaissance and Enumeration",
        description:
          "Fingerprinting the model, extracting system prompts, mapping tools/plugins/RAG sources, and enumerating guardrails.",
      },
      {
        title: "LLM Jailbreaking",
        description:
          "Bypassing alignment and safety training via role play framing, encoding tricks, multi turn escalation, and adversarial suffixes.",
      },
      {
        title: "Prompt Injection in LLMs",
        description:
          "Direct and indirect prompt injection via user input, documents, tool outputs, and third party content.",
      },
      {
        title: "Improper Output Handling in LLMs",
        description:
          "Exploiting downstream XSS, SSRF, SQL injection, and RCE where unsanitized LLM output reaches browsers, shells, or databases.",
      },
      {
        title: "LLM Supply Chain Attacks",
        description:
          "Compromising base models, fine tuning datasets, LoRA adapters, plugins, and third party dependencies.",
      },
      {
        title: "Excessive Agency in LLMs",
        description:
          "Abusing over permissioned tool access and autonomous function calling to escalate to unauthorized file writes, API calls, and transactions.",
      },
      {
        title: "LLM Unbounded Consumption & Capstone",
        description:
          "Denial of wallet and denial of service via unbounded token generation, recursive agent loops, and resource exhaustion prompts. Final practical model breach defense capstone.",
      },
    ],
  },
};
