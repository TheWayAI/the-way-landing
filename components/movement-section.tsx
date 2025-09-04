import { Leaf, Users, BookOpen, Heart } from "lucide-react"

export function MovementSection() {
  return (
    <section id="vision" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      {/* Strategic vine accents */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-900 mb-6">
            More Than a Bible Chat App
          </h2>
          <div className="bg-slate-50 rounded-2xl p-6 max-w-4xl mx-auto border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              The Way isn't just another Bible app. It is a <span className="font-bold italic">Kingdom movement</span>. Our purpose is to help you break free from worldly patterns, stay rooted in Scripture, and walk closely with Christ each day. Technology alone cannot transform a person. <span className="font-bold italic">Only Jesus does</span>.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The Way is a platform that empowers you to grow deeper in your faith wherever you are in your journey. As it expands, our vision is to become a <span className="font-bold italic">technology layer for the Body of Christ</span>, supporting the next generation of leaders in restoring the Spirit-led unity and purpose of the early Church in a modern world.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Leaf,
              title: "Rooted in Truth",
              description:
                "Grounded in the original Way of the first followers of Christ, yet not held back by limiting systems.",
            },
            {
              icon: BookOpen,
              title: "Personal & Practical",
              description: "Spirit-centered guidance supported by cutting-edge tools that adapt to your unique journey, story, and spiritual rhythms.",
            },
            {
              icon: Heart,
              title: "Supernatural Support",
              description: "Experience wisdom, encouragement, and tools that support your supernatural walk with God.",
            },
            {
              icon: Users,
              title: "Unite the Body",
              description:
                "Connect with believers worldwide in a movement of radical transformation and Kingdom impact.",
              comingSoon: true,
            },
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 h-full">
                {feature.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
