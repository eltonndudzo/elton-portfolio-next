import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ content, metadata }: any) {
  return (
    <div className="min-h-screen px-4 py-12 bg-[#f8f5f2] text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{metadata.title}</h1>
        <div className="prose prose-lg prose-slate max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

const postsDirectory = path.join(process.cwd(), 'src/pages/content/blog');

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, '') }
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data: metadata, content } = matter(fileContents);

  return {
    props: {
      content,
      metadata,
    },
  };
};
