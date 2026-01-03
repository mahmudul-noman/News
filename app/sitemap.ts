import type { MetadataRoute } from "next"
import { sampleNews, categories } from "@/lib/news-data"
import { BASE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const newsRoutes = sampleNews.map((article) => ({
    url: `${BASE_URL}/news/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }))

  const categoryRoutes = categories.map((category) => ({
    url: `${BASE_URL}/category/${category.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "hourly" as const,
    priority: 1,
  }))

  const routes = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "hourly" as const,
      priority: 1,
    },
    ...categoryRoutes,
    ...newsRoutes,
  ]

  return routes
}
