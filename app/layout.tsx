import type { Metadata } from 'next'
import React from 'react'
import HeartBackground from '@/components/HeartBackground'

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
      <body className="relative bg-pink-100 text-gray-800">
        <HeartBackground />
        {children}
      </body>
    </html>
  )
}