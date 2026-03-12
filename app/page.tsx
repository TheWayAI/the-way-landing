import type { Metadata } from "next"
import { NewLanding } from "@/components/new-landing"

export const metadata: Metadata = {
  title: "The Way — Frontier Technology for the Body of Christ",
  description:
    "Pushing the boundaries of emerging technology to evangelize, disciple, and unite the Body of Christ. Launching Q2 2026.",
}

export default function Home() {
  return <NewLanding />
}
