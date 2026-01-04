"use client"

import Image from "next/image"

interface SidebarAdsProps {
  count?: number
}

export function SidebarAds({ count = 4 }: SidebarAdsProps) {
  // Define available ad styles/types
  const adStyles = [
    // Ad Slot 1 Style
    <div key="ad-1" className="bg-gradient-to-b from-red-600 to-red-700 rounded-lg overflow-hidden shadow-lg w-full h-full">
      <div className="relative w-full h-full">
        <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
      </div>
    </div>,
    // Ad Slot 2 Style
    <div key="ad-2" className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 w-full h-full">
      <div className="relative w-full h-full">
        <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
      </div>
    </div>,
    // Ad Slot 3 Style
    <div key="ad-3" className="bg-blue-100 rounded-lg overflow-hidden shadow-lg w-full h-full">
      <div className="relative w-full h-full">
        <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
      </div>
    </div>,
    // Ad Slot 4 Style
    <div key="ad-4" className="bg-blue-100 rounded-lg overflow-hidden shadow-lg w-full h-full">
      <div className="relative w-full h-full">
        <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
      </div>
    </div>,
  ]

  const adsToShow = []
  for (let i = 0; i < count; i++) {
    const styleIndex = i % adStyles.length
    // Clone element to ensure unique key if repeating
    const ad = adStyles[styleIndex]
    adsToShow.push(
      <div key={`sidebar-ad-${i}`} className="w-full aspect-square">
        {ad}
      </div>
    )
  }

  return (
    <aside className="gap-4 flex flex-col h-full justify-center">
      {adsToShow}
    </aside>
  )
}

