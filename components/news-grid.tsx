import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"
import { AdSlot } from "./ad-slot"
import { AD_Config, AD_INJECTION_INTERVAL } from "@/lib/ads-config"
import { AdBanner } from "./ad-banner"

interface NewsGridProps {
  articles: NewsArticle[]
  showAds?: boolean
  columns?: 2 | 3 | 4
  title?: string
}

export function NewsGrid({ articles, showAds = true, columns = 4, title }: NewsGridProps) {
  const gridColsClass =
    ({
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    } as const)[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

  return (
    <>
      <div className="my-6">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-1">{title}</h2>
            <div className="w-12 h-1 bg-red-600 rounded"></div>
          </div>
        )}

        <div className={`grid ${gridColsClass} gap-6`}>
          {articles.map((article, index) => {
            const showAdBelow =
              showAds && (index + 1) % AD_INJECTION_INTERVAL === 0 && index !== articles.length - 1

            return (
              <React.Fragment key={article.id}>
                <article className="group bg-transparent h-full flex flex-col">
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
                {showAdBelow && (
                  <div className={`col-span-1 sm:col-span-2 lg:col-span-${columns} flex justify-center w-full`}>
                    <AdSlot config={AD_Config.news_grid_inline} />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </>
  )
}
