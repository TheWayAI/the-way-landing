export type Publication = {
  slug: string
  number: string
  code: string
  category: string
  title: string
  dek: string
  authors: string[]
  authorLine?: string
  date: string
  dateLabel: string
  readMinutes: number
  status?: "live" | "draft"
}

export const publications: Publication[] = [
  {
    slug: "finding-christ-in-the-thinking-machine",
    number: "001",
    code: "ALN-001",
    category: "Whitepaper",
    title: "Finding Christ in the Thinking Machine",
    dek: "A new approach to AI alignment.",
    authors: ["Will Preble"],
    authorLine: "Co-founder, The Way || Founder, Ascendance",
    date: "2026-05-13",
    dateLabel: "May 2026",
    readMinutes: 24,
    status: "live",
  },
]

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find(p => p.slug === slug)
}

export function getLatestPublications(): Publication[] {
  return [...publications].sort((a, b) => b.date.localeCompare(a.date))
}
