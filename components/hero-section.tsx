"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToVision = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Garden Cross Background" 
          fill 
          className="object-cover opacity-10" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-slate-100/80"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 pt-24">
        <div className="mb-10 inline-flex items-center space-x-2 bg-white/80 px-5 py-2.5 rounded-full border border-slate-200 backdrop-blur-sm shadow-sm">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-slate-600 tracking-wide uppercase">A Movement Is Rising</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-slate-800 mb-6 leading-tight tracking-tight">
          <span className="block text-slate-600 text-3xl sm:text-4xl md:text-5xl mb-4 font-light">
            The First Followers of Christ
          </span>
          <span className="block text-slate-500 text-2xl sm:text-3xl md:text-4xl mb-6 font-light">
            Weren't Called Christians.
          </span>
          <span className="block text-slate-900">
            They Were Called{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                The Way.
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
            </span>
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed font-light">
            And they turned the world upside down. Not through institutions, but through{" "}
            <span className="text-slate-900 font-medium">Spirit</span>,{" "}
            <span className="text-slate-900 font-medium">conviction</span>, and{" "}
            <span className="text-slate-900 font-medium">everyday obedience</span>.
          </p>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            The Way is a movement leveraging the technologies of the future to return the Body of Christ to its roots.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 font-semibold"
            onClick={() => window.open("https://theway.masterymade.com/", "_blank")}
          >
            Start Training
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-6 text-lg rounded-full border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            onClick={scrollToVision}
          >
            Learn the Vision
          </Button>
        </div>

        <button 
          onClick={scrollToVision}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}
