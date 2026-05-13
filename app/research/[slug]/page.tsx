import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ResearchArticle } from "@/components/research-article"
import { getPublicationBySlug, publications } from "@/lib/research"
import { getArticleContent } from "@/lib/research-content"

type Params = { slug: string }

export async function generateStaticParams() {
  return publications.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const pub = getPublicationBySlug(slug)
  if (!pub) return { title: "Research — The Way" }
  return {
    title: `${pub.title} — Research, The Way`,
    description: pub.dek,
    openGraph: {
      title: `${pub.title} — The Way Research`,
      description: pub.dek,
      type: "article",
      publishedTime: pub.date,
      authors: pub.authors,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const pub = getPublicationBySlug(slug)
  const content = getArticleContent(slug)
  if (!pub || !content) {
    notFound()
  }
  return <ResearchArticle publication={pub} content={content} />
}
