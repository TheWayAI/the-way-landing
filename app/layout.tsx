import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, EB_Garamond, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://followtheway.io'),
  title: "The Way — Frontier Technology for the Body of Christ",
  description:
    "Pushing the boundaries of emerging technology to evangelize, disciple, and unite the Body of Christ.",
  icons: {
    icon: '/thewaylogo.jpeg',
    shortcut: '/thewaylogo.jpeg',
    apple: '/thewaylogo.jpeg',
  },
  openGraph: {
    title: "The Way — Frontier Technology for the Body of Christ",
    description: "Pushing the boundaries of emerging technology to evangelize, disciple, and unite the Body of Christ.",
    images: ['/thewaylogo.jpeg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Way — Frontier Technology for the Body of Christ",
    description: "Pushing the boundaries of emerging technology to evangelize, disciple, and unite the Body of Christ.",
    images: ['/thewaylogo.jpeg'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${ebGaramond.variable} ${jetbrainsMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
