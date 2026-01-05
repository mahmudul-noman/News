import Link from "next/link"
import Image from "next/image"
import { PencilLine, Clock, ArrowRight } from "lucide-react"

interface NewsItem {
    id: string
    title: string
    slug: string
    categorySlug: string
    thumbnail?: string
    image?: string
    description?: string
    publishedAt: string
    author?: string
}

interface RelatedNewsDetailListProps {
    news: NewsItem[]
}

export function RelatedNewsDetailList({ news }: RelatedNewsDetailListProps) {
    return (
        <div className="space-y-12">
            {news.map((item) => (
                <div key={item.id} className="group border-b border-gray-200 pb-8 last:border-0">
                    <Link href={`/category/${item.categorySlug}/${item.slug}`} className="block">
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                            {item.title}
                        </h3>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                            <span className="flex items-center gap-2">
                                <PencilLine className="w-4 h-4" />
                                <span>{item.author || "নিজস্ব প্রতিবেদক"}</span>
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>
                                    {new Date(item.publishedAt).toLocaleDateString("bn-BD", {
                                        weekday: "long",
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            </span>
                        </div>

                        {/* Big Image */}
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 mb-6">
                            <Image
                                src={item.thumbnail || item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Description with Fade/Opacity effect on last line */}
                        <div className="relative mb-6">
                            <p className="text-lg text-gray-700 leading-relaxed line-clamp-3" style={{
                                maskImage: 'linear-gradient(black 60%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(black 60%, transparent 100%)'
                            }}>
                                {item.description}
                            </p>
                        </div>

                        {/* Read More Button */}
                        <div className="inline-flex items-center gap-2 px-6 py-2 border border-gray-400 rounded hover:bg-red-600 hover:text-white hover:border-red-600 transition-all font-medium text-sm">
                            বাকি অংশ পড়ুন
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
