"use client"

import Image from "next/image"

export function SidebarAds() {
  return (
    <aside className="space-y-6">
      {/* Ad Slot 1 */}
      <div className="bg-gradient-to-b from-red-600 to-red-700 rounded-lg overflow-hidden shadow-lg">
        <div className="relative aspect-square">
          <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
        </div>
      </div>

      {/* Ad Slot 2 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <div className="relative aspect-square">
          <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
        </div>
      </div>

      {/* Ad Slot 3 */}
      <div className="bg-blue-100 rounded-lg overflow-hidden shadow-lg">
        <div className="relative aspect-square">
          <Image src="/placeholder.svg?height=300&width=300" alt="বিজ্ঞাপন" fill className="object-cover" />
        </div>
      </div>

      {/* Newsletter Signup */}
      {/* <div className="bg-gray-900 text-white rounded-lg p-4">
        <h4 className="font-bold mb-2 text-sm">সর্বশেষ খবর পান</h4>
        <input type="email" placeholder="আপনার ইমেইল" className="w-full px-3 py-2 rounded text-sm text-black mb-2" />
        <button className="w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm font-semibold transition-colors">
          সাবস্ক্রাইব করুন
        </button>
      </div> */}
    </aside>
  )
}
