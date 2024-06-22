"use server";

import { cookies } from "next/headers";

export const getCookies = async (name: string) => {
  return cookies().get(name);
};

export const deleteCookies = async (name: string) => {
  return cookies().delete(name);
};
