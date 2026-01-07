import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"
import { SidebarAds, SidebarAdItem } from "@/components/sidebar-ads"
import { SectionHeader } from "@/components/section-header"

interface PoliticsNewsLayoutProps {
    articles: NewsArticle[]
    title?: string
    categorySlug?: string
}

export function PoliticsNewsLayout({ articles, title, categorySlug }: PoliticsNewsLayoutProps) {
    const mainArticle = articles[0]
    const sideArticles = articles.slice(1, 8)
    // The 6th article (index 5) is for the right column
    const rightSideArticle = articles[5]

    if (!mainArticle) return null

    return (
        <div className="my-2">
            <SectionHeader title={title} categorySlug={categorySlug} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
                {/* Left Column: 4 Small News Items List */}
                <div className="lg:col-span-1 flex flex-col order-2 lg:order-1 h-full border-r border-gray-200 pr-4">
                    {sideArticles.map((article, index) => (
                        <article
                            key={article.id}
                            className={`group flex gap-3 items-start py-3 ${index !== sideArticles.length - 1 ? "border-b border-gray-200" : ""
                                } first:pt-0 last:pb-0`}
                        >
                            <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
                                <Image
                                    src={article.thumbnail || article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-grow">
                                <Link href={getArticleLink(article)}>
                                    <h3 className="font-medium text-sm leading-snug hover:text-red-600 transition-colors line-clamp-3">
                                        {article.title}
                                    </h3>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Center Column: 1 Large News Item */}
                <div className="lg:col-span-2 order-1 lg:order-2 h-full border-r border-gray-200 pr-4 pl-4">
                    <article className="group h-full flex flex-col">
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-200 mb-3">
                            <Image
                                src={mainArticle.image}
                                alt={mainArticle.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col flex-shrink-0">
                            <Link href={getArticleLink(mainArticle)}>
                                <h3 className="font-bold text-xl md:text-2xl leading-tight hover:text-red-600 transition-colors mb-2">
                                    {mainArticle.title}
                                </h3>
                            </Link>
                            <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                                {mainArticle.description}
                            </p>
                        </div>
                    </article>
                </div>

                {/* Right Column: Ad + 1 News Item */}
                <div className="lg:col-span-1 order-3 lg:order-3 h-full pl-4 flex flex-col gap-6">
                    {/* Ad Block */}
                    <div className="w-full h-[250px]">
                        <SidebarAdItem index={0} className="w-full h-full" />
                    </div>

                    {/* Single News Item */}
                    {rightSideArticle && (
                        <article className="group flex flex-col">
                            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-200 mb-3">
                                <Image
                                    src={rightSideArticle.image}
                                    alt={rightSideArticle.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <Link href={getArticleLink(rightSideArticle)}>
                                <h3 className="font-medium text-base leading-snug hover:text-red-600 transition-colors">
                                    {rightSideArticle.title}
                                </h3>
                            </Link>
                        </article>
                    )}
                </div>
            </div>
        </div>
    )
}
