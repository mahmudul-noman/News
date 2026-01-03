import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsGrid } from "@/components/news-grid"
import { SpecialNewsGrid } from "@/components/special-news-grid"
import { VideoGallery } from "@/components/video-gallery"
import { SidebarAds } from "@/components/sidebar-ads"
import { Footer } from "@/components/footer"
import { sampleNews, sampleVideos } from "@/lib/news-data"

export const metadata: Metadata = {
  title: "Bangla News 24 - বাংলা নিউজ ২৪ | দেশের শীর্ষ খবর",
  description:
    "Bangla News 24 - বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন নিউজ পোর্টাল। দেশ, বিদেশ, ব্যবসা, খেলা সহ সব ধরনের খবর পান লাইভ আপডেট সহ।",
  openGraph: {
    title: "Bangla News 24 - দেশের শীর্ষ খবর",
    description: "বাংলাদেশের শীর্ষস্থানীয় অনলাইন নিউজ পোর্টাল",
    url: "https://banglanews24.com",
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

      <div className="container-news py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Featured News Grid */}
            <section className="mb-8">
              <NewsGrid articles={latestNews} columns={3} title="সর্বশেষ খবর" showAds={true} />
            </section>
          </div>

          <div className="lg:col-span-1">
            <SidebarAds />
          </div>
        </div>
      </div>

      <div className="container-news py-8 border-t border-gray-100">
        <SpecialNewsGrid
          articles={sampleNews.filter(a => a.categorySlug === 'national').slice(0, 4)}
          title="স্পেশাল রিপোর্ট"
        />
      </div>

      <Footer />
    </main>
  )
}
