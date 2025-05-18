import { GetServerSideProps } from 'next';
import axios from 'axios';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

interface PoemProps {
  poem: {
    title: string;
    body: string;
    slug: string;
  };
}

export default function Poem({ poem }: PoemProps) {
  return (
    <div className={`min-h-screen px-4 py-16 bg-gradient-to-b from-[#2e1a15] to-[#1a0e0a] text-[#f2e9e4] ${inter.variable} font-sans`}>
      <div className="max-w-3xl mx-auto">

        <Link
          href="/writing"
          className="text-sm text-[#bfa99c] hover:text-[#e8d9cb] transition mb-6 inline-block"
        >
          ← Back to All Poems
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-[#fdf6f0]">
          {poem.title}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none whitespace-pre-wrap prose-invert prose-p:text-[#f1e7dd] prose-headings:text-[#fef7f1] prose-a:text-[#d6bfae] hover:prose-a:text-[#f5e6d7]"
        >
          <ReactMarkdown>{poem.body}</ReactMarkdown>
        </motion.div>

        <div className="mt-16 border-t border-[#3a2a21] pt-8 text-center">
          <p className="text-lg font-medium text-[#e7d8cb]">Enjoyed this piece?</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(poem.title)}&url=${encodeURIComponent(`https://yourdomain.com/poem/${poem.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#d6bfae] hover:text-[#f4e5d5] transition"
            >
              Share on Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://yourdomain.com/poem/${poem.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#d6bfae] hover:text-[#f4e5d5] transition"
            >
              Share on Facebook
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;

  try {
    const res = await axios.get(
      `https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/api/poem/${slug}/`
    );
    const poem = res.data;

    return {
      props: { poem },
    };
  } catch (error) {
    console.error("Error fetching poem:", error);
    return { notFound: true };
  }
};
