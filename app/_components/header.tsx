"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname === "/") return null;

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/gallery", label: "GALERIE" },
    { href: "/aboutme", label: "À MON SUJET" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="bg-[#bea993] text-white px-5! py-2!">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl text-black">
          HUUNNCHOO
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-black! ${
                isActive(link.href) ? "text-black" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Burger button */}
        <button
          className="z-50 md:hidden flex flex-col justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-7 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#bea993] pt-16 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-start gap-10 px-5! pt-10! text-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-black ${
                isActive(link.href) ? "text-black font-bold" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}