// pages/404.tsx
"use client";
import NavBar from "@/components/NavBar";
import BlogNavbar from "@/components/blog/BlogNavbar";
import { ScrollProvider } from "@/components/providers/ScrollContextProvider";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <main className="bg-white dark:bg-[#040309]">
      {pathname.startsWith("/blog") ? (
        <SessionProvider>
          <BlogNavbar />
        </SessionProvider>
      ) : (
        <ScrollProvider>
          <NavBar />
        </ScrollProvider>
      )}
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold dark:text-white mb-8">404</h1>
          <h2 className="text-4xl font-semibold dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg dark:text-white mb-8">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link href={pathname.startsWith("/blog") ? "/blog" : "/"}>
            <span className="inline-block px-6 py-3 text-lg font-semibold text-white bg-btnDarkBlue rounded-full shadow-lg hover:bg-btnDarkBlue/80">
              Return Home
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
