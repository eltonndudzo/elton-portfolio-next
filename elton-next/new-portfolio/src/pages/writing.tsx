// pages/writing.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { GetServerSideProps } from "next";

const calSans = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-calsans",
});

type Poem = {
  title: string;
  body: string;
  slug: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function WritingPage({ poems }: { poems: Poem[] }) {
  return (
    <div className={`${calSans.variable} font-sans bg-[#2e1a15] text-[#f4eee6] min-h-screen px-6 pt-24 pb-12`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16"
      >
        Writing & Poetry
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
      >
        {/* Charwe */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          whileHover={{ scale: 1.015 }}
          className="group border border-[#5a3f39] rounded-xl p-6 bg-[#3a1e18] hover:bg-[#4b2a22] shadow transition-all duration-300"
        >
          <Link href="/charwe">
            <div>
              <div className="mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/new_cover1.PNG"
                  alt="Charwe Cover Art"
                  width={400}
                  height={250}
                  className="rounded-xl object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-semibold text-[#fcefe7] group-hover:underline">Charwe: A Novel</h2>
              <p className="text-[#dab9a5] mt-2 text-sm">
                A historical and spiritual reimagining of the story of Charwe, the spirit medium of Nehanda. My debut novella.
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Ipikai */}
        <motion.a
          href="https://ipikai.org/author/eltonndudzo/"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          custom={1}
          whileHover={{ scale: 1.015 }}
          className="group border border-[#5a3f39] rounded-xl p-6 bg-[#3a1e18] hover:bg-[#4b2a22] shadow transition-all duration-300"
        >
          <h2 className="text-xl font-semibold text-[#fcefe7] group-hover:underline">
            Poetry in Ipikai Journal
          </h2>
          <p className="text-[#dab9a5] mt-2 text-sm">
            A selection of my poems featured in Zimbabwe’s online poetry journal.
          </p>
        </motion.a>
      </motion.div>

      {/* Other Poems */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20 max-w-3xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          custom={2}
          className="text-2xl font-semibold text-center mb-10"
        >
          Other Poems
        </motion.h2>

        {poems.length === 0 ? (
          <p className="text-center text-[#a88d7f]">No poems found.</p>
        ) : (
          poems.map((poem, index) => (
            <motion.div
              key={poem.slug}
              variants={fadeInUp}
              custom={index + 3}
              className="mb-10 p-6 bg-[#3a1e18] border border-[#5a3f39] rounded-xl shadow hover:bg-[#4b2a22] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <Link href={`/poetry/${poem.slug}`}>
                <h3 className="text-xl font-semibold text-[#fcefe7] mb-2 group-hover:underline">
                  {poem.title}
                </h3>
              </Link>
              <pre className="whitespace-pre-wrap text-sm text-[#dab9a5] leading-relaxed line-clamp-4">
                {poem.body}
              </pre>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Blog Link CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <Link
          href="/blog"
          className="inline-block px-6 py-3 border border-[#dab9a5] text-[#fcefe7] rounded-full hover:bg-[#5a3f39] transition"
        >
          Visit Blog
        </Link>
      </motion.div>
    </div>
  );
}

// SERVER-SIDE FETCH
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/api/poem/", {
      headers: {
        Authorization: "Token 0ec5d37ca2e575e3f1ed64240174bbe64746e5d2",
      },
    });

    const poems = await res.json();

    return {
      props: {
        poems,
      },
    };
  } catch (error) {
    console.error("Error fetching poems:", error);
    return {
      props: {
        poems: [],
      },
    };
  }
};