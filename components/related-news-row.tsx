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

interface RelatedNewsRowProps {
    news: NewsItem[]
}

export function RelatedNewsRow({ news }: RelatedNewsRowProps) {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-red-600 inline-block">সম্পর্কিত খবর</h3>
            <div className="w-full h-[1px] bg-gray-200 mb-6 -mt-[1px]"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {news.map((item) => (
                    <Link
                        key={item.id}
                        href={`/category/${item.categorySlug}/${item.slug}`}
                        className="group bg-white overflow-hidden"
                    >
                        <div className="relative aspect-video bg-gray-200 overflow-hidden">
                            <Image
                                src={item.thumbnail || item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="pt-1">
                            <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors">
                                {item.title}
                            </h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
