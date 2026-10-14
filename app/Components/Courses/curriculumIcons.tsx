import type { ReactNode } from "react";

export type CurriculumIconName =
  | "wrench"
  | "compass"
  | "document"
  | "key"
  | "shield"
  | "shieldCheck"
  | "branch"
  | "network"
  | "terminal"
  | "bolt"
  | "brain"
  | "robot"
  | "radar"
  | "roboticArm"
  | "hierarchy"
  | "badgeCheck"
  | "bug"
  | "mindset"
  | "code"
  | "exchange"
  | "mobile"
  | "puzzle"
  | "lock"
  | "inject"
  | "checklist"
  | "alert"
  | "aiShield"
  | "binary";

const paths: Record<CurriculumIconName, ReactNode> = {
  wrench: (
    <path
      d="M14.7 6.3a4 4 0 0 1-5.1 5.1L4 17l3 3 5.6-5.6a4 4 0 0 1 5.1-5.1l-2.3 2.3-2-2 2.3-2.3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  compass: (
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15 9l-3 3-3 3 3-3 3-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  document: (
    <path
      d="M7 3h7l4 4v14H7V3Zm7 0v4h4M9.5 12h5M9.5 15h5M9.5 9h2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  key: (
    <path
      d="M15 7a4 4 0 1 0-4.9 3.9L4 17v3h3l6.1-6.1A4 4 0 0 0 15 7Zm-2 0a1.5 1.5 0 1 1 0 .01V7Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  shield: (
    <path
      d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  shieldCheck: (
    <path
      d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3.5 9 2.2 2.2L16 9.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  branch: (
    <path
      d="M7 3v8m0 0a4 4 0 0 0 4 4h2m-6-4a4 4 0 0 1-4 4M17 3v6a4 4 0 0 1-4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  network: (
    <path
      d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 8v6m0 0-5 3m5-3 5 3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  terminal: (
    <path
      d="m5 7 5 5-5 5m8 0h6M4 4h16v16H4V4Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  bolt: (
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  brain: (
    <path
      d="M9 4.5A3 3 0 0 0 6 7.5v.3A3 3 0 0 0 4 10.6v1.8a3 3 0 0 0 2 2.8v.3A3 3 0 0 0 9 18.5m0-14v14m6-14a3 3 0 0 1 3 3v.3a3 3 0 0 1 2 2.8v1.8a3 3 0 0 1-2 2.8v.3a3 3 0 0 1-3 3m0-14v14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  robot: (
    <path
      d="M7 9h10v9H7V9Zm5-5v3M9 4h6M9 13h.01M15 13h.01M4 11h2m12 0h2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  radar: (
    <path
      d="M11 19a8 8 0 1 1 8-8m-8 8c-4.4 0-8-3.6-8-8a1 1 0 0 1 2 0M4 15l3-3m0 0 3-3m-3 3 3 3m-3-3-3 3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  roboticArm: (
    <path
      d="M4 20h4l3-6-2-5 5-3 2 4h4M9 14l-3-3M17 10l2-3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  hierarchy: (
    <path
      d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 8v4m0 0H5m0 0v4m7-4h7v4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  badgeCheck: (
    <path
      d="m9 12 2 2 4-4m-9.6-3.1L8 6l2-2 2 2 2.6-1.1.9 2.5 2.5.9L16 10l1.1 2.6-2.5.9-.9 2.5L12 15l-2 2-2-2-2.6 1.1-.9-2.5-2.5-.9L3 10 1.9 7.4l2.5-.9Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  bug: (
    <path
      d="M9 7h6m-6 0a3 3 0 0 1 6 0m-6 0v1a3 3 0 0 0 6 0V7M7 10h10v5a5 5 0 0 1-10 0v-5Zm0 2H4m13 0h3M7 16H4m13 0h3M9.5 4.5 8 3M14.5 4.5 16 3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  mindset: (
    <path
      d="M9 3a5 5 0 0 0-2 9.58V15a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.5h1V15a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-2.42A5 5 0 0 0 9 3Zm0 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  code: (
    <path
      d="m9 7-5 5 5 5m6-10 5 5-5 5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  exchange: (
    <path
      d="M4 7h14m0 0-3-3m3 3-3 3M20 17H6m0 0 3 3m-3-3 3-3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  mobile: (
    <path
      d="M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm2 2h4m-4 16h4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  puzzle: (
    <path
      d="M9 4h4v2.17a2 2 0 0 0 3.46 1.37L17.83 6 20 8.17l-1.54 1.37A2 2 0 0 0 19.83 13H22v4h-4v-2.17a2 2 0 0 0-3.46-1.37L13 14.83V17H9v-2.17a2 2 0 0 0-3.46-1.37L4 14.83 1.83 12.66 3.37 11.3A2 2 0 0 0 2 7.94V5h4v2.17a2 2 0 0 0 3.46 1.37L11 6.83V4Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  lock: (
    <path
      d="M6 11V7a6 6 0 0 1 12 0v4m-13 0h14v10H5V11Zm7 4v3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  inject: (
    <path
      d="m18 2 4 4m-4-4-9.5 9.5m9.5-9.5L16 4m2-2 2 2m-7.5 7.5L15 14m-3.5-2.5L9 14m1-6 2 2M5 15l-2 6 6-2 7.5-7.5-4-4L5 15Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  checklist: (
    <path
      d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  alert: (
    <path
      d="M12 7v3m0 3h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  aiShield: (
    <path
      d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-2.5 7.5h1.2m1.6 0h1.2M9.5 15v-3.5h1.6v3.5m-1.6-2h1.6M13.3 15v-3.5h1.5c.6 0 1 .4 1 1s-.4 1-1 1h-1.5m1.2 0 1.3 1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  binary: (
    <path
      d="M4 4h7v7H4V4Zm9 9h7v7h-7v-7ZM6.5 6v3M8.5 6v3M15.5 15v3M17.5 15v3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function CurriculumIcon({
  name,
  className,
}: {
  name: CurriculumIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
