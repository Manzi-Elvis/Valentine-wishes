import type { Metadata } from 'next'
import React from 'react'
import HeartBackground from '@/src/components/HeartBackground'

export const metadata: Metadata = {
  title: 'Will You Be My Valentine 💖',
  description: 'A romantic Valentine website made with love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#ff758f] via-[#ffb3c1] to-[#ffd6e0] text-gray-800">
        <HeartBackground />
        {children}
      </body>
    </html>
  )
}