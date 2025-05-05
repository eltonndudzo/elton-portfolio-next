"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 px-6 transition-all duration-300 ${
        scrolled ? "py-2 backdrop-blur-md" : "py-4 backdrop-blur-lg"
      } bg-[rgba(201,181,160,0.2)] backdrop-saturate-150`}
    >
        <div className="max-w-6xl mx-auto flex justify-between items-center text-[#3d2b1f] font-semibold">
        <Link href="/" className="text-lg hover:text-yellow-400 transition duration-300">
          Elton
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/it" className="hover:text-yellow-400 transition duration-300">IT Services</Link>
          <Link href="/writing" className="hover:text-yellow-400 transition duration-300">Literary Work</Link>
          <Link href="/blog" className="hover:text-yellow-400 transition duration-300">Reviews & Reflections</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition duration-300">Contact</Link>
          <a href="/resume.pdf" download className="hover:text-yellow-400 transition duration-300">Resume</a>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-6 text-white text-lg">
          <li><Link href="/it" onClick={() => setMenuOpen(false)}>IT Services</Link></li>
          <li><Link href="/writing" onClick={() => setMenuOpen(false)}>Literary Work</Link></li>
          <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Reviews & Reflections</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><a href="/resume.pdf" download onClick={() => setMenuOpen(false)}>Resume</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
