// types/index.ts

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  author: string;
  categories: number[];
  tags: number[];
  excerpt: { rendered: string };
  featuredMedia?: string;
  acf: {
    view_count: number;
  };
}


export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}


export interface Comment {
  id: number;
  author_name: string;
  date: string;
  content: {
    rendered: string;
  };
  parent: number | null;
  children?: Comment[];
  showReplies?: boolean;
}

export type IconProps = {
  "data-checked"?: string;
  width?: string;
  height?: string;
  isSelected?: boolean;
  className?: string;
};
