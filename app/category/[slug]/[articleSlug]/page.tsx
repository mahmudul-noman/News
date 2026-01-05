
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdBanner } from "@/components/ad-banner"
import { sampleNews } from "@/lib/news-data"

import { constructMetadata } from "@/lib/seo"

interface CategoryPageProps {
  params: Promise<{
    slug: string
    articleSlug: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { articleSlug } = await params
  const article = sampleNews.find((news) => news.slug === articleSlug)

  if (!article) {
    return {
      title: "খবর পাওয়া যায়নি",
    }
  }

  return constructMetadata({
    title: `${article.title} - Bd Records Today`,
    description: article.description,
    image: article.image,
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    authors: [article.author],
    type: "article",
    canonicalUrl: `/category/${article.categorySlug}/${article.slug}`,
  })
}

export async function generateStaticParams() {
  return sampleNews.map((article) => ({
    slug: article.categorySlug,
    articleSlug: article.slug,
  }))
}

export default async function ArticlePage({ params }: CategoryPageProps) {
  const { articleSlug } = await params
  const article = sampleNews.find((news) => news.slug === articleSlug)

  if (!article) {
    notFound()
  }

  const relatedArticles = sampleNews
    .filter((news) => news.categorySlug === article.categorySlug && news.id !== article.id)
    .slice(0, 4)

  return (
    <main className="bg-white">
      <Header />

      <AdBanner />

      <article className="container-news py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Article Header */}
            <div className="mb-8">
              <p className="text-red-600 font-bold text-sm mb-3 inline-block px-3 py-1 bg-red-50 rounded">
                {article.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-600 pb-4 border-b border-gray-300">
                <span className="flex items-center gap-1">
                  <span className="font-semibold">লেখক:</span> {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">প্রকাশিত:</span>
                  {new Date(article.publishedAt).toLocaleDateString("bn-BD", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">দেখা হয়েছে:</span> {article.views.toLocaleString("bn-BD")}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-md">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-auto object-cover max-h-96"
              />
              <p className="text-xs text-gray-500 mt-2">ছবিটি শুধুমাত্র প্রতীকী।</p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-6 text-justify">
              <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-6 first-letter:text-2xl first-letter:font-bold">
                {article.description}
              </p>

              {/* In-Content Ad Section 1 */}
              <div className="my-8 bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 text-center">
                <p className="text-gray-600 text-sm mb-2 font-semibold">বিজ্ঞাপন</p>
                <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 h-32 rounded flex items-center justify-center">
                  <p className="text-gray-500 text-sm">বিজ্ঞাপন স্থান - ৩০০x২৫০</p>
                </div>
              </div>

              <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-6">{article.content}</p>

              {/* In-Content Ad Section 2 */}
              <div className="my-8 bg-green-100 border-2 border-green-400 rounded-lg p-4 text-center">
                <p className="text-gray-600 text-sm mb-2 font-semibold">আমাদের অফার দেখুন</p>
                <div className="bg-gradient-to-r from-green-300 to-green-200 h-24 rounded flex items-center justify-center">
                  <p className="text-gray-500 text-sm">প্রচারণা স্থান</p>
                </div>
              </div>

              <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                এটি একটি নমুনা খবর। বাস্তব খবরগুলি আরও বিস্তারিত হবে এবং উপযুক্ত সংবাদ সংস্থা থেকে সংগৃহীত হবে। প্রতিটি নিবন্ধ সাবধানে
                সম্পাদিত এবং যাচাই করা হয়।
              </p>
            </div>

            {/* Share Section */}
            <div className="py-6 border-t border-b border-gray-300 mb-8">
              <p className="text-sm font-semibold text-gray-700 mb-3">শেয়ার করুন:</p>
              <div className="flex gap-3">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">ফেসবুক</button>
                <button className="text-blue-400 hover:text-blue-600 text-sm font-semibold">টুইটার</button>
                <button className="text-red-600 hover:text-red-800 text-sm font-semibold">হোয়াটসঅ্যাপ</button>
              </div>
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mb-8 pb-8 border-b border-gray-300">
                <p className="text-sm font-semibold text-gray-700 mb-3">ট্যাগ:</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/search?tag=${tag}`}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-red-100 hover:text-red-600 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="pt-8">
                <h3 className="text-2xl font-bold mb-6 pb-3 border-b-4 border-red-600">সংশ্লিষ্ট খবর</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      href={`/category/${related.categorySlug}/${related.slug}`}
                      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-200"
                    >
                      <div className="relative h-40 bg-gray-200 overflow-hidden">
                        <img
                          src={related.thumbnail || related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-red-600 text-xs font-semibold mb-1">{related.category}</p>
                        <h4 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-red-600 transition-colors text-balance">
                          {related.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Ads */}
          <aside className="lg:col-span-4">
            <div className="sticky top-20 space-y-4">
              {/* Ad Slot 1 - Yellow */}
              <div className="bg-gradient-to-b from-yellow-300 to-yellow-200 rounded-lg overflow-hidden shadow-md border-2 border-yellow-400">
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-700 font-bold mb-2">বিশেষ অফার</p>
                    <p className="text-gray-600 text-sm">বিজ্ঞাপন স্থান</p>
                    <p className="text-gray-500 text-xs">৩০০x৪০০</p>
                  </div>
                </div>
              </div>

              {/* Ad Slot 2 - Pink */}
              <div className="bg-gradient-to-b from-pink-300 to-pink-200 rounded-lg overflow-hidden shadow-md border-2 border-pink-400">
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-700 font-bold mb-2">নতুন পণ্য</p>
                    <p className="text-gray-600 text-sm">বিজ্ঞাপন স্থান</p>
                    <p className="text-gray-500 text-xs">৩০০x৩২০</p>
                  </div>
                </div>
              </div>

              {/* Ad Slot 3 - Blue */}
              <div className="bg-gradient-to-b from-blue-300 to-blue-200 rounded-lg overflow-hidden shadow-md border-2 border-blue-400">
                <div className="h-72 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-700 font-bold mb-2">আমাদের সেবা</p>
                    <p className="text-gray-600 text-sm">বিজ্ঞাপন স্থান</p>
                    <p className="text-gray-500 text-xs">৩০০x৩৬০</p>
                  </div>
                </div>
              </div>

              {/* Ad Slot 4 - Red */}
              <div className="bg-gradient-to-b from-red-300 to-red-200 rounded-lg overflow-hidden shadow-md border-2 border-red-400">
                <div className="h-56 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-700 font-bold mb-2">বিশেষ ছাড়</p>
                    <p className="text-gray-600 text-sm">বিজ্ঞাপন স্থান</p>
                    <p className="text-gray-500 text-xs">৩০০x২৮০</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  )
}
