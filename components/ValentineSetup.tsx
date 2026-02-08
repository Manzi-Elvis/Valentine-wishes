'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Heart, Music, Send } from 'lucide-react'

interface ValentineSetupProps {
  onSubmit: (data: {
    senderName: string
    partnerName: string
    message: string
    songPlaylist: string
  }) => void
}

const POPULAR_SONGS = [
  { id: 1, name: '🎵 "Perfect" - Ed Sheeran' },
  { id: 2, name: '🎵 "Falling" - Harry Styles' },
  { id: 3, name: '🎵 "Kiss Me" - Sixpence None the Richer' },
  { id: 4, name: '🎵 "Thinking Out Loud" - Ed Sheeran' },
  { id: 5, name: '🎵 "Make You Feel My Love" - Adele' },
  { id: 6, name: '🎵 "All of Me" - John Legend' },
]

export default function ValentineSetup({ onSubmit }: ValentineSetupProps) {
  const [senderName, setSenderName] = useState('')
  const [partnerName, setPartnerName] = useState('')
  const [message, setMessage] = useState('')
  const [selectedSong, setSelectedSong] = useState(POPULAR_SONGS[0].name)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!senderName || !partnerName) {
      alert('Please fill in all required fields')
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      onSubmit({
        senderName,
        partnerName,
        message: message || 'From the moment I met you… ❤️',
        songPlaylist: selectedSong,
      })
    }, 500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>
              ❤️
            </div>
          </div>
          <h1 className="font-playfair text-5xl font-bold text-rose-700 mb-3 text-balance">
            Create Your Love Letter
          </h1>
          <p className="text-gray-600 text-lg">
            A magical way to ask someone to be your Valentine
          </p>
        </div>

        {/* Form Card */}
        <Card className="glass-effect border-0 shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Your Name */}
            <div>
              <label htmlFor="sender" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name <span className="text-rose-600">*</span>
              </label>
              <Input
                id="sender"
                type="text"
                placeholder="Enter your name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="bg-white/80 border-rose-200 focus:border-rose-500 focus:ring-rose-500"
              />
            </div>

            {/* Partner Name */}
            <div>
              <label htmlFor="partner" className="block text-sm font-semibold text-gray-700 mb-2">
                Their Name <span className="text-rose-600">*</span>
              </label>
              <Input
                id="partner"
                type="text"
                placeholder="Enter their name"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                className="bg-white/80 border-rose-200 focus:border-rose-500 focus:ring-rose-500"
              />
            </div>

            {/* Personal Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message <span className="text-gray-500">(Optional)</span>
              </label>
              <Textarea
                id="message"
                placeholder="Write something special... (or we'll use a beautiful default)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white/80 border-rose-200 focus:border-rose-500 focus:ring-rose-500 min-h-24 resize-none"
              />
            </div>

            {/* Song Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Music className="w-4 h-4 text-purple-600" />
                Background Music
              </label>
              <div className="grid grid-cols-2 gap-2">
                {POPULAR_SONGS.map((song) => (
                  <button
                    key={song.id}
                    type="button"
                    onClick={() => setSelectedSong(song.name)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      selectedSong === song.name
                        ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-white/60 text-gray-700 border-2 border-rose-200 hover:border-rose-400'
                    }`}
                  >
                    {song.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-700 hover:via-pink-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isLoading ? 'Creating Magic...' : 'Create My Valentine Surprise 💌'}
            </Button>
          </form>

          {/* Info Footer */}
          <div className="mt-8 pt-6 border-t border-rose-200/50 text-center text-sm text-gray-600">
            <p>✨ Your link will be unique and shareable</p>
            <p>No sign-in needed • Mobile friendly • Works everywhere</p>
          </div>
        </Card>
      </div>
    </div>
  )
}