"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AboutMenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-3 md:p-4 w-full border border-gray-800 bg-black">
      <nav className="w-full px-10 relative flex justify-between items-center">
        <Link href={"/"} className="font-bold text-[#F00012] text-3xl">
          HACKLIVA
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="border lg:hidden border-gray-700 rounded-lg flex p-1 relative z-[60] bg-black text-white"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-5 px-4 xl:gap-10">
          <Link
            href="/About_Us"
            className="whitespace-nowrap text-base xl:text-lg cursor-pointer font-semibold text-white hover:underline hover:text-[#F00012] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/Training_Tracks"
            className="whitespace-nowrap text-base xl:text-lg font-semibold text-white hover:underline cursor-pointer hover:text-[#F00012] transition-colors"
          >
            Training Tracks
          </Link>
          <Link
            href="https://astraliva.com"
            className="whitespace-nowrap text-base xl:text-lg font-semibold text-white hover:underline cursor-pointer hover:text-[#F00012] transition-colors"
          >
            Astraliva Services
          </Link>
          <Link
            href="#"
            className="whitespace-nowrap text-base xl:text-lg font-semibold text-white hover:underline cursor-pointer hover:text-[#F00012] transition-colors"
          >
            Compliance & Audits
          </Link>
          <Link
            href="/Contact"
            className="whitespace-nowrap text-base xl:text-lg font-semibold text-white hover:underline cursor-pointer hover:text-[#F00012] transition-colors"
          >
            Contact
          </Link>
        </div>

        <Link
          href="/Contact"
          className="hidden lg:inline-flex shrink-0 items-center justify-center rounded-lg bg-[#F00012] px-5 py-2 text-base xl:px-6 xl:text-lg font-semibold text-white transition-colors hover:bg-[#D2000F]"
        >
          Get Started
        </Link>
      </nav>

      {/* Mobile Side Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col pt-24 px-6 gap-6 shadow-2xl`}
      >
        <Link
          href="/About_Us"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg cursor-pointer text-white hover:text-[#F00012] transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/Training_Tracks"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg cursor-pointer text-white hover:text-[#F00012] transition-colors"
        >
          Training Tracks
        </Link>
        <Link
          href="https://astraliva.com"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg cursor-pointer text-white hover:text-[#F00012] transition-colors"
        >
          Astraliva Services
        </Link>
        <Link
          href="#"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg cursor-pointer text-white hover:text-[#F00012] transition-colors"
        >
          Compliance & Audits
        </Link>
        <Link
          href="/Contact"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg cursor-pointer text-white hover:text-[#F00012] transition-colors"
        >
          Contact
        </Link>
        <Link
          href="/Contact"
          onClick={() => setIsMenuOpen(false)}
          className="inline-flex w-fit items-center justify-center rounded-lg bg-[#F00012] px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-[#D2000F]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
