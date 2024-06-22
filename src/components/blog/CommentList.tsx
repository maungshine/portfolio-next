// components/CommentList.tsx
import React from "react";
import { Comment as CommentType } from "@/types";
import Comment from "./Comment";

interface Props {
  comments: CommentType[];
  onReply: (commentId: number) => void;
  toggleReplies: (commentId: number) => void;
}

const CommentList: React.FC<Props> = ({ comments, onReply, toggleReplies }) => {
  return (
    <div>
      {comments && comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onReply={onReply}
          toggleReplies={toggleReplies}
        />
      ))}
    </div>
  );
};

export default CommentList;
