import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetailPage = ({ postId }: { postId: number }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/api/posts/${postId}/`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => console.error(error));
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  const renderComments = (comments) => {
    return comments.map((comment) => (
      <div key={comment.id} className="my-4">
        <p className="font-semibold">{comment.author}</p>
        <p>{comment.content}</p>
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-4">
            {renderComments(comment.replies)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      
      <h2 className="mt-8">Comments</h2>
      {renderComments(post.comments)}
    </div>
  );
};

export default PostDetailPage;
