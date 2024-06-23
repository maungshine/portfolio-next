"use client";
import { Post } from "@/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { calculateReadingTime } from "@/lib/blogApi";
import BlogPost from "./BlogPost";

interface BlogPreviewProps {
  posts: Post[] | null;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ posts }) => {
  return (
    <section className="w-full px-8 flex flex-col items-center justify-center flex-1 bg-background-light dark:bg-[#040309] py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-start relative z-10">
        <h2
          className={`title text-4xl md:text-6xl xl:text-8xl xl:tracking-wide font-semibold text-center mb-4 dark:text-heading-dark bg-gradient-to-r from-indigo-400 to-cyan-500 text-transparent bg-clip-text inline-block`}
        >
          Latest Blog Posts
          <span className="w-4 h-4 rounded-full inline-block bg-indigo-400"></span>
        </h2>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="subtitle text-start"
        >
          I like to write and share my knowledge with other developers too.
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {posts && posts.map((post) => <BlogPost post={post} key={post.id} />)}
        </div>
        <div className="mt-8 flex gap-4 sm:flex-row flex-col">
          <p>Want to find out more?</p>
          <Link
            href={"/blog"}
            className="hover:to-blue-400/90 text-blue-400 hover:underline"
          >
            See all blog posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
