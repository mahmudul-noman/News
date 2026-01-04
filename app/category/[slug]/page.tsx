import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarAds } from "@/components/sidebar-ads"
import { sampleNews, categories } from "@/lib/news-data"
import { NewsGrid } from "@/components/news-grid"
import { HeroSection } from "@/components/hero-section"
import { getArticleLink } from "@/lib/utils"
import { AdBanner } from "@/components/ad-banner"

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((cat) => cat.slug === slug)

  if (!category) {
    return {
      title: "বিভাগ পাওয়া যায়নি",
    }
  }

  return {
    title: `${category.name} - Bangla News 24`,
    description: category.description,
    openGraph: {
      title: `${category.name} - Bangla News 24`,
      description: category.description,
    },
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((cat) => cat.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryNews = sampleNews.filter((article) => article.categorySlug === slug)

  const featuredArticle = categoryNews[0]
  const middleArticles = categoryNews.slice(1, 4)
  const remainingArticles = categoryNews.slice(4)


  // Fill grid with duplicates if less than 8 items
  let gridArticles = [...remainingArticles]
  if (gridArticles.length > 0 && gridArticles.length < 8) {
    const sourceArticles = categoryNews.length > 0 ? categoryNews : sampleNews
    let i = 0
    while (gridArticles.length < 8) {
      const source = sourceArticles[i % sourceArticles.length]
      gridArticles.push({
        ...source,
        id: `${source.id}-dup-${gridArticles.length}`, // Ensure unique ID
      })
      i++
    }
  }

  return (
    <main className="bg-white">
      <Header />
      
      <div className="container-news py-8">
        {/* Category Header and Advertisement Section */}
        <AdBanner />

        {/* Hero Section: Left - Category Top News | Right - 2 News + 2 Ads Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left Column - Category Top News (Large Featured Article) */}
          {featuredArticle && (
            <div className="lg:col-span-6">
              <article className="group flex flex-col overflow-hidden transition-shadow bg-white h-full">
                <div className="relative w-full h-96 bg-gray-200 overflow-hidden">
                  <img
                    src={featuredArticle.image || "/placeholder.svg?height=400&width=600&query=featured news"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Link href={getArticleLink(featuredArticle)}>
                    <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors mb-3 line-clamp-3 leading-[2.75rem]">
                      {featuredArticle.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-[1.2rem]">{featuredArticle.description}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(featuredArticle.publishedAt).toLocaleDateString("bn-BD", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </article>
            </div>
          )}

          {/* Right Column - 2 Columns: News Column + Ads Column */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Left Column - News 1 & News 2 */}
              <div className="flex flex-col gap-4">
                {/* News 1 */}
                {middleArticles[0] && (
                  <Link
                    href={getArticleLink(middleArticles[0])}
                    className="group flex flex-col overflow-hidden transition-shadow bg-white"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={middleArticles[0].image || "/placeholder.svg?height=200&width=300&query=news thumbnail"}
                        alt={middleArticles[0].title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors leading-[2.75rem]">
                        {middleArticles[0].title}
                      </h3>
                    </div>
                  </Link>
                )}

                {/* News 2 */}
                {middleArticles[1] && (
                  <Link
                    href={getArticleLink(middleArticles[1])}
                    className="group flex flex-col overflow-hidden transition-shadow bg-white"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={middleArticles[1].image || "/placeholder.svg?height=200&width=300&query=news thumbnail"}
                        alt={middleArticles[1].title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-[1.1rem] text-foreground line-clamp-3 group-hover:text-red-600 transition-colors leading-[2.75rem]">
                        {middleArticles[1].title}
                      </h3>
                    </div>
                  </Link>
                )}
              </div>

              {/* Right Column - Ads 1 & Ads 2 */}
              <div className="h-full">
                <SidebarAds count={2} />
              </div>
            </div>
          </div>
        </div>

        {gridArticles.length > 0 && (
          <NewsGrid articles={gridArticles} columns={4} title="আরও খবর" showAds={true} />
        )}
      </div>

      <Footer />
    </main>
  )
}
