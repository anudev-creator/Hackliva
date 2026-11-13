import llmSecurity from "../_assets/curriculum/01-llm-security.png";
import memoryContext from "../_assets/curriculum/02-memory-context.png";
import aiSupplyChain from "../_assets/curriculum/03-ai-supply-chain.png";
import offensiveMcp from "../_assets/curriculum/04-offensive-mcp.png";
import mcpHardening from "../_assets/curriculum/05-mcp-hardening.png";
import agenticArchitecture from "../_assets/curriculum/06-agentic-architecture.png";
import multiAgentCommunication from "../_assets/curriculum/07-multi-agent-communication.png";
import aiAgentAuditing from "../_assets/curriculum/08-ai-agent-auditing.png";
import agentManipulation from "../_assets/curriculum/09-agent-manipulation.png";
import secureAiHarness from "../_assets/curriculum/10-secure-ai-harness.png";
import aiCodingAssistant from "../_assets/curriculum/11-ai-coding-assistant.png";
import aiThreatModeling from "../_assets/curriculum/12-enterprise-ai-threat-modeling.png";
import type { CurriculumSectionProps } from "../_components/curriculum-section";

export const aiRedTeamingCurriculum: CurriculumSectionProps = {
  id: "ai-red-teaming-curriculum",
  title: "The Most Practical AI Red Teaming Curriculum",
  description:
    "Master the offensive techniques behind real AI threats. The World Needs AI Security Experts. Be the One.",
  groups: [
    [
      { title: "LLM Security Fundamentals", icon: llmSecurity },
      { title: "Offensive MCP Security", icon: offensiveMcp },
      { title: "Memory & Context Security", icon: memoryContext },
      { title: "MCP & Harness Security Hardening", icon: mcpHardening },
      { title: "AI Supply Chain Security", icon: aiSupplyChain },
      { title: "Agentic AI Architecture", icon: agenticArchitecture },
    ],
    [
      { title: "Secure AI Harness", icon: secureAiHarness },
      { title: "AI Agent Manipulation", icon: agentManipulation },
      { title: "Multi-Agent Communication", icon: multiAgentCommunication },
      { title: "AI Coding Assistant Security", icon: aiCodingAssistant },
      { title: "AI Agent Auditing", icon: aiAgentAuditing },
      { title: "AI Threat Modeling", icon: aiThreatModeling },
    ],
  ],
};
