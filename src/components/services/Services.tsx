"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconUrl: string;
}

const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    subtitle: "Tailored Solutions",
    description:
      "Building websites and web applications tailored to your needs.",
    iconUrl: "/web-development.jpg",
  },
  {
    id: "2",
    title: "Consulting",
    subtitle: "Expert Advice",
    description:
      "Expert advice and consulting on technology and business strategies.",
    iconUrl: "/consultation.jpg",
  },
];

const Services: React.FC = () => {
  return (
    <section className="w-full px-8 flex-1 flex items-center justify-center bg-[#f8f7ff] dark:bg-[#040309] py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-start relative z-10">
        <h2
          className={`title text-4xl text-[#CDCCCF] md:text-6xl xl:text-8xl xl:tracking-wide font-semibold text-center mb-4 dark:text-heading-dark bg-gradient-to-r from-indigo-400 to-cyan-500 text-transparent bg-clip-text inline-block`}
        >
          Services
          <span className="w-4 h-4 rounded-full inline-block bg-indigo-400"></span>
        </h2>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="subtitle text-start"
        >
          What I Offer.
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-center border bg-cardBackground border-[#B6B8C3] dark:border-[#110F1F] dark:bg-[#06050F] rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="relative rounded-lg">
                  <div className="absolute rounded-lg w-full h-full bg-gradient-to-tr from-btnDarkBlue/100 via-70 to-cardBackground/5"></div>
                  <Image
                    height={200}
                    width={400}
                    src={service.iconUrl}
                    alt={service.title}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-[#CDCCCF]">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 dark:text-[#72707F] mt-2">
                    {service.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-gray-700 dark:text-[#72707F] mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
