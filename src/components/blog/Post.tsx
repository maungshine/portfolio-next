"use client";
// components/Post.tsx
import React, { Suspense } from "react";
import "highlight.js/styles/github-dark.css"; // Replace with your preferred theme
import {
  Category,
  Post as PostType,
  Tag,
  Comment as CommentType,
} from "@/types";
import CommentComponent from "./CommentComponent";
import { FaEye } from "react-icons/fa";
import RelatedPosts from "./RelatedPosts";
import WpContent from "./WpContent";
import { Session } from "next-auth";
import { incrementPostViewCount } from "@/actions/blog.actions";
import BlogCardSkeleton from "./BlogCardSkeleton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface PostProps {
  slug: string;
  session: Session | null;
}

const Post: React.FC<PostProps> = async ({ slug, session }) => {
  const [post, categories, tags] = await Promise.all([
    fetcher(
      `https://www.maungshine.site/api/posts/${slug}`
    ) as Promise<PostType>,
    fetcher(`https://www.maungshine.site/api/categories`) as Promise<
      Category[]
    >,
    fetcher(`https://maungshine.site/api/tags`) as Promise<Tag[]>,
  ]);

  const initialComments = (await fetcher(
    `https://www.maungshine.site/api/posts/comments/${post.id}`
  )) as CommentType[];
  const postCategories = categories.filter((cat) =>
    post.categories.includes(cat.id)
  );
  const postTags = tags.filter((tag) => post.tags.includes(tag.id));

  await incrementPostViewCount(post.id);
  return (
    <article
      className={`bg-cardBackground dark:bg-[#06050f] sm:p-8 dark:text-text-dark`}
    >
      {post && (
        <>
          <h1 className="sm:text-5xl text-2xl p-2 font-bold mb-8 text-center">
            {post.title.rendered}
          </h1>
          <div className="flex items-center mt-4 px-4 max-w-[800px] mx-auto justify-end">
            <FaEye className="mr-2 text-gray-500" />
            <p className="text-gray-500">{post.acf.view_count} views</p>
          </div>
          <WpContent content={post.content.rendered} />
          <div className="categories mt-4 blog-post">
            <h3 className="font-semibold">Categories:</h3>
            <ul>
              {postCategories.map((category) => (
                <li
                  key={category.id}
                  className="inline-block mr-2 bg-btnDarkBlue text-white dark:bg-gray-700 rounded px-2 py-1"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="tags mt-4 blog-post">
            <h3 className="font-semibold">Tags:</h3>
            <ul>
              {postTags.map((tag) => (
                <li
                  key={tag.id}
                  className="inline-block mr-2 bg-btnDarkBlue text-white dark:bg-gray-700 rounded px-2 py-1"
                >
                  {tag.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={`blog-post p-6`}>
            <Suspense
              fallback={
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                  {[1, 2, 3].map((n, index) => (
                    <BlogCardSkeleton key={index} />
                  ))}
                </div>
              }
            >
              <RelatedPosts postId={post.id} />
            </Suspense>
          </div>
          <CommentComponent
            session={session}
            postId={post.id}
            initialComments={initialComments}
          />
        </>
      )}
    </article>
  );
};

export default Post;
