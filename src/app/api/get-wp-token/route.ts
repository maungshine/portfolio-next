import { NextResponse } from "next/server";

let jwtToken: string | null = null;
let tokenExpiration: number | null = null;

const JWT_TOKEN_URL = process.env.NEXT_PUBLIC_WP_TOKEN_URL as string;
const JWT_VALIDATE_URL =
  `${process.env.NNEXT_PUBLIC_WP_TOKEN_URL}/validate` as string;
const JWT_USERNAME = process.env.WP_USERNAME;
const JWT_PASSWORD = process.env.WP_PASSWORD;

const getNewToken = async (): Promise<string> => {
  const response = await fetch(`${JWT_TOKEN_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: JWT_USERNAME,
      password: JWT_PASSWORD,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch JWT token");
  }

  const res = await response.json();

  jwtToken = res.data.jwt as string;
  tokenExpiration = Date.now() + 60 * 60 * 1000; // Convert expiration time to milliseconds
  return jwtToken;
};

const validateToken = async (): Promise<boolean> => {
  if (!jwtToken) return false;

  const response = await fetch(JWT_VALIDATE_URL, {
    cache: "no-cache",
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  return response.ok;
};

export async function GET() {
  if (jwtToken && tokenExpiration && Date.now() < tokenExpiration) {
    const isValid = await validateToken();
    if (isValid) return jwtToken;
  }

  try {
    const token = await getNewToken();
    return NextResponse.json({ token });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch the tokn" },
      { status: 500 }
    );
  }
}
