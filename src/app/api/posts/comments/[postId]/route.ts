import { fetchFromWP } from "@/lib/blogApi";
import { Comment } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { postId: number } }
) {
  try {
    const response = await fetchFromWP(`/comments?post=${params.postId}`);

    const comments = await response.json();

    // Build nested comment structure
    const commentMap: { [key: number]: Comment } = {};
    comments.forEach((comment: Comment) => {
      comment.children = [];
      commentMap[comment.id] = comment;
    });

    const nestedComments: Comment[] = [];
    comments.forEach((comment: Comment) => {
      if (comment.parent === 0) {
        nestedComments.push(comment);
      } else {
        const parent = commentMap[comment.parent!];
        if (parent) {
          parent.children!.push(comment);
        }
      }
    });
    return NextResponse.json(nestedComments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(null);
  }
}
