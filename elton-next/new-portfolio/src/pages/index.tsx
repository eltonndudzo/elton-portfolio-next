"use client";

import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function LandingPage() {
  const router = useRouter();
  const [hovered, setHovered] = useState<"it" | "writing" | null>(null);

  return (
    <div
      className={`relative h-screen w-full flex flex-col ${inter.variable} font-sans bg-[#0e0e11]`}
    >
      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="w-full text-center mt-20 z-30 pointer-events-none"
      >
        <h1 className="text-xl md:text-3xl text-gray-100 font-medium">Hi, I'm Elton</h1>
        <p className="text-sm md:text-base text-gray-400 mt-1 tracking-wide">Choose your path</p>
      </motion.div>

      {/* Panels */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* IT Section */}
        <motion.div
          onClick={() => router.push("/it")}
          onMouseEnter={() => setHovered("it")}
          onMouseLeave={() => setHovered(null)}
          className={`group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ${
            hovered === "it" ? "bg-zinc-800" : "bg-zinc-900"
          }`}
        >
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <motion.h1
            className="text-3xl md:text-5xl font-semibold text-white z-20"
            animate={{ scale: hovered === "it" ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            IT Services
          </motion.h1>
          <p className="text-sm md:text-lg text-gray-400 mt-2 z-20">
            Web dev, automation, systems
          </p>
        </motion.div>

        {/* Writing Section */}
        <motion.div
          onClick={() => router.push("/writing")}
          onMouseEnter={() => setHovered("writing")}
          onMouseLeave={() => setHovered(null)}
          className={`group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ${
            hovered === "writing" ? "bg-[#3a1e18]" : "bg-[#2e1a15]"
          }`}
        >
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <motion.h1
            className="text-3xl md:text-5xl font-semibold text-white z-20"
            animate={{ scale: hovered === "writing" ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Creative Writing
          </motion.h1>
          <p className="text-sm md:text-lg text-gray-300 mt-2 z-20">
            Books, poems, essays — soulbound art
          </p>
        </motion.div>
      </div>
    </div>
  );
}
