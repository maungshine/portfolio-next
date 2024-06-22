import { getJwtToken } from "@/jwt";
import { NextResponse } from "next/server";

export async function GET() {
  const token = await getJwtToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/categories`,
    {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await response.json();
  return NextResponse.json(categories);
}
