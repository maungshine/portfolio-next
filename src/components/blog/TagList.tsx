"use server";
import { Tag } from "@/types";

async function TagList({ tags }: { tags: Tag[] }) {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag.id}>
          <a
            href={`/blog/tags/${tag.slug}`}
            className="text-blue-500 dark:text-blue-300"
          >
            {tag.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default TagList;
