// components/Comment.tsx
import React from "react";
import { Comment as CommentType } from "@/types";
import { Button } from "@nextui-org/react";

interface Props {
  comment: CommentType;
  onReply: (commentId: number) => void;
  toggleReplies: (commentId: number) => void;
}

const Comment: React.FC<Props> = ({ comment, onReply, toggleReplies }) => {
  const renderHTML = (html: string) => ({ __html: html });

  const handleReply = () => onReply(comment.id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust formatting based on your requirements
  };

  return (
    <div
      key={comment.id}
      className="px-4 pt-4"
    >
      <div className="flex gap-2 items-center">
        <p className="font-semibold text-lg text-gray-800 dark:text-text-dark">
          {comment.author_name}
        </p>
        <p className="text-sm text-gray-400 font-semibold">
          {formatDate(comment.date)}
        </p>
      </div>
      <div
        className="comment-content"
        dangerouslySetInnerHTML={renderHTML(comment.content.rendered)}
      />

      {/* Reply Button */}
      <Button
        variant="flat"
        className="text-blue-500 underline mt-2 bg-transparent"
        onClick={handleReply}
      >
        Reply
      </Button>

      {/* Toggle Replies Button */}
      {comment.children && comment.children.length > 0 && (
        <Button
        variant="flat"
          className="text-blue-500 underline mt-2 bg-transparent"
          onClick={() => toggleReplies(comment.id)}
        >
          {comment.showReplies ? "Hide Replies" : "View Replies"}
        </Button>
      )}

      {/* Render Child Comments */}
      {comment.showReplies && comment.children && (
        <div className="ml-4 mt-2">
          {comment.children.map((childComment) => (
            <Comment
              key={childComment.id}
              comment={childComment}
              onReply={onReply}
              toggleReplies={toggleReplies}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
