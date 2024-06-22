// IntroText.js

"use client";
import { Button, cn } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useScroll } from "../providers/ScrollContextProvider";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

const IntroText = () => {
  const { scrollTo } = useScroll();
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl text-justify font-bold mb-4 md:text-left dark:text-heading"
      >
        Hi, I&apos;m
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl uppercase md:text-9xl text-justify bg-gradient-to-r dark:from-white dark:to-btnDarkBlue from-[#040309] to-btnDarkBlue text-transparent bg-clip-text inline-block font-bold mb-4 md:text-left dark:text-heading"
      >
        Maung Shine
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className={cn(
          font.className,
          "text-lg md:text-xl mb-6 text-center md:text-left max-w-lg dark:text-subheading"
        )}
      >
        A frontend and full-stack developer passionate about crafting software
        that is useful, yet visually appealing using React and Next.js.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="flex items-center space-x-4"
      >
        <Button
          variant="solid"
          size="lg"
          className="rounded-full h-14 w-44 bg-btnDarkBlue text-white font-semibold"
          onClick={() => scrollTo("#contact")}
        >
          Let&apos;s Talk
        </Button>
        <Button
          onClick={() => scrollTo("#portfolio")}
          variant="solid"
          size="lg"
          className="rounded-full h-14 w-44 dark:text-black dark:bg-cardBackground"
        >
          View Portfolio
        </Button>
      </motion.div>
    </div>
  );
};

export default IntroText;
