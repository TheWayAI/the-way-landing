"use client"

import { ArrowRight, BookOpen, Heart, Clock, Shield, Users, Sword } from "lucide-react"
import { Button } from "@/components/ui/button"

export function JourneySection() {
  const wayFeatures = [
    {
      title: "Scripture + Conviction",
      description: "Get a daily word of truth and a conviction prompt that speaks directly to your walk and season of life.",
      icon: BookOpen,
    },
    {
      title: "Learn to Pray",
      description: "Receive Spirit-led guidance and practical resources to deepen your prayer life when you don't know what to say.",
      icon: Heart,
    },
    {
      title: "Historical Perspectives",
      description: "Gain wisdom from the writings of early church fathers and historical voices that illuminate Scripture with depth.",
      icon: Clock,
    },
    {
      title: "Build Discipline",
      description: "Replace distraction with truth-based action and habits that shape a life of obedience to Christ.",
      icon: Shield,
    },
    {
      title: "Spiritual Warfare",
      description: "Learn how to expose and counter the lies of the enemy so you can walk in freedom and victory.",
      icon: Sword,
    },
    {
      title: "Connect with the Body",
      description: "Join a growing community of believers—locally and digitally—who are walking The Way together.",
      icon: Users,
      comingSoon: true,
    },
  ]

  return (
    <section id="journey" className="relative py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
            Step Into The Way
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Here's how The Way helps you grow in Christ each day:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {wayFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {feature.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>




      </div>
    </section>
  )
}
