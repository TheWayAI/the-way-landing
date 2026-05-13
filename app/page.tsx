import type { Metadata } from "next"
import { LandingHub } from "@/components/landing-hub"

export const metadata: Metadata = {
  title: "The Way — Frontier Technology for the Body of Christ",
  description:
    "Vision · Product · Research. Pushing the boundaries of emerging technology to evangelize, disciple, and unite the Body of Christ.",
}

export default function Home() {
  return <LandingHub />
}
