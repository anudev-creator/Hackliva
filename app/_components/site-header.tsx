import Link from "next/link";
import { HeaderEffects } from "./header-effects";
import { HeaderNav } from "./header-nav";
import { MobileNav } from "./mobile-nav";
import { navLinks } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="header-drop sticky top-0 z-40 border-b border-zinc-200 bg-white/95 transition-shadow duration-300 data-scrolled:shadow-[0_8px_24px_-14px_rgba(15,15,15,0.28)]">
      <div className="mx-auto grid h-16 max-w-screen-2xl grid-cols-[1fr_auto] items-center px-5 sm:px-10 md:h-18 md:grid-cols-[1fr_auto_1fr] lg:px-16">
        <Link
          href="/"
          className="group relative justify-self-start text-2xl font-extrabold tracking-tight text-brand transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
        >
          HACKLIVA
          <span
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-1 block h-0.5 origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 motion-reduce:transition-none"
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <HeaderNav links={navLinks} />
        </nav>

        <MobileNav links={navLinks} />
      </div>
      <HeaderEffects />
    </header>
  );
}
