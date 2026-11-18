import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { navLinks } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95">
      <div className="mx-auto grid h-16 max-w-screen-2xl grid-cols-[1fr_auto] items-center px-5 sm:px-10 md:h-18 md:grid-cols-[1fr_auto_1fr] lg:px-16">
        <Link
          href="/"
          className="justify-self-start text-2xl font-extrabold tracking-tight text-brand"
        >
          HACKLIVA
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[15px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    link.featured
                      ? "font-medium text-brand-navy transition-colors hover:text-brand"
                      : "text-zinc-900 transition-colors hover:text-brand-navy"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
