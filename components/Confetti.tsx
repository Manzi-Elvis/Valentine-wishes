'use client'

import { useEffect, useState } from 'react'

interface ConfettiPiece {
  id: number
  left: number
  delay: number
  duration: number
  emoji: string
}

export default function Confetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const emojis = ['❤️', '💖', '✨', '🥰', '💝', '🌹', '💕','💞','👩‍❤️‍💋‍👨', '⭐']

    const pieces: ConfettiPiece[] = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }))

    setConfetti(pieces)

    // Remove confetti after animation completes
    const timeout = setTimeout(() => {
      setConfetti([])
    }, 3500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute text-2xl md:text-4xl"
          style={{
            left: `${piece.left}%`,
            top: '-50px',
            animation: `fall ${piece.duration}s ease-in forwards`,
            animationDelay: `${piece.delay}s`,
            opacity: 1,
          }}
        >
          {piece.emoji}
        </div>
      ))}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
