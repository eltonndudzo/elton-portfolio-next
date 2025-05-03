"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full bg-gray-900 bg-opacity-90 px-6 shadow-md fixed top-0 transition-all duration-300 z-50 backdrop-blur-lg ${scrolled ? "py-2" : "py-4"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white font-semibold">
        <Link href="/" className="text-lg hover:text-yellow-400 transition duration-300">Elton</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/it" className="hover:text-yellow-400">IT Services</Link>
          <Link href="/writing" className="hover:text-yellow-400">Literary Work</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
          <a href="/resume.pdf" download className="hover:text-yellow-400">Resume</a>
        </div>
        <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-6 text-white text-lg">
          <li><Link href="/it" onClick={() => setMenuOpen(false)}>IT Services</Link></li>
          <li><Link href="/writing" onClick={() => setMenuOpen(false)}>Literary Work</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><a href="/resume.pdf" download onClick={() => setMenuOpen(false)}>Resume</a></li>
        </ul>
      )}
    </nav>
  );
};

const WelcomeSection = () => (
  <motion.section
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#f9f6f1] to-[#e7d7c9] text-[#4b3832] px-6 overflow-hidden"
  >
    <div className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gradient-to-br from-[#f8e7d1] to-[#e0c4a8] rounded-full blur-3xl opacity-30 -z-10 top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
      <motion.img
        src="/profile7.png"
        alt="Elton's profile"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl md:mr-10"
      />
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-6 md:mt-0 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-5xl font-bold">Hie, I'm Elton.</h1>
        <p className="mt-4 max-w-xl text-lg text-[#5c4438]">
          I write code like poetry and poetry like code. How's the sound of that?
        </p>
        <blockquote className="mt-6 italic text-[#7a5e49] max-w-md">
          I do both... with heart, with edge. Let me just show you how.
        </blockquote>
      </motion.div>
    </div>
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

  const handleSectionClick = (section: "it" | "writing") => {
    if (section === "it") {
      router.push("/it");
    } else {
      router.push("/writing");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen relative bg-[#e7d7c9]">
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
          <p className="mt-2 text-sm md:text-lg">
            Web dev and automation... let’s build.
          </p>
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
          <p className="mt-2 text-sm md:text-lg">
            Books, poetry, essays... art that remembers.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const BlogAndYouTubePreview = () => (
  <section className="py-20 bg-[#f9f6f0] px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-[#3d2c1e] mb-12">Latest Creations</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#f2ede4] rounded-2xl shadow-md border border-[#e5e0d6] p-8">
          <h3 className="text-2xl font-semibold font-serif text-[#3d2c1e] mb-4">Featured Blog Post</h3>
          <p className="text-[#5e4b39] mb-6">My latest insights on tech, storytelling, and digital artistry.</p>
          <a href="/blog/latest" className="text-[#6b4f3b] hover:text-[#8c6c54] underline text-lg">Read Now →</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#f2ede4] rounded-2xl shadow-md border border-[#e5e0d6] p-8">
          <h3 className="text-2xl font-semibold font-serif text-[#3d2c1e] mb-4">Latest YouTube Review</h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
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

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <WelcomeSection />
      <SplitShowcase />
      <BlogAndYouTubePreview />
    </div>
  );
};

export default LandingPage;
