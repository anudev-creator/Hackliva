"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: boolean;
  once?: boolean;
  threshold?: number;
};

const EASE = "cubic-bezier(0.16,1,0.3,1)";

function offsetFor(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "up":
      return `translateY(${distance}px)`;
    case "down":
      return `translateY(-${distance}px)`;
    case "left":
      return `translateX(${distance}px)`;
    case "right":
      return `translateX(-${distance}px)`;
    default:
      return "translate(0,0)";
  }
}

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 28,
  scale = false,
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [intersected, setIntersected] = useState(false);
  const visible = reducedMotion || intersected;

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIntersected(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, once, threshold]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate(0,0) scale(1)"
      : `${offsetFor(direction, distance)}${scale ? " scale(0.94)" : ""}`,
    transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
