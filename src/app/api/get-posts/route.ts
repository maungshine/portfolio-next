import { getJwtToken } from "@/jwt";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || "1";
    const perPage = url.searchParams.get("perPage") || "10";

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

    return Response.json({ posts: postsWithImage, totalPosts });
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return Response.json(null);
  }
}