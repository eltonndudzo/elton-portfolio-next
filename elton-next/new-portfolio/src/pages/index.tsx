"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

interface SplitShowcaseProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
  activeSection: string | null;
}

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
      className={`w-full bg-gray-900 bg-opacity-90 px-6 shadow-md fixed top-0 transition-all duration-300 z-50 backdrop-blur-lg ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white font-semibold">
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

      {/* Mobile Menu */}
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

const WelcomeSection = () => (
  <motion.section
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#f9f6f1] to-[#e7d7c9] text-[#4b3832] px-6 overflow-hidden"
  >
    <div className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gradient-to-br from-[#f8e7d1] to-[#e0c4a8] rounded-full blur-3xl opacity-30 -z-10 top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>

    <div className="flex flex-col items-center md:items-start md:flex-row">
      <motion.img
        src="/profile7.png"
        alt="Elton's profile"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl"
        style={{ objectPosition: "top" }}
      />

      <div className="absolute inset-0 z-[0] pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-20 transform -skew-y-3 bg-[#c9b5a0] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-20 transform skew-y-12 bg-[#c9b5a0] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 transform skew-y--20 bg-[#c9b5a0] opacity-40"></div>
        <div className="absolute top-0 right-0 w-3/4 h-20 transform skew-y-20 bg-[#c9b5a0] opacity-30"></div>
      </div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-6 md:mt-0 md:ml-10 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Hey there, I'm Elton.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[#5c4438]">
          I code like I write: with precision, passion, and a bit of poetry.
        </p>
        <blockquote className="mt-6g italic text-[#7a5e49] max-w-md">
          Explore my craft as both a software engineer and a fictional writer.
        </blockquote>
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10"
    >
      <div className="text-[#4b3832] text-3xl">⬇</div>
    </motion.div>
  </motion.section>
);

const SplitShowcase: React.FC<SplitShowcaseProps> = ({ setActiveSection, activeSection }) => (
  <div className="relative flex h-screen bg-[#f9f6f0]">
  <div className="relative flex flex-col md:flex-row h-auto md:h-screen bg-[#f9f6f0]">
    {/* IT SIDE */}
    <motion.div
      className={`w-full md:w-1/2 h-full p-8 flex flex-col justify-center transition-all duration-500 relative overflow-hidden ${
      activeSection === "it" ? "md:w-2/3" : ""
      } border-b-4 md:border-b-0 md:border-r-4 border-[#e5e2db]`}
      onMouseEnter={() => setActiveSection("it")}
      onMouseLeave={() => setActiveSection(null)}
    >
      {/* Diagonal line overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            rgba(128, 90, 60, 0.06),
            rgba(128, 90, 60, 0.06) 1px,
            transparent 2px,
            transparent 40px
          )`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/svg/tech-pattern.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      <div className="relative z-10 backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-[#3d2c1e]">Software & IT Solutions</h2>
        <p className="mt-4 text-[#5e4b39]">
          Web development, automation, and custom-built apps to solve real problems.
        </p>
        <Link
          href="/it"
          className="mt-6 inline-block bg-[#6b4f3b] hover:bg-[#8c6c54] text-white py-2 px-6 rounded-full transition duration-300"
        >
          Discover More
        </Link>
      </div>
    </motion.div>

    {/* WRITING SIDE */}
    <motion.div
      className={`w-full md:w-1/2 h-full p-8 flex flex-col justify-center transition-all duration-500 relative overflow-hidden ${
      activeSection === "writing" ? "md:w-2/3" : ""
      } border-t-4 md:border-t-0 md:border-l-4 border-[#e5e2db]`}
      onMouseEnter={() => setActiveSection("writing")}
      onMouseLeave={() => setActiveSection(null)}
    >
      {/* Diagonal line overlay (opposite direction) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            225deg,
            rgba(128, 90, 60, 0.06),
            rgba(128, 90, 60, 0.06) 1px,
            transparent 2px,
            transparent 40px
          )`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/svg/lit-pattern.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      <div className="relative z-10 backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-[#3d2c1e]">Writing & Storytelling</h2>
        <p className="mt-4 text-[#5e4b39]">
          Books, blogs, reviews, and soul-stirring narratives from Africa and beyond.
        </p>
        <Link
          href="/writing"
          className="mt-6 inline-block bg-[#6b4f3b] hover:bg-[#8c6c54] text-white py-2 px-6 rounded-full transition duration-300"
        >
          Read My Work
        </Link>
      </div>
    </motion.div>
  </div>
  </div>
);

const BlogAndYouTubePreview = () => (
  <section className="py-20 bg-[#f9f6f0] px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-[#3d2c1e] mb-12">
        Latest Creations
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#f2ede4] rounded-2xl shadow-md border border-[#e5e0d6] p-8 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold font-serif text-[#3d2c1e] mb-4">
            Featured Blog Post
          </h3>
          <p className="text-[#5e4b39] leading-relaxed mb-6">
            My latest insights on tech, storytelling, and digital artistry.
          </p>
          <a
            href="/blog/latest"
            className="text-[#6b4f3b] hover:text-[#8c6c54] underline text-lg"
          >
            Read Now →
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#f2ede4] rounded-2xl shadow-md border border-[#e5e0d6] p-8 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold font-serif text-[#3d2c1e] mb-4">
            Latest YouTube Review
          </h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-inner border border-[#e5e0d6]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#f9f6f0] py-10 px-6 border-t border-[#e5e0d6]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
      <div className="text-[#3d2c1e] font-serif text-lg">
        © {new Date().getFullYear()} Elton Ndudzo · Built with ❤️
      </div>
      <div className="flex space-x-6">
        <a href="https://github.com/eltonndudzo" target="_blank" rel="noopener noreferrer" className="text-[#3d2c1e] hover:text-[#6b4f3b] transition-colors duration-300 text-2xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/elton-ndudzo-790b6a1ba" target="_blank" rel="noopener noreferrer" className="text-[#3d2c1e] hover:text-[#6b4f3b] transition-colors duration-300 text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/elton_ndudzo" target="_blank" rel="noopener noreferrer" className="text-[#3d2c1e] hover:text-[#6b4f3b] transition-colors duration-300 text-2xl">
          <FaTwitter />
        </a>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      <Navbar />
      <WelcomeSection />
      <SplitShowcase activeSection={activeSection} setActiveSection={setActiveSection} />
      <BlogAndYouTubePreview />
      <Footer />
    </div>
  );
};

export default LandingPage;