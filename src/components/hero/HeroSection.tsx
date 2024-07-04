"use client";
import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import IntroText from "./IntroText";

const HeroSection = () => {
  return (
    <div className="w-full flex items-center px-8 justify-center mt-16 xl:mt-0 flex-1 bg-[#f8f7ff] dark:bg-[#040309] text-text-light dark:text-text-dark py-16">
      <div className="max-w-6xl mt-8 md:mt-0 mx-auto flex flex-col xl:flex-row items-center gap-8 justify-between">
        <IntroText />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-end items-center"
        >
          <ProfileImage />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
