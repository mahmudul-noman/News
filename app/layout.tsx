import type React from "react"
import type { Metadata } from "next"
import { constructMetadata, BASE_URL } from "@/lib/seo"
import localFont from "next/font/local"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

const siyamRupali = localFont({
  src: "../public/fonts/Siyamrupali.ttf",
  variable: "--font-siyam-rupali",
  display: "swap",
})

export const metadata: Metadata = {
  ...constructMetadata({
    title: "বিডি রেকর্ডস টুডে | দেশের শীর্ষ খবর",
    description:
      "বিডি রেকর্ডস টুডে - বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন নিউজ পোর্টাল। দেশ, বিদেশ, ব্যবসা, খেলা সহ সব ধরনের খবর পান লাইভ আপডেট সহ।",
  }),

  metadataBase: new URL(BASE_URL),

  alternates: {
    canonical: BASE_URL,
    languages: {
      bn: BASE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: BASE_URL,
    title: "বিডি রেকর্ডস টুডে | দেশের শীর্ষ খবর",
    description:
      "বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন নিউজ পোর্টাল। সর্বশেষ ও নির্ভরযোগ্য সংবাদ পড়ুন।",
    siteName: "Bd Records Today",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Bd Records Today",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "বিডি রেকর্ডস টুডে | দেশের শীর্ষ খবর",
    description:
      "বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন নিউজ পোর্টাল।",
    images: [`${BASE_URL}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E31E24",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <head>
        <meta name="application-name" content="Bd Records Today" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Bd Records Today" />

        {/* News Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              name: "Bd Records Today",
              url: BASE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/logo.png`,
                width: 600,
                height: 60,
              },
              sameAs: [
                "https://www.facebook.com/bdrecordstoday",
                "https://twitter.com/bdrecordstoday",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${siyamRupali.variable} ${geist.className} antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
