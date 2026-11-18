"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const GLYPHS = "ABCDEFGHKNPRSXYZ0123456789#$<>/\\{}=+*?";
// Thin letters get thin glyphs, so the scramble never spills over its neighbours.
const NARROW = "ifjltrI1.,:;!|'";
const NARROW_GLYPHS = "!|/\\:;[]1()";
const pick = (set: string) => set[Math.floor(Math.random() * set.length)];
const randomGlyph = (real: string) => pick(NARROW.includes(real) ? NARROW_GLYPHS : GLYPHS);

/**
 * Scramble `chars` into random red glyphs, then lock each one back to its real letter, left to right.
 * Writes straight to the DOM (no React renders); each letter keeps its own width, so nothing jumps.
 */
function decode(chars: HTMLElement[], { hold = 300, spread = 36, swap = 55 } = {}) {
  const start = performance.now();
  let lastSwap = 0;
  let frame = 0;

  const tick = (now: number) => {
    const swapNow = now - lastSwap > swap;
    if (swapNow) lastSwap = now;
    let pending = false;
    chars.forEach((char, index) => {
      if (now - start < hold + index * spread) {
        pending = true;
        if (!char.classList.contains("sc-on")) char.classList.add("sc-on");
        if (swapNow) char.dataset.glyph = randomGlyph(char.textContent ?? "");
      } else if (char.classList.contains("sc-on")) {
        char.classList.remove("sc-on");
      }
    });
    frame = pending ? requestAnimationFrame(tick) : 0;
  };
  frame = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(frame);
    for (const char of chars) char.classList.remove("sc-on");
  };
}

/**
 * Headline that "decrypts" itself on load: words rise out of a blur while their letters cycle through
 * random glyphs and lock in one by one. Words listed in `accent` carry a red sheen and glitch-decode
 * again every few seconds. "\n" starts a new line on wide screens.
 */
export function ScrambleWords({ text, accent = [] }: { text: string; accent?: string[] }) {
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars = [...el.querySelectorAll<HTMLElement>("[data-sc]")];
    const accentChars = chars.filter((char) => char.dataset.accent !== undefined);

    // Only decode on a fresh page load; if the page took long to wake up, the words are already showing.
    let stop = performance.now() < 2500 ? decode(chars, { hold: 350, spread: 34 }) : () => {};
    const glitch = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      stop();
      stop = decode(accentChars, { hold: 120, spread: 30, swap: 45 });
    }, 7000);

    return () => {
      window.clearInterval(glitch);
      stop();
    };
  }, []);

  let wordIndex = 0;
  return (
    <>
      <span className="sr-only">{text.replace("\n", " ")}</span>
      <span ref={root} aria-hidden="true">
        {text.split("\n").map((line, lineIndex) => (
          <span key={line}>
            {lineIndex > 0 && <br className="hidden sm:inline" />}
            {lineIndex > 0 && " "}
            {line.split(" ").map((word, index) => {
              const w = wordIndex++;
              const isAccent = accent.includes(word);
              return (
                <span key={`${word}-${index}`}>
                  {index > 0 && " "}
                  <span
                    className={`hero-word ${isAccent ? "hero-shimmer" : ""}`}
                    data-text={isAccent ? word : undefined}
                    style={{ "--w": w } as CSSProperties}
                  >
                    {[...word].map((char, charIndex) => (
                      <span
                        key={charIndex}
                        data-sc=""
                        data-accent={isAccent ? "" : undefined}
                        className="sc"
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </>
  );
}
