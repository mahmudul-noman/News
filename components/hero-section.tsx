"use client"
import Link from "next/link"
import type { NewsArticle } from "@/types/news"
import { getArticleLink } from "@/lib/utils"
import { AdBanner } from "./ad-banner"

interface HeroSectionProps {
  featuredArticles?: NewsArticle[]
}

export function HeroSection({ featuredArticles }: HeroSectionProps) {
  // Ensure we have enough articles for the layout
  const articles = featuredArticles || []

  return (
    <section className="bg-white">
      <div className="container-news my-4">
        {/* Ads / Banner Section */}
        {/* <AdBanner /> */}

        {/* 3-Column Layout: Left Sidebar | Center Featured | Right Sidebar */}
        {articles.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:divide-x lg:divide-gray-200">
            {/* Left Sidebar - News 1, 2, 3 */}
            <div className="lg:col-span-4 flex flex-col h-full lg:pr-4 py-4 lg:py-0">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* News 1 */}
                {articles[0] && (
                  <Link
                    href={getArticleLink(articles[0])}
                    className="group flex flex-col overflow-hidden bg-white"
                  >
                    <div className="relative h-32 overflow-hidden bg-gray-200">
                      <img
                        src={articles[0].thumbnail || articles[0].image}
                        alt={articles[0].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-1 flex-grow">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-2 group-hover:text-red-600 transition-colors">
                        {articles[0].title}
                      </h3>
                    </div>
                  </Link>
                )}

                {/* News 2 */}
                {articles[1] && (
                  <Link
                    href={getArticleLink(articles[1])}
                    className="group flex flex-col overflow-hidden bg-white"
                  >
                    <div className="relative h-32 overflow-hidden bg-gray-200">
                      <img
                        src={articles[1].thumbnail || articles[1].image}
                        alt={articles[1].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-1 flex-grow">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-2 group-hover:text-red-600 transition-colors">
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
                  className="group flex flex-col overflow-hidden bg-white"
                >
                  <div className="relative h-32 overflow-hidden bg-gray-200">
                    <img
                      src={articles[2].thumbnail || articles[2].image}
                      alt={articles[2].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-1">
                    <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors">
                      {articles[2].title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {articles[2].description}
                    </p>
                  </div>
                </Link>
              )}
            </div>

            {/* Center - Today Top News (Large Featured) */}
            <div className="lg:col-span-4 lg:px-4 py-4 lg:py-0">
              {articles[3] && (
                <Link
                  href={getArticleLink(articles[3])}
                  className="group flex flex-col overflow-hidden bg-white h-full"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={articles[3].thumbnail || articles[3].image}
                      alt={articles[3].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-2xl font-semibold text-foreground line-clamp-2 group-hover:text-red-600 transition-colors">
                      {articles[3].title}
                    </h3>
                  </div>
                  <div className="mt-1">
                    <p className="mt-1 text-base text-gray-500 line-clamp-3">
                      {articles[3].description}
                    </p>
                  </div>
                </Link>
              )}
            </div>

            {/* Right Sidebar - News 1, 2, 3 */}
            <div className="lg:col-span-4 flex flex-col h-full lg:pl-4 py-4 lg:py-0">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* News 1 */}
                {articles[1] && (
                  <Link
                    href={getArticleLink(articles[1])}
                    className="group flex flex-col overflow-hidden bg-white"
                  >
                    <div className="relative h-32 overflow-hidden bg-gray-200">
                      <img
                        src={articles[1].thumbnail || articles[1].image}
                        alt={articles[1].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-1 flex-grow">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-2 group-hover:text-red-600 transition-colors">
                        {articles[1].title}
                      </h3>
                    </div>
                  </Link>
                )}

                {/* News 2 */}
                {articles[2] && (
                  <Link
                    href={getArticleLink(articles[2])}
                    className="group flex flex-col overflow-hidden bg-white"
                  >
                    <div className="relative h-32 overflow-hidden bg-gray-200">
                      <img
                        src={articles[2].thumbnail || articles[2].image}
                        alt={articles[2].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow mt-1">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-2 group-hover:text-red-600 transition-colors">
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
                  className="group flex flex-col overflow-hidden bg-white"
                >
                  <div className="relative h-32 overflow-hidden bg-gray-200">
                    <img
                      src={articles[3].thumbnail || articles[3].image}
                      alt={articles[3].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-1">
                    <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors">
                      {articles[3].title}
                    </h3>
                  </div>
                  <div className="mt-1">
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {articles[3].description}
                    </p>
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
