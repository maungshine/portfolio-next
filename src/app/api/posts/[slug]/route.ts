import { getJwtToken } from "@/jwt";
import { fetchFromWP } from "@/lib/blogApi";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  console.log("here");
  const slug = params.slug;

  const response = await fetch(
    `https://blog.maungshine.site/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  if (!response.ok) {
    return NextResponse.json(null);
  }

  const posts = await response.json();
  const post = posts[0];

  const postWithImage = {
    ...post,
    featuredMedia: post._embedded["wp:featuredmedia"]
      ? post._embedded["wp:featuredmedia"][0].source_url
      : null,
  };

  return NextResponse.json(postWithImage);
}
