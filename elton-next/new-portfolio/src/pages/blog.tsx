'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    axios.get('https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/api/posts/', {
      headers: {
        'Authorization': `Token 0ec5d37ca2e575e3f1ed64240174bbe64746e5d2`,
      },
    })
    .then(response => {
      if (Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        console.error("Unexpected API response:", response.data);
      }
    })
    .catch(error => {
      console.error('Failed to fetch blog posts:', error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="pt-[80px] text-center">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto pt-[80px] px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">From the Blog</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map(post => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className="bg-white border rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-3">
                  {post.content ? post.content.slice(0, 120) + '...' : 'No content available'}
                </p>
                <p className="text-blue-600 font-medium">Read more →</p>
              </div>
        </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
