"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 overflow-hidden">
      {/* Hero Background Image - Clean, no overlays */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.png" alt="Garden Cross Background" fill className="object-cover opacity-15" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <div className="mb-8 inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-slate-200/50 backdrop-blur-sm">
          <div className="w-4 h-4 relative">
            <Image src="/logo.png" alt="The Way Logo" width={16} height={16} className="object-contain" />
          </div>
          <span className="text-sm font-medium text-slate-700">A New Era for the Body of Christ</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-slate-900 mb-8 leading-tight">
          Welcome to
          <span className="block bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            The Way
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          You were created for more than the mundane. The Way helps you break free from distraction and spiritual stagnation, step into a life of deep connection with God, and walk in daily transformation that leads to lasting Kingdom impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-serif font-semibold"
            onClick={() => window.open("https://theway.masterymade.com/", "_blank")}
          >
            Begin Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg rounded-full border-2 border-slate-300 hover:border-slate-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            asChild
          >
            <Link href="/vision">Explore The Vision</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
