import type { Metadata } from "next"

export const BASE_URL = "https://bdkhobor71.com"

interface ConstructMetadataProps {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
  canonicalUrl?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

export function constructMetadata({
  title = "Bangla News 24 - বাংলা নিউজ ২৪ | দেশের শীর্ষ খবর",
  description = "Bangla News 24 - বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন নিউজ পোর্টাল। দেশ, বিদেশ, ব্যবসা, খেলা সহ সব ধরনের খবর পান লাইভ আপডেট সহ।",
  image = "/og-image.png", // Default OG image
  icons = "/icon.png",
  noIndex = false,
  canonicalUrl,
  type = "website",
  publishedTime,
  modifiedTime,
  authors = ["Bangla News 24"],
}: ConstructMetadataProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      type,
      url: canonicalUrl || BASE_URL,
      siteName: "Bangla News 24",
      locale: "bn_BD",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@banglanews24", // Example handle
    },
    icons,
    metadataBase: new URL(BASE_URL),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
