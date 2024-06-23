// app/blog/page.tsx

"use client";

import BlogPost from "@/components/blog/BlogPost";
import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";
import { useEffect, useState } from "react";
import { fetcher } from "@/lib/fetcher";
import { Post } from "@/types";
import Pagination from "@/components/blog/Pagination";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10;

  const fetchPosts = async (page: number) => {
    setLoading(true);
    const data = await fetcher(
      `/api/get-posts?page=${page}&perPage=${postsPerPage}`
    );
    setPosts(data.posts);
    setTotalPages(Math.ceil(data.totalPosts / postsPerPage));
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  return (
    <div className="dark:bg-[#040309] bg-[#f8f7ff] min-h-screen py-12 mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Blog
        </h1>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: postsPerPage }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Blog;
