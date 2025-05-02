import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"; // Import Link for navigation

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  created_at: string;
  slug: string; // Add slug field
  image?: string;
  coverImage?: string; // optional override for UI
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    axios
      .get("https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/admin/blog/post/")
      .then((response) => {
        // Map `image` to `coverImage` for consistency
        console.log("API response:", response.data);
        const formatted = response.data.map((post: BlogPost) => ({
          ...post,
          coverImage: post.image || null,
        }));
        setPosts(formatted);
      })
      .catch((error) => {
        console.error("Failed to fetch blog posts:", error);
      });
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.slug}`}>  {/* Wrap the card with Link */}
          <div className="bg-white rounded-2xl shadow p-4 cursor-pointer hover:shadow-lg transition-all">
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="rounded-xl mb-3 w-full h-48 object-cover"
              />
            )}
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <p className="text-sm text-gray-400 mt-2">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
