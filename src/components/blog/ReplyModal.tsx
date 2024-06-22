"use client";
// components/ReplyModal.tsx
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setReplyTo: React.Dispatch<React.SetStateAction<number | null>>;
  handlePostReply: (replyComment: string) => void;
}

const ReplyModal: React.FC<Props> = ({
  isOpen,
  onClose,
  setReplyTo,
  handlePostReply,
}) => {
  const [replyComment, setReplyComment] = useState<string>("");

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title-reply"
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setReplyTo(null); // Ensure replyTo is reset on modal close
      }}
    >
      <ModalContent className="p-8">
        <ModalHeader>
          <h2
            id="modal-title-reply"
            className="text-lg font-bold text-center w-full"
          >
            Post a Reply
          </h2>
        </ModalHeader>
        <ModalBody>
          <textarea
            className="comment-input w-full p-2 border rounded"
            value={replyComment}
            onChange={(e) => setReplyComment(e.target.value)}
            placeholder="Enter your reply..."
            rows={4}
          />
          <button
            className="comment-button bg-btnDarkBlue hover:bg-btnDarkBlue/80 text-white py-2 px-4 rounded mt-2"
            onClick={() => {
              handlePostReply(replyComment);
              setReplyComment("");
            }}
          >
            Post Reply
          </button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ReplyModal;
