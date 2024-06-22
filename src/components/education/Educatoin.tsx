'use client';
import React from "react";
import { motion } from "framer-motion";

interface Certificate {
  id: string;
  title: string;
  year: string;
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Meta Frontend Developer Professional Certificate",
    year: "May-2023 To Jun-2024",
  },
  {
    id: "2",
    title: "Web Development Training And Internship With PHP and Laravel",
    year: "20-Oct-2023 To 20-Mar-2024",
  },
  {
    id: "3",
    title: "Introduction to Python Programming",
    year: "2021",
  },
  {
    id: "4",
    title: "Google IT Support Professional Certificate",
    year: "2020",
  },
  {
    id: "5",
    title: "CS50 Introduction to Computer Science And Programming",
    year: "2020",
  },
  {
    id: "6",
    title: "Diploma in Maritime Technology",
    year: "From 2012 To 2014",
  },
];

const Education: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center flex-1 bg-gray-100 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Education & Certifications
        </h2>
        <h3 className="text-lg md:text-xl font-medium text-center mb-12 text-gray-600 dark:text-gray-400">
          My professional qualifications and training
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className="flex flex-col items-center gap-4 rounded-lg p-6 shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {certificate.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                  {certificate.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
