import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

const WritingPage = () => {
  const [poems, setPoems] = useState<Poem[]>([]);

  useEffect(() => {
    fetch("https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/api/poem/", {
      headers: {
        'Authorization': 'Token 0ec5d37ca2e575e3f1ed64240174bbe64746e5d2',
      },
    })
      .then(res => res.json())
      .then(data => setPoems(data))
      .catch(err => console.error("Error fetching poems:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f6f0] px-6 pt-24 pb-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-[#4b3832] text-center mb-12"
      >
        Books & Writings by Elton Ndudzo
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {/* Charwe */}
        <motion.div
          variants={fadeInUp}
          custom={0}
          whileHover={{ scale: 1.02 }}
          className="group border rounded-2xl p-6 bg-white shadow hover:shadow-xl transition-all duration-300"
        >
          <Link href="/charwe">
            <div>
              <div className="mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/the_cover.PNG"
                  alt="Charwe Cover Art"
                  width={400}
                  height={250}
                  className="rounded-xl object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl font-semibold text-[#4b3832] group-hover:underline">
                Charwe
              </h2>
              <p className="text-[#6b4f3b] mt-2">
                A historical and spiritual reimagining of the story of Charwe, the
                spirit medium of Nehanda. My debut novella.
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
          whileHover={{ scale: 1.02 }}
          className="group border rounded-2xl p-6 bg-white shadow hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-[#4b3832] group-hover:underline">
            Poetry in Ipikai Journal
          </h2>
          <p className="text-[#6b4f3b] mt-2">
            A selection of my poems featured in Zimbabwe’s online poetry
            journal.
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
          className="text-3xl font-semibold text-[#4b3832] text-center mb-10"
        >
          Other Poems
        </motion.h2>

        {poems.length === 0 ? (
          <p className="text-center text-[#6b4f3b]">Loading poems...</p>
        ) : (
          poems.map((poem, index) => (
            <motion.div
              key={poem.slug}
              variants={fadeInUp}
              custom={index + 3}
              className="mb-12 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <Link href={`/poetry/${poem.slug}`}>
                <h3 className="text-2xl font-bold text-[#4b3832] mb-4 group-hover:underline">
                  {poem.title}
                </h3>
              </Link>
              <pre className="whitespace-pre-wrap text-[#6b4f3b] leading-relaxed font-serif line-clamp-4">
                {poem.body}
              </pre>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default WritingPage;
