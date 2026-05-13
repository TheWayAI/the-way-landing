import type { Metadata } from "next"
import { ResearchIndex } from "@/components/research-index"

export const metadata: Metadata = {
  title: "Research — The Way",
  description:
    "Research on AI, formation, and the transformation of the Body of Christ.",
}

export default function ResearchPage() {
  return <ResearchIndex />
}
