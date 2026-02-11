'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Heart, Volume2, VolumeX } from 'lucide-react'
import FloatingHearts from './FloatingHearts'
import Confetti from './Confetti'

interface ValentineData {
  senderName: string
  partnerName: string
  message: string
  songPlaylist: string
}

interface ValentineExperienceProps {
  data: ValentineData
  shareUrl: string
}

export default function ValentineExperience({ data, shareUrl }: ValentineExperienceProps) {
  const [answered, setAnswered] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const audioRef = useRef<HTMLAudioElement>(null)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [noHoverCount, setNoHoverCount] = useState(0)

  // Typewriter effect
  useEffect(() => {
    const fullText = data.message
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [data.message])

  // Autoplay music
  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch(() => {
        // Autoplay blocked, user needs to interact
      })
    }
  }, [isMuted])

  const handleYes = () => {
    setAnswered(true)
    setShowConfetti(true)
  }

  const handleNoHover = () => {
    if (noHoverCount < 3) {
      const randomX = Math.random() * 200 - 100
      const randomY = Math.random() * 200 - 100
      setNoButtonPosition({ x: randomX, y: randomY })
      setNoHoverCount(noHoverCount + 1)
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    alert('Link copied! Share it with them ❤️')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
      <FloatingHearts />
      {showConfetti && <Confetti />}

      <audio
        ref={audioRef}
        loop
        className="hidden"
      >
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {!answered ? (
          // Question Phase
          <div className="max-w-2xl w-full">
            {/* Greeting */}
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                Hey {data.partnerName}…
              </h2>
            </div>

            {/* Love Letter */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
              <p className="font-playfair text-2xl md:text-3xl text-rose-700 leading-relaxed text-center min-h-24">
                {displayedText}
                {displayedText.length < data.message.length && (
                  <span className="animate-pulse">|</span>
                )}
              </p>

              {/* Sender Info */}
              <div className="mt-8 pt-6 border-t border-rose-200/50 text-center">
                <p className="text-gray-700 font-semibold">
                  With all my love,
                </p>
                <p className="font-playfair text-2xl text-purple-600 mt-1">
                  {data.senderName}
                </p>
              </div>

              {/* Song Info */}
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-600 text-sm">
                <span>🎵 Now Playing: {data.songPlaylist}</span>
              </div>
            </div>

            {/* Main Question */}
            <div className="text-center mb-12">
              <h3 className="font-playfair text-4xl md:text-5xl font-bold text-rose-600 mb-8 text-balance">
                Will you be my Valentine?
              </h3>

              {/* Buttons */}
              <div className="flex gap-6 justify-center flex-wrap">
                <Button
                  onClick={handleYes}
                  className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-lg py-6 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-200"
                >
                  <Heart className="w-6 h-6 mr-2" />
                  YES 💖
                </Button>

                <button
                  onMouseEnter={handleNoHover}
                  className="relative px-8 py-6 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-200"
                  style={{
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  }}
                >
                  NO 🙈
                </button>
              </div>

              {noHoverCount > 0 && (
                <p className="mt-4 text-gray-600 text-sm animate-pulse">
                  {noHoverCount === 1 && '😊 Are you sure?'}
                  {noHoverCount === 2 && '💔 Give love a chance...'}
                  {noHoverCount >= 3 && '🥺 Pretty please?'}
                </p>
              )}
            </div>
          </div>
        ) : (
          // Success Phase
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8">
              <div className="text-8xl mb-4 animate-bounce">💖</div>
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-rose-600 mb-4">
                YES!
              </h2>
              <p className="font-playfair text-3xl text-purple-600 mb-2">
                You made me the happiest!
              </p>
              <p className="text-xl text-gray-700">
                {data.senderName} & {data.partnerName}
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                ✨ This is just the beginning of our story ✨
              </p>
              <p className="text-lg text-gray-600">
                Thank you for saying yes. You're my greatest Valentine's Day wish come true.
              </p>
            </div>

            <Button
              onClick={handleCopyLink}
              className="bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2 mx-auto"
            >
              <Copy className="w-5 h-5" />
              Share This Moment
            </Button>
          </div>
        )}

        {/* Music Control */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="fixed bottom-8 right-8 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
          title={isMuted ? 'Unmute music' : 'Mute music'}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-rose-600" />
          ) : (
            <Volume2 className="w-6 h-6 text-rose-600" />
          )}
        </button>
      </main>
    </div>
  )
}
