import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"

interface SpecialNewsGridProps {
    articles: NewsArticle[]
    title?: string
}

export function SpecialNewsGrid({ articles, title }: SpecialNewsGridProps) {
    // Enforce 4 articles row if possible, but the grid will handle responsive behavior
    // The user requested "show 4 news in a row" -> mainly for large screens
    const gridColsClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

    return (
        <div className="my-8">
            {title && (
                <div className="mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-red-600 rounded-sm"></div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase">{title}</h2>
                </div>
            )}

            <div className={`grid ${gridColsClass} gap-6`}>
                {articles.map((article) => (
                    <article
                        key={article.id}
                        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-100"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                            <Image
                                src={article.thumbnail || article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {article.category && (
                                <div className="absolute top-2 left-2">
                                    <span className="px-2 py-1 bg-red-600 text-white text-[10px] font-bold rounded uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="p-4 flex flex-col flex-grow">
                            <Link href={getArticleLink(article)} className="block flex-grow">
                                <h3 className="font-bold text-base text-gray-900 line-clamp-2 hover:text-red-600 transition-colors mb-2 leading-snug">
                                    {article.title}
                                </h3>
                            </Link>

                            <div className="flex items-center text-xs text-gray-500 mt-auto pt-2">
                                <span className="truncate max-w-[120px]">{article.author}</span>
                                <span className="mx-1.5">•</span>
                                <span>
                                    {new Date(article.publishedAt).toLocaleDateString("bn-BD", {
                                        day: "numeric",
                                        month: "short",
                                    })}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
