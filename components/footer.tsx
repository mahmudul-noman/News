"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-news">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4 text-lg">আমাদের সম্পর্কে</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bangla News 24 বাংলাদেশের শীর্ষস্থানীয় অনলাইন নিউজ পোর্টাল যেখানে আপনি পাবেন দেশ-বিদেশের সর্বশেষ খবর।
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4 text-lg">বিভাগ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/category/national" className="hover:text-white transition-colors">
                  জাতীয়
                </Link>
              </li>
              <li>
                <Link href="/category/politics" className="hover:text-white transition-colors">
                  রাজনীতি
                </Link>
              </li>
              <li>
                <Link href="/category/business" className="hover:text-white transition-colors">
                  ব্যবসা
                </Link>
              </li>
              <li>
                <Link href="/category/sports" className="hover:text-white transition-colors">
                  খেলা
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  যোগাযোগ করুন
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  বিজ্ঞাপন
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  কর্মসংস্থান
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  গোপনীয়তা নীতি
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">যোগাযোগ</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@banglanews24.com" className="hover:text-white transition-colors">
                  info@banglanews24.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+8801234567890" className="hover:text-white transition-colors">
                  +880 1234 567 890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <p>&copy; 2026 Bangla News 24. সর্বাধিকার সংরক্ষিত।</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-gray-800 py-4 mt-8 text-center text-sm text-gray-400">
        <p>Bangla News 24 - Your trusted source for news | বাংলাদেশের সবচেয়ে বিশ্বস্ত খবরের উৎস</p>
      </div>
    </footer>
  )
}
