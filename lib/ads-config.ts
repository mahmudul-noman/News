export type AdSize = "300x250" | "300x400" | "300x600" | "728x90" | "970x90"

export interface AdSlotConfig {
  id: string
  name: string
  size: AdSize
  mobile: boolean
  desktop: boolean
  description: string
}

export const AD_Config: Record<string, AdSlotConfig> = {
  home_header: {
    id: "home_header",
    name: "Home Header",
    size: "970x90",
    mobile: false,
    desktop: true,
    description: "Top banner on homepage",
  },
  article_sidebar_1: {
    id: "article_sidebar_1",
    name: "Article Sidebar Top",
    size: "300x400",
    mobile: true,
    desktop: true,
    description: "First ad in article sidebar",
  },
  article_sidebar_2: {
    id: "article_sidebar_2",
    name: "Article Sidebar Middle",
    size: "300x600",
    mobile: true,
    desktop: true,
    description: "Second ad in article sidebar",
  },
  article_content_1: {
    id: "article_content_1",
    name: "In-Article 1",
    size: "300x250",
    mobile: true,
    desktop: true,
    description: "After 2nd paragraph",
  },
  news_grid_inline: {
    id: "news_grid_inline",
    name: "News Grid Inline",
    size: "300x250",
    mobile: true,
    desktop: true,
    description: "In news grids after N items",
  },
}

export const AD_INJECTION_INTERVAL = 6 // Insert ad after every 6 news items
