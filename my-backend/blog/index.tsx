import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image?: string;
  created_at: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfaf6] px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-200"
          >
            {post.image && (
              <img
                src={`http://localhost:8000${post.image}`}
                alt={post.title}
                className="mb-4 w-full h-48 object-cover rounded"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

