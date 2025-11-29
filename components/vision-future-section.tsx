"use client"

import { Cpu, Users, Wrench, BookOpen } from "lucide-react"

export function VisionFutureSection() {
  const pillars = [
    {
      icon: Cpu,
      title: "AI-powered discipleship",
      description: "that scales apostolic training to millions",
    },
    {
      icon: Wrench,
      title: "Spiritual formation tools",
      description: "that don't rely on institutions or gatekeepers",
    },
    {
      icon: Users,
      title: "Community systems",
      description: "that restore local, Spirit-led fellowship",
    },
    {
      icon: BookOpen,
      title: "Resources for leaders",
      description: "who are rebuilding from the ground up",
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-950/30 px-4 py-2 rounded-full border border-amber-800/30 mb-8">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-sm font-medium text-amber-300 tracking-wide uppercase">The Vision</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
            The Way Is Building the{" "}
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              Technology Layer
            </span>
            <span className="block mt-2 text-slate-400">for the Body of Christ.</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            This is just the beginning. We're not just building an app. We're building{" "}
            <span className="text-white font-semibold">infrastructure for the next era of the Church</span>:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-amber-900/50 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-950/30 border border-amber-900/30 group-hover:border-amber-700/50 transition-colors">
                  <pillar.icon className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-slate-400">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-slate-900/80 border border-slate-700 rounded-2xl px-10 py-8">
            <p className="text-xl text-slate-300 mb-2">
              The Way isn't a product.
            </p>
            <p className="text-2xl md:text-3xl font-serif text-amber-400 font-medium mb-4">
              It's a movement architecture.
            </p>
            <p className="text-lg text-slate-400">
              And you're being invited to help build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
