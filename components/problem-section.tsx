"use client"

import { AlertTriangle, Headphones, Smartphone, Heart, Wifi } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Headphones,
      title: "Sunday sermons",
      description: "Passive consumption, no accountability",
    },
    {
      icon: Smartphone,
      title: "Devotional apps",
      description: "Spiritual snacking with no roots",
    },
    {
      icon: Heart,
      title: "Therapy culture",
      description: "Self-soothing without sanctification",
    },
    {
      icon: Wifi,
      title: "Algorithm-fed theology",
      description: "Vibes over doctrine, feelings over truth",
    },
  ]

  return (
    <section id="vision" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/20 via-slate-950 to-slate-950"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-950/50 border border-red-900/50 mb-8">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
            The Modern Church Has a
            <span className="block text-red-400">Discipleship Crisis.</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            We've outsourced spiritual formation to:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 mb-4 group-hover:bg-slate-700 transition-colors">
                <problem.icon className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-slate-500 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-10 mb-10">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
              The result? A generation of <span className="text-red-400 font-semibold">lukewarm believers</span> who{" "}
              <span className="italic">know about God</span> but don't{" "}
              <span className="italic">know how to follow Him</span>. Who can quote verses but can't defend the faith. 
              Who consume content but never become <span className="text-white font-semibold">consecrated</span>.
            </p>
            
            <blockquote className="border-l-4 border-red-500/50 pl-6 py-2">
              <p className="text-xl md:text-2xl text-slate-200 italic font-serif mb-2">
                "Because you are lukewarm, neither hot nor cold, I am about to spit you out of my mouth."
              </p>
              <cite className="text-slate-500 text-sm">Revelation 3:16</cite>
            </blockquote>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-400 mb-4">
              The enemy doesn't want you destroyed. He wants you{" "}
              <span className="text-white font-semibold">comfortable</span>. Spiritually passive. Culturally compliant. Theologically soft.
            </p>
            <p className="text-2xl md:text-3xl font-serif text-white">
              The Way was never meant to be comfortable.
              <span className="block text-amber-400 mt-2">It was meant to be transformative.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
