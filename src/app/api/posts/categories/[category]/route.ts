import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { category: string; page: number; perPage: number } }
) {
  const page = params.page || "1";
  const perPage = params.perPage || "10";

  const categoryId = await fetchCategoryIdByName(params.category);
  if (!categoryId) {
    return NextResponse.json(null);
  }

  try {
    const response = await fetch(
      `https://blog.maungshine.site/wp-json/wp/v2/posts?_embed&categories=${categoryId}&page=${page}&per_page=${perPage}`,
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

const fetchCategoryIdByName = async (categorySlug: string) => {
  try {
    const response = await axios.get("https://maungshine.site/api/categories", {
      params: { search: categorySlug },
    });

    const categories = response.data;
    const category = categories.find(
      (t: any) => t.slug.toLowerCase() === categorySlug.toLowerCase()
    );

    return category ? category.id : null;
  } catch (error) {
    console.error("Error fetching tag:", error);
    return null;
  }
};
