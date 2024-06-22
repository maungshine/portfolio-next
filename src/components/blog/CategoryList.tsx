"use server";
import { Category } from "@/types";
import Link from "next/link";

async function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            href={`/blog/categories/${category.slug}`}
            className="text-blue-500 dark:text-blue-300"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
