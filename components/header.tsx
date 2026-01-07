"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Home, LucideHome, ThumbsUp } from "lucide-react"
import { useState } from "react"
import { AdBanner } from "./ad-banner"
import { sampleNews } from "@/lib/news-data"

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const latestNews = sampleNews
    .filter(article => article.categorySlug === "latest")
    .slice(0, 3)

  const categories = [
    { name: "সর্বশেষ", slug: "latest" },
    { name: "জাতীয়", slug: "national" },
    { name: "রাজনীতি", slug: "politics" },
    { name: "অর্থনীতি-বাণিজ্য", slug: "business" },
    { name: "আন্তর্জাতিক", slug: "international" },
    { name: "খেলা", slug: "sports" },
    { name: "বিনোদন", slug: "entertainment" },
    { name: "সারাদেশ", slug: "regions" },
  ]

  return (
    <>
      <header className="bg-white">
        {/* Logo & Featured Articles Section */}
        <div className="container-news">
          {/* Ads / Banner Section */}
          <AdBanner />


          {/* Logo & Featured Articles Section */}
          <div className="py-4 border-b border-gray-200">
            <div className="flex items-center justify-between gap-6">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.webp"
                  alt="Bd Records Today"
                  width={200}
                  height={60}
                  className="h-auto w-auto max-h-[60px]"
                />
              </Link>

              {/* Featured Articles Preview */}
              <div className="hidden md:flex flex-1 items-center justify-center gap-4">
                {latestNews.map((news) => (
                  <Link
                    key={news.id}
                    href={`/category/${news.categorySlug}/${news.slug}`}
                    className="flex items-start gap-2 max-w-[220px] group"
                  >
                    <div className="w-16 h-12 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                      <Image
                        src={news.thumbnail || news.image}
                        alt={news.title}
                        width={64}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-base leading-[1.3] text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {news.title}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Date & Social Section */}
              <div className="flex-shrink-0 text-right">
                <div className="flex items-center justify-end gap-1 text-gray-500 mb-1">
                  <ThumbsUp size={14} className="text-gray-400" />
                  <span className="text-xs font-medium">সোসাল মিডিয়া</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
                <div className="text-xs text-gray-600 space-y-0.5">
                  <p>ঢাকা, রবিবার ০৪ জানুয়ারি ২০২৬</p>
                  <p>২০ পৌষ ১৪৩২, ১৪ রজব ১৪৪৭</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </header>

      {/* Navigation Menu */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container-news">
          <nav className="flex items-center justify-between py-3 overflow-x-auto">
            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-red-600 flex-shrink-0">
              <LucideHome size={20} />
              <span className="hidden sm:inline text-base">সর্বশেষ</span>
            </Link>

            {categories.slice(1).map((cat) => (
              <div
                key={cat.slug}
                onMouseEnter={() => setActiveDropdown(cat.slug)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="relative group flex-shrink-0"
              >
                <Link
                  href={`/category/${cat.slug}`}
                  className="px-3 py-2 text-base text-gray-700 hover:text-red-600 rounded transition-colors whitespace-nowrap"
                >
                  {cat.name}
                </Link>
              </div>
            ))}

            {/* Right side controls */}
            <div className="flex items-center gap-2 ml-auto flex-shrink-0">
              <button className="px-2 py-1 text-base text-gray-700 hover:bg-gray-100 rounded">ভিডিও</button>
              <div className="relative group">
                <button className="px-2 py-1 text-base text-gray-700 hover:bg-gray-100 rounded flex items-center gap-1">
                  বিভিন্ন <ChevronDown size={16} />
                </button>
              </div>
              <button className="px-2 py-1 text-base text-gray-700 hover:bg-gray-100 rounded">EN</button>
              <button className="px-2 py-1 text-base text-gray-700 hover:bg-gray-100 rounded">আরবি</button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
