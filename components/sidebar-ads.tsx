"use client"

import Image from "next/image"

interface SidebarAdsProps {
  count?: number
}

/*
  ADS CONFIGURATION:
  - Ad 1: Gradient Red (Example: Top Ad)
  - Ad 2: White with Border (Example: Standard Ad)
  - Ad 3: Blue/Light (Example: Secondary Ad)
  - Ad 4: Blue/Light (Example: Secondary Ad)
  
  This component will cycle through these styles if count > 4, or just show the first N ads.
*/

export function SidebarAds({ count = 4 }: SidebarAdsProps) {
  // Define available ad styles/types
  const adStyles = [
    // Ad Slot 1 Style
    <div key="ad-1" className="bg-gradient-to-b from-red-600 to-red-700 rounded-lg overflow-hidden shadow-lg h-full">
      <div className="relative aspect-square w-full h-full"> {/* Added w-full h-full for container fitting if needed */}
        <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
      </div>
    </div>,
    // Ad Slot 2 Style
    <div key="ad-2" className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 h-full">
      <div className="relative aspect-square w-full h-full">
        <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
      </div>
    </div>,
    // Ad Slot 3 Style
    <div key="ad-3" className="bg-blue-100 rounded-lg overflow-hidden shadow-lg h-full">
      <div className="relative aspect-square w-full h-full">
        <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
      </div>
    </div>,
    // Ad Slot 4 Style
    <div key="ad-4" className="bg-blue-100 rounded-lg overflow-hidden shadow-lg h-full">
      <div className="relative aspect-square w-full h-full">
        <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
      </div>
    </div>,
  ]

  // Generate ads based on count. If count > adStyles.length, we can cycle or just repeat the last one, 
  // currently just slicing the defined styles or repeating to fill if needed.
  // For simplicity, let's just show up to the available styles, or cycle if asked for more.

  const adsToShow = []
  for (let i = 0; i < count; i++) {
    const styleIndex = i % adStyles.length
    // Clone element to ensure unique key if repeating
    const ad = adStyles[styleIndex]
    adsToShow.push(
      <div key={`sidebar-ad-${i}`} className="w-full flex-1 min-h-0">
        {/* We render the pre-defined style. 
             If we needed strict unique keys for internal elements we might need a function, 
             but for static styles this is okay if wrapped. 
          */}
        {ad}
      </div>
    )
  }

  return (
    <aside className="space-y-6 flex flex-col h-full">
      {/* Changed to flex col to handle height better if parent constrains it, otherwise space-y-6 is fine */}
      {adsToShow}
    </aside>
  )
}

