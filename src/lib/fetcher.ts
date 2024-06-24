import { Post } from "@/types";
export const fetcher = async (
  url: string,
  cache?: "no-store" | "no-cache" | "force-cache",
  retries: number = 3, // Number of retries
  delay: number = 1000 // Initial delay between retries in milliseconds
): Promise<any> => {
  for (let attempt = 0; attempt < retries; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

    try {
      const response = await fetch(url, {
        mode: "no-cors",
        cache: cache || "default",
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        if (![500, 502, 503, 504].includes(response.status)) {
          throw new Error(
            `Non-recoverable HTTP error! status: ${response.status}`
          );
        }
        throw new Error(`Recoverable HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      clearTimeout(timeout);

      // Ensure the error is an instance of Error
      if (err instanceof Error) {
        if (err.name === "AbortError") {
          console.error(`Attempt ${attempt + 1} failed: Request timed out`);
        } else {
          console.error(`Attempt ${attempt + 1} failed: ${err.message}`);
        }
      } else {
        console.error(
          `Attempt ${attempt + 1} failed with an unknown error:`,
          err
        );
      }

      if (attempt < retries - 1) {
        // Wait before retrying with exponential backoff
        await new Promise((resolve) =>
          setTimeout(resolve, delay * Math.pow(2, attempt))
        );
      } else {
        // Throw the error if it's the last attempt
        throw new Error("Maximum retry attempts reached");
      }
    }
  }
};

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
      `https://www.maungshine.site/api/get-posts?page=${page}&perPage=${perPage}`
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
          `https://www.maungshine.site/api/get-posts?page=${i}&perPage=${perPage}`
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
