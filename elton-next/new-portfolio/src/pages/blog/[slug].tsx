import { GetServerSideProps } from 'next';
import axios from 'axios';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Comment {
  id: number;
  name: string;
  content: string;
  created_at: string;
  parent: number | null;
  replies?: Comment[];
}

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    comments: Comment[];
    slug: string;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  const [comment, setComment] = useState({
    name: '',
    email: '',
    content: '',
  });
  const [comments, setComments] = useState(post.comments);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<Comment | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/api/posts/${post.slug}/comments/`, {
        name: comment.name,
        email: comment.email,
        content: comment.content,
        parent: replyingTo?.id || null,
      });

      // Reload comments from the server (recommended for nesting)
      const commentsRes = await axios.get(`https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/api/posts/${post.slug}/comments/`);
      setComments(commentsRes.data);

      setComment({ name: '', email: '', content: '' });
      setReplyingTo(null);
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReplyClick = (comment: Comment) => {
    setReplyingTo(comment);
  };

  const renderReplies = (replies: Comment[], depth = 1) => {
    return replies.map((reply) => (
      <div key={reply.id} className={`ml-${depth * 4} mt-4 border-l-2 pl-4`}>
        <div className="font-semibold">{reply.name}</div>
        <div className="text-sm text-gray-600">{reply.created_at}</div>
        <p className="mt-1">{reply.content}</p>
        <button className="text-blue-600 text-sm mt-2" onClick={() => handleReplyClick(reply)}>Reply</button>

        {reply.replies && reply.replies.length > 0 && renderReplies(reply.replies, depth + 1)}
      </div>
    ));
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-[#f8f5f2] text-gray-800 mt-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="border-l-4 pl-4 mb-6">
                <div className="font-semibold">{comment.name}</div>
                <div className="text-sm text-gray-600">{comment.created_at}</div>
                <p className="mt-2">{comment.content}</p>
                <button className="text-blue-600 mt-2" onClick={() => handleReplyClick(comment)}>Reply</button>

                {/* Render nested replies */}
                {comment.replies && comment.replies.length > 0 && renderReplies(comment.replies)}
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>

        {/* Comment Form */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">
            {replyingTo ? `Replying to ${replyingTo.name}` : 'Leave a Comment'}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={comment.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={comment.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="content">Comment</label>
              <textarea
                id="content"
                name="content"
                value={comment.content}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Comment'}
            </button>
          </form>
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

    const commentsRes = await axios.get(`https://obscure-tribble-7vp74w7gq59q3rpxp-8000.app.github.dev/api/posts/${slug}/comments/`);
    const comments = commentsRes.data;

    return {
      props: {
        post: {
          ...post,
          comments,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return { notFound: true };
  }
};
