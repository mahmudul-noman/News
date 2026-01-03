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
