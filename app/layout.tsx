import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Valentine\'s Love Letter - A Digital Love Declaration',
  description: 'Create a beautiful, shareable Valentine\'s Day invitation and ask someone to be your Valentine.',
  generator: 'next.js',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 min-h-screen">{children}</body>
    </html>
  )
}
