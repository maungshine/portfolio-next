"use client";
// components/CommentForm.tsx
import React, { useState } from "react";
import { Session } from "next-auth";

interface Props {
  postId: number;
  handlePostComment: (newComment: string) => void;
  session: Session | null;
}

const CommentForm: React.FC<Props> = ({
  postId,
  handlePostComment,
  session,
}) => {
  const [newComment, setNewComment] = useState<string>("");

  return (
    <>
      <textarea
        className="bg-[#f8f7ff] focus:outline-none focus:border focus:border-btnDarkBlue w-full p-2 mt-4 border rounded"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Enter your comment..."
        rows={4}
      />
      <button
        className="comment-button bg-btnDarkBlue hover:bg-btnDarkBlue/80 text-white py-2 px-4 rounded mt-2"
        onClick={() => {
          handlePostComment(newComment);
          setNewComment("");
        }}
      >
        Post Comment
      </button>
    </>
  );
};

export default CommentForm;
