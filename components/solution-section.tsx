"use client"

import { BookOpen, Shield, Swords, Sparkles, Heart } from "lucide-react"

export function SolutionSection() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Scripture as foundation",
      description: "Not verse-of-the-day consumption. Deep reading. Historical context. Church fathers. Doctrine that cuts.",
    },
    {
      icon: Shield,
      title: "Apologetics as armor",
      description: "Learn to defend what you believe. Not with rage, but with clarity. Counter the lies. Know the arguments. Become unshakeable in a hostile culture.",
    },
    {
      icon: Swords,
      title: "Spiritual warfare as reality",
      description: "The enemy is real. His tactics are ancient. You need to recognize them, name them, and move in authority.",
    },
    {
      icon: Sparkles,
      title: "Prayer as power",
      description: "Not just 'God bless my day' prayers. Intercessory depth. Liturgical rhythm. Spirit-led discernment.",
    },
    {
      icon: Heart,
      title: "Formation, not information",
      description: "This isn't content consumption. It's character transformation.",
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-950/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
            The Way Is a{" "}
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              Discipleship Operating System
            </span>
            <span className="block mt-2 text-3xl md:text-4xl text-slate-400">for Everyday Believers.</span>
          </h2>
          
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-xl text-slate-400 mb-4">
              This isn't a Bible chat app. It's not spiritual Duolingo.
            </p>
            <p className="text-xl text-slate-300">
              The Way is a <span className="text-amber-400 font-semibold">movement</span> using cutting-edge AI to train you in the same practices that fueled the early Church:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className={`group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-amber-900/50 hover:bg-slate-900/80 transition-all duration-300 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-950/30 border border-amber-900/30 mb-6 group-hover:border-amber-700/50 transition-colors">
                <pillar.icon className="w-7 h-7 text-amber-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-slate-900/80 border border-slate-700 rounded-2xl px-10 py-8">
            <p className="text-2xl md:text-3xl font-serif text-slate-300 mb-2">
              The Way doesn't just give you information.
            </p>
            <p className="text-2xl md:text-3xl font-serif text-amber-400 font-medium">
              It gives you formation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
