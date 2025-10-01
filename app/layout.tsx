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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/placeholder-logo.png',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Explicit favicon links to help browsers pick up the icon immediately */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32 16x16" />
        {/* SVG favicon for modern browsers (falls back to ICO) */}
        <link rel="icon" href="/placeholder.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/placeholder-logo.png" sizes="180x180" />
        <meta name="theme-color" content="#f59e0b" />
        {/* Optional: manifest and mask-icon could be added here */}
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
