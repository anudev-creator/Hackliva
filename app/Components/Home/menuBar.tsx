"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-3 md:p-4 w-full border border-gray-400">
      <nav className="w-full px-10 relative flex justify-between items-center">
        <Link
          href={"/"}
          className="font-bold text-[#F00012] text-3xl"
        >
          HACKLIVA
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="border lg:hidden border-gray-300 rounded-lg flex p-1 relative z-[60] bg-white"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-5 px-4 xl:gap-10">
          <p className="whitespace-nowrap text-base xl:text-lg cursor-pointer font-semibold hover:underline hover:text-[#F00012] transition-colors">
            Home
          </p>
          <Link
            href="/Training_Tracks"
            className="whitespace-nowrap text-base xl:text-lg font-semibold hover:underline cursor-pointer hover:text-[#F00012] transition-colors"
          >
            Tracks
          </Link>
          <p className="whitespace-nowrap text-base xl:text-lg font-semibold hover:underline cursor-pointer hover:text-[#F00012] transition-colors">
            Courses
          </p>
          <Link
            href="/Contact"
            className="whitespace-nowrap text-base xl:text-lg font-semibold hover:underline cursor-pointer hover:text-[#F00012] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/About_Us"
            className="whitespace-nowrap text-base xl:text-lg font-semibold hover:underline cursor-pointer hover:text-[#F00012] transition-colors"
          >
            About Us
          </Link>
        </div>
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
        className={`fixed top-0 right-0 h-full w-64 bg-white border-l border-gray-300 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col pt-24 px-6 gap-6 shadow-2xl`}
      >
        <p className="text-lg cursor-pointer hover:text-[#F00012] transition-colors">
          Home
        </p>
        <Link
          href="/Training_Tracks"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg cursor-pointer hover:text-[#F00012] transition-colors"
        >
          Tracks
        </Link>
        <p className="text-lg cursor-pointer hover:text-[#F00012] transition-colors">
          Courses
        </p>
        <Link
          href="/Contact"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg cursor-pointer hover:text-[#F00012] transition-colors"
        >
          Contact
        </Link>
        <Link
          href="/About_Us"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg cursor-pointer hover:text-[#F00012] transition-colors"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
