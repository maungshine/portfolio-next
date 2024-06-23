"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useScroll } from "../components/providers/ScrollContextProvider";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

const sections = [
  "#hero",
  "#about",
  "#skills",
  "#portfolio",
  "#experience",
  "#services",
  "#blog",
  "#contact",
];

const sectionTitles = [
  "Welcome",
  "About Me",
  "Skills",
  "Portfolio",
  "Background",
  "Services",
  "Blog",
  "Contact",
];

const NavBar: React.FC = () => {
  const { scrollTo, currentSection } = useScroll();
  const { theme = "light", setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Track active nav item based on current section
  const [activeNavItem, setActiveNavItem] = useState<string>(sections[0]);

  useEffect(() => {
    const sectionIndex = sections.indexOf(currentSection);
    if (sectionIndex !== -1) {
      setActiveNavItem(sections[sectionIndex]);
    }
  }, [currentSection]);

  const handleNavItemClick = (section: string) => {
    setActiveNavItem(section);
    scrollTo(section);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-md z-50 bg-[#F8F7FF] dark:bg-[#040506]`}
    >
      <div className="max-w-6xl mx-auto text-gray-800 px-4 sm:px-6 xl:px-0 flex justify-between items-center h-16">
        <span
          onClick={() => handleNavItemClick("#hero")}
          className="font-semibold text-gray-900 uppercase cursor-pointer dark:text-gray-100"
        >
          Maung Shine
        </span>

        <div className="hidden md:flex items-center space-x-4">
          {sections.map((section, index) => (
            <NavItem
              key={section}
              onClick={() => handleNavItemClick(section)}
              label={sectionTitles[index]}
              theme={theme}
              isActive={activeNavItem === section}
            />
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="text-gray-800 dark:text-gray-200 hover:text-primary transition-colors duration-300"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <div className="flex items-center space-x-4">
            <SocialLink
              href="https://github.com/maungshine"
              label={<FaGithub />}
              theme={theme}
            />
            <SocialLink
              href="https://linkedin.com/in/maungshine"
              label={<FaLinkedin />}
              theme={theme}
            />
            {/* Adjusted to correct icon import */}
            <SocialLink
              href="https://twitter.com/devmaungshine"
              label={<FaXTwitter />}
              theme={theme}
            />
          </div>

          <button
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`md:hidden flex flex-col items-start space-y-2 px-4 py-4 dark:bg-[#040506] bg-white`}
          >
            {sections.map((section, index) => (
              <NavItem
                key={section}
                onClick={() => handleNavItemClick(section)}
                label={sectionTitles[index]}
                theme={theme}
                isActive={activeNavItem === section}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface NavItemProps {
  onClick: () => void;
  label: string;
  theme: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  onClick,
  label,
  theme,
  isActive,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`relative text-gray-800 uppercase tracking-widest dark:text-gray-200 transition-colors duration-300 ${
        isActive ? "text-red-500 dark:text-red-500" : ""
      } ${
        theme === "dark" ? "dark:hover:text-red-500" : "hover:text-red-500"
      } ${label === "Welcome" ? "hidden" : "visible"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      <motion.div
        className={`absolute z-50 left-0 right-0 bottom-0 h-[2px] bg-red-500 dark:bg-red-500 transition-all duration-300`}
        layoutId="underline"
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />
    </button>
  );
};

interface SocialLinkProps {
  href: string;
  label: React.ReactNode;
  theme: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, theme }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-800 dark:text-gray-200 hover:text-primary transition-colors duration-300`}
  >
    {label}
  </a>
);

export default NavBar;
