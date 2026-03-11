import Image from "next/image"

export function VisionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with vine accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-slate-200/60 to-slate-300/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-slate-300/50 to-slate-400/50 rounded-full blur-3xl"></div>
      </div>

      {/* Strategic vine placement */}
      <div className="absolute bottom-0 right-0 w-64 h-80 opacity-6 z-10">
        <Image src="/vine-accent-1.png" alt="" fill className="object-contain scale-50 rotate-12" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 relative mx-auto mb-6">
            <Image src="/thewaylogo.jpeg" alt="The Way Logo" width={64} height={64} className="object-contain" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-slate-900 mb-8 leading-tight">
            Our
            <span className="block text-slate-700">Vision</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-light">
            Rediscovering the original Way of Christ for a new generation
          </p>
        </div>
      </div>
    </section>
  )
}
