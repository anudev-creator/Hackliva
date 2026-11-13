import Link from "next/link";

export function HeroSection() {
  return (
    <section className="px-5 pt-20 text-center sm:px-10 sm:pt-28 lg:pt-44">
      <div className="mx-auto max-w-5xl">
        <h1 data-intro="1" className="text-4xl leading-[1.1] font-bold tracking-tight text-balance text-zinc-950 sm:text-5xl lg:text-[3.75rem]">
          Hackliva Offensive Security <br className="hidden sm:inline" />
          Academy
        </h1>
        <p data-intro="2" className="mt-5 text-lg font-semibold text-zinc-950 sm:text-xl">
          Cyber Security Training and Awareness Program
        </p>
        <p data-intro="3" className="mt-3 text-[15px] text-zinc-800 sm:text-base">
          The Center of Excellence for Offensive Security at Astraliva
        </p>
        <Link
          data-intro="4"
          href="/contact"
          className="mt-8 inline-flex h-13 items-center justify-center rounded-full bg-zinc-950 px-9 text-[15px] font-semibold text-white shadow-md shadow-zinc-950/20 transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Let&apos;s Connect
        </Link>
      </div>
    </section>
  );
}
