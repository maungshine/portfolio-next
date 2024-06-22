"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const languages = [
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "SQL",
    "MongoDB",
    "CSS",
    "HTML",
    "Git",
  ];

  const frameworks = [
    "Next.js",
    "React",
    "Laravel",
    "Django",
    "Flask",
    "Prisma ORM",
    "Eloquent ORM",
    "Tailwind",
    "Bootstrap",
  ];

  const cms = ["WordPress", "Filament", "Strapi"];

  const sectionVariants = {
    hidden: { opacity: 0, y: -50, x: "50vw" },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  const cardVariants = {
    hover: { scale: 1.05 },
  };

  const isDark = theme === "dark";

  return (
    <section
      className={`w-full flex-1 flex flex-col items-center justify-center py-16 px-8 relative overflow-hidden dark:bg-[#040309] bg-background-light`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start relative z-10">
        <h2
          className={`title text-4xl md:text-6xl xl:text-8xl xl:tracking-wide font-semibold text-center mb-4 ${
            isDark
              ? "text-heading-dark"
              : "bg-gradient-to-r from-indigo-400 to-cyan-500 text-transparent bg-clip-text inline-block"
          }`}
        >
          Skills
          <span className="w-4 h-4 rounded-full inline-block bg-indigo-400"></span>
        </h2>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="subtitle text-start"
        >
          What I Bring to the Table
        </motion.h3>
        {/** Programming Languages */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="relative rounded-lg overflow-hidden mb-8"
        >
          <div className="gradient-border absolute top-0 left-0 w-full h-full pointer-events-none"></div>
          <div className={`p-6 shadow-lg dark:bg-[#06050f] bg-accent1-light`}>
            <h3
              className={`text-lg md:text-xl font-semibold text-center mb-4 dark:text-[#f6f5f7] text-heading-light`}
            >
              Programming Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {languages.map((lang) => (
                <motion.div
                  key={lang}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`border cursor-default rounded-md p-2 font-mono transition-transform duration-300 dark:border-[#110f1f] dark:bg-[#040309] dark:hover:bg-opacity-30 border-accent2-light bg-gray-200 hover:bg-opacity-50`}
                >
                  {lang}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/** Frameworks and Libraries */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden mb-8"
        >
          <div className="gradient-border absolute top-0 left-0 w-full h-full pointer-events-none"></div>
          <div
            className={`p-6 shadow-lg dark:bg-[#06050f] bg-accent2-light`}
          >
            <h3
              className={`text-lg md:text-xl font-semibold text-center mb-4 dark:text-[#f6f5f7] text-heading-light`}
            >
              Frameworks and Libraries
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {frameworks.map((framework) => (
                <motion.div
                  key={framework}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`border cursor-default rounded-md p-2 font-mono transition-transform duration-300 dark:border-[#110f1f] dark:bg-[#040309] dark:hover:bg-opacity-30 border-accent2-light bg-gray-200 hover:bg-opacity-50`}
                >
                  {framework}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/** Content Management Systems (CMS) */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative rounded-lg overflow-hidden"
        >
          <div className="gradient-border absolute top-0 left-0 w-full h-full pointer-events-none"></div>
          <div
            className={`p-6 shadow-lg dark:bg-[#06050f] bg-highlight-light`}
          >
            <h3
              className={`text-lg md:text-xl font-semibold text-center mb-4 dark:text-[#f6f5f7] text-heading-light`}
            >
              Content Management Systems (CMS)
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {cms.map((cmsItem) => (
                <motion.div
                  key={cmsItem}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`border cursor-default rounded-md p-2 font-mono transition-transform duration-300 dark:border-[#110f1f] dark:bg-[#040309] dark:hover:bg-opacity-30 border-accent2-light bg-gray-200 hover:bg-opacity-50`}
                >
                  {cmsItem}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
