import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vedant Agnihotri - AI Engineer & Computer Vision Researcher",
  description:
    "Final-year Computer Science student specializing in AI, Computer Vision, and Deep Learning. Currently working on medical AI research and agricultural computer vision projects.",
  keywords: [
    "AI Engineer",
    "Computer Vision",
    "Deep Learning",
    "Machine Learning",
    "Research",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Vedant Agnihotri" }],
  openGraph: {
    title: "Vedant Agnihotri - AI Engineer & Computer Vision Researcher",
    description: "Passionate about building intelligent systems that solve real-world problems",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
