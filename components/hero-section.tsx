"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const scrollToVision = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Garden Cross Background" 
          fill 
          className="object-cover opacity-20" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 pt-24">
        <div className="mb-10 inline-flex items-center space-x-2 bg-slate-800/50 px-5 py-2.5 rounded-full border border-slate-700/50 backdrop-blur-sm">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">A Movement Is Rising</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6 leading-tight tracking-tight">
          <span className="block text-slate-300 text-3xl sm:text-4xl md:text-5xl mb-4 font-light">
            The First Followers of Christ
          </span>
          <span className="block text-slate-400 text-2xl sm:text-3xl md:text-4xl mb-6 font-light">
            Weren't Called Christians.
          </span>
          <span className="block">
            They Were Called{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent">
                The Way.
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></span>
            </span>
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-slate-400 mb-4 leading-relaxed font-light">
            And they turned the world upside down. Not through institutions, but through{" "}
            <span className="text-white font-medium">Spirit</span>,{" "}
            <span className="text-white font-medium">conviction</span>, and{" "}
            <span className="text-white font-medium">everyday obedience</span>.
          </p>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            The Way is a movement leveraging the technologies of the future to return the Body of Christ to its roots.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-amber-900/30 hover:shadow-xl hover:shadow-amber-900/40 transition-all duration-300 font-semibold"
            onClick={() => window.open("https://theway.masterymade.com/", "_blank")}
          >
            Start Training
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-6 text-lg rounded-full border-2 border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300 bg-transparent backdrop-blur-sm"
            onClick={scrollToVision}
          >
            Learn the Vision
          </Button>
        </div>

        <button 
          onClick={scrollToVision}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}
