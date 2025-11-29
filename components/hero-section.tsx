"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToVision = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 py-20">
        <h1 className="font-serif text-slate-800 mb-8 leading-tight tracking-tight">
          <span className="block text-slate-600 text-2xl sm:text-3xl md:text-4xl mb-3 font-light italic">
            The First Followers of Christ
          </span>
          <span className="block text-slate-500 text-xl sm:text-2xl md:text-3xl mb-4 font-light italic">
            Weren't Called Christians.
          </span>
          <span className="block text-slate-700 text-2xl sm:text-3xl md:text-4xl mb-4 font-medium">
            They Were Called
          </span>
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/60 to-amber-100/0 blur-xl scale-150"></span>
            <span className="relative block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-slate-900 font-bold tracking-tight">
              The Way.
            </span>
          </span>
        </h1>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed font-serif">
            And they turned the world upside down. Not through institutions, but through{" "}
            <span className="text-slate-800 font-semibold">Spirit</span>,{" "}
            <span className="text-slate-800 font-semibold">conviction</span>, and{" "}
            <span className="text-slate-800 font-semibold">everyday obedience</span>.
          </p>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-serif">
            The Way is a movement leveraging the technologies of the future to return the Body of Christ to its roots.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 font-semibold w-full sm:w-auto"
            onClick={() => window.open("https://theway.masterymade.com/", "_blank")}
          >
            Join Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-full border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 bg-white/80 backdrop-blur-sm w-full sm:w-auto"
            onClick={scrollToVision}
          >
            Explore the Vision
          </Button>
        </div>
      </div>
    </section>
  )
}
