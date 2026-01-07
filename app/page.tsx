import type { Metadata } from "next"
import { constructMetadata, BASE_URL } from "@/lib/seo"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsGrid } from "@/components/news-grid"
import { SpecialNewsGrid } from "@/components/special-news-grid"
import { SidebarAds } from "@/components/sidebar-ads"
import { Footer } from "@/components/footer"
import { PoliticsNewsLayout } from "@/components/politics-news-layout"
import { SportNewsLayout } from "@/components/sport-news-layout"
import { EntertainmentNewsLayout } from "@/components/entertainment-news-layout"
import { BusinessNewsLayout } from "@/components/business-news-layout"
import { sampleNews } from "@/lib/news-data"
import { AdBanner } from "@/components/ad-banner"

export const metadata: Metadata = {
  ...constructMetadata({
    title: "বিডি রেকর্ডস টুডে - দেশের শীর্ষ খবর",
    description:
      "বিডি রেকর্ডস টুডে - বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন নিউজ পোর্টাল। দেশ, বিদেশ, ব্যবসা, খেলা সহ সব ধরনের খবর পান লাইভ আপডেট সহ।",
  }),
}

export default function Home() {
  const latestNews = sampleNews.slice(0, 14)
  const featuredArticles = sampleNews
    .filter((a) => a.featured || a.id === "1")
    .slice(0, 10)

  return (
    <main className="bg-white" role="main">
      {/* Homepage Schema */}
      <script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Bd Records Today - Homepage",
            url: BASE_URL,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: latestNews.map((news, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${BASE_URL}/news/${news.slug}`,
                name: news.title,
              })),
            },
          }),
        }}
      />

      {/* Website Search Schema */}
      <script
        id="website-search-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Bd Records Today",
            url: BASE_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${BASE_URL}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <Header />
      <HeroSection featuredArticles={featuredArticles} />

      <div className="container-news py-6">
        <section aria-labelledby="latest-news">
          <h2 id="latest-news" className="sr-only">
            সর্বশেষ খবর
          </h2>
          <NewsGrid
            articles={latestNews}
            columns={4}
            title="সর্বশেষ খবর"
            showAds={true}
          />
        </section>
      </div>

      {/* Fixed-height Ad Wrapper (CLS Safe) */}
      <div className="container-news min-h-[90px]">
        <AdBanner />
      </div>

      <section className="container-news py-6 border-t border-gray-100">
        <SpecialNewsGrid
          articles={sampleNews.filter(a => a.categorySlug === "national").slice(0, 4)}
          title="স্পেশাল রিপোর্ট"
          categorySlug="national"
        />
      </section>

      <section className="container-news py-6 border-t border-gray-100">
        <PoliticsNewsLayout
          articles={sampleNews.filter(a => a.categorySlug === "politics").slice(0, 5)}
          title="রাজনীতি"
          categorySlug="politics"
        />
      </section>

      <div className="container-news min-h-[90px]">
        <AdBanner />
      </div>

      <section className="container-news py-6">
        <SportNewsLayout
          mainArticles={sampleNews.filter(a => a.categorySlug === "sports").slice(0, 6)}
          title="খেলাধুলা"
          categorySlug="sports"
        />
      </section>

      <div className="container-news min-h-[90px]">
        <AdBanner />
      </div>

      <section className="container-news py-6 border-t border-gray-100">
        <EntertainmentNewsLayout
          articles={sampleNews.filter(a => a.categorySlug === "entertainment").slice(0, 9)}
          title="বিনোদন"
          categorySlug="entertainment"
        />
      </section>

      <section className="container-news py-6">
        <BusinessNewsLayout
          articles={sampleNews.filter(a => a.categorySlug === "business").slice(0, 7)}
          title="অর্থনীতি-বাণিজ্য"
          categorySlug="business"
        />
      </section>

      <Footer />
    </main>
  )
}
