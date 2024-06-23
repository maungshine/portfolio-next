// pages/api/search-posts.ts
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query");
  if (!query || typeof query !== "string") {
    return NextResponse.json(null);
  }

  const response = await fetch(
    `https://blog.maungshine.site/wp-json/wp/v2/posts?_embed&search=${query}&per_page=5`
  );
  const posts = await response.json();

  return NextResponse.json({ posts }, { status: 200 });
}
