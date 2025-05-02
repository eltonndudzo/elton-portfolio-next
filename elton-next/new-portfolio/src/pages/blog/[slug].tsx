// pages/blog/[slug].tsx
import { GetServerSideProps } from 'next';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ post }: any) {
  return (
    <div className="min-h-screen px-4 py-12 bg-[#f8f5f2] text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  try {
    const res = await axios.get(`https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/admin/blog/post/${slug}/`);
    return {
      props: {
        post: res.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
