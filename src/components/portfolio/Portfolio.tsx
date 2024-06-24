"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  img_url: string;
  title: string;
  description: string;
  demo_url: string | null;
  github_url: string | null;
}

const Portfolio: React.FC = () => {
  const cardVariants = {
    rest: { opacity: 1, scale: 1 },
    hover: { opacity: 0.9, scale: 1.05 },
  };
  const { theme, setTheme } = useTheme();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects: Project[] = [
    {
      id: "1",
      img_url: "/littleLemon.png",
      title: "Little Lemon Table Reservation",
      description: `This project is the capstone project built for Meta front end developer profession certificate. This project was built through user persona, user journey map, discover pain points of the user, collect requirements for the project, layout the wireframe, design the project based on wireframe, prototype the design and test user usability and finally build the project using React.js and React Router and test the booking functionality with React Testing Library and Jest.`,
      demo_url: null,
      github_url: "https://github.com/maungshine/table-reservation",
    },
    {
      id: "2",
      img_url:
        theme === "light" ? "/portfolio-light.png" : "/portfolio-dark.png",
      title: "Portfolio Website",
      description: `This portfolio website is to showcase my skills and projects and integrated with dynamic blogging platform. I will keep adding content to my blog too. I used TypeScript, React, Next.js, Framer Motion, Next UI, Tailwind CSS, API integration with headless wordpress RestAPI, caching, Server Side Rendering, Incremental Static Site Generation and deployed it to Vercel.`,
      demo_url: "https://maungshine.site",
      github_url: null,
    },
    {
      id: "3",
      img_url: "/demo-rentx.png",
      title: "RentX",
      description: `A property rental web application where users can list their properties, look for properties, save properties they like, and find properties on a map (Leaflet map). I am still improving the app. Recently, I added infinite scrolling for listings. I used TypeScript, React, Next.js, Next UI, Shadcn, Tailwind CSS, Prisma ORM, and Postgres for this project and deployed it to Vercel.`,
      demo_url: "https://rentx-neon.vercel.app",
      github_url: null,
    },
    {
      id: "4",
      img_url: "/dev-links.png",
      title: "DevLinks",
      description: `A link sharing application for developers where users can create links, manage links and share with a personalized links page to the world. It inludes drage and drop features for sorting links I used dnd kit for that. Other features are credentials authentication with next auth, mock preview, final preview and personal url for sharing links.`,
      demo_url: "https://link-sharing-app-sigma-mauve.vercel.app/",
      github_url: "https://github.com/maungshine/link-sharing-app",
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <section
      className={`w-full flex flex-col items-center justify-center flex-1 py-16 px-8 dark:bg-[#040309]`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start relative z-10">
        <h2
          className={`title text-4xl md:text-6xl xl:text-8xl xl:tracking-wide font-semibold text-center mb-4 dark:text-[#f6f5f7 bg-gradient-to-r from-indigo-400 to-cyan-500 text-transparent bg-clip-text inline-block`}
        >
          Portfolio
          <span className="w-4 h-4 rounded-full inline-block bg-indigo-400"></span>
        </h2>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="subtitle text-start"
        >
          Showcasing my work.
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="rounded-lg overflow-hidden border border-[#B6B8C3] dark:border-[#110f1f] transition-all duration-300 ease-in-out flex flex-col"
              variants={cardVariants}
              whileHover="hover"
            >
              <Image
                src={project.img_url}
                alt={project.title}
                height={200}
                width={400}
                className="w-full h-48 object-cover object-center cursor-pointer"
                onClick={() => openModal(project)}
              />
              <div
                className={`p-4 dark:bg-[#06050f] bg-cardBackground flex-1 flex flex-col justify-between`}
              >
                <div>
                  <h3
                    className={`text-base md:text-lg font-semibold dark:text-[#F6F5F7] mb-2`}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-sm text-[#5A5966] mb-2`}>
                    {project.description.slice(0, 150) + "..."}
                  </p>
                  <button
                    onClick={() => openModal(project)}
                    className="text-blue-500 hover:text-blue-600 font-medium focus:outline-none mb-2"
                  >
                    See More
                  </button>
                </div>
                <div className="flex justify-center space-x-4 mt-auto">
                  {project.demo_url && (
                    <Link
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2 px-4 rounded bg-btnDarkBlue dark:bg-[#241A7F] dark:hover:bg-btnDarkBlue/80 text-white text-center font-semibold`}
                    >
                      Demo
                    </Link>
                  )}
                  {project.github_url && (
                    <Link
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2 px-4 rounded bg-btnDarkBlue dark:bg-[#241A7F] dark:hover:bg-btnDarkBlue/80 text-white text-center font-semibold`}
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`max-w-3xl w-full dark:bg-[#040309] bg-cardBackground rounded-lg overflow-hidden relative shadow-lg p-8`}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 11.414l4.95 4.95-1.414 1.415L8.586 12 3.636 17.95 2.222 16.536 7.172 11.5 2.222 6.464 3.636 5.05 8.586 10 13.536 5.05l1.414 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Image
              height={500}
              width={500}
              src={selectedProject.img_url}
              alt={selectedProject.title}
              className="w-full h-auto mb-4"
            />
            <h3
              className={`text-xl md:text-2xl font-semibold dark:text-heading-dark text-heading-light mb-2`}
            >
              {selectedProject.title}
            </h3>
            <p
              className={`text-sm dark:text-heading-dark text-heading-light mb-4`}
            >
              {selectedProject.description}
            </p>
            <div className="flex justify-center space-x-4">
              {selectedProject.demo_url && (
                <Link
                  href={selectedProject.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 px-4 rounded bg-btnDarkBlue dark:bg-[#241A7F] dark:hover:bg-btnDarkBlue/80 text-white text-center font-semibold`}
                >
                  Demo
                </Link>
              )}
              {selectedProject.github_url && (
                <Link
                  href={selectedProject.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 px-4 rounded bg-btnDarkBlue dark:bg-[#241A7F] dark:hover:bg-btnDarkBlue/80 text-white text-center font-semibold`}
                >
                  GitHub
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
