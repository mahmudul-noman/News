import Link from "next/link"
import Image from "next/image"

interface NewsItem {
    id: string
    title: string
    slug: string
    categorySlug: string
    thumbnail?: string
    image?: string
    description?: string
    publishedAt: string
}

interface RelatedNewsDetailListProps {
    news: NewsItem[]
}

export function RelatedNewsDetailList({ news }: RelatedNewsDetailListProps) {
    return (
        <div className="space-y-6">
            {news.map((item) => (
                <Link
                    key={item.id}
                    href={`/category/${item.categorySlug}/${item.slug}`}
                    className="flex flex-col md:flex-row gap-4 group bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all"
                >
                    <div className="relative w-full md:w-64 aspect-video flex-shrink-0 rounded overflow-hidden bg-gray-200">
                        <Image
                            src={item.thumbnail || item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                            {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-2">
                            {item.description}
                        </p>
                        <p className="text-xs text-gray-500">
                            {new Date(item.publishedAt).toLocaleDateString("bn-BD", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
