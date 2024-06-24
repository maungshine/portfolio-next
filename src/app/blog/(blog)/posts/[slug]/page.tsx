import { auth } from "@/auth";
import BlogPostMain from "@/components/blog/BlogPostMain";
import React from "react";

async function Blog({ params }: { params: { slug: string } }) {
  const session = await auth();
  return <BlogPostMain params={params} session={session} />;
}

export default Blog;
