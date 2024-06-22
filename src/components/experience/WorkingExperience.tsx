"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes"; // Assuming you are using Next.js with next-themes for theme switching

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Freelance Web Developer",
    company: "",
    duration: "Mar-2024 To Present",
    description: `As a freelance web developer, I have been working on various projects for clients, including building custom websites, developing web applications, and providing technical support. My work involves using technologies like React.js, Next.js, and Tailwind CSS to create responsive and user-friendly web experiences. I also collaborate with clients to understand their requirements and deliver solutions that meet their business needs.`,
  },
  {
    role: "Web Developer Training And Internship",
    company: "",
    duration: "20-Oct-2023 To 20-Mar-2024",
    description: `In this position, I primarily worked on a project called Win Bo Myint, which is an accounting and business training school. The website includes frontend to showcase their school and courses and an admin dashboard to handle the frontend. We used Laravel and PHP for fullstack development. Other technologies include Bootstrap for styling, Filament for CMS dashboard, and some JavaScript for interactivity.`,
  },
];

const WorkingExperience: React.FC = () => {
  return (
    <section
      className={`w-full flex flex-col items-center justify-center flex-1 py-16 px-8 dark:bg-[#040309] bg-[#f8f7ff]`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start relative z-10">
        <h2
          className={`title text-[#f6f5f7] text-4xl md:text-6xl xl:text-8xl xl:tracking-wide font-semibold text-center mb-4 dark:text-heading-dark bg-gradient-to-r from-indigo-400 to-cyan-500 text-transparent bg-clip-text inline-block`}
        >
          My Journey
          <span className="w-4 h-4 rounded-full inline-block bg-indigo-400"></span>
        </h2>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="subtitle text-start"
        >
          What I have done.
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex flex-col gap-4 p-6 rounded-lg border border-[#B6B8C3] dark:border-[#110f1f] dark:bg-[#06050f] dark:text-[#6C6B79] bg-cardBackground text-gray-800`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl md:text-2xl dark:text-[#f6f5f7] font-semibold">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-600">{exp.duration}</p>
              <p className="text-base mt-4">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingExperience;
