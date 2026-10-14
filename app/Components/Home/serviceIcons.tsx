import type { ReactNode } from "react";

export type ServiceIconName =
  | "shield"
  | "iot"
  | "cloud"
  | "infrastructure"
  | "network"
  | "target"
  | "shieldCheck"
  | "radar"
  | "gdpr"
  | "card"
  | "medical"
  | "users";

const paths: Record<ServiceIconName, ReactNode> = {
  shield: (
    <path
      d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  iot: (
    <path
      d="M12 18.01V18M8.5 14.5a5 5 0 0 1 7 0M5.5 11.5a9 9 0 0 1 13 0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cloud: (
    <path
      d="M7 18a4.5 4.5 0 0 1-.4-8.98A5.5 5.5 0 0 1 17.3 8.02 4 4 0 0 1 17 18H7Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  infrastructure: (
    <path
      d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6ZM10 7h4M7 10v4M17 10v4M10 17h4"
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
  target: (
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
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
  radar: (
    <path
      d="M12 12 19 8M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  gdpr: (
    <path
      d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm0 8v4m0-7h.01"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  card: (
    <path
      d="M3 7h18v10H3V7Zm0 4h18M7 15h4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  medical: (
    <path
      d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm0 4v7m-3.5-3.5h7"
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
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
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
