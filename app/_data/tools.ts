import android from "../_assets/tools/android-frida.jpg";
import bloodhound from "../_assets/tools/bloodhound.jpg";
import burpsuite from "../_assets/tools/burpsuite.jpg";
import chatgpt from "../_assets/tools/chatgpt.jpg";
import claude from "../_assets/tools/claude.png";
import deepseek from "../_assets/tools/deepseek.jpg";
import ghidra from "../_assets/tools/ghidra.png";
import hexstrike from "../_assets/tools/hexstrike.jpg";
import kali from "../_assets/tools/kali-linux.png";
import playwright from "../_assets/tools/playwright.png";
import type { ToolsSectionProps } from "../_components/tools-section";

// Icon tiles follow the Figma design (425:2694) exactly, per tool.
const darkTile = "border border-white/10 bg-black/40";
const insetShadow = "shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]";

export const masterTheTools: ToolsSectionProps = {
  id: "tools",
  title: "Master the tools with the\npower of AI",
  description: "We aim to make learning smooth, helpful, and fun as part of your\neveryday life",
  groups: [
    {
      title: "Offensive Tools",
      tools: [
        {
          name: "kali Linux",
          description: "Interface & System Prototyping",
          icon: { box: darkTile, image: { src: kali, className: "h-[26px] w-[26px] rounded-full object-contain" } },
        },
        {
          name: "Burpsuite",
          description: "Advanced Micro-interactions",
          icon: { box: "", image: { src: burpsuite, className: "size-11 object-cover" } },
        },
        {
          name: "Android ADB & Frida",
          description: "Visual Development Engine",
          icon: {
            box: "border border-white/10 bg-[rgba(37,99,235,0.8)]",
            image: { src: android, className: "size-[30px] rounded-lg object-cover" },
          },
        },
        {
          name: "Ghidra",
          description: "Asset Editing & Vector Preview",
          icon: { box: darkTile, image: { src: ghidra, className: "size-8 rounded-lg object-cover" } },
        },
        {
          name: "Docker",
          description: "Containerization & Labs",
          icon: { box: "border border-white/10 bg-[rgba(0,115,236,0.8)]" },
        },
        {
          name: "BloodHound",
          description: "AD Domain Recon & Paths",
          icon: {
            box: "border border-white/10 bg-linear-45 from-[#dc2626] to-[#fb7185]",
            image: { src: bloodhound, className: "h-[15.75px] w-7 object-cover" },
          },
        },
      ],
    },
    {
      title: "AI Tools",
      tools: [
        {
          name: "ChatGPT 4o",
          description: "Logic, Prompting & Scripting",
          icon: { box: `bg-[#1a1c1c] ${insetShadow}`, image: { src: chatgpt, className: "size-7 rounded-full object-cover" } },
        },
        {
          name: "Claude",
          description: "Code Architecture & Synthesis",
          icon: { box: "bg-[#d97757]", image: { src: claude, className: "size-9 rounded-lg object-cover" } },
        },
        {
          name: "Playwright",
          description: "Browser & Synthetic Automation",
          icon: {
            box: "border border-white/10 bg-[#1a1c1c]",
            image: { src: playwright, className: "size-[34px] rounded-lg object-cover" },
          },
        },
        {
          name: "DeepSeek",
          description: "Reasoning & Threat Analysis",
          icon: {
            box: "border border-white/10 bg-linear-45 from-[#0891b2] to-[#3b82f6]",
            image: { src: deepseek, className: "h-[17.44px] w-7 object-cover" },
          },
        },
        {
          name: "HexStrike",
          description: "AI Offensive Automation",
          icon: {
            box: "border border-white/10 bg-linear-45 from-[#be123c] to-[#ef4444]",
            image: { src: hexstrike, className: "size-[42px] rounded-lg object-cover" },
          },
        },
        {
          name: "MCP",
          description: "Productivity & Context Flow",
          icon: {
            box: `bg-linear-45 from-[#0078d4] via-[#ea4335] to-[#fbbc04] ${insetShadow}`,
            mark: "tilted-square",
          },
        },
      ],
    },
  ],
};
