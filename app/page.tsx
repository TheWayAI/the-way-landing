import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { VisionFutureSection } from "@/components/vision-future-section"
import { TheWayPricing } from "@/components/the-way-pricing"
import { CallToAction } from "@/components/call-to-action"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "THE WAY - Home",
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden relative">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <VisionFutureSection />
      <TheWayPricing />
      <CallToAction />
      <Footer />
    </main>
  )
}
