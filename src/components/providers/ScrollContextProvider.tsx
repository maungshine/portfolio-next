"use client";
import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

interface ScrollContextProps {
  scrollTo: (target: string) => void;
  currentSection: string;
  goNext: () => void;
  goPrev: () => void;
  showScrollIndicator: boolean;
  setShowScrollIndicator: (visible: boolean) => void;
}

const ScrollContext = createContext<ScrollContextProps | null>(null);

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
  "About",
  "Skills",
  "Portfolio",
  "Experience",
  "Services",
  "Blog",
  "Contact",
];

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const overlayControls = useAnimation();
  const [currentSection, setCurrentSection] = useState("");
  const [upcomingSection, setUpcomingSection] = useState("");
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionIndex = sections.findIndex((section) => {
        const element = document.querySelector(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          return top <= 0 && top > -element.clientHeight;
        }
        return false;
      });

      if (sectionIndex !== -1) {
        setCurrentSection(sections[sectionIndex]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = useCallback(
    async (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        setUpcomingSection(target);
        setOverlayVisible(true);

        await overlayControls.start({
          y: "0%",
          transition: { duration: 1, ease: "easeInOut" },
        });

        const top = element.getBoundingClientRect().top + window.pageYOffset;

        setTimeout(() => {
          window.scrollTo({ top, behavior: "auto" });
          setCurrentSection(target);
          if (target === "#about") {
            setShowScrollIndicator(true);
          }
        }, 1000); // Delay before scrolling to the target section

        setTimeout(() => {
          setOverlayVisible(false);
        }, 2000); // Delay before hiding the overlay
      }
    },
    [overlayControls]
  );

  const goNext = useCallback(() => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      scrollTo(sections[currentIndex + 1]);
    }
  }, [currentSection, scrollTo]);

  const goPrev = useCallback(() => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      scrollTo(sections[currentIndex - 1]);
    }
  }, [currentSection, scrollTo]);

  useEffect(() => {
    overlayControls.set({ y: "-100%" });
    overlayControls.start({
      y: "-100%",
      transition: { duration: 0 },
    });
  }, [overlayControls]);

  return (
    <ScrollContext.Provider
      value={{
        scrollTo,
        currentSection,
        goNext,
        goPrev,
        showScrollIndicator,
        setShowScrollIndicator,
      }}
    >
      <div className="relative overflow-hidden">
        {children}
        <AnimatePresence>
          {overlayVisible && (
            <motion.div
              key={upcomingSection}
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 z-50"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-6xl md:text-8xl font-bold text-white"
                >
                  {sectionTitles[sections.indexOf(upcomingSection)]
                    ?.split("")
                    .map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.05,
                          ease: "easeInOut",
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                </motion.h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
