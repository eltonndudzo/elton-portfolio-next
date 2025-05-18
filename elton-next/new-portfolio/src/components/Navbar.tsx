"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { calSans } from "@/fonts"; // adjust this path if needed

const navItems = [
  { href: "/about", label: "About Me" },
  { href: "/it", label: "IT Services" },
  { href: "/writing", label: "Literary Work" },
  { href: "/contact", label: "Contact" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-neutral-800">
        <Link
          href="/"
          className={`text-lg tracking-tight font-semibold hover:text-black transition ${calSans.className}`}
        >
          ELTON NDUDZO
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                download
                className="hover:text-black text-neutral-600 transition"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-black transition ${
                  pathname === item.href ? "text-black" : "text-neutral-600"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-neutral-800"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 space-y-4 bg-white text-neutral-700 text-base shadow-md">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                download
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block ${
                  pathname === item.href ? "font-semibold text-black" : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
