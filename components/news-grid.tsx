import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"

import { SidebarAdItem } from "@/components/sidebar-ads"

interface NewsGridProps {
  articles: NewsArticle[]
  showAds?: boolean
  columns?: 2 | 3 | 4
  title?: string
  categorySlug?: string
}

export function NewsGrid({ articles, showAds = true, columns = 4, title, categorySlug }: NewsGridProps) {
  const gridColsClass =
    ({
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    } as const)[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

  // Logic to interleave Ads
  // Row 1 Last Col = Ad 1
  // Row 2 Last Col = Ad 2
  // We need to construct a mixed array for rendering

  const items: (NewsArticle | { type: 'ad', id: number })[] = []

  if (showAds) {
    // Slot 1: articles[0] to articles[col-2]
    // Ad 1 at col-1
    // Slot 2: articles[col-1] to articles[2*col - 3]
    // Ad 2 at 2*col - 1

    let articleIndex = 0;

    // Fill Row 1 (up to col-1 items, then Ad)
    for (let i = 0; i < columns - 1; i++) {
      if (articles[articleIndex]) items.push(articles[articleIndex++])
    }
    items.push({ type: 'ad', id: 0 }) // Ad 1

    // Fill Row 2 (up to col-1 items, then Ad)
    for (let i = 0; i < columns - 1; i++) {
      if (articles[articleIndex]) items.push(articles[articleIndex++])
    }
    items.push({ type: 'ad', id: 1 }) // Ad 2

    // Fill remaining articles
    while (articleIndex < articles.length) {
      items.push(articles[articleIndex++])
    }

  } else {
    items.push(...articles);
  }

  return (
    <>
      <div className="my-6">
        <SectionHeader title={title} categorySlug={categorySlug} />

        <div className={`grid ${gridColsClass} gap-6`}>
          {items.map((item, index) => {
            if ('type' in item && item.type === 'ad') {
              return (
                <div key={`ad-${item.id}`} className="h-full">
                  <SidebarAdItem index={item.id} className="h-full min-h-[250px]" />
                </div>
              )
            }

            const article = item as NewsArticle;
            return (
              <article key={article.id} className="group bg-transparent h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded bg-gray-200 mb-3">
                  <Image
                    src={article.thumbnail || article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <Link href={getArticleLink(article)} className="block">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 leading-snug hover:text-red-600 transition-colors mb-2">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </>
  )
}
