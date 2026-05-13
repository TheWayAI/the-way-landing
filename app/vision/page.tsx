import type { Metadata } from "next"
import { NewLanding } from "@/components/new-landing"

export const metadata: Metadata = {
  title: "Vision — The Way",
  description:
    "Identity before activity. Formation before information. The Way exists to ensure what gets built with AI serves the Kingdom of God.",
}

export default function VisionPage() {
  return <NewLanding />
}
