"use client";

import { useEffect, useRef } from "react";

const ENABLED = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const SIZE = 640;

/**
 * Soft red glow that trails the mouse across every page, light and dark sections alike. It sits above
 * the content but never blocks clicks, and swells a little over links and buttons.
 * Mouse only; touch and reduced-motion visitors never see it.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = ref.current;
    if (!glow || !window.matchMedia(ENABLED).matches) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let shown = false;
    let frame = 0;

    const tick = () => {
      x += (targetX - x) * 0.14;
      y += (targetY - y) * 0.14;
      glow.style.transform = `translate3d(${(x - SIZE / 2).toFixed(1)}px, ${(y - SIZE / 2).toFixed(1)}px, 0)`;
      frame = Math.abs(targetX - x) > 0.3 || Math.abs(targetY - y) > 0.3 ? requestAnimationFrame(tick) : 0;
    };

    const show = (visible: boolean) => {
      if (shown === visible) return;
      shown = visible;
      glow.style.opacity = visible ? "1" : "0";
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      // First move after entering: appear at the cursor instead of sliding in from the corner.
      if (!shown) {
        x = targetX;
        y = targetY;
      }
      show(true);
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onOver = (event: PointerEvent) => {
      const interactive = (event.target as Element | null)?.closest?.("a, button, [role='button']");
      glow.style.scale = interactive ? "1.3" : "1";
    };
    const onOut = (event: PointerEvent) => {
      if (!event.relatedTarget) show(false);
    };
    const onBlur = () => show(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    window.addEventListener("blur", onBlur);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 size-[640px] rounded-full cursor-glow opacity-0 transition-[opacity,scale] duration-500 ease-out [background:radial-gradient(circle,rgba(233,13,33,0.11),rgba(233,13,33,0.04)_35%,transparent_65%)]"
    />
  );
}
