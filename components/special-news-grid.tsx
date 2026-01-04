import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"

interface SpecialNewsGridProps {
    articles: NewsArticle[]
    title?: string
    categorySlug?: string
}

export function SpecialNewsGrid({ articles, title, categorySlug }: SpecialNewsGridProps) {
    // Enforce 4 articles row if possible, but the grid will handle responsive behavior
    // The user requested "show 4 news in a row" -> mainly for large screens
    const gridColsClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

    return (
        <div className="my-8">
            <SectionHeader title={title} categorySlug={categorySlug} />

            <div className={`grid ${gridColsClass} gap-6`}>
                {articles.map((article) => (
                    <article
                        key={article.id}
                        className="group bg-transparent h-full flex flex-col"
                    >
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
                ))}
            </div>
        </div>
    )
}
