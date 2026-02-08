'use client'

import { useEffect, useState } from 'react'

interface Heart {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const initialHearts: Heart[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 4,
      size: 20 + Math.random() * 30,
    }))
    setHearts(initialHearts)

    const interval = setInterval(() => {
      setHearts((prev) =>
        prev.map((heart) => ({
          ...heart,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 6 + Math.random() * 4,
        }))
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-pulse"
          style={{
            left: `${heart.left}%`,
            top: '-50px',
            animation: `floatHeart ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`,
            opacity: 0.3,
          }}
        >
          <span
            className="text-rose-400 drop-shadow-lg"
            style={{
              fontSize: `${heart.size}px`,
              display: 'block',
              textShadow: '0 0 10px rgba(244, 63, 94, 0.3)',
            }}
          >
            ❤️
          </span>
        </div>
      ))}
    </div>
  )
}