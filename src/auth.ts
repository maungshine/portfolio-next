import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { syncUser } from "@/lib/api";
import { getJwtToken } from "./jwt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log(user);
      if (user.email && user.name) {
        try {
          const token = await getJwtToken();
          await syncUser({ email: user.email, name: user.name }, token);
          return true;
        } catch (error) {
          console.error("User synchronization failed:", error);
          return false;
        }
      }
      console.error("User email or name is missing");
      return false;
    },
  },
});
