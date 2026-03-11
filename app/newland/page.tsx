import type { Metadata } from "next"
import { NewLanding } from "@/components/new-landing"

export const metadata: Metadata = {
  title: "The Way — AI for the Body of Christ",
  description:
    "A prestige AI lab building technology to evangelize, disciple, and unite the Body of Christ. Launching Q2 2026.",
}

export default function NewLandingPage() {
  return <NewLanding />
}
