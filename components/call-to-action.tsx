"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function CallToAction() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-950/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <div className="mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-700 shadow-xl">
            <Image src="/logo.png" alt="The Way Logo" width={48} height={48} className="object-contain" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6">
            The Spirit Is Moving.
            <span className="block mt-2 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              Will You Follow?
            </span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            This generation is being invited to rediscover what it means to be the Church. Not as an institution, but as <span className="text-white font-semibold">a Way of life</span>.
          </p>
          
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            A life of conviction. Of courage. Of daily transformation that doesn't just change you. It changes <span className="text-white font-semibold">everything around you</span>.
          </p>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-10">
            <p className="text-lg text-slate-300 leading-relaxed">
              The early followers of The Way didn't wait for permission. They didn't wait for comfort. They didn't wait for clarity.
            </p>
            <p className="text-2xl font-serif text-amber-400 mt-4">
              They just started walking.
            </p>
          </div>
          
          <p className="text-2xl text-white font-serif mb-10">
            Are you ready?
          </p>
        </div>

        <Button
          size="lg"
          className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-7 text-xl rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 font-semibold"
          onClick={() => window.open("https://theway.masterymade.com/", "_blank")}
        >
          Join Now
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
