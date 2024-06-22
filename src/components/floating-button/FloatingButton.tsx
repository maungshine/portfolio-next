"use client";
// components/FloatingNavButtons.tsx
import React, { useState, useEffect } from "react";
import { useScroll } from "../providers/ScrollContextProvider";
import { motion, AnimatePresence } from "framer-motion";
import UpArrow from "@/components/icons/UpArrow";
import DownArrow from "@/components/icons/DownArrow";

const FloatingNavButtons: React.FC = () => {
  const { goNext, goPrev, currentSection } = useScroll();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clear timer on unmount
  }, []);

  const isFirstSection = currentSection === "#hero";
  const isLastSection = currentSection === "#contact";

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const messageBoxVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: [0, -10, 0], // Moves up and down
      transition: {
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      }
    },
    exit: { opacity: 0, y: 20 },
  };

  const handleButtonClick = (action: () => void) => {
    setShowMessage(false);
    action();
  };

  return (
    <div className="fixed bottom-4 right-4 z-[99999] flex flex-col items-end space-y-2">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            variants={messageBoxVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg shadow-lg mb-4"
          >
            <div>
              Use these buttons to navigate.
              <div className="absolute top-full right-8 transform -translate-y-1/2">
                <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white dark:border-t-gray-800"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isFirstSection && (
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleButtonClick(goPrev)}
          className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 fill-white rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-transform duration-200"
        >
          <UpArrow />
        </motion.button>
      )}
      {!isLastSection && (
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleButtonClick(goNext)}
          className="p-4 bg-gradient-to-r from-green-500 to-teal-500 fill-white rounded-full shadow-lg hover:from-green-600 hover:to-teal-600 transition-transform duration-200"
        >
          <DownArrow />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingNavButtons;
