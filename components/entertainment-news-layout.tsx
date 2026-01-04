import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"

interface EntertainmentNewsLayoutProps {
    articles: NewsArticle[]
    title?: string
}

export function EntertainmentNewsLayout({ articles, title }: EntertainmentNewsLayoutProps) {
    const mainArticle = articles[0]
    // Left column: items 1-4 (4 items)
    const leftArticles = articles.slice(1, 5)
    // Right column: items 5-8 (4 items)
    const rightArticles = articles.slice(5, 9)

    if (!mainArticle) return null

    return (
        <div className="my-8 text-black">
            {title && (
                <div className="mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-red-600 rounded-sm"></div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase">{title}</h2>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
                {/* Left Column: 4 Small News Items */}
                <div className="lg:col-span-1 flex flex-col order-2 lg:order-1 h-full lg:border-r lg:border-gray-200 lg:pr-6">
                    {leftArticles.map((article, index) => (
                        <article
                            key={article.id}
                            className={`group flex gap-4 items-center justify-between ${index !== leftArticles.length - 1 ? "border-b border-gray-200" : ""
                                } py-4 first:pt-0 last:pb-0 h-full`}
                        >
                            <div className="flex-grow order-1">
                                <Link href={getArticleLink(article)}>
                                    <h3 className="font-medium text-lg leading-snug hover:text-red-600 transition-colors">
                                        {article.title}
                                    </h3>
                                </Link>
                            </div>
                            <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-200 order-2">
                                <Image
                                    src={article.thumbnail || article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </article>
                    ))}
                </div>

                {/* Center Column: 1 Large News Item */}
                <div className="lg:col-span-2 order-1 lg:order-2 h-full lg:px-6">
                    <article className="group h-full flex flex-col">
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-200 mb-4">
                            <Image
                                src={mainArticle.image} // Use main image for the big card
                                alt={mainArticle.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col flex-shrink-0">
                            <Link href={getArticleLink(mainArticle)}>
                                <h3 className="font-bold text-2xl md:text-3xl leading-tight hover:text-red-600 transition-colors mb-3">
                                    {mainArticle.title}
                                </h3>
                            </Link>
                            <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
                                {mainArticle.description}
                            </p>
                        </div>
                    </article>
                </div>

                {/* Right Column: 4 Small News Items (Similar to Left) */}
                <div className="lg:col-span-1 flex flex-col order-3 h-full lg:border-l lg:border-gray-200 lg:pl-6">
                    {leftArticles.map((article, index) => (
                        <article
                            key={article.id}
                            className={`group flex gap-4 items-center justify-between ${index !== leftArticles.length - 1 ? "border-b border-gray-200" : ""
                                } py-4 first:pt-0 last:pb-0 h-full`}
                        >
                            <div className="flex-grow order-1">
                                <Link href={getArticleLink(article)}>
                                    <h3 className="font-medium text-lg leading-snug hover:text-red-600 transition-colors">
                                        {article.title}
                                    </h3>
                                </Link>
                            </div>
                            <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-200 order-2">
                                <Image
                                    src={article.thumbnail || article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
