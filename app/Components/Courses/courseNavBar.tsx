"use client";

import { useState } from "react";
import Link from "next/link";

export type CourseNavLink = {
  label: string;
  href: string;
  active?: boolean;
};

const navLinks: CourseNavLink[] = [
  { label: "Training Tracks", href: "/Training_Tracks", active: true },
  { label: "Security Researchers", href: "#" },
  { label: "CSOs", href: "#" },
  { label: "AI Engineers", href: "#" },
  { label: "About Us", href: "/About_Us" },
];

export default function CourseNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-black px-4 pt-6 sm:px-6 lg:px-10">
      <nav className="mx-auto flex w-full max-w-[1536px] items-center justify-between rounded-full bg-[#F2F2F2] px-6 py-3 lg:px-8">
        <Link href="/" className="shrink-0 text-xl font-bold text-[#0A0A0A]">
          HACKLIVA
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-7 px-6 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.5px] transition-colors duration-300 ${
                link.active
                  ? "text-[#F00012] underline decoration-2 underline-offset-[10px]"
                  : "text-[#555] hover:text-[#0A0A0A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <Link
            href="#"
            className="text-[13px] font-semibold uppercase tracking-[0.5px] text-[#555] transition-colors duration-300 hover:text-[#0A0A0A]"
          >
            Login
          </Link>
          <Link
            href="/Contact"
            className="text-[13px] font-semibold uppercase tracking-[0.5px] text-[#F00012] transition-colors duration-300 hover:text-[#D2000F]"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[#0A0A0A] lg:hidden"
        >
          <span className="material-symbols-outlined text-[20px]">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-64 flex-col gap-6 bg-black px-6 pt-24 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg transition-colors duration-300 ${
              link.active ? "text-[#F00012]" : "text-white hover:text-[#F00012]"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg text-white transition-colors duration-300 hover:text-[#F00012]"
        >
          Login
        </Link>
        <Link
          href="/Contact"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg text-[#F00012] transition-colors duration-300 hover:text-[#D2000F]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
