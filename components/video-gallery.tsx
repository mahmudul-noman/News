"use client"
import Image from "next/image"
import { Play } from "lucide-react"
import type { VideoItem } from "@/types/news"

interface VideoGalleryProps {
  videos: VideoItem[]
}

export function VideoGallery({ videos }: VideoGalleryProps) {
  if (!videos.length) return null

  const featured = videos.slice(0, 2)
  const grid = videos.slice(2)

  return (
    <section className="py-8 bg-white">
      <div className="container-news">
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-1">ভিডিও গ্যালারি</h2>
          <div className="w-12 h-1 bg-red-600 rounded"></div>
        </div>

        {/* Featured Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featured.map((video) => (
            <div key={video.id} className="group relative overflow-hidden rounded-lg aspect-video bg-black">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-bold text-sm md:text-base line-clamp-2 text-balance">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {grid.map((video) => (
            <div key={video.id} className="group relative overflow-hidden rounded-lg aspect-video bg-black">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white font-semibold">
                {video.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
