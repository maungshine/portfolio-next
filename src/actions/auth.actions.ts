"use server";
import { signIn, signOut } from "@/auth";

export const signInWithGoogle = async () => {
  await signIn("google");
};

export const logout = async () => {
  await signOut();
};
