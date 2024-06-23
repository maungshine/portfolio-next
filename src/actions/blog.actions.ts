// actions/blog.actions
"use server";
import { calculateTfIdfSimilarity } from "@/lib/tfidfSimilarity";

import { fetchFromWP, incrementPostViewCount } from "@/lib/blogApi";
import { Category, Comment, Post, Tag } from "@/types";
import { getJwtToken } from "@/jwt";

export async function getBlogPostBySlug(slug: string): Promise<Post> {
  const response = await fetch(`/api/posts/${slug}`);
  const post = await response.json();
  // const post = posts[0];
  console.log("getting post...", post);
  // Increment view count
  await incrementPostViewCount(post.id);

  return {
    ...post,
    featuredMedia: post._embedded["wp:featuredmedia"]
      ? post._embedded["wp:featuredmedia"][0].source_url
      : null,
  };
}

export const fetchComments = async (postId: number): Promise<Comment[]> => {
  const token = await getJwtToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/comments?post=${postId}`,
    {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};

export const fetchPostsByCategory = async (
  categoryId: number
): Promise<Post[]> => {
  const response = await fetchFromWP(`/posts?categories=${categoryId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export const fetchCategoryById = async (
  categoryId: number
): Promise<Category> => {
  const response = await fetchFromWP(`/categories/${categoryId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }
  return response.json();
};

export const fetchTagById = async (tagId: number): Promise<Tag> => {
  const response = await fetchFromWP(`/tags/${tagId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch tag");
  }
  return response.json();
};

export const fetchPostById = async (postId: number): Promise<Post> => {
  const res = await fetchFromWP(`/posts/${postId}`);
  const post = await res.json();
  return post;
};

export const fetchRelatedPosts = async (postId: number): Promise<Post[]> => {
  const res = await fetch("https://www.maungshine.site/api/get-posts", {
    cache: "no-cache",
  });
  const posts = (await res.json()) as Post[];
  const targetPost = posts.filter((post) => post.id === postId)[0];

  if (!targetPost) {
    console.log("no related post");
    return [];
  }

  return calculateTfIdfSimilarity(targetPost, posts);
};

export async function postCommentToPost(
  postId: number,
  { content, parentId }: { content: string; parentId?: number },
  email: string
): Promise<Comment> {
  try {
    const response = await fetch(
      "https://maungshine.site/api/posts/comments/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          content,
          email,
          parentId,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to post comment");
    }

    return response.json();
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
}
