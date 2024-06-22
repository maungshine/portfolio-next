"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      }}
    >
      <div className="flex flex-col items-center">
        <span className="text-gray-700 dark:text-gray-200 text-sm mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
        >
          <FaChevronDown />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
