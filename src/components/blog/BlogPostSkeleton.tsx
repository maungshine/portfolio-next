// components/BlogPostSkeleton.tsx
import React from "react";
import { Skeleton } from "@nextui-org/react";

const BlogPostSkeleton: React.FC = () => {
  return (
    <div className="dark:bg-[#040309] min-h-screen p-8">
      <div className="container felx mx-auto px-4">
        <div className="">
          <Skeleton className="w-full h-64 dark:bg-[#06050f] rounded-lg mb-4" />
          <Skeleton className="w-3/4 h-12 dark:bg-[#06050f] rounded-lg mb-4" />
          <Skeleton className="w-full h-8 dark:bg-[#06050f] rounded-lg mb-4" />
          <Skeleton className="w-full h-48 dark:bg-[#06050f] rounded-lg mb-4" />
          <Skeleton className="w-full h-48 dark:bg-[#06050f] rounded-lg mb-4" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
