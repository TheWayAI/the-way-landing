import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "The Way - A New Era for the Body of Christ",
  description:
    "Step boldly into a life of deep connection with God, radical transformation, and Kingdom impact. Experience WayFinder AI - your personal Christ-centered assistant.",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimsonText.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
