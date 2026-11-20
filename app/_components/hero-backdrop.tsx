"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

type Node = { x: number; y: number; vx: number; vy: number; r: number; red: boolean };

/**
 * Live "attack surface" network drawn on a canvas: nodes drift and link up when close,
 * and the ones near the mouse light up red and reach for it. Pauses whenever the hero is off-screen.
 */
function startNetwork(canvas: HTMLCanvasElement, host: HTMLElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const still = window.matchMedia(REDUCED_MOTION).matches;
  const LINK = 130;
  const REACH = 190;
  let width = 0;
  let height = 0;
  let nodes: Node[] = [];
  let mouse: { x: number; y: number } | null = null;
  let frame = 0;
  let visible = true;

  const spawn = (): Node => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.32,
    vy: (Math.random() - 0.5) * 0.32,
    r: Math.random() * 1.3 + 0.9,
    red: Math.random() < 0.16,
  });

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (const node of nodes) {
      if (!still) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -10) node.x = width + 10;
        else if (node.x > width + 10) node.x = -10;
        if (node.y < -10) node.y = height + 10;
        else if (node.y > height + 10) node.y = -10;
      }
      // Nodes near the pointer drift gently toward it, like they've spotted a target.
      if (mouse) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const d = Math.hypot(dx, dy);
        if (d < REACH && d > 1) {
          node.x += (dx / d) * 0.35;
          node.y += (dy / d) * 0.35;
        }
      }
    }

    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 > LINK * LINK) continue;
        const alpha = (1 - Math.sqrt(d2) / LINK) * 0.2;
        ctx.strokeStyle = a.red && b.red ? `rgba(233,13,33,${alpha * 2})` : `rgba(9,13,20,${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    if (mouse) {
      for (const node of nodes) {
        const d = Math.hypot(mouse.x - node.x, mouse.y - node.y);
        if (d > REACH) continue;
        ctx.strokeStyle = `rgba(233,13,33,${(1 - d / REACH) * 0.55})`;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
      }
    }

    for (const node of nodes) {
      const near = mouse && Math.hypot(mouse.x - node.x, mouse.y - node.y) < REACH;
      ctx.fillStyle = node.red || near ? "rgba(233,13,33,0.75)" : "rgba(9,13,20,0.35)";
      ctx.beginPath();
      ctx.arc(node.x, node.y, near ? node.r + 0.8 : node.r, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const loop = () => {
    draw();
    frame = requestAnimationFrame(loop);
  };
  const play = () => {
    if (!frame && visible && !still && document.visibilityState === "visible") frame = requestAnimationFrame(loop);
  };
  const pause = () => {
    cancelAnimationFrame(frame);
    frame = 0;
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dpr = Math.min(1.75, window.devicePixelRatio || 1);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const target = Math.min(95, Math.round((width * height) / 15000));
    while (nodes.length < target) nodes.push(spawn());
    nodes = nodes.slice(0, target);
    if (still || !frame) draw();
  };

  const onMove = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    mouse = { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };
  const onLeave = () => {
    mouse = null;
  };
  const onVisibility = () => (document.visibilityState === "visible" ? play() : pause());

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  const viewObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) play();
    else pause();
  });
  viewObserver.observe(canvas);
  if (window.matchMedia(FINE_POINTER).matches && !still) {
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);
  }
  document.addEventListener("visibilitychange", onVisibility);

  resize();
  play();

  return () => {
    pause();
    resizeObserver.disconnect();
    viewObserver.disconnect();
    host.removeEventListener("pointermove", onMove);
    host.removeEventListener("pointerleave", onLeave);
    document.removeEventListener("visibilitychange", onVisibility);
  };
}

/**
 * Mouse depth: background layers shift by different amounts (via --px/--py),
 * and the hero copy drifts down and fades as you scroll past it. (The cursor glow is site-wide: see CursorGlow.)
 */
function startDepth(root: HTMLElement, host: HTMLElement) {
  if (window.matchMedia(REDUCED_MOTION).matches) return () => {};
  const fine = window.matchMedia(FINE_POINTER).matches;
  const content = host.querySelector<HTMLElement>("[data-hero-parallax]");

  let px = 0;
  let py = 0;
  let tpx = 0;
  let tpy = 0;
  let frame = 0;

  const tick = () => {
    px += (tpx - px) * 0.06;
    py += (tpy - py) * 0.06;
    root.style.setProperty("--px", px.toFixed(4));
    root.style.setProperty("--py", py.toFixed(4));
    const moving = Math.abs(tpx - px) > 0.001 || Math.abs(tpy - py) > 0.001;
    frame = moving ? requestAnimationFrame(tick) : 0;
  };
  const kick = () => {
    if (!frame) frame = requestAnimationFrame(tick);
  };

  const onMove = (event: PointerEvent) => {
    tpx = (event.clientX / window.innerWidth) * 2 - 1;
    tpy = (event.clientY / window.innerHeight) * 2 - 1;
    kick();
  };
  const onLeave = () => {
    tpx = 0;
    tpy = 0;
    kick();
  };

  let scrollFrame = 0;
  let lastProgress = -1;
  const applyScroll = () => {
    scrollFrame = 0;
    if (!content) return;
    const progress = Math.min(1, Math.max(0, window.scrollY / (host.offsetHeight * 0.75)));
    // Once the hero is fully scrolled past, stop touching it.
    if (progress === lastProgress) return;
    lastProgress = progress;
    content.style.opacity = `${1 - progress * 0.75}`;
    content.style.translate = `0 ${progress * 90}px`;
    content.style.scale = `${1 - progress * 0.06}`;
  };
  const onScroll = () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(applyScroll);
  };

  if (fine) {
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  applyScroll();

  return () => {
    cancelAnimationFrame(frame);
    cancelAnimationFrame(scrollFrame);
    host.removeEventListener("pointermove", onMove);
    host.removeEventListener("pointerleave", onLeave);
    window.removeEventListener("scroll", onScroll);
  };
}

/** Shifts a layer by up to `depth` px as the mouse moves (deeper layers move more). */
const depth = (px: number, extra: Record<string, string> = {}) =>
  ({ translate: `calc(var(--px, 0) * ${px}px) calc(var(--py, 0) * ${px}px)`, ...extra }) as CSSProperties;

/**
 * Animated stage behind the hero: drifting grid, glowing orbs, a radar sweep behind the headline,
 * a red scan line, and a live node network that reaches for the cursor. Put it first inside a `relative isolate` wrapper,
 * and mark the hero copy with `data-hero-parallax` to have it drift away on scroll.
 */
export function HeroBackdrop() {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = root.current?.parentElement;
    if (!host || !root.current || !canvas.current) return;
    const stopNetwork = startNetwork(canvas.current, host);
    const stopDepth = startDepth(root.current, host);
    return () => {
      stopNetwork();
      stopDepth();
    };
  }, []);

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_82%,transparent)]"
    >
      <div className="hero-grid-mask absolute -inset-8" style={depth(10)}>
        <div className="hero-grid" />
      </div>

      <div className="absolute -top-40 -left-40" style={depth(40)}>
        <div className="hero-orb hero-orb-a" style={{ "--orb": "rgba(233, 13, 33, 0.16)" } as CSSProperties} />
      </div>
      <div className="absolute -top-24 -right-48" style={depth(-35)}>
        <div className="hero-orb hero-orb-b" style={{ "--orb": "rgba(38, 49, 107, 0.14)" } as CSSProperties} />
      </div>

      <div className="hero-radar top-[230px] sm:top-[290px] lg:top-[350px]" style={depth(18)}>
        <div className="hero-radar-sweep" />
        <span className="hero-radar-blip" style={{ left: "30%", top: "38%", "--b": "1.1s" } as CSSProperties} />
        <span className="hero-radar-blip" style={{ left: "71%", top: "61%", "--b": "4.6s" } as CSSProperties} />
        <span className="hero-radar-blip" style={{ left: "58%", top: "24%", "--b": "2.9s" } as CSSProperties} />
      </div>

      <canvas ref={canvas} className="hero-network absolute inset-0 size-full" />

      <div className="hero-scan" />
    </div>
  );
}
