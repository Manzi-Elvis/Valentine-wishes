'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Heart = {
  id: number
  left: number
  size: number
  duration: number
}

export default function HeartBackground() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 10,
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '-10%', opacity: 1 }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute text-pink-400"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}