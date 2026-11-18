import Link from "next/link";
import type { CSSProperties } from "react";
import { TypedText } from "../../_components/animated-text";
import { Magnetic } from "../../_components/hero-interactions";
import { MaterialSymbol } from "../../_components/material-symbol";
import { ScrambleWords } from "../../_components/scramble-words";
import { ScrollLink } from "../../_components/scroll-link";

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export function HeroSection() {
  return (
    <section className="relative px-5 pt-20 text-center sm:px-10 sm:pt-28 lg:pt-44">
      <div
        data-hero-parallax
        className="mx-auto max-w-5xl will-change-[opacity,translate]"
      >
        <ScrollLink
          href="/#batches"
          style={delay(0)}
          className="hero-rise mb-7 inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/80 py-1.5 pr-4 pl-3.5 text-[13px] font-medium text-zinc-800 shadow-sm transition-colors hover:border-brand/40 hover:text-brand"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-brand opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          Next batch is open
          <MaterialSymbol name="arrow_forward" size={15} />
        </ScrollLink>

        <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-balance text-zinc-950 sm:text-5xl lg:text-[3.75rem]">
          <ScrambleWords
            text={"Hackliva Offensive Security\nAcademy"}
            accent={["Offensive", "Security"]}
          />
        </h1>
        <p
          style={delay(0.85)}
          className="hero-rise mt-5 text-lg font-semibold text-zinc-950 sm:text-xl"
        >
          Cyber Security Training and Awareness Program
        </p>
        <p className="mt-3 text-[15px] text-zinc-800 sm:text-base">
          <TypedText
            text="The Center of Excellence for Offensive Security at Astraliva"
            delay={1.25}
          />
        </p>
        <div style={delay(1.9)} className="hero-rise mt-8">
          <Magnetic>
            <Link
              href="/contact"
              className="hero-cta group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-zinc-950 px-9 text-[15px] font-semibold text-white shadow-md shadow-zinc-950/20 transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Let&apos;s Connect
              <MaterialSymbol
                name="arrow_forward"
                size={18}
                className="-ml-2 w-0 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:w-[18px] group-hover:opacity-100"
              />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
