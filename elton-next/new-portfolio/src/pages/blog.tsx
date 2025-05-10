'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  slug: string;
  image?: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/api/posts/', {
        headers: {
          Authorization: `Token 0ec5d37ca2e575e3f1ed64240174bbe64746e5d2`,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('Unexpected API response:', response.data);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch blog posts:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="pt-[80px] text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto pt-[80px] px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#3d2c1e]">From the Blog</h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {posts.map((post, index) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-[#e5e0d6] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-[#3d2c1e]">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.content
                      ? post.content.slice(0, 140) + '...'
                      : 'No content available'}
                  </p>
                </div>
                <motion.p
                  whileHover={{ x: 4 }}
                  className="text-[#4b3832] font-medium mt-auto transition-transform duration-200"
                >
                  Read more →
                </motion.p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
