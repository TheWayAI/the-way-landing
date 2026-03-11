"use client"

import { Navigation } from "@/components/navigation"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button" 
import Link from "next/link"
import { ArrowRight, Flame, Sword, Zap, BookOpen, Users } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function VisionPage() {
  useEffect(() => {
    document.title = "THE WAY - Vision"
  }, [])

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />

      {/* Background Vine Decoration - Growing from right side */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-10 z-0 pointer-events-none">
        <Image src="/horizontal-vine.png" alt="" fill className="object-contain rotate-90 scale-150" />
      </div>
      
      {/* Additional Vine Decorations */}
      <div className="fixed bottom-0 left-0 w-64 h-64 opacity-10 z-0 pointer-events-none">
        <Image src="/vine-accent-1.png" alt="" fill className="object-contain" />
      </div>
      
      <div className="fixed top-20 left-10 w-48 h-48 opacity-5 z-0 pointer-events-none">
        <Image src="/vine-accent-2.png" alt="" fill className="object-contain" />
      </div>

      {/* Hero Section with visionbackground1 image */}
      <section className="relative pt-32 pb-20 z-10">
        {/* Background Image with Filter */}
        <div className="absolute inset-0 z-0">
          <Image src="/visionbackground2.png" alt="Vision Background" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="w-20 h-20 relative mx-auto mb-8 p-2 bg-white rounded-full shadow-lg">
              <Image src="/thewaylogo.jpeg" alt="The Way Logo" width={80} height={80} className="object-contain" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-slate-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Vision</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              Rediscovering the original Way of Christ for a new generation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10">
        {/* Beyond Traditional Bible Study - Curved background section */}
        <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-12 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-slate-100 opacity-50"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-slate-100 opacity-50"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-slate max-w-none">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                  <span className="text-2xl font-serif text-slate-700">1</span>
                </div>
                <h2 className="text-4xl font-serif font-light text-slate-900 mb-8">Beyond Traditional Bible Study</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                  This generation is being invited to rediscover the original Way: the path of the first followers of
                  Christ, rooted in the ancient faith of those who followed Christ before us, yet open to the Spirit's leading 
                  without being bound by man-made traditions that can hinder us from directly experiencing the fullness of God.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Approach - Angled background section */}
        <div className="py-20 relative bg-slate-900 text-white transform -skew-y-1">
          <div className="transform skew-y-1">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-700/30 transform transition-transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-700 rounded-full mb-6">
                    <Flame className="w-6 h-6 text-slate-100" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-slate-200 mb-4">Our Mission</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    To help every believer step boldly into the fullness of their calling through personalized,
                    Scripture-centered guidance that bridges ancient wisdom with modern technology.
                  </p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-700/30 transform transition-transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-700 rounded-full mb-6">
                    <Sword className="w-6 h-6 text-slate-100" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-slate-200 mb-4">Our Approach</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    We're bringing biblical truth and emerging technology together to activate, educate, and unite the
                    Body of Christ. Here, you'll find a path that's personal, practical, and supernatural.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mt-12">
                <Button 
                  className="bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open("https://theway.masterymade.com/", "_blank")}
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why The Way Matters Today */}
        <div className="py-20 bg-gradient-to-b from-white to-slate-50 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                <span className="text-2xl font-serif text-slate-700">2</span>
              </div>
              <h2 className="text-4xl font-serif font-light text-slate-900 mb-8">Why The Way Matters Today</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Information → Transformation</h3>
                  <p className="text-slate-600">Many Christians know Bible verses but struggle to walk them out.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Passivity → Obedience</h3>
                  <p className="text-slate-600">Many feel faith has become entertainment, not transformation.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Isolation → Unity</h3>
                  <p className="text-slate-600">Many are isolated, not united, in their journey with Christ.</p>
                </div>
              </div>
              <p className="text-lg text-slate-600 mt-8 max-w-3xl mx-auto">
                The Way is about bridging that gap—helping believers move from knowing to doing, from passive consumption to active discipleship, from walking alone to walking together.
              </p>
            </div>
          </div>
        </div>

        {/* Three Pillars - Card grid with subtle background and vine accents */}
        <div className="py-20 bg-gradient-to-t from-slate-50 via-white to-slate-50 relative">
          <div className="absolute inset-0 bg-slate-900/5 pattern-grid-lg opacity-10"></div>
          
          {/* Vine accent decorations in background */}
          <div className="absolute top-10 right-5 md:right-20 w-48 h-48 opacity-10 pointer-events-none">
            <Image src="/vine-accent-3.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-20 left-5 md:left-20 w-64 h-64 opacity-10 pointer-events-none">
            <Image src="/vine-accent-1.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 opacity-5 pointer-events-none transform -translate-y-1/2">
            <Image src="/vine-accent-2.png" alt="" fill className="object-contain" />
          </div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                <span className="text-2xl font-serif text-slate-700">3</span>
              </div>
              <h2 className="text-4xl font-serif font-light text-slate-900 mb-12">Three Pillars of The Way</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 transform transition-transform hover:translate-y-[-8px]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                    <Zap className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Activate</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Daily conviction prompts that push you from hearing to doing. Awaken your spiritual gifts and calling through personalized guidance and biblical insight.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm italic text-slate-700 mb-1">
                      "A spiritual gift is given to each of us so we can help each other."
                    </p>
                    <p className="text-xs text-slate-500">1 Corinthians 12:7 (NLT)</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 transform transition-transform hover:translate-y-[-8px]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                    <BookOpen className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Educate</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Biblical insights explained in historical context, so you can apply them today. Deepen your understanding with the clarity most believers miss.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm italic text-slate-700 mb-1">
                      "All Scripture is inspired by God and is useful to teach us what is true..."
                    </p>
                    <p className="text-xs text-slate-500">2 Timothy 3:16 (NLT)</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 transform transition-transform hover:translate-y-[-8px]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                    <Users className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Unite</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Digital spaces to pray, share testimonies, and disciple together worldwide. Connect the global Body of Christ in a movement of transformation and Kingdom impact.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm italic text-slate-700 mb-1">
                      "We are many parts of one body, and we all belong to each other."
                    </p>
                    <p className="text-xs text-slate-500">Romans 12:5 (NLT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kingdom Vision */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-serif font-semibold mb-4">Our Kingdom Vision</h3>
                <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
                  Revival through discipleship — to see a generation walking in holiness, unity, and Spirit-filled boldness, just like the first followers of Jesus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What The Way Produces - Separate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-light text-slate-900 mb-8">What The Way Produces</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <p className="text-slate-800 font-semibold text-center leading-relaxed">Ordinary believers becoming disciple-makers</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <p className="text-slate-800 font-semibold text-center leading-relaxed">A generation anchored in truth, not swayed by culture</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <p className="text-slate-800 font-semibold text-center leading-relaxed">Churches strengthened with Spirit-led, equipped believers</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <p className="text-slate-800 font-semibold text-center leading-relaxed">Global unity across denominations under Christ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-12 text-center shadow-xl border border-slate-200">
              <div className="bg-slate-50 rounded-xl p-8 mb-8">
                <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-relaxed mb-4">
                  "And no one puts new wine into old wineskins. For the new wine would burst the wineskins, spilling the wine and ruining the skins. New wine must be stored in new wineskins."
                </blockquote>
                <cite className="text-slate-600 font-semibold text-lg">— Luke 5:37-38 (NLT)</cite>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Just as Jesus taught that His Kingdom could not be contained by old religious systems, we believe He is inviting this generation to move beyond limiting cultural structures and bring the fresh, Spirit-filled life of the early church into our present time. This isn't about replacing the Church—it's about returning to the roots that make the Church thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  )
}
