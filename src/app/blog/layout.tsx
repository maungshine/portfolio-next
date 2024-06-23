import { auth } from "@/auth";
import Footer from "@/components/Footer";
import BlogNavbar from "@/components/blog/BlogNavbar";

async function BlogLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <div className="flex flex-col flex-1">
      <BlogNavbar session={session} />
      {children}
      <Footer />
    </div>
  );
}

export default BlogLayout;
