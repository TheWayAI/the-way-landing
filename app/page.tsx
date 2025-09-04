import { HeroSection } from "@/components/hero-section"
import { MovementSection } from "@/components/movement-section"
import { WhyTheWaySection } from "@/components/why-the-way-section"
import { AppShowcase } from "@/components/app-showcase"
import { JourneySection } from "@/components/journey-section"
import { TheWayPricing } from "@/components/the-way-pricing"
import { CallToAction } from "@/components/call-to-action"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden relative">
      <Navigation />
      
      {/* Background Vine Decorations - Fixed and Scrollable */}
      
      {/* Fixed vine on the right side */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-10 z-0 pointer-events-none">
        <Image src="/horizontal-vine.png" alt="" fill className="object-contain rotate-90 scale-150" />
      </div>
      
      {/* Additional fixed vine on bottom left */}
      <div className="fixed bottom-0 left-0 w-64 h-64 opacity-10 z-0 pointer-events-none">
        <Image src="/vine-accent-1.png" alt="" fill className="object-contain" />
      </div>
      
      {/* Scrollable vine accents in different sections */}
      
      {/* Movement Section Vine */}
      <div className="absolute top-[100vh] left-10 w-48 h-48 opacity-5 z-0 pointer-events-none">
        <Image src="/vine-accent-2.png" alt="" fill className="object-contain" />
      </div>
      
      {/* App Showcase Section Vine */}
      <div className="absolute top-[150vh] right-10 w-64 h-64 opacity-5 z-0 pointer-events-none">
        <Image src="/vine-accent-3.png" alt="" fill className="object-contain" />
      </div>
      
      {/* Journey Section Vine */}
      <div className="absolute top-[200vh] left-1/4 w-40 h-40 opacity-5 z-0 pointer-events-none">
        <Image src="/vine-accent-1.png" alt="" fill className="object-contain rotate-45" />
      </div>
      
      {/* Pricing Section Vine */}
      <div className="absolute top-[250vh] right-1/4 w-32 h-32 opacity-5 z-0 pointer-events-none">
        <Image src="/vine-accent-2.png" alt="" fill className="object-contain rotate-180" />
      </div>
      
      <HeroSection />
      <MovementSection />
      <WhyTheWaySection />
      <AppShowcase />
      <JourneySection />
      <TheWayPricing />
      <CallToAction />
      <Footer />
    </main>
  )
}
