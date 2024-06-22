"use client";
import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import IntroText from "./IntroText";

const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center flex-1 bg-[#f8f7ff] dark:bg-[#040309] text-text-light dark:text-text-dark py-16 px-6">
      <div className="container mt-8 md:mt-0 mx-auto flex flex-col md:flex-row items-center justify-between">
        <IntroText />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <ProfileImage />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
