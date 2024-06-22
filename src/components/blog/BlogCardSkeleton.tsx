// components/BlogCardSkeleton.
import { Skeleton } from "@nextui-org/react";

const BlogCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#06050f] rounded-lg shadow-lg overflow-hidden">
      <Skeleton className="w-full h-48 dark:bg-[#040309] rounded-lg" />
      <div className="p-6">
        <Skeleton className="w-3/4 h-8 mb-2 dark:bg-[#040309] rounded-lg" />
        <Skeleton className="h-24 mb-4 dark:bg-[#040309] rounded-lg" />
        <Skeleton className="w-24 h-6 mt-4 dark:bg-[#040309] rounded-lg" />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
