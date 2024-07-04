"use client";
// components/CommentComponent.tsx
import React, { useEffect, useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import ReplyModal from "./ReplyModal";
import { Comment as CommentType } from "@/types";
import { postCommentToPost } from "@/actions/blog.actions";
import { Session } from "next-auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

interface Props {
  postId: number;
  session: Session | null;
  initialComments: CommentType[];
}

const CommentComponent: React.FC<Props> = ({
  postId,
  session,
  initialComments,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [replyTo, setReplyTo] = useState<number | null>(null); // State for replyTo

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const initializeShowReplies = (
    commentsData: CommentType[]
  ): CommentType[] => {
    return commentsData.map((comment) => ({
      ...comment,
      showReplies: false,
      children: comment.children ? initializeShowReplies(comment.children) : [],
    }));
  };

  const toggleReplies = (commentId: number) => {
    const updatedComments = toggleRepliesRecursive(comments, commentId);
    setComments(updatedComments);
  };

  const toggleRepliesRecursive = (
    comments: CommentType[],
    commentId: number
  ): CommentType[] => {
    return comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, showReplies: !comment.showReplies };
      } else if (comment.children && comment.children.length > 0) {
        return {
          ...comment,
          children: toggleRepliesRecursive(comment.children, commentId),
        };
      }
      return comment;
    });
  };

  const handleReplyClick = (commentId: number) => {
    setReplyTo(commentId); // Set replyTo state when clicking reply
    onOpen(); // Open the modal
  };

  const handlePostComment = async (newComment: string) => {
    try {
      if (!newComment.trim()) {
        toast.warning("Please enter a comment.");
        return;
      }

      await postCommentToPost(
        postId,
        { content: newComment },
        session?.user?.email!
      );
      fetchComments(); // Refresh comments after posting
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://www.maungshine.site/api/posts/comments/${postId}`
      );
      const commentsData = await response.json();
      if (commentsData) {
        setComments(initializeShowReplies(commentsData));
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handlePostReply = async (replyComment: string) => {
    try {
      if (!replyComment.trim()) {
        alert("Please enter a reply.");
        return;
      }

      await postCommentToPost(
        postId,
        { content: replyComment, parentId: replyTo as number },
        session?.user?.email!
      );
      fetchComments(); // Refresh comments after posting
      onClose(); // Close the modal
      setReplyTo(null); // Reset replyTo after closing modal
    } catch (error) {
      console.error("Error posting reply:", error);
      // Handle error posting reply
    }
  };

  return (
    <div className="wp-content md:px-20 p-4 mt-8">
      <h2 className="text-3xl font-bold mb-4">Comments</h2>

      <CommentList
        comments={comments}
        onReply={handleReplyClick}
        toggleReplies={toggleReplies}
      />

      {session ? (
        <CommentForm
          session={session}
          postId={postId}
          handlePostComment={handlePostComment}
        />
      ) : (
        <p className="mt-4">
          <button className="text-blue-500 underline" onClick={onOpen}>
            Sign in
          </button>{" "}
          to post a comment.
        </p>
      )}

      <ReplyModal
        session={session}
        isOpen={isOpen}
        onClose={onClose}
        handlePostReply={handlePostReply}
        setReplyTo={setReplyTo}
      />
      <ToastContainer />
    </div>
  );
};

export default CommentComponent;
