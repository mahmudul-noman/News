interface AdBannerProps {
  className?: string
}

export function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <div
      className={`bg-gradient-to-r from-orange-300 via-orange-200 to-rose-100 rounded-lg p-8 text-center border-2 border-orange-300 ${className}`}
    >
      <div className="space-y-3">
        <p className="text-lg font-bold text-gray-800">বিজ্ঞাপন</p>
        <p className="text-gray-700 text-sm font-medium">আপনার ব্যবসা আমাদের লক্ষ লক্ষ পাঠকদের কাছে পৌঁছান</p>
        <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition-colors text-sm">
          যোগাযোগ করুন
        </button>
      </div>
    </div>
  )
}
