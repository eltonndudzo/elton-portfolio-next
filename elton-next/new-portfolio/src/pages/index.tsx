"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";

const navLinks = [
  { href: "/it", label: "IT Services" },
  { href: "/writing", label: "Literary Work" },
  { href: "/blog", label: "Reviews & Reflections" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className={`w-full fixed top-0 z-50 px-6 shadow-md backdrop-blur-lg transition-all duration-300 ${scrolled ? "py-2" : "py-4"} ${darkMode ? "bg-gray-900/90" : "bg-white/90"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center font-semibold text-sm">
        <Link href="/" className="text-lg text-primary dark:text-white hover:text-yellow-400 transition duration-300">Elton</Link>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-yellow-400 transition-colors duration-200 ${pathname === href ? "text-yellow-400" : "text-gray-700 dark:text-gray-200"}`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="hover:text-yellow-400 text-gray-700 dark:text-gray-200"
          >
            Resume
          </a>
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-700 dark:text-gray-200"
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>
        </div>
        <button
          className="md:hidden text-3xl text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-6 text-lg text-gray-800 dark:text-white">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" download onClick={() => setMenuOpen(false)}>Resume</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

// ... (rest of your imports stay the same)

const WelcomeSection = () => (
  <motion.section
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#f9f6f1] to-[#e7d7c9] dark:from-[#1e1b18] dark:to-[#2d2420] text-[#4b3832] dark:text-white px-6 overflow-hidden"
    id="welcome"
  >
    {/* Grain Texture Overlay */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.015)',
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.05),
          rgba(0, 0, 0, 0.05) 1px,
          transparent 0px,
          transparent 1px
        )`
      }}
    />

    {/* Background Glow */}
    <div className="absolute w-[36rem] h-[36rem] bg-gradient-to-br from-[#f8e7d1] to-[#e0c4a8] dark:from-[#382e2b] dark:to-[#4b3d37] rounded-full blur-3xl opacity-20 -z-10 top-[45%] left-[60%] transform -translate-x-1/2 -translate-y-1/2" />

    {/* Profile Image */}
    <motion.img
      src="/profile7.png"
      alt="Elton's profile"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-48 h-48 md:w-80 md:h-80 object-contain rounded-2xl shadow-xl md:mr-10 z-10"
    />

    {/* Text Section */}
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="mt-6 md:mt-0 text-center md:text-left md:border-l md:pl-10 md:border-[#d6bfa8] dark:md:border-[#3a2f29] z-10"
    >
      <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm Elton.</h1>
      <p className="text-sm tracking-wide text-[#7a5e49] dark:text-[#cbbcae] mt-2">
        Soko Mukanya
      </p>
      <p className="mt-4 max-w-xl text-lg">
        I’m a writer and developer crafting words and code into tools, stories, and experiences.
      </p>
      <blockquote className="mt-6 italic max-w-md text-[#7a5e49] dark:text-[#cbbcae]">
        This is my portfolio. But really, it's a living story.
      </blockquote>
    </motion.div>

    {/* Scroll Down Hint */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-6 text-sm text-[#7a5e49] dark:text-[#cbbcae] animate-bounce z-10"
    >
      ↓ scroll to explore
    </motion.div>
  </motion.section>
);

const SplitShowcase = () => {
  const [activeSection, setActiveSection] = useState<"it" | "writing" | null>(null);
  const router = useRouter();

  const baseStyle =
    "transition-all duration-700 ease-in-out flex items-center justify-center text-white h-[80vh] md:h-[90vh] px-4 text-center cursor-pointer overflow-hidden";

  const backgroundLines = (direction: "left" | "right") =>
    `absolute inset-0 pointer-events-none z-0 ${
      direction === "left" ? "bg-diagonal-left" : "bg-diagonal-right"
    }`;

  const handleSectionClick = (section: "it" | "writing") => router.push(`/${section}`);

  return (
    <div
      id="splitshowcase"
      className="flex flex-col md:flex-row h-screen relative bg-[#e7d7c9] dark:bg-[#1a1410]"
    >
      <div
        onMouseEnter={() => setActiveSection("it")}
        onMouseLeave={() => setActiveSection(null)}
        onClick={() => handleSectionClick("it")}
        className={`relative w-full md:w-1/2 ${baseStyle} ${
          activeSection === "it"
            ? "md:w-[60%] bg-zinc-800 z-10"
            : activeSection === "writing"
            ? "md:w-[40%] bg-transparent"
            : "bg-zinc-800"
        }`}
      >
        <div className={backgroundLines("left")} />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: activeSection === "writing" ? 0.5 : 1,
            scale: activeSection === "it" ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold">IT Services</h2>
          <p className="mt-2 text-sm md:text-lg">Web dev and automation... let’s build.</p>
        </motion.div>
      </div>

      <div
        onMouseEnter={() => setActiveSection("writing")}
        onMouseLeave={() => setActiveSection(null)}
        onClick={() => handleSectionClick("writing")}
        className={`relative w-full md:w-1/2 ${baseStyle} ${
          activeSection === "writing"
            ? "md:w-[60%] bg-[#331c15] z-10"
            : activeSection === "it"
            ? "md:w-[40%] bg-transparent"
            : "bg-[#331c15]"
        }`}
      >
        <div className={backgroundLines("right")} />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: activeSection === "it" ? 0.5 : 1,
            scale: activeSection === "writing" ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Creative Writing</h2>
          <p className="mt-2 text-sm md:text-lg">Books, poetry, essays... art that remembers.</p>
        </motion.div>
      </div>
    </div>
  );
};

const BlogAndYouTubePreview = () => (
  <section className="py-20 bg-[#f9f6f0] dark:bg-[#1d1915] px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-[#3d2c1e] dark:text-[#cdb6a6] mb-12">Latest Creations</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#f2ede4] dark:bg-[#2c241f] rounded-2xl shadow-md border border-[#e5e0d6] dark:border-[#3a312a] p-8">
          <h3 className="text-2xl font-semibold font-serif mb-4">Featured Blog Post</h3>
          <p className="mb-6">My latest insights on tech, storytelling, and digital artistry.</p>
          <Link href="/blog" className="text-[#6b4f3b] dark:text-[#d0a77f] hover:underline text-lg">Read Now →</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#f2ede4] dark:bg-[#2c241f] rounded-2xl shadow-md border border-[#e5e0d6] dark:border-[#3a312a] p-8">
          <h3 className="text-2xl font-semibold font-serif mb-4">Latest YouTube Review</h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/oj0cpYDYQYU"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg w-full h-full"
            />
          </div>
        </motion.div>
      </div>
        </div>
      </section>
);

const LandingPage = () => (
  <main className="flex flex-col font-sans min-h-screen bg-white dark:bg-[#120f0d] text-gray-900 dark:text-white">
    <Navbar />
    <WelcomeSection />
    <SplitShowcase />
    <BlogAndYouTubePreview />
    </main>
);

export default LandingPage;