import { sampleNews } from "@/lib/news-data"
import { BASE_URL } from "@/lib/seo"

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Bd Records Today</title>
    <link>${BASE_URL}</link>
    <description>বাংলাদেশের শীর্ষস্থানীয় অনলাইন নিউজ পোর্টাল</description>
    <language>bn</language>
    ${sampleNews
      .map((article) => {
        return `
      <item>
        <title><![CDATA[${article.title}]]></title>
        <link>${BASE_URL}/news/${article.slug}</link>
        <description><![CDATA[${article.description}]]></description>
        <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
        <guid>${BASE_URL}/news/${article.slug}</guid>
        <category>${article.category}</category>
      </item>`
      })
      .join("")}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
