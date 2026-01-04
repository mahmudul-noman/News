"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"
import { SidebarAds } from "@/components/sidebar-ads"
import { sampleNews } from "@/lib/news-data"
import { cn } from "@/lib/utils"

interface SportNewsLayoutProps {
    title?: string
    mainArticles: NewsArticle[]
}

export function SportNewsLayout({ title = "খেলাধুলা", mainArticles }: SportNewsLayoutProps) {
    const [activeTab, setActiveTab] = useState<"read" | "discussed" | "good_news">("read")

    // Data for Tabs (Mocking logic based on sampleNews)
    const readNews = sampleNews.slice(0, 5) // Mock "Most Read"
    const discussedNews = sampleNews.slice(5, 10) // Mock "Discussed"
    const goodNews = sampleNews.slice(10, 15) // Mock "Good News"

    const getTabNews = () => {
        switch (activeTab) {
            case "read": return readNews
            case "discussed": return discussedNews
            case "good_news": return goodNews
            default: return readNews
        }
    }

    // Middle Column Data
    const mainBigNews = mainArticles[0]
    const mainSubNews = mainArticles.slice(1, 3)

    // Right Column Data (Latest 3 news for list)
    const rightSideNews = sampleNews.slice(15, 18)

    return (
        <div className="my-8">
            {/* Section Title */}
            <div className="mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-red-600 rounded-sm"></div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase">{title}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200 items-stretch">

                {/* Left Column: Tabs */}
                <div className="lg:col-span-1 h-full lg:pr-6">
                    {/* Tab Headers */}
                    <div className="flex border-b-2 border-gray-200 mb-4">
                        <button
                            onClick={() => setActiveTab("read")}
                            className={cn(
                                "flex-1 cursor-pointer pb-2 text-lg font-bold text-center transition-colors relative top-[2px]",
                                activeTab === "read" ? "text-black border-b-4 border-red-600" : "text-gray-500 hover:text-gray-700"
                            )}
                        >
                            পঠিত
                        </button>
                        <button
                            onClick={() => setActiveTab("discussed")}
                            className={cn(
                                "flex-1 cursor-pointer pb-2 text-lg font-bold text-center transition-colors relative top-[2px]",
                                activeTab === "discussed" ? "text-black border-b-4 border-red-600" : "text-gray-500 hover:text-gray-700"
                            )}
                        >
                            আলোচিত
                        </button>
                        <button
                            onClick={() => setActiveTab("good_news")}
                            className={cn(
                                "flex-1 cursor-pointer pb-2 text-lg font-bold text-center transition-colors relative top-[2px]",
                                activeTab === "good_news" ? "text-black border-b-4 border-red-600" : "text-gray-500 hover:text-gray-700"
                            )}
                        >
                            সুখবর
                        </button>
                    </div>

                    {/* Tab Content (List) */}
                    <div className="flex flex-col">
                        {getTabNews().map((article, index) => (
                            <Link key={article.id} href={getArticleLink(article)} className="group flex flex-col gap-1 py-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                                <span className="text-5xl font-bold text-gray-300 leading-none">
                                    {/* Bengali Numeral Conversion */}
                                    {(index + 1).toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[parseInt(d)])}
                                </span>
                                <h4 className="text-[1.1rem] leading-snug font-medium text-gray-900 group-hover:text-red-600 mt-2">
                                    {article.title}
                                </h4>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Middle Column: Big News + 2 Sub News */}
                <div className="lg:col-span-2 lg:px-6">
                    {mainBigNews && (
                        <div className="mb-6">
                            <Link href={getArticleLink(mainBigNews)} className="group block">
                                <div className="relative w-full aspect-video overflow-hidden rounded-md bg-gray-100 mb-3">
                                    <Image
                                        src={mainBigNews.image}
                                        alt={mainBigNews.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-600 leading-tight mb-2">
                                    {mainBigNews.title}
                                </h3>
                                <p className="text-gray-600 text-base line-clamp-2">{mainBigNews.description}</p>
                            </Link>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mainSubNews.map(article => (
                            <Link key={article.id} href={getArticleLink(article)} className="group block">
                                <div className="relative w-full aspect-[3/2] overflow-hidden rounded-md bg-gray-100 mb-2">
                                    <Image
                                        src={article.thumbnail || article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="text-base font-semibold text-gray-900 group-hover:text-red-600 line-clamp-2">
                                    {article.title}
                                </h4>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Column: Ads + 3 News List */}
                <div className="lg:col-span-1 space-y-6 lg:pl-6">
                    <div className="w-full">
                        <SidebarAds count={1} />
                    </div>

                    <div className="space-y-4">
                        {rightSideNews.map((article, index) => {
                            const timeAgo = ["১ ঘণ্টা আগে", "৩ ঘণ্টা আগে", "৪ ঘণ্টা আগে"][index % 3];

                            return (
                                <Link key={article.id} href={getArticleLink(article)} className="group flex gap-4 items-start border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                    <div className="flex-grow flex flex-col gap-2">
                                        <h4 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 line-clamp-3 leading-snug">
                                            {article.title}
                                        </h4>
                                        <span className="text-gray-500 text-sm">{timeAgo}</span>
                                    </div>
                                    <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                                        <Image
                                            src={article.thumbnail || article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
