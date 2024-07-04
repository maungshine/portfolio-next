import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/tags`, {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    return NextResponse.json(null);
  }
  const tags = await response.json();
  return NextResponse.json(tags);
}
