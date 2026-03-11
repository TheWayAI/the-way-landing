"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/newland" className="flex items-center space-x-3">
            <div className="w-9 h-9 relative">
              <Image
                src="/thewaylogo.jpeg"
                alt="The Way"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-serif font-semibold text-white tracking-wide">
              The Way
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/vision"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Vision
            </Link>
            <Button
              size="sm"
              className="bg-white text-slate-900 hover:bg-slate-200 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200"
              asChild
            >
              <a
                href="https://theway.masterymade.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Early Access
              </a>
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-4 border-t border-white/5">
            <Link
              href="/vision"
              className="block px-2 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Vision
            </Link>
            <Button
              size="sm"
              className="w-full bg-white text-slate-900 hover:bg-slate-200 py-2.5 text-sm font-semibold rounded-full"
              asChild
            >
              <a
                href="https://theway.masterymade.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Early Access
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

const pillars = [
  {
    label: "Evangelize",
    description:
      "Equipping every believer to share the Gospel with clarity, confidence, and cultural fluency — reaching the lost wherever they are.",
  },
  {
    label: "Disciple",
    description:
      "Deep spiritual formation rooted in Scripture, the Church Fathers, and 2,000 years of Christian wisdom. Not content consumption — character transformation.",
  },
  {
    label: "Unite",
    description:
      "Bridging denominations, traditions, and geographies to strengthen the universal Body of Christ as one.",
  },
]

export function NewLanding() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/20 via-slate-950 to-slate-950" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-20 pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-slate-400 tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Launching Q2 2026
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
            <span className="bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent">
              The Way
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-4 font-serif">
            Pushing the frontiers of emerging technology
            <span className="block mt-1 text-slate-500">
              for the Body of Christ.
            </span>
          </p>

          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto mb-12">
            Evangelize the lost. Disciple believers. Unite the Church.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-base rounded-full shadow-2xl shadow-white/10 transition-all duration-300 font-semibold w-full sm:w-auto"
              asChild
            >
              <a
                href="https://theway.masterymade.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-slate-400 hover:text-white hover:bg-white/5 px-8 py-6 text-base rounded-full w-full sm:w-auto"
              asChild
            >
              <Link href="/vision">Our Vision</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* The Way — Historical Identity */}
      <section className="relative py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-amber-400/80 mb-6">
            Acts 9:2
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight mb-8">
            The first followers of Christ weren&apos;t called Christians.
            <span className="block mt-2 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent font-medium">
              They were called The Way.
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-6">
            They had no institutions, no buildings, no publishing houses. And yet they turned the entire world upside down — through Spirit, conviction, and radical obedience.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We believe our generation is being called to carry that same fire — armed with the most powerful tools ever created.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* The Printing Press Parallel */}
      <section className="relative py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight mb-8">
            The printing press removed
            <span className="block mt-1">the gatekeepers.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-6">
            For centuries, Scripture was locked behind language, institution, and access. The printing press changed everything — putting the Word of God directly into the hands of the people.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
            We&apos;re building the next leap.
          </p>
          <p className="text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            Technology that connects every believer directly to the depth of Scripture, the wisdom of the Church Fathers, and the global Body of Christ. No middlemen. No gatekeepers.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Mission Pillars */}
      <section className="relative py-28 md:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-amber-400/80 mb-4">
              The Mission
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Advancing the
              <span className="block mt-1 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent font-medium">
                Great Commission
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.label}
                className="bg-slate-950 p-10 md:p-12 group hover:bg-white/[0.02] transition-colors duration-500"
              >
                <span className="text-xs font-mono text-slate-600 tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-serif font-semibold text-white mt-3 mb-4">
                  {pillar.label}
                </h3>
                <p className="text-slate-400 leading-relaxed text-[15px]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* What We're Building */}
      <section className="relative py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-amber-400/80 mb-4">
              The Edge
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Built different.
              <span className="block mt-1 text-slate-500 text-2xl sm:text-3xl md:text-4xl font-light">
                Built for the Kingdom.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Christ-Aligned Models",
                body: "Purpose-built language models trained on Scripture, theology, and Church history — grounded in truth, not the shifting sands of popular opinion.",
              },
              {
                title: "Uncensored Truth",
                body: "The Gospel doesn't need a content warning. Our models speak biblical truth without filtering, softening, or hedging the Word of God.",
              },
              {
                title: "Private by Design",
                body: "Your spiritual journey is between you and God. We build with privacy at the foundation — your data stays yours.",
              },
              {
                title: "Frontier Technology",
                body: "We don't wait for the world to build it first. We push the boundaries of what's possible in emerging technology — for the Kingdom.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 hover:border-amber-900/30 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-[15px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* The Way App */}
      <section className="relative py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-amber-400/80 mb-4">
            Coming Q2 2026
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mb-6">
            The Way App
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto mb-4">
            Your companion for spiritual growth, deep Scripture study, and learning the rich history of The Way — directly connecting you to the Body of Christ.
          </p>
          <p className="text-base text-slate-500 leading-relaxed max-w-md mx-auto mb-12">
            Access to powerful models and tools built specifically for believers. Coming to iOS, Android, and Web.
          </p>

          <div className="relative mx-auto max-w-md mb-14">
            <div className="absolute -inset-4 bg-gradient-to-b from-amber-500/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
              <Image
                src="/appscreenshotmobile.jpg"
                alt="The Way App"
                width={400}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          <Button
            size="lg"
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-6 text-base rounded-full shadow-lg shadow-amber-500/20 transition-all duration-300 font-semibold"
            asChild
          >
            <a
              href="https://theway.masterymade.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Early Access
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 relative">
                <Image
                  src="/thewaylogo.jpeg"
                  alt="The Way"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-serif font-semibold text-white">
                The Way
              </span>
            </div>
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} The Way. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
