import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text, Oswald } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
})
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
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
      <body className={`${inter.variable} ${crimsonText.variable} ${oswald.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
