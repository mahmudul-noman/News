"use client"

import Link from "next/link"
import Image from "next/image"

interface NewsItem {
    id: string
    title: string
    slug: string
    categorySlug: string
    thumbnail?: string
    image?: string
    publishedAt: string
}

interface VerticalNewsTickerProps {
    title: string
    news: NewsItem[]
    height?: string
}

export function VerticalNewsTicker({ title, news, height = "h-80" }: VerticalNewsTickerProps) {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-bold text-lg text-gray-800">{title}</h3>
            </div>
            <div className={`${height} overflow-y-auto custom-scrollbar`}>
                <div className="divide-y divide-gray-100">
                    {news.map((item) => (
                        <Link
                            key={item.id}
                            href={`/category/${item.categorySlug}/${item.slug}`}
                            className="flex gap-3 p-3 hover:bg-gray-50 transition-colors group"
                        >
                            <div className="relative w-20 h-14 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                                <Image
                                    src={item.thumbnail || item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-800 group-hover:text-red-600 line-clamp-2 leading-snug">
                                    {item.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
