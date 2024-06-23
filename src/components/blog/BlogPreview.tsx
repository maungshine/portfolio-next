"use client";
import { Post } from "@/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
          {posts && posts.map((post) => (
            <div
              key={post.id}
              className="rounded-lg bg-cardBackground overflow-hidden shadow-lg dark:bg-[#06050f] border border-[#B6B8C3] dark:border-[#110f1f] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {post.featuredMedia && (
                <Image
                  width={400}
                  height={200}
                  src={post.featuredMedia}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover object-center"
                />
              )}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {post.title.rendered}
                </h3>
                <div
                  className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <Link
                    href={`/blog/posts/${post.slug}`} // Replace with actual link
                    className="bg-btnDarkBlue text-white px-4 py-2 rounded-full hover:bg-btnDarkBlue/80 font-medium focus:outline-none"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-4">
          <p>Want to find out more?</p>
          <Link href={'/blog'} className="hover:to-blue-400/90 text-blue-400 hover:underline">
              See all blog posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
