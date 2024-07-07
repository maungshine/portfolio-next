// app/blog/[slug]/page.tsx
import Post from "@/components/blog/Post";
import Navigation from "@/components/blog/Navigation";
import { Suspense } from "react";
import { Session } from "next-auth";
import BlogPostSkeleton from "./BlogPostSkeleton";
import { fetcher } from "@/lib/fetcher";
import { Post as PostType } from "@/types";
interface BlogPostProps {
  params: { slug: string };
  session: Session | null;
}

const BlogPostMain: React.FC<BlogPostProps> = async ({ params, session }) => {
  const { slug } = params;
  const post = await fetcher(
    `https://www.maungshine.site/api/posts/${slug}`
  ) as PostType;
  return (
    <div className={`dark:bg-[#040309] bg-[#f8f7ff] min-h-screen mt-16`}>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Suspense fallback={<BlogPostSkeleton />}>
              <Post session={session} post={post} />
            </Suspense>
          </div>
          <div className="md:col-span-1">
            <div className={`bg-cardBackground dark:bg-[#06050f] p-6`}>
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostMain;
