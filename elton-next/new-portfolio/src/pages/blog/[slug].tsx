import { GetServerSideProps } from 'next';
import axios from 'axios';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    slug: string;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className={`min-h-screen px-4 py-16 bg-gradient-to-b from-[#2e1a15] to-[#1a0e0a] text-[#f2e9e4] ${inter.variable} font-sans`}>
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-[#fdf6f0]">
          {post.title}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none whitespace-pre-wrap prose-invert prose-p:text-[#f1e7dd] prose-headings:text-[#fdf6f0] prose-a:text-[#d6bfae] hover:prose-a:text-[#f5e6d7]"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        <div className="mt-16 border-t border-[#3a2a21] pt-8 text-center">
          <p className="text-lg font-medium text-[#e7d8cb]">Enjoyed this post?</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#d6bfae] hover:text-[#f4e5d5] transition"
            >
              Share on Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/blog/${post.slug}`}
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
    const res = await axios.get(`https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/api/posts/${slug}/`);
    const post = res.data;

    return {
      props: { post },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return { notFound: true };
  }
};
