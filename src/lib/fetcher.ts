import { Post } from "@/types";
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const cachedFetcher = async (
  url: string
): Promise<{ data: any; headers: Headers }> => {
  const response = await fetch(url, {
    method: "GET",
    cache: "force-cache",
    headers: {
      "Content-type": "application/json",
    },
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const headers = response.headers;
  const data = await response.json();

  return { data, headers };
};

export const fetchAllPosts = async (): Promise<Post[]> => {
  const perPage = 10;
  let totalPosts = 0;
  const posts: Post[] = [];

  try {
    let page = 1;
    const firstPageResponse = await cachedFetcher(
      `/api/get-posts?page=${page}&perPage=${perPage}`
    );

    // Example assuming `data` structure from cachedFetcher is { posts: Post[], totalPosts: number }
    if (!firstPageResponse.data || !firstPageResponse.data.posts) {
      throw new Error("Invalid response format received from server");
    }

    posts.push(...firstPageResponse.data.posts);
    totalPosts = firstPageResponse.data.totalPosts || posts.length; // Assuming totalPosts is available

    const totalPages = Math.ceil(totalPosts / perPage);
    const fetchPromises: Promise<{ data: { posts: Post[] } }>[] = [];

    for (let i = 2; i <= totalPages; i++) {
      fetchPromises.push(
        cachedFetcher(
          `/api/get-posts?page=${i}&perPage=${perPage}`
        ).then((response) => {
          if (!response.data || !response.data.posts) {
            throw new Error("Invalid response format received from server");
          }
          return response;
        })
      );
    }

    const results = await Promise.all(fetchPromises);

    results.forEach((result) => {
      posts.push(...result.data.posts);
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
