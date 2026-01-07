import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { sampleNews } from "@/lib/news-data"

interface TopicPageProps {
    params: Promise<{
        tag: string
    }>
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
    const { tag } = await params
    const decodedTag = decodeURIComponent(tag)

    return {
        title: `টপিক: ${decodedTag} - Bd Records Today`,
        description: `${decodedTag} কভার করা সর্বশেষ খবর`,
    }
}

export default async function TopicPage({ params }: TopicPageProps) {
    const { tag } = await params
    const decodedTag = decodeURIComponent(tag)

    // Filter news that contain the tag
    const filteredNews = sampleNews.filter((news) =>
        news.tags.some(t =>
            t.split(',').map(subTag => subTag.trim().toLowerCase()).includes(decodedTag.toLowerCase())
        )
    )

    return (
        <main className="bg-white min-h-screen flex flex-col">
            <Header />

            <div className="container-news py-8 flex-1">
                <div className="mb-8 pb-4 border-b border-gray-200">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        বিষয়: <span className="text-red-600">{decodedTag}</span>
                    </h1>
                </div>

                {filteredNews.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredNews.map((item) => (
                            <Link
                                key={item.id}
                                href={`/category/${item.categorySlug}/${item.slug}`}
                                className="group bg-white overflow-hidden flex flex-col h-full"
                            >
                                <div className="relative aspect-video bg-gray-100 overflow-hidden mb-3">
                                    <Image
                                        src={item.thumbnail || item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight line-clamp-1">
                                        {item.title}
                                    </h2>
                                    <p className="text-base text-gray-700 line-clamp-3 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">
                            এই বিষয়ে কোনো খবর পাওয়া যায়নি।
                        </p>
                        <Link
                            href="/"
                            className="inline-block mt-4 text-red-600 hover:underline"
                        >
                            হোম পেজে ফিরে যান
                        </Link>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    )
}
