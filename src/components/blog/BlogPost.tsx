// components/BlogPost.tsx

import React from "react";
import { Post } from "@/types";
import Link from "next/link";
import { truncateExcerpt } from "@/lib/truncateExcerpt";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import Image from "next/image";
import { calculateReadingTime } from "@/lib/blogApi";

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="flex justify-center">
      <Card className="dark:bg-[#06050f] max-w-[400px] md:max-w-auto w-full bg-cardBackground rounded-lg overflow-hidden flex flex-col z-0">
        {post.featuredMedia && (
          <Image
            height={200}
            width={400}
            src={post.featuredMedia}
            alt={post.title.rendered}
            className="w-full h-48 object-cover"
          />
        )}

        <CardHeader className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          <Link href={`/blog/posts/${post.slug}`}>
            <span className="hover:underline">{post.title.rendered}</span>
          </Link>
        </CardHeader>
        <CardBody>
          <div className="flex py-2 justify-end">
            <Chip variant="light">{calculateReadingTime(post.content.rendered)} min read</Chip>
          </div>
          <div
            className="text-gray-700 dark:text-gray-300 mb-4"
            dangerouslySetInnerHTML={{
              __html: truncateExcerpt(post.excerpt.rendered),
            }}
          />
        </CardBody>

        <CardFooter>
          <Link href={`/blog/posts/${post.slug}`}>
            <span className="bg-btnDarkBlue text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-btnDarkBlue/80 mt-4 inline-block">
              Read more
            </span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogPost;
