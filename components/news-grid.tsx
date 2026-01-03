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
                <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-200">
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={article.thumbnail || article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {article.featured && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                        ফিচার
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-xs font-semibold text-red-600 mb-2 uppercase">{article.category}</p>
                    <Link href={getArticleLink(article)} className="block flex-grow">
                      <h3 className="font-bold text-sm md:text-base text-foreground line-clamp-3 hover:text-red-600 transition-colors mb-3 text-balance">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow">{article.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-200">
                      <span>{article.author}</span>
                      <span>
                        {new Date(article.publishedAt).toLocaleDateString("bn-BD", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
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
