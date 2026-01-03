import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"
import { SidebarAds } from "@/components/sidebar-ads"

interface PoliticsNewsLayoutProps {
    articles: NewsArticle[]
    title?: string
}

export function PoliticsNewsLayout({ articles, title }: PoliticsNewsLayoutProps) {
    // We need at least 1 article for the center, and up to 4 for the left.
    // Strategy:
    // Center: Article index 0 (Highest priority/Latest) OR provided specifically.
    // Left: Article index 1-4.
    // Wait, user said "Center top News", "Left Side show 4 news".
    // Usually "Center top" implies the main feature.
    // Let's use:
    // Center: articles[0] (Big)
    // Left: articles[1..4] (Small list)
    //
    // NOTE: If we want strictly what the user asked: "Left Side show 4 news, center top News"
    // It might mean the first 4 go to left, next 1 goes to center.
    // But typically the biggest news is the first one.
    // Let's assume:
    // Main Lead (Center): Article[0]
    // Side Leads (Left): Articles[1, 2, 3, 4]

    const mainArticle = articles[0]
    const sideArticles = articles.slice(1, 5)

    if (!mainArticle) return null

    return (
        <div className="my-8">
            {title && (
                <div className="mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-red-600 rounded-sm"></div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase">{title}</h2>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
                {/* Left Column: 4 Small News Items */}
                {/* Left Column: 4 Small News Items */}
                <div className="lg:col-span-1 flex flex-col order-2 lg:order-1 h-full">
                    {sideArticles.map((article, index) => (
                        <article
                            key={article.id}
                            className={`group flex gap-4 items-start py-4 ${index !== sideArticles.length - 1 ? "border-b border-gray-200" : ""
                                } first:pt-0 last:pb-0 h-full`}
                        >
                            <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
                                <Image
                                    src={article.thumbnail || article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-grow flex flex-col justify-start">
                                <Link href={getArticleLink(article)}>
                                    <h3 className="font-medium text-base leading-snug hover:text-red-600 transition-colors">
                                        {article.title}
                                    </h3>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Center Column: 1 Large News Item */}
                <div className="lg:col-span-2 order-1 lg:order-2 h-full">
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
                            <div className="mt-4 text-sm text-gray-500">
                                {/* Optional: Time or Date could go here if data available */}
                            </div>
                        </div>
                    </article>
                </div>

                {/* Right Column: Sidebar Ads */}
                <div className="lg:col-span-1 order-3 h-full">
                    <SidebarAds count={2} />
                </div>
            </div>
        </div>
    )
}
