import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { tag: string; page: number; perPage: number } }
) {
  const page = params.page || "1";
  const perPage = params.perPage || "10";

  const tagId = await fetchTagIdByName(params.tag);
  if (!tagId) {
    return NextResponse.json(null);
  }

  try {
    const response = await fetch(
      `https://blog.maungshine.site/wp-json/wp/v2/posts?_embed&tags=${tagId}&page=${page}&per_page=${perPage}`,
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

    return Response.json({ posts: postsWithImage, totalPosts });
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return Response.json(null);
  }
}

const fetchTagIdByName = async (tagSlug: string) => {
  try {
    const response = await axios.get("https://maungshine.site/api/tags", {
      params: { search: tagSlug },
    });

    const tags = response.data;
    const tag = tags.find(
      (t: any) => t.slug.toLowerCase() === tagSlug.toLowerCase()
    );

    return tag ? tag.id : null;
  } catch (error) {
    console.error("Error fetching tag:", error);
    return null;
  }
};
