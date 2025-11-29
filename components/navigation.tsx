"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image src="/logo.png" alt="The Way Logo" width={40} height={40} className="object-contain" />
            </div>
            <span className="text-2xl font-serif font-bold text-slate-900">The Way</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/vision"
              className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Vision
            </Link>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2.5 font-semibold rounded-full shadow-lg shadow-amber-500/20"
              asChild
            >
              <a href="https://theway.masterymade.com/" target="_blank" rel="noopener noreferrer">
                Start Training
              </a>
            </Button>
          </div>

          <button 
            className="md:hidden text-slate-900" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-6 pb-8 space-y-6 bg-white/95 backdrop-blur-md border-t border-slate-200">
              <Link
                href="/vision"
                className="block px-4 py-4 text-xl font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50 text-center"
                onClick={() => setIsOpen(false)}
              >
                Vision
              </Link>
              <div className="px-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 h-14 font-semibold rounded-full"
                  asChild
                >
                  <a href="https://theway.masterymade.com/" target="_blank" rel="noopener noreferrer">
                    Start Training
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
