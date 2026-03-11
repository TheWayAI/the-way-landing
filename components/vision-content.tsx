import { BookOpen, Users, Heart, Zap } from "lucide-react"
import Image from "next/image"

export function VisionContent() {
  return (
    <section className="relative py-24 bg-white">
      {/* Subtle vine accent */}
      <div className="absolute top-1/3 right-8 w-32 h-64 opacity-5 z-10">
        <Image src="/vine-accent-2.png" alt="" fill className="object-contain scale-60 rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-900 mb-8">
              Beyond Traditional
              <span className="block text-slate-700">Bible Study</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              This generation is being invited to rediscover the original Way: the path of the first followers of Christ,
              rooted in the faith of those who have gone before us, yet not held back by the systems, structures, or
              strongholds that hinder you from directly experiencing the fullness of God.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              We're bringing biblical truth and emerging technology together to activate, educate, and unite the Body of
              Christ. Here, you'll find a path that's personal, practical, and supernatural.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-xl">
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 relative">
                  <Image src="/thewaylogo.jpeg" alt="The Way Logo" width={128} height={128} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Scripture-Centered",
              description: "Every interaction is grounded in biblical truth and historical context",
            },
            {
              icon: Zap,
              title: "AI-Powered",
              description: "Cutting-edge technology that understands your spiritual journey",
            },
            {
              icon: Heart,
              title: "Personally Tailored",
              description: "Guidance that adapts to your story, rhythms, and spiritual longings",
            },
            {
              icon: Users,
              title: "Community Focused",
              description: "Connect with believers worldwide in Kingdom impact",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
