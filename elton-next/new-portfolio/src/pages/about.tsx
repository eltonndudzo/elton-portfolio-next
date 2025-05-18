'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import Image from 'next/image';
import Head from 'next/head';

const geist = localFont({
  src: '../fonts/Geist-Regular.woff2',
  variable: '--font-geist',
});

export default function AboutPage() {
  return (
    <div
      className={`min-h-screen px-6 py-24 bg-gradient-to-br from-[#1c1a19] via-[#1a1816] to-[#0e0e11] text-[#e0e0e0] ${geist.variable} font-sans`}
    >
      <Head>
        <title>About | Elton Ndudzo</title>
      </Head>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-[#444] shadow-lg">
            <Image
              src="/Elton_Ndudzo_Profile.PNG"
              alt="Elton Ndudzo"
              width={192}
              height={192}
              className="object-cover w-full h-full filter grayscale"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#f5f5f5]">
            Hello, I’m Elton Ndudzo
          </h1>

          <p className="mb-4 text-[#ccc] text-base">
            I’m a Zimbabwean creative writer and computer engineer passionate about combining artistic clarity with technical precision.
            Whether through a poetic verse or a cleanly structured API, I care about intent and impact.
          </p>

          <p className="mb-4 text-[#ccc] text-base">
            My journey bridges literature and software engineering. With a background in computer engineering, I develop full-stack web applications and custom digital experiences using tools like Django and Next.js.
            Simultaneously, I continue to explore storytelling through poetry, essays, and blogs.
          </p>

          <p className="mb-4 text-[#ccc] text-base">
            I believe in thoughtful design, clean code, and words that carry weight. Whether you're here for tech or for literatute, you're in the right place.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-[#1e3a5f] text-white text-sm rounded hover:bg-[#27496d] transition"
          >
            View Résumé
          </a>
        </motion.div>
      </div>
    </div>
  );
}
