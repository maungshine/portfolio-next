import { auth } from "@/auth";
import Footer from "@/components/Footer";
import BlogNavbar from "@/components/blog/BlogNavbar";
import { SessionProvider } from "next-auth/react";

async function BlogLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <div className="flex flex-col flex-1">
      <SessionProvider session={session}>
        <BlogNavbar />
        {children}
        <Footer />
      </SessionProvider>
    </div>
  );
}

export default BlogLayout;
