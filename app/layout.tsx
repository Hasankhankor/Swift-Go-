import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "SwiftGo Delivery Services - Fast, Reliable, and Everywhere",
  description:
    "Professional delivery services across Pakistan. Food, grocery, pharmacy, and document delivery with cultural respect and reliability.",
  keywords: "delivery service, Pakistan, food delivery, grocery delivery, pharmacy delivery, SwiftGo",
  authors: [{ name: "SwiftGo Delivery Services" }],
  openGraph: {
    title: "SwiftGo Delivery Services",
    description: "Fast, Reliable, and Everywhere - Professional delivery services across Pakistan",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
