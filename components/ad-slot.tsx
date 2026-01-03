"use client"

import { type AdSlotConfig } from "@/lib/ads-config"

interface AdSlotProps {
  config: AdSlotConfig
  className?: string
}

export function AdSlot({ config, className = "" }: AdSlotProps) {
  // Logic to hide based on device props could be added here or via CSS classes
  // strictly simpler to do via CSS for now:
  const visibilityClass =
    config.mobile && config.desktop
      ? "block"
      : config.mobile
        ? "block lg:hidden"
        : config.desktop
          ? "hidden lg:block"
          : "hidden"

  return (
    <div
      className={`bg-gray-50 border border-gray-200 flex flex-col items-center justify-center p-4 my-6 mx-auto ${visibilityClass} ${className}`}
      style={{ maxWidth: config.size.split("x")[0] + "px" }}
    >
      <span className="text-xs text-gray-400 uppercase tracking-wider mb-2">Advertisement</span>
      <div
        className="bg-gray-200 flex items-center justify-center w-full"
        style={{
          width: config.size.split("x")[0] + "px",
          height: config.size.split("x")[1] + "px",
        }}
      >
        <div className="text-center">
          <p className="text-gray-500 font-medium text-sm">{config.name}</p>
          <p className="text-gray-400 text-xs">{config.size}</p>
        </div>
      </div>
    </div>
  )
}
