// pages/index.tsx
import React from "react";
import HeroSection from "@/components/hero/HeroSection";
import AboutMe from "@/components/about-me/AboutMe";
import Skills from "@/components/skills/Skills";
import Portfolio from "@/components/portfolio/Portfolio";
import WorkingExperience from "@/components/experience/WorkingExperience";
import Education from "@/components/education/Educatoin";
import Services from "@/components/services/Services";
import BlogPreview from "@/components/blog/BlogPreview";
import Contact from "@/components/contact/Contact";
import { ScrollProvider } from "@/components/providers/ScrollContextProvider";
import NavBar from "@/components/NavBar";
import FloatingNavButtons from "@/components/floating-button/FloatingButton";
import { fetcher } from "@/lib/fetcher";
import { Post } from "@/types";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: "1",
    title: "Introduction to React Hooks",
    author: "John Doe",
    date: "June 10, 2023",
    image: "/react-hooks.png",
    excerpt:
      "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
  },
  {
    id: "2",
    title: "Getting Started with Tailwind CSS",
    author: "Jane Smith",
    date: "May 25, 2023",
    image: "/tailwind-css.png",
    excerpt:
      "Explore the basics of Tailwind CSS and how you can leverage utility-first CSS to style your projects.",
  },
  // Add more blog posts as needed
];

const Home: React.FC = async () => {
  const allPosts = (await fetcher(
    "https://www.maungshine.site/api/get-posts?page=1&perPage=3"
  )) as { posts: Post[] };

  const posts = allPosts.posts.slice(0, 3);
  return (
    <ScrollProvider>
      <NavBar />
      <FloatingNavButtons />
      <main>
        <section
          id="hero"
          className="flex flex-col items-center justify-center min-h-screen w-full"
        >
          <HeroSection />
        </section>
        <section
          id="about"
          className="flex flex-col items-center justify-center min-h-screen w-full"
        >
          <AboutMe />
        </section>
        <section
          id="skills"
          className="flex flex-col items-center justify-center min-h-screen w-full"
        >
          <Skills />
        </section>
        <section
          id="portfolio"
          className="flex flex-col items-center justify-center min-h-screen w-full"
        >
          <Portfolio />
        </section>
        <section
          id="experience"
          className="flex flex-col items-center justify-center min-h-screen w-full"
        >
          <WorkingExperience />
        </section>
        {/* <section
          id="education"
          className="flex flex-col items-center justify-center min-h-screen w-full"
        >
          <Education />
        </section> */}
        <section
          id="services"
          className="flex flex-col items-center justify-center min-h-screen w-full"
        >
          <Services />
        </section>
        <section
          id="blog"
          className="flex flex-col items-center justify-center min-h-screen w-full"
        >
          <BlogPreview posts={posts} />
        </section>
        <section
          id="contact"
          className="flex flex-col items-center justify-center min-h-screen w-full"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </ScrollProvider>
  );
};

export default Home;
