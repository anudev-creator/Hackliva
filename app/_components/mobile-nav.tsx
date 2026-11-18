"use client";

import { ScrollLink } from "./scroll-link";
import { useEffect, useState } from "react";
import type { NavLink } from "./nav-links";

export function MobileNav({
  links,
  className = "md:hidden",
}: {
  links: NavLink[];
  /** Classes for the wrapper, e.g. the breakpoint where the desktop nav takes over. */
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className={`justify-self-end ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-zinc-900 hover:bg-zinc-100"
      >
        <span aria-hidden="true" className="relative block h-4 w-6">
          <span
            className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
              open ? "top-[7px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute top-[7px] left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-200 motion-reduce:transition-none ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
              open ? "top-[7px] -rotate-45" : "top-[14px]"
            }`}
          />
        </span>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="menu-panel absolute inset-x-0 top-full border-b border-zinc-200 bg-white shadow-sm"
        >
          <ul className="flex flex-col px-5 py-2 sm:px-10">
            {links.map((link, index) => (
              <li key={link.href} className="menu-item" style={{ "--i": index } as React.CSSProperties}>
                <ScrollLink
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base ${
                    link.featured
                      ? "font-medium text-brand-navy"
                      : "text-zinc-900"
                  }`}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
