import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdBanner } from "@/components/ad-banner"
import { ShareButtons } from "@/components/share-buttons"
import { ArticleSidebarAd } from "@/components/article-sidebar-ad"
import { sampleNews } from "@/lib/news-data"
import { constructMetadata } from "@/lib/seo"
import { VerticalNewsTicker } from "@/components/vertical-news-ticker"
import { RelatedNewsRow } from "@/components/related-news-row"
import { RelatedNewsDetailList } from "@/components/related-news-list"
import axios from "@/lib/axiosConfig"
import { NewsDetail } from "@/types/news"

interface CategoryPageProps {
  params: Promise<{
    slug: string
    articleSlug: string
  }>
}

async function getNewsDetail(slug: string): Promise<NewsDetail | null> {
  try {
    const response = await axios.get(`api/v1/news/${slug}`);
    if (response.data && response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching news detail:", error);
    return null;
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { articleSlug } = await params
  const article = await getNewsDetail(articleSlug);

  if (!article) {
    return {
      title: "খবর পাওয়া যায়নি",
    }
  }

  const imageUrl = article.feature_image.length > 0 ? article.feature_image[0].file : "/placeholder.svg";

  return constructMetadata({
    title: article.seo.seo_title || `${article.title} - Bd Records Today`,
    description: article.seo.seo_description || article.excerpt,
    image: imageUrl,
    publishedTime: article.published_at || article.created_at,
    modifiedTime: article.updated_at,
    authors: [article.author_name],
    type: "article",
    canonicalUrl: article.seo.canonical_url || `/category/${article.category_slug}/${article.slug}`,
  })
}

// Removing generateStaticParams as we are now dynamic fetching, or we can keep it for sample items 
// but it's risky if API has more items. For now, let's remove it to allow dynamic slug fetching.
// If we need SSG for some pages, we would need an API to list all slugs.

export default async function ArticlePage({ params }: CategoryPageProps) {
  const { articleSlug } = await params
  const article = await getNewsDetail(articleSlug);

  if (!article) {
    notFound()
  }

  // Filter related articles (same category, excluding current)
  // Note: Still using sampleNews for related items as API wasn't provided for this
  let relatedArticles = sampleNews
    .filter((news) => news.categorySlug === article.category_slug && news.id !== article.id.toString())

  // If fewer than 7 related articles, fill with other latest news
  if (relatedArticles.length < 7) {
    const otherNews = sampleNews.filter(
      (news) => news.categorySlug !== article.category_slug && news.id !== article.id.toString()
    )
    relatedArticles = [...relatedArticles, ...otherNews].slice(0, 10)
  }

  const relatedArticlesRow = relatedArticles.slice(0, 4)
  const relatedArticlesList = relatedArticles.slice(4, 8) // Ensure 4 items for list if available

  // Latest news (all categories, sorted by date desc)
  const latestNews = [...sampleNews]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 7)

  // Most read news (all categories, sorted by views desc)
  const mostReadNews = [...sampleNews]
    .sort((a, b) => b.views - a.views)
    .slice(0, 7)

  const imageUrl = article.feature_image.length > 0 ? article.feature_image[0].file : "/placeholder.svg";

  return (
    <main className="bg-white">
      <Header />

      <div className="container-news py-2">
        <AdBanner />
      </div>

      <article className="container-news py-2">
        {/* Article Header */}
        <div className="mb-8">
          <p className="text-red-600 font-bold text-sm mb-3 inline-block px-3 py-1 bg-red-50 rounded">
            {article.category_name}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-600 pb-4 border-b border-gray-300">
            <span className="flex items-center gap-1">
              <span className="font-semibold">লেখক:</span> {article.author_name || "নিজস্ব প্রতিবেদক"}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold"> | </span>
              {article.published_at ? new Date(article.published_at).toLocaleDateString("bn-BD", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }) : new Date(article.created_at).toLocaleDateString("bn-BD", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 ml-auto">
              <span className="font-semibold">দেখা হয়েছে:</span> {article.views_count}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-9">


            {/* Featured Image */}
            <div className="mb-8 overflow-hidden shadow-md">
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-auto object-cover max-h-[500px]"
              />
              <p className="text-xs text-gray-500 mt-2 p-1">ছবিটি শুধুমাত্র প্রতীকী।</p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-6 text-justify">
              <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-6 first-letter:text-2xl first-letter:font-bold">
                {article.excerpt}
              </p>

              {/* In-Content Ad Section 1 */}
              <div className="my-4">
                <AdBanner />
              </div>

              <div
                className="text-gray-800 leading-relaxed text-base md:text-lg mb-6 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="text-gray-800 leading-relaxed text-base md:text-lg mb-6">
                <br />
                বিস্তারিত সংবাদের জন্য চোখ রাখুন আমাদের ওয়েবসাইটে। আমরা সর্বদা সত্য ও বস্তুনিষ্ঠ সংবাদ প্রকাশের চেষ্টা করি। আমাদের সাথে থাকার জন্য ধন্যবাদ।
              </div>

              {/* In-Content Ad Section 2 */}
              <div className="my-4">
                <AdBanner />
              </div>
            </div>

            <div className="py-6 border-t border-b border-gray-300 mb-8 flex items-center gap-4">
              <p className="text-lg font-semibold text-gray-800">শেয়ার করুন :</p>
              <ShareButtons />
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-lg text-gray-600">টপিক:</p>
                  {article.tags.flatMap(t => t.slug).map((tag, index, arr) => (
                    <div key={tag} className="flex items-center">
                      <Link
                        href={`/topic/${tag}`}
                        className="text-lg text-gray-800 hover:text-red-600 transition-colors"
                      >
                        {article.tags.find(t => t.slug === tag)?.name}
                      </Link>
                      {index < arr.length - 1 && <span className="text-lg text-gray-800">,</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related News Section */}
            <div className="py-2 mt-2">
              {/* 4 News Card in a Row */}
              {relatedArticlesRow.length > 0 && (
                <RelatedNewsRow news={relatedArticlesRow} />
              )}

              {/* Related News with some details */}
              {relatedArticlesList.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-red-600 inline-block">আরও পড়ুন</h3>
                  <div className="w-full h-[1px] bg-gray-200 mb-6 -mt-[1px]"></div>
                  <RelatedNewsDetailList news={relatedArticlesList} />
                </div>
              )}
            </div>

          </div>

          {/* Sidebar - Right Column */}
          <aside className="lg:col-span-3 space-y-8">

            {/* Ad 1 */}
            <ArticleSidebarAd height="h-[300px]" sizeLabel="300 x 250" />

            {/* Ad 2 */}
            <ArticleSidebarAd height="h-[200px]" sizeLabel="300 x 150" />

            {/* Latest 7 News in Y axis scroll */}
            <VerticalNewsTicker title="সর্বশেষ খবর" news={latestNews} />

            {/* Ad 3 */}
            <ArticleSidebarAd height="h-[250px]" sizeLabel="300 x 200" />

            {/* Sticky Most Read */}
            <div className="sticky top-24">
              <VerticalNewsTicker title="সর্বাধিক পঠিত" news={mostReadNews} />
            </div>

          </aside>
        </div>

      </article>

      <Footer />
    </main>
  )
}
