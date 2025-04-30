import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog'); // Updated path to content/blog
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', ''); // Remove the .md extension
    const fileContent = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      coverImage: data.coverImage || null,
    };
  });

  // Optional: sort by newest
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { props: { posts } };
}

const BlogPage = ({ posts }: { posts: BlogMeta[] }) => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 bg-white">
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="mb-4 rounded-xl w-full h-48 object-cover"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
