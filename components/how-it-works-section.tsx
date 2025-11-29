"use client"

import { MessageCircle, BookOpen, Shield, Swords, Repeat, Users } from "lucide-react"
import Image from "next/image"

export function HowItWorksSection() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-slate-900 mb-4">
            Your Daily Training Ground
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here's what discipleship looks like inside The Way:
          </p>
        </div>

        <WayfinderFeature />
        <ChurchFathersFeature />
        <ApologeticsFeature />
        <SpiritualWarfareFeature />
        <DisciplineFeature />
        <CommunityFeature />
      </div>
    </section>
  )
}

function WayfinderFeature() {
  const questions = [
    "How do I defend the divinity of Christ to a skeptic?",
    "What did Augustine say about this passage?",
    "I'm struggling with lust. What does spiritual warfare look like here?",
    "Teach me to pray like the early Church.",
  ]

  return (
    <div className="mb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200 mb-6">
            <MessageCircle className="w-7 h-7 text-amber-700" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-serif font-light text-slate-900 mb-4">
            Wayfinder: Your Spiritual Guide
          </h3>
          
          <p className="text-lg text-slate-600 mb-6">
            Not a chatbot. A <span className="font-semibold text-slate-900">disciple-maker</span>.
          </p>
          
          <p className="text-slate-600 mb-8">
            Wayfinder doesn't just answer. It <span className="font-semibold">trains</span> you. It pulls from Scripture, the Church fathers, historical theology, and apostolic practice to give you <span className="font-semibold">depth, not dopamine</span>.
          </p>
          
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">Ask it anything:</p>
            {questions.map((question, index) => (
              <div 
                key={index}
                className="group bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-amber-300 hover:shadow-md transition-all cursor-pointer"
              >
                <p className="text-slate-700 italic">"{question}"</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-6 shadow-2xl">
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-white shadow-inner">
              <Image
                src="/app-dark.png"
                alt="Wayfinder AI Interface"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChurchFathersFeature() {
  const fathers = [
    { name: "Origen", topic: "on spiritual warfare" },
    { name: "Augustine", topic: "on the nature of sin" },
    { name: "Athanasius", topic: "on the Incarnation" },
    { name: "Chrysostom", topic: "on living radically" },
    { name: "Desert Fathers", topic: "on renunciation" },
  ]

  return (
    <div className="mb-24">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {fathers.map((father, index) => (
                <div 
                  key={index}
                  className={`bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-amber-700/50 transition-all ${
                    index === 4 ? 'col-span-2' : ''
                  }`}
                >
                  <p className="text-white font-semibold mb-1">{father.name}</p>
                  <p className="text-slate-400 text-sm">{father.topic}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-900/30 border border-amber-700/30 mb-6">
              <BookOpen className="w-7 h-7 text-amber-400" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-4">
              Learn from the Fathers
            </h3>
            
            <p className="text-lg text-slate-300 mb-6">
              The early Church fathers weren't just theologians. They were <span className="text-amber-400 font-semibold">martyrs, mystics, and movement-builders</span>. Their writings aren't relics. They're <span className="text-white font-semibold">weapons</span>.
            </p>
            
            <p className="text-slate-400">
              Filtered, contextualized, and made <span className="text-white font-semibold">actionable</span> for your life today.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ApologeticsFeature() {
  const skills = [
    "Defend the historicity of the Resurrection",
    "Articulate the problem of evil without compromising God's character",
    "Engage secular culture with theological precision",
    "Dismantle weak arguments against Christianity",
    "Speak truth with both grace and conviction",
  ]

  return (
    <div className="mb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-200 border border-slate-300 mb-6">
            <Shield className="w-7 h-7 text-slate-700" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-serif font-light text-slate-900 mb-4">
            Apologetics Training
          </h3>
          
          <p className="text-lg text-slate-600 mb-6">
            The world will challenge what you believe. Are you ready to answer?
          </p>
          
          <div className="space-y-3 mb-8">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">Learn to:</p>
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
                <p className="text-slate-700">{skill}</p>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-amber-500 pl-6 py-2">
            <p className="text-lg text-slate-700 italic mb-2">
              "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have."
            </p>
            <cite className="text-slate-500 text-sm">1 Peter 3:15</cite>
          </blockquote>
        </div>
        
        <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200">
          <p className="text-xl text-slate-700 leading-relaxed">
            This isn't about winning debates. It's about <span className="font-semibold text-slate-900">equipping believers to stand firm</span> in a culture that demands compromise.
          </p>
        </div>
      </div>
    </div>
  )
}

function SpiritualWarfareFeature() {
  const skills = [
    "Recognize demonic patterns (fear, accusation, division, confusion)",
    "Counter lies with Scripture",
    "Pray with authority",
    "Discern spirits",
    "Walk in freedom",
  ]

  return (
    <div className="mb-24">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <blockquote className="border-l-4 border-red-500/50 pl-6 py-2">
                <p className="text-xl text-slate-200 italic mb-3">
                  "For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world."
                </p>
                <cite className="text-slate-500 text-sm">Ephesians 6:12</cite>
              </blockquote>
              
              <p className="text-slate-400 mt-6">
                This isn't paranoia. It's <span className="text-white font-semibold">preparedness</span>.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-900/30 border border-red-700/30 mb-6">
              <Swords className="w-7 h-7 text-red-400" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-4">
              Spiritual Warfare Training
            </h3>
            
            <p className="text-lg text-slate-300 mb-6">
              The enemy doesn't take days off. Neither should your awareness.
            </p>
            
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">Learn to:</p>
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  </div>
                  <p className="text-slate-300">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DisciplineFeature() {
  const replacements = [
    { from: "Scrolling", to: "Scripture" },
    { from: "Anxiety", to: "Prayer" },
    { from: "Defensiveness", to: "Discernment" },
    { from: "Compromise", to: "Conviction" },
  ]

  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 mb-6">
          <Repeat className="w-7 h-7 text-emerald-700" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-serif font-light text-slate-900 mb-4">
          Build Discipline, Not Just Habits
        </h3>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          The Way helps you replace:
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {replacements.map((item, index) => (
          <div 
            key={index}
            className="group relative bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-emerald-300 hover:shadow-lg transition-all"
          >
            <p className="text-slate-400 line-through mb-3">{item.from}</p>
            <div className="w-6 h-6 mx-auto mb-3 text-emerald-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-slate-900">{item.to}</p>
          </div>
        ))}
      </div>
      
      <p className="text-center text-slate-600 text-lg">
        Not through shame. Through <span className="font-semibold text-slate-900">structure, rhythm, and supernatural support</span>.
      </p>
    </div>
  )
}

function CommunityFeature() {
  return (
    <div>
      <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-3xl p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-200 border border-amber-300 mb-6">
              <Users className="w-7 h-7 text-amber-800" />
            </div>
            
            <div className="inline-block bg-amber-200 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Coming Soon
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif font-light text-slate-900 mb-4">
              Unite the Body
            </h3>
            
            <p className="text-lg text-slate-700 mb-4">
              You're not alone in this.
            </p>
            
            <p className="text-slate-600 mb-6">
              Connect with other followers of The Way (locally and globally) who are walking the same path, fighting the same fights, and building the same future.
            </p>
            
            <p className="text-xl text-slate-800 font-serif">
              Because the Church was never meant to be <span className="text-slate-500">isolated</span>. 
              <span className="block mt-1 text-amber-700 font-semibold">It was meant to be insurgent.</span>
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-300/20 rounded-full blur-3xl"></div>
              <div className="relative flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 border-2 border-white shadow-lg flex items-center justify-center"
                  >
                    <Users className="w-6 h-6 text-amber-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
