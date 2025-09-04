"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function JourneySection() {
  const wayFeatures = [
    {
      title: "Scripture + Conviction",
      description: "Get a daily word of truth and a conviction prompt that speaks directly to your walk and season of life.",
    },
    {
      title: "Learn to Pray",
      description: "Receive Spirit-led guidance and practical resources to deepen your prayer life when you don't know what to say.",
    },
    {
      title: "Historical Perspectives",
      description: "Gain wisdom from the writings of early church fathers and historical voices that illuminate Scripture with depth.",
    },
    {
      title: "Build Discipline",
      description: "Replace distraction with truth-based action and habits that shape a life of obedience to Christ.",
    },
    {
      title: "Spiritual Warfare",
      description: "Learn how to expose and counter the lies of the enemy so you can walk in freedom and victory.",
    },
    {
      title: "Connect with the Body",
      description: "Join a growing community of believers—locally and digitally—who are walking The Way together.",
      comingSoon: true,
    },
  ]

  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-900 mb-6">
            Step Into The Way
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here's how The Way helps you grow in Christ each day:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {wayFeatures.map((feature, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/50 h-full hover:shadow-md transition-shadow duration-300">
                {feature.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>



        {/* Help Shape The Future Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center border border-slate-700 text-white">
          <h3 className="text-2xl font-serif font-semibold mb-4">Help Shape The Future of The Way</h3>
          <p className="text-lg text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            As an early user, your feedback is invaluable. Join our community of believers who are actively shaping the
            future of faith-centered AI. Connect with fellow users, share insights, and get early access to new
            features.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg rounded-full border-2 border-slate-400 text-slate-300 hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 bg-transparent font-serif"
            onClick={() => window.open("#", "_blank")}
          >
            Join Our Telegram Community
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
