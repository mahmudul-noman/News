import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsGrid } from "@/components/news-grid"
import { SpecialNewsGrid } from "@/components/special-news-grid"
import { VideoGallery } from "@/components/video-gallery"
import { SidebarAds } from "@/components/sidebar-ads"
import { Footer } from "@/components/footer"
import { PoliticsNewsLayout } from "@/components/politics-news-layout"
import { SportNewsLayout } from "@/components/sport-news-layout"
import { EntertainmentNewsLayout } from "@/components/entertainment-news-layout"
import { BusinessNewsLayout } from "@/components/business-news-layout"
import { sampleNews, sampleVideos } from "@/lib/news-data"
import { AdBanner } from "@/components/ad-banner"

export const metadata: Metadata = {
  title: "বিডি রেকর্ডস টুডে - দেশের শীর্ষ খবর",
  description:
    "বিডি রেকর্ডস টুডে - বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন নিউজ পোর্টাল। দেশ, বিদেশ, ব্যবসা, খেলা সহ সব ধরনের খবর পান লাইভ আপডেট সহ।",
  openGraph: {
    title: "বিডি রেকর্ডস টুডে - দেশের শীর্ষ খবর",
    description: "বাংলাদেশের শীর্ষস্থানীয় অনলাইন নিউজ পোর্টাল",
    url: "https://bdrecordstoday.com",
    type: "website",
    locale: "bn_BD",
  },
}

export default function Home() {
  const latestNews = sampleNews.slice(0, 12)
  const featuredArticles = sampleNews.filter((article) => article.featured || article.id === "1").slice(0, 10)

  return (
    <main className="bg-white">
      <Header />
      <HeroSection featuredArticles={featuredArticles} />

      <div className="container-news py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Featured News Grid */}
            <NewsGrid articles={latestNews} columns={3} title="সর্বশেষ খবর" showAds={true} />
          </div>

          <div className="lg:col-span-1 h-full">
            <SidebarAds count={4} />
          </div>
        </div>
      </div>

      {/* Ads / Banner Section */}
      <div className="container-news">
        <AdBanner />
      </div>

      <div className="container-news py-6 border-t border-gray-100">
        <SpecialNewsGrid
          articles={sampleNews.filter(a => a.categorySlug === 'national').slice(0, 4)}
          title="স্পেশাল রিপোর্ট"
          categorySlug="national"
        />
      </div>

      <div className="container-news py-6 border-t border-gray-100">
        <PoliticsNewsLayout
          articles={sampleNews.filter(a => a.categorySlug === 'politics').slice(0, 5)}
          title="রাজনীতি"
          categorySlug="politics"
        />
      </div>

      <div className="container-news py-6">
        <SportNewsLayout
          mainArticles={sampleNews.filter(a => a.categorySlug === 'sports').slice(0, 6)}
          title="খেলাধুলা"
          categorySlug="sports"
        />
      </div>

      {/* Ads / Banner Section */}
      <div className="container-news">
        <AdBanner />
      </div>

      <div className="container-news py-6 border-t border-gray-100">
        <EntertainmentNewsLayout
          articles={sampleNews.filter(a => a.categorySlug === 'entertainment').slice(0, 9)}
          title="বিনোদন"
          categorySlug="entertainment"
        />
      </div>

      {/* Ads / Banner Section */}
      <div className="container-news">
        <AdBanner />
      </div>

      <div className="container-news py-6">
        <BusinessNewsLayout
          articles={sampleNews.filter(a => a.categorySlug === 'business').slice(0, 7)}
          title="অর্থনীতি-বাণিজ্য"
          categorySlug="business"
        />
      </div>

      <Footer />
    </main >
  )
}
