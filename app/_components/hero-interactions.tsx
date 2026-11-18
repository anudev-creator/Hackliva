"use client";

import { useEffect, useRef, type ReactNode } from "react";

const CAN_HOVER = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

/**
 * Card that tilts in 3D toward the mouse, with a red spotlight that follows the cursor
 * (the spotlight reads --sx/--sy). Mouse only; touch and reduced-motion visitors get a flat card.
 */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia(CAN_HOVER).matches) return;

    let rx = 0;
    let ry = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = 0;

    const tick = () => {
      rx += (targetX - rx) * 0.14;
      ry += (targetY - ry) * 0.14;
      el.style.transform = `perspective(800px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      frame = Math.abs(targetX - rx) > 0.02 || Math.abs(targetY - ry) > 0.02 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      targetX = (0.5 - y) * 16;
      targetY = (x - 0.5) * 16;
      el.style.setProperty("--sx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--sy", `${(y * 100).toFixed(1)}%`);
      kick();
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      kick();
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={`[transform-style:preserve-3d] ${className}`}>
      {children}
    </div>
  );
}

/**
 * Pulls its child toward the mouse when the cursor comes near, and springs back when it leaves.
 * The padding around the child is the "pull zone".
 */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zone = ref.current;
    const target = zone?.firstElementChild as HTMLElement | null;
    if (!zone || !target || !window.matchMedia(CAN_HOVER).matches) return;

    target.style.transition = "translate 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
    const onMove = (event: PointerEvent) => {
      const rect = target.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      target.style.translate = `${(dx * strength).toFixed(1)}px ${(dy * strength).toFixed(1)}px`;
    };
    const onLeave = () => {
      target.style.translate = "0 0";
    };

    zone.addEventListener("pointermove", onMove, { passive: true });
    zone.addEventListener("pointerleave", onLeave);
    return () => {
      zone.removeEventListener("pointermove", onMove);
      zone.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className="-m-8 inline-block p-8">
      {children}
    </div>
  );
}
