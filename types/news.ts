export interface NewsArticle {
  id: string
  title: string
  slug: string
  description: string
  content: string
  image: string
  thumbnail?: string
  category: string
  categorySlug: string
  author: string
  publishedAt: string
  updatedAt: string
  featured: boolean
  views: number
  tags: string[]
}

export interface NewsCategory {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  order: number
}

export interface VideoItem {
  id: string
  title: string
  thumbnail: string
  videoUrl: string
  description: string
  duration: string
  publishedAt: string
  views: number
}

export interface APINewsItem {
  id: number;
  title: string;
  subtitle: string | null;
  slug: string;
  excerpt: string;
  category_name: string;
  category_slug: string;
  author_name: string;
  tags_list: { id: number; name: string; slug: string }[];
  feature_image: string;
  status: string;
  is_pinned_global: boolean;
  is_pinned_category: boolean;
  published_at: string | null;
  views_count: number;
  is_read: boolean;
  created_at: string;
}
