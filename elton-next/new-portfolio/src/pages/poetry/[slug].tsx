import { GetServerSideProps } from 'next';
import axios from 'axios';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PoemProps {
  poem: {
    title: string;
    body: string;
    slug: string;
  };
}

export default function Poem({ poem }: PoemProps) {
  return (
    <div className="min-h-screen px-4 py-12 bg-[#f8f5f2] text-gray-800 mt-16">
      <div className="max-w-3xl mx-auto">

        <Link href="/writing" className="text-blue-600 hover:underline mb-6 inline-block text-sm">
          ← Back to All Poems
        </Link>

        <h1 className="text-4xl font-extrabold tracking-tight mb-8 leading-tight text-brown-900 font-serif">
          {poem.title}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg prose-slate max-w-none mb-12 whitespace-pre-wrap prose-headings:text-brown-900 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800"
        >
          <ReactMarkdown>{poem.body}</ReactMarkdown>
        </motion.div>

        <div className="mt-16 border-t pt-8 text-center">
          <p className="text-lg font-medium">Enjoyed this piece?</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(poem.title)}&url=${encodeURIComponent(`https://yourdomain.com/poem/${poem.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600 transition"
            >
              Share on Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://yourdomain.com/poem/${poem.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600 transition"
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
      props: {
        poem,
      },
    };
  } catch (error) {
    console.error("Error fetching poem:", error);
    return { notFound: true };
  }
};
