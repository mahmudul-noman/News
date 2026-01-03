interface AdBannerProps {
  className?: string
}

export function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <div
      className={`bg-gradient-to-r from-orange-300 via-orange-200 to-rose-100 p-3 text-center border border-orange-300 my-4 ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-left">
          <p className="text-sm font-bold text-gray-800">বিজ্ঞাপন</p>
          <p className="text-gray-700 text-xs font-medium">আপনার ব্যবসা প্রচার করুন</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-1.5 rounded text-xs font-semibold hover:bg-red-700 transition-colors whitespace-nowrap">
          যোগাযোগ করুন
        </button>
      </div>
    </div>
  )
}
