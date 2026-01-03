"use client"
import Link from "next/link"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"

interface HeroSectionProps {
  featuredArticles?: NewsArticle[]
}

export function HeroSection({ featuredArticles }: HeroSectionProps) {
  // Ensure we have enough articles for the layout
  const articles = featuredArticles || []
  
  return (
    <section className="bg-white">
      <div className="container-news">
        {/* Ads / Banner Section */}
        <div className="w-full bg-gray-100 border border-gray-300 py-16 my-6 flex items-center justify-center">
          <p className="text-gray-500 text-lg font-medium">Ads / Banner</p>
        </div>

        {/* 3-Column Layout: Left Sidebar | Center Featured | Right Sidebar */}
        {articles.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Sidebar - News 1, 2, 3 */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* News 1 */}
                {articles[0] && (
                  <Link
                    href={getArticleLink(articles[0])}
                    className="group flex flex-col border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white"
                  >
                    <div className="relative h-32 overflow-hidden bg-gray-200">
                      <img
                        src={articles[0].thumbnail || articles[0].image}
                        alt={articles[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 flex-grow">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors">
                        {articles[0].title}
                      </h3>
                    </div>
                  </Link>
                )}

                {/* News 2 */}
                {articles[1] && (
                  <Link
                    href={getArticleLink(articles[1])}
                    className="group flex flex-col border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white"
                  >
                    <div className="relative h-32 overflow-hidden bg-gray-200">
                      <img
                        src={articles[1].thumbnail || articles[1].image}
                        alt={articles[1].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 flex-grow">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors">
                        {articles[1].title}
                      </h3>
                    </div>
                  </Link>
                )}
              </div>

              {/* News 3 - Full Width */}
              {articles[2] && (
                <Link
                  href={getArticleLink(articles[2])}
                  className="group flex flex-col border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="relative h-32 overflow-hidden bg-gray-200">
                    <img
                      src={articles[2].thumbnail || articles[2].image}
                      alt={articles[2].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors">
                      {articles[2].title}
                    </h3>
                  </div>
                </Link>
              )}
            </div>

            {/* Center - Today Top News (Large Featured) */}
            <div className="lg:col-span-4">
              {articles[3] && (
                <Link
                  href={getArticleLink(articles[3])}
                  className="group flex flex-col border border-gray-300 overflow-hidden hover:shadow-lg transition-shadow bg-white h-full"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={articles[3].thumbnail || articles[3].image}
                      alt={articles[3].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center items-center text-center flex-grow">
                    <h2 className="text-[1.75rem] font-bold text-foreground mb-2 group-hover:text-red-600 transition-colors">
                      Today top News
                    </h2>
                    <h3 className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-red-600 transition-colors">
                      {articles[3].title}
                    </h3>
                  </div>
                </Link>
              )}
            </div>

            {/* Right Sidebar - News 1, 2, 3 */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* News 1 */}
                {articles[1] && (
                  <Link
                    href={getArticleLink(articles[1])}
                    className="group flex flex-col border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white"
                  >
                    <div className="relative h-32 overflow-hidden bg-gray-200">
                      <img
                        src={articles[1].thumbnail || articles[1].image}
                        alt={articles[1].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 flex-grow">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors">
                        {articles[1].title}
                      </h3>
                    </div>
                  </Link>
                )}

                {/* News 2 */}
                {articles[2] && (
                  <Link
                    href={getArticleLink(articles[2])}
                    className="group flex flex-col border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white"
                  >
                    <div className="relative h-32 overflow-hidden bg-gray-200">
                      <img
                        src={articles[2].thumbnail || articles[2].image}
                        alt={articles[2].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 flex-grow">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors">
                        {articles[2].title}
                      </h3>
                    </div>
                  </Link>
                )}
              </div>

              {/* News 3 - Full Width */}
              {articles[3] && (
                <Link
                  href={getArticleLink(articles[3])}
                  className="group flex flex-col border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="relative h-32 overflow-hidden bg-gray-200">
                    <img
                      src={articles[3].thumbnail || articles[3].image}
                      alt={articles[3].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors">
                      {articles[3].title}
                    </h3>
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
