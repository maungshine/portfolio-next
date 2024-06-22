import { fetchFromWP } from "@/lib/blogApi";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { postId, content, email, parentId } = await req.json();
  try {
    const response = await fetchFromWP("/comments", {
      method: "POST",
      body: JSON.stringify({
        post: postId,
        content: content,
        author_name: email.split("@")[0],
        author_email: email,
        parent: parentId || 0,
      }),
    });

    if (!response) {
      throw new Error('Response is undefined or null');
    }

    if (!response.ok) {
      throw new Error("Failed to post comment");
    }

    const newComment = await response.json();
    return NextResponse.json(newComment);
  } catch (error) {
    console.error("Error posting comment:", error);
    return NextResponse.json({ error: "Comment failed" }, { status: 500 });
  }
}
