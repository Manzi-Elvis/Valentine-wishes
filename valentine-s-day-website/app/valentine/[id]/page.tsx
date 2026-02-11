'use client'

import { useEffect, useState } from 'react'
import ValentineExperience from '@/components/ValentineExperience'
import { useParams } from 'next/navigation'

interface ValentineData {
  senderName: string
  partnerName: string
  message: string
  songPlaylist: string
}

export default function ValentinePage() {
  const params = useParams()
  const id = params.id as string
  const [data, setData] = useState<ValentineData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Get data from localStorage
    const stored = localStorage.getItem(`valentine_${id}`)
    if (stored) {
      try {
        setData(JSON.parse(stored))
      } catch (e) {
        setError(true)
      }
    } else {
      setError(true)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">❤️</div>
          <p className="text-xl text-gray-700">Loading your love letter...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">💔</div>
          <h1 className="font-playfair text-3xl font-bold text-gray-800 mb-2">
            Love Letter Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            This Valentine's invitation seems to have gotten lost. Make sure you have the correct link.
          </p>
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Create a New One
          </a>
        </div>
      </div>
    )
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return <ValentineExperience data={data} shareUrl={shareUrl} />
}
