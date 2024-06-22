import { fetchAllPosts } from "@/lib/fetcher";
import { calculateTfIdfSimilarity } from "@/lib/tfidfSimilarity";
import { Post } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { postId: number } }
) {
  const postId = params.postId;
  const res = await fetch("https://blog.maungshine.site/wp-json/wp/v2/posts", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    return NextResponse.json(null);
  }
  const posts = await fetchAllPosts();
  if (!posts) {
    return NextResponse.json(null);
  }
  const post = posts.filter((post) => Number(post.id) === Number(postId));
  const targetPost = post.length > 1 ? post[0] : null;
  if (!targetPost) {
    console.log("no related post");
    return NextResponse.json(null);
  }

  const relatedPosts = calculateTfIdfSimilarity(targetPost, posts);
  return NextResponse.json(relatedPosts);
}
