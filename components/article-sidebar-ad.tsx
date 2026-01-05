export interface ArticleSidebarAdProps {
    height?: string
    sizeLabel?: string
}

export function ArticleSidebarAd({ height = "h-[250px]", sizeLabel = "300 x 250" }: ArticleSidebarAdProps) {
    return (
        <div className={`w-full bg-gray-50 border border-gray-200 ${height} flex flex-col items-center justify-center relative`}>
            <p className="text-gray-400 font-semibold absolute top-2 right-2 text-xs">Ad</p>
            <span className="text-gray-400 font-bold text-xl">Ad Content</span>
            <span className="text-gray-300 text-sm">{sizeLabel}</span>
        </div>
    )
}
