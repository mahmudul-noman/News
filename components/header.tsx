"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const categories = [
    { name: "সর্বশেষ", slug: "latest" },
    { name: "জাতীয়", slug: "national" },
    { name: "রাজনীতি", slug: "politics" },
    { name: "অর্থনীতি-বাণিজ্য", slug: "business" },
    { name: "আন্তর্জাতিক", slug: "international" },
    { name: "খেলা", slug: "sports" },
    { name: "বিনোদন", slug: "entertainment" },
    { name: "সারাদেশ", slug: "regions" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Promotional Banner */}
      <div className="bg-gray-100 text-center py-2 px-4">
        <p className="text-sm text-gray-700">আপনার বিজ্ঞাপন এখানে। সাশ্রয়ী মূল্যে বিশাল পাঠকদের কাছে পৌঁছান।</p>
      </div>

      <div className="container-news">
        {/* Logo & Featured Articles Section */}
        <div className="py-4 border-b border-gray-200">
          <div className="flex items-start justify-between gap-6 mb-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="bg-red-600 text-white px-3 py-2 font-bold text-center">
                  <div className="text-lg">BANGLA</div>
                  <div className="text-lg">NEWS 24</div>
                </div>
                <div className="text-gray-400 text-sm">.com</div>
              </div>
            </Link>

            {/* Featured Articles Preview */}
            <div className="flex-1 grid grid-cols-4 gap-3 text-sm">
              <div className="border-l-2 border-gray-300 pl-3">
                <p className="text-gray-700 line-clamp-2 text-xs">গণতন্ত্রে 'খা' দিলে কী পাবেন, 'না' দিলে কী পাবেন না</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <p className="text-gray-700 line-clamp-2 text-xs">প্রিন্স আর্চার ও যে কমনমন্থ দেখ সিনেমা</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <p className="text-gray-700 line-clamp-2 text-xs">বর্ণনার বিকৃতিকা জুরেরের দেশ সিনেমা</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <p className="text-gray-700 line-clamp-2 text-xs">বর্ণনার বিকৃতিকা হুরে রে বিষয় আধ্যা</p>
              </div>
            </div>

            {/* Date & Language */}
            <div className="flex-shrink-0 text-right text-xs">
              <p className="text-gray-600">ঢাকা, শনিবার ০৩ জানুয়ারি ২০২৬</p>
              <p className="text-gray-600">১২ জৈষ্ঠ ১৪৩২, ১৫ রজব ১৪৪৭</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center justify-between py-3 overflow-x-auto">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-red-600 flex-shrink-0">
            <span className="text-xl">🏠</span>
            <span className="hidden sm:inline">সর্বশেষ</span>
          </Link>

          {categories.slice(1).map((cat) => (
            <div
              key={cat.slug}
              onMouseEnter={() => setActiveDropdown(cat.slug)}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative group flex-shrink-0"
            >
              <Link
                href={`/category/${cat.slug}`}
                className="px-3 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded transition-colors whitespace-nowrap"
              >
                {cat.name}
              </Link>
            </div>
          ))}

          {/* Right side controls */}
          <div className="flex items-center gap-2 ml-auto flex-shrink-0">
            <button className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">ভিডিও</button>
            <div className="relative group">
              <button className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center gap-1">
                বিভিন্ন <ChevronDown size={16} />
              </button>
            </div>
            <button className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">EN</button>
            <button className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">আরবি</button>
          </div>
        </nav>
      </div>
    </header>
  )
}
