import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "Vedant Agnihotri | Machine Learning & Computer Vision Portfolio",
  description:
    "4th-year B.Tech Computer Science student at SASTRA University specializing in machine learning, computer vision, and deep learning. Featured projects include respiratory sound classification, ASL gesture recognition, and agricultural computer vision systems.",
  keywords: [
    "Vedant Agnihotri",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "SASTRA University",
    "Computer Science",
    "Respiratory Sound Classification",
    "ASL Gesture Recognition",
    "YOLOv8",
    "PyTorch",
    "TensorFlow",
  ],
  authors: [{ name: "Vedant Agnihotri" }],
  openGraph: {
    title: "Vedant Agnihotri | Machine Learning & Computer Vision Portfolio",
    description:
      "Showcasing innovative ML and CV projects including respiratory sound classification and real-time ASL gesture recognition",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vedant Agnihotri - Machine Learning Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Agnihotri | ML & CV Portfolio",
    description: "Computer Science student specializing in machine learning and computer vision applications",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-slate-900 text-white antialiased">{children}</body>
    </html>
  )
}
