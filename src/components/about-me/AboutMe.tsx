"use client";
// components/AboutMe.tsx
import { motion, useViewportScroll, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const AboutMe = () => {
  const { scrollYProgress } = useViewportScroll();

  const xRange = [-0.2, 0.2];

  const opacity = useTransform(scrollYProgress, xRange, [0.5, 1]);

  const x = useTransform(scrollYProgress, xRange, ["-44vw", "10vw"]);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => console.log(latest));
  }, [scrollYProgress]);

  const aboutMe = `Hello! I'm Maung Shine from Yangon, Myanmar. I specialize in crafting
visually stunning and highly functional websites using Next.js,
TypeScript, JavaScript, and React. My passion for web development
drives me to create unique, engaging, and user-friendly websites that
truly reflect the brand's identity. My approach to web development is
centered around creativity, functionality, and user experience. I
design custom websites that not only look great but also perform
exceptionally well. I focus on creating intuitive interfaces that
provide a seamless experience for users, ensuring that your website is
both beautiful and efficient.`;
  return (
    <section
      className={`w-full flex flex-col items-center justify-center flex-1 dark:bg-[#040309] bg-aboutBackground-light py-16 px-8 relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          style={{ opacity, x }}
          className={`text-4xl font-semibold text-center mb-12 dark:text-[#f6f5f7] text-heading-light`}
        >
          About Me
        </motion.h2>
        <motion.p
          className={`text-lg leading-relaxed text-center dark:text-[#747281 text-subheading-light mb-8 max-w-3xl mx-auto`}
          style={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            opacity,
            x,
          }}
        >
          {aboutMe}
        </motion.p>
      </div>
      <hr
        className={`mx-auto border-t-2 dark:border-border-dark border-border-light w-16 mt-8`}
      />
    </section>
  );
};

export default AboutMe;
