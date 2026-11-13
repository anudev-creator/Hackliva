import type { ReactNode } from "react";

export type CareerIconName =
  | "document"
  | "interview"
  | "briefcase"
  | "handshake";

const paths: Record<CareerIconName, ReactNode> = {
  document: (
    <path
      d="M7 3h7l4 4v14H7V3Zm7 0v4h4M9.5 12h5M9.5 15h5M9.5 9h2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  interview: (
    <path
      d="M10 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 8c0-3.3 2.7-6 6-6s6 2.7 6 6M17 8.5c.7.7.7 1.8 0 2.5m2-5c1.6 1.6 1.6 4.4 0 6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  briefcase: (
    <path
      d="M4 8h16v11H4V8Zm4 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 13h16m-9-1.5v3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  handshake: (
    <path
      d="M12 21s-7-4.4-9.5-9C1.2 9.3 2.6 6 5.7 6c1.6 0 2.7.9 3.3 1.7L12 5l3 2.7c.6-.8 1.7-1.7 3.3-1.7 3.1 0 4.5 3.3 3.2 6-2.5 4.6-9.5 9-9.5 9Zm-3-11 2.3 2.3a1.6 1.6 0 0 0 2.3 0l.4-.4a1.6 1.6 0 0 0 0-2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function CareerIcon({
  name,
  className,
}: {
  name: CareerIconName;
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
