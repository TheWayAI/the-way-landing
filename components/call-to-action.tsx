"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <div className="mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 p-3">
            <Image src="/logo.png" alt="The Way Logo" width={40} height={40} className="object-contain" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Are You Ready to
            <span className="block text-slate-300">Step Out in Faith?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            This generation is being invited to rediscover the original Way: the path of the first followers of Christ.
            Join a movement of believers stepping boldly into the fullness of their calling.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open("https://theway.masterymade.com/", "_blank")}
          >
            Launch App
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg rounded-full border-2 border-slate-400 text-slate-300 hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 bg-transparent"
            asChild
          >
            <Link href="/vision">Learn More</Link>
          </Button>
        </div>

        <div className="text-sm text-slate-400">✕ The Way — A New Era for the Body of Christ</div>
      </div>
    </section>
  )
}
