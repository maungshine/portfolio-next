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

export async function getAllPosts(page: number, perPage: number) {
  try {
    const response = await fetch(
      `https://blog.maungshine.site/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        cache: "no-cache",
      }
    );
    const totalPosts = response.headers.get("X-WP-Total");
    const posts = await response.json();
    const postsWithImage = posts.map((post: any) => ({
      ...post,
      featuredMedia: post._embedded["wp:featuredmedia"]
        ? post._embedded["wp:featuredmedia"][0].source_url
        : null,
    }));

    return { posts: postsWithImage, totalPosts };
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return null;
  }
}

export function calculateReadingTime(content: string) {
  const wordsPerMinute = 200; // Average reading speed
  const text = content.replace(/(<([^>]+)>)/gi, ""); // Remove HTML tags
  const wordCount = text.trim().split(/\s+/).length; // Calculate word count
  const readingTimeInMinutes = Math.ceil(wordCount / wordsPerMinute);
  return readingTimeInMinutes;
}
