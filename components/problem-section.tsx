"use client"

export function ProblemSection() {
  return (
    <section id="vision" className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
            The Modern Church Has a
            <span className="block text-amber-400">Discipleship Crisis.</span>
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center">
            We've outsourced spiritual formation to shallow teachings and emotional experiences. To therapy culture and algorithm-fed theology. The result? Passive consumption with no accountability. Spiritual snacking with no roots. Vibes over doctrine. Feelings over truth.
          </p>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center">
            A generation of <span className="text-amber-400 font-semibold">lukewarm believers</span> who have heard of God but don't know how to follow Him. Who can quote verses but can't defend the faith. Who consume content but never become <span className="text-white font-semibold">consecrated</span>.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <blockquote className="border-l-4 border-amber-500/50 pl-6 py-4 bg-slate-800/50 rounded-r-xl">
            <p className="text-xl md:text-2xl text-slate-200 italic font-serif mb-2">
              "Because you are lukewarm, neither hot nor cold, I am about to spit you out of my mouth."
            </p>
            <cite className="text-slate-500 text-sm">Revelation 3:16</cite>
          </blockquote>
        </div>

        <div className="text-center">
          <p className="text-lg text-slate-400 mb-6">
            The enemy doesn't want you destroyed. He wants you <span className="text-white font-semibold">comfortable</span>. Spiritually passive. Culturally compliant. Theologically soft.
          </p>
          <p className="text-2xl md:text-3xl font-serif text-white">
            The Way was never meant to be comfortable.
            <span className="block text-amber-400 mt-2">It was meant to be transformative.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
