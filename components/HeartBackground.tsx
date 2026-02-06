'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Heart = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export default function HeartBackground() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 24 + 12,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3,
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110%' }}
          animate={{ y: '-10%' }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute blur-[1px]"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}