"use client"

import Image from "next/image"

export function AppShowcase() {
  return (
    <section id="app" className="relative py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-900 mb-6">
            Experience
            <span className="block text-slate-700">WayFinder AI</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Your digital companion designed to drive you deeper into Scripture, prayer, and the Spirit's leading. 
            Built to understand your story, rhythms, and spiritual longings.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video relative overflow-hidden rounded-2xl bg-white shadow-inner">
              <Image
                src="/app-dark.png"
                alt="The Way App Interface"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Floating feature cards */}
          <div className="absolute -left-8 top-1/4 hidden lg:block">
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs">
              <h4 className="font-semibold text-slate-900 mb-2">Personalized Guidance</h4>
              <p className="text-sm text-slate-600">Spirit-led tools that understand your unique spiritual journey</p>
            </div>
          </div>

          <div className="absolute -right-8 top-1/3 hidden lg:block">
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs">
              <h4 className="font-semibold text-slate-900 mb-2">Scripture & Prayer</h4>
              <p className="text-sm text-slate-600">Deep biblical insights and prayer generation</p>
            </div>
          </div>

          <div className="absolute -left-12 bottom-1/4 hidden lg:block">
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs">
              <h4 className="font-semibold text-slate-900 mb-2">Historical Context</h4>
              <p className="text-sm text-slate-600">Rich historical perspectives on Scripture</p>
            </div>
          </div>
        </div>
        
        {/* What Can I Do Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-light text-slate-900 mb-6">
              What Can I Do Inside The Way?
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Imagine opening the app tomorrow morning. Here's how The Way transforms your daily walk with Christ:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Scripture + Conviction</h4>
              <p className="text-slate-600 leading-relaxed">
                Get a Scripture and conviction prompt tailored to your day, season, and spiritual growth.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🙏</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Guided Prayer</h4>
              <p className="text-slate-600 leading-relaxed">
                Pray with a Spirit-led guide when you don't know what to say or how to pray.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Historical Depth</h4>
              <p className="text-slate-600 leading-relaxed">
                Understand Scripture with historical and cultural depth that brings passages to life.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Truth-Based Action</h4>
              <p className="text-slate-600 leading-relaxed">
                Replace temptation and distraction with truth-based action steps you can take today.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Growth Tracking</h4>
              <p className="text-slate-600 leading-relaxed">
                Track your spiritual growth and see how God is working in your life over time.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Share Testimonies</h4>
              <p className="text-slate-600 leading-relaxed">
                Connect with others and share testimonies of how God is moving in your daily life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
