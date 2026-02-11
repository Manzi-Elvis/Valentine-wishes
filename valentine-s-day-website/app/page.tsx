'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ValentineSetup from '@/components/ValentineSetup'
import FloatingHearts from '@/components/FloatingHearts'

export default function Home() {
  const router = useRouter()

  const handleCreateValentine = (data: {
    senderName: string
    partnerName: string
    message: string
    songPlaylist: string
  }) => {
    // Create a unique ID and store data
    const id = Math.random().toString(36).substring(2, 11)
    localStorage.setItem(`valentine_${id}`, JSON.stringify(data))
    router.push(`/valentine/${id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
      <FloatingHearts />
      
      <main className="relative z-10 w-full">
        <ValentineSetup onSubmit={handleCreateValentine} />
      </main>
    </div>
  )
}
