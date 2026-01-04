"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, ShoppingBag } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-black py-8 border-t border-gray-100">
      <div className="container-news max-w-[1100px] mx-auto px-4">
        {/* Logo Section */}
        <div className="mb-10 text-center md:text-left">
          <Link href="/" className="inline-flex items-center gap-1">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full opacity-20 blur-[1px]"></div>
            </div>
            <span className="text-2xl font-semibold tracking-tight">bdrecordstoday.com</span>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-4 mb-12 text-[15px]">
          <div className="space-y-3">
            <Link href="/category/latest" className="block">সর্বশেষ</Link>
            <Link href="/category/national" className="block">জাতীয়</Link>
          </div>
          <div className="space-y-3">
            <Link href="/category/politics" className="block">রাজনীতি</Link>
            <Link href="/category/business" className="block">অর্থনীতি-বাণিজ্য</Link>
          </div>
          <div className="space-y-3">
            <Link href="/category/international" className="block">আন্তর্জাতিক</Link>
            <Link href="/category/sports" className="block">খেলা</Link>
          </div>
          <div className="space-y-3">
            <Link href="/category/entertainment" className="block">বিনোদন</Link>
          </div>
          <div className="space-y-3">
            <Link href="/category/regions" className="block">সারাদেশ</Link>
          </div>
          <div className="space-y-3">
            <p className="font-semibold mb-2">অন্যান্য</p>
            <Link href="#" className="block text-gray-500">নাগরিক সংবাদ</Link>
            <Link href="#" className="block text-gray-500">ইপেপার</Link>
          </div>
        </div>

        {/* Social and App Download Section */}
        <div className="border-t border-gray-100 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Follow Us */}
          <div>
            <p className="text-gray-500 text-sm mb-4">অনুসরণ করুন</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <Facebook size={20} fill="currentColor" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <Twitter size={20} fill="currentColor" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <Youtube size={20} fill="currentColor" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ShoppingBag size={20} />
              </Link>
            </div>
          </div>

          {/* App Download */}
          <div>
            <p className="text-gray-500 text-sm mb-4 md:text-right">মোবাইল অ্যাপস ডাউনলোড করুন</p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="inline-flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.18-.28.43-.28.69 0 .55.45 1 1 1 .26 0 .51-.1.69-.28l10.87-10.88c.39-.39.39-1.02 0-1.41L4.99 1.1c-.18-.18-.43-.28-.69-.28a1.003 1.003 0 00-1 1c0 .26.11.51.28.69z" />
                    <path d="M17.47 12.71c.39-.39.39-1.02 0-1.41l-2.97-2.97c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41L15.35 12l-2.26 2.26c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.97-2.96z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 leading-none">GET IT ON</p>
                  <p className="text-sm font-semibold leading-none">Google Play</p>
                </div>
              </Link>
              <Link href="#" className="inline-flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.29.82-1.35.05-2.33-1.32-3.17-2.54C4.14 16.94 2.8 12.48 3.58 10.46c.39-1.01 1.43-1.64 2.53-1.66 1.04-.03 2.03.7 2.66.7.63 0 1.83-.88 3.07-.76 1.24.12 2.19.64 2.81 1.54-2.5 1.48-2.11 4.75.42 5.79-.53 1.34-1.2 2.67-2.36 3.43zM14.25 1.76c0 1.21-.98 2.3-2.19 2.3s-2.19-1.09-2.19-2.3 1-2.3 2.19-2.3 2.19 1.09 2.19 2.3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 leading-none">Download on the</p>
                  <p className="text-sm font-semibold leading-none">App Store</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Links */}
        <div className="border-t border-gray-100 py-6 text-center">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[15px] text-gray-600">
            <Link href="#">আমাদের সম্পর্কে</Link>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <Link href="#">বিজ্ঞাপন</Link>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <Link href="#">সার্কুলেশন</Link>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <Link href="#">নীতি ও শর্ত</Link>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <Link href="#">যোগাযোগ</Link>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <Link href="#">নিউজলেটার</Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-100 pt-6 pb-4 text-center text-sm text-gray-500 space-y-2">
          <p>স্বত্ব © ২০২৬ বিডি রেকর্ডস টুডে | সম্পাদক ও প্রকাশক: আরিফ শাহরিয়ার</p>
        </div>
      </div>
    </footer>
  )
}
