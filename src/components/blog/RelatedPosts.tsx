"use server";
import { fetchRelatedPosts } from "@/actions/blog.actions";
import { truncateExcerpt } from "@/lib/truncateExcerpt";
import { Post } from "@/types";
import Link from "next/link";
import React from "react";

async function RelatedPosts({ postId }: { postId: number }) {
  const res = await fetch(
    `https://maungshine.site/api/posts/related/${postId}`
  );
  const relatedPosts = (await res.json()) as Post[];
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
      {relatedPosts && relatedPosts.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {relatedPosts.map((relatedPost) => (
            <li
              key={relatedPost.id}
              className="bg-emerald-300 dark:bg-slate-600 h-[360px] p-4 rounded-lg transition-transform transform hover:scale-105 duration-200"
            >
              <Link
                href={`/blog/posts/${relatedPost.slug}`}
                className="block text-blue-500 dark:text-blue-300 no-underline"
              >
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {truncateExcerpt(relatedPost.title.rendered, 50)}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {truncateExcerpt(
                    relatedPost.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")
                  )}
                </p>
                <div className="text-right text-sm text-blue-600 dark:text-blue-400 underline">
                  Read more
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">No related posts found!</p>
      )}
    </>
  );
}

export default RelatedPosts;
