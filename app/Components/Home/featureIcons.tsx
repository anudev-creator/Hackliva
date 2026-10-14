import type { ReactNode } from "react";

export type FeatureIconName =
  | "map"
  | "terminal"
  | "cpu"
  | "cap"
  | "shield"
  | "globe"
  | "users"
  | "briefcase"
  | "badge";

const paths: Record<FeatureIconName, ReactNode> = {
  map: (
    <path
      d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Zm0 0v14m6-14v14"
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
  cpu: (
    <path
      d="M8 3v3m4-3v3m4-3v3M8 18v3m4-3v3m4-3v3M3 8h3M3 12h3M3 16h3m15-8h-3m3 4h-3m3 4h-3M7 7h10v10H7V7Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cap: (
    <path
      d="m2 8 10-5 10 5-10 5-10-5Zm4 2v6c0 1.5 2.5 3 6 3s6-1.5 6-3v-6M20 9v7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  shield: (
    <path
      d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3.5 9 2.2 2.2L16 9.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  globe: (
    <path
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3ZM3.5 9h17M3.5 15h17"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  users: (
    <path
      d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20c0-3.3 3.1-6 7-6s7 2.7 7 6M15 14.2c3.4.4 6 2.7 6 5.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  briefcase: (
    <path
      d="M4 8h16v11H4V8Zm4 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 13h16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  badge: (
    <path
      d="M12 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM9 12.5 7 21l5-2.5L17 21l-2-8.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function FeatureIcon({
  name,
  className,
}: {
  name: FeatureIconName;
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
