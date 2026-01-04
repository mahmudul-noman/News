import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siyamRupali = localFont({
  src: "../public/fonts/Siyamrupali.ttf",
  variable: "--font-siyam-rupali",
})

export const metadata: Metadata = {
  title: "বিডি রেকর্ডস টুডে | দেশের শীর্ষ খবর",
  description:
    "বিডি রেকর্ডস টুডে - বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন নিউজ পোর্টাল। দেশ, বিদেশ, ব্যবসা, খেলা সহ সব ধরনের খবর পান লাইভ আপডেট সহ।",
  keywords: "বাংলা খবর, বাংলাদেশ খবর, নিউজ, লেটেস্ট নিউজ, আজকের খবর, অনলাইন নিউজ, দেশি খবর",
  authors: [{ name: "Bd Records Today" }],
  creator: "Bd Records Today",
  publisher: "Bd Records Today",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://bdrecordstoday.com",
    siteName: "Bd Records Today",
    title: "Bd Records Today - বাংলা নিউজ ২৪",
    description: "বাংলাদেশের শীর্ষস্থানীয় অনলাইন নিউজ পোর্টাল",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bd Records Today",
    description: "বাংলাদেশের শীর্ষস্থানীয় অনলাইন নিউজ পোর্টাল",
  },
  generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#E31E24",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <head>
        <meta name="theme-color" content="#E31E24" />
        <meta name="application-name" content="Bd Records Today" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Bd Records Today" />
        <link rel="alternate" hrefLang="bn" href="https://bdrecordstoday.com" />
      </head>
      <body className={`${siyamRupali.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
