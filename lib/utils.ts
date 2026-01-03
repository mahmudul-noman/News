import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { type NewsArticle } from "@/types/news"

export function getArticleLink(article: NewsArticle) {
  if (article.categorySlug) {
    return `/category/${article.categorySlug}/${article.slug}`
  }
  return `/news/${article.slug}`
}
