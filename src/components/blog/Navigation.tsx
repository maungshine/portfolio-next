import TagList from "./TagList";
import SkeletonLine from "./SkeletonLine";
import CategoryList from "./CategoryList";
import { Suspense } from "react";
import { Category, Tag } from "@/types";
import { fetcher } from "@/lib/fetcher";

const Navigation: React.FC = async () => {
  const [categories, tags] = await Promise.all([
    fetcher(`https://maungshine.site/api/categories`) as Promise<Category[]>,
    fetcher(`https://maungshine.site/api/tags`) as Promise<Tag[]>,
  ]);
  return (
    <nav className="navigation">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <Suspense fallback={<SkeletonLine />}>
        <CategoryList categories={categories} />
      </Suspense>
      <h2 className="text-xl font-bold mt-4 mb-4">Tags</h2>
      <Suspense fallback={<SkeletonLine />}>
        <TagList tags={tags} />
      </Suspense>
    </nav>
  );
};

export default Navigation;
