import { getJwtToken } from "@/jwt";
import { Comment, Post } from "../types";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL as string;

export async function fetchFromWP(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  try {
    const token = await getJwtToken();

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });

    if (options.headers) {
      const userHeaders = new Headers(options.headers);
      userHeaders.forEach((value, key) => {
        headers.set(key, value);
      });
    }

    const mergedOptions: RequestInit = {
      ...options,
      headers,
      cache: "no-store" as RequestCache,
    };

    const response = await fetch(`${WP_API_URL}${endpoint}`, mergedOptions);
    console.log("checking response....", `${WP_API_URL}${endpoint}`);
    console.log(mergedOptions);

    if (!response.ok) {
      const data = await response.text();
      console.log("response.....", data);
      throw new Error("Failed to fetch data");
    }

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function incrementPostViewCount(postId: number): Promise<void> {
  try {
    const token = await getJwtToken();
    const response = await fetch(
      `https://blog.maungshine.site/wp-json/custom/v1/increment-view-count/${postId}`,
      {
        cache: "no-store",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const res = await response.json();
      console.log(res);
      throw new Error("Failed to increment view count");
    }
  } catch (error) {
    console.error("Error incrementing view count:", error);
    throw error;
  }
}

export async function getCommentsForPost(postId: number): Promise<Comment[]> {
  try {
    const response = await fetchFromWP(`/comments?post=${postId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

export async function postCommentToPost(
  postId: number,
  { content, parentId }: { content: string; parentId?: number },
  email: string
): Promise<Comment> {
  try {
    const response = await fetch(
      "http://localhost:3000/api/posts/comments/create",
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
