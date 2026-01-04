import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
    title: string | undefined;
    categorySlug?: string;
}

export function SectionHeader({ title, categorySlug }: SectionHeaderProps) {
    if (!title) return null;

    return (
        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-2">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
            {categorySlug && (
                <Link
                    href={`/category/${categorySlug}`}
                    className="text-sm md:text-base text-red-600 hover:text-red-800 flex items-center gap-1 font-medium"
                >
                    এই বিভাগের সব খবর
                    <ChevronRight className="h-4 w-4" />
                </Link>
            )}
        </div>
    );
}
