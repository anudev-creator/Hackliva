import Link from "next/link";
import { HeaderEffects } from "./header-effects";
import { MobileNav } from "./mobile-nav";
import { courseNavLinks } from "./nav-links";

/** Header used on course pages (Figma 425:3497): wordmark left, nav with a "We're Hiring" tag on Careers. */
export function CourseHeader() {
  return (
    <header className="header-drop sticky top-0 z-40 border-b border-hairline bg-white transition-shadow duration-300 data-scrolled:shadow-[0_8px_24px_-14px_rgba(15,15,15,0.28)]">
      <div className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-5 sm:px-8 xl:pr-[238.64px]">
        <Link
          href="/"
          className="font-display text-[20px] leading-7 font-bold tracking-[-1px] text-ink"
        >
          HACKLIVA
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 font-jakarta text-sm leading-5 font-medium text-[#1e1e24]">
            {courseNavLinks.map((link, index) => (
              <li
                key={link.href}
                style={{ "--i": index } as React.CSSProperties}
                className={`header-item ${link.badge ? "relative translate-y-[3px]" : ""}`}
              >
                {link.badge && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[calc(100%+3px)] left-1/2 flex -translate-x-1/2 flex-col items-center"
                  >
                    <span className="rounded-[4px] bg-[#242b6b] px-2 pt-0.5 pb-[2.13px] text-[10.5px] leading-[13.13px] font-semibold tracking-[0.263px] whitespace-nowrap text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
                      {link.badge}
                    </span>
                    <span className="h-1 w-2 border-x-4 border-t-4 border-x-transparent border-t-[#242b6b]" />
                  </span>
                )}
                <Link href={link.href} className="py-2 transition-colors hover:text-[#242b6b]">
                  {link.label}
                  {link.badge && <span className="sr-only"> ({link.badge})</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav links={courseNavLinks} className="lg:hidden" />
      </div>
      <HeaderEffects />
    </header>
  );
}
