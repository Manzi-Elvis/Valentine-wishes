'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ValentineCard() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [accepted, setAccepted] = useState(false)

  const moveNo = () => {
    setNoPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    })
  }

  if (accepted) {
    return (
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="rounded-3xl bg-white/80 p-10 text-center shadow-xl backdrop-blur-md"
      >
        <h1 className="text-4xl font-extrabold text-pink-600">
          YAYYYY 💖💖💖
        </h1>
        <p className="mt-4 text-lg">
          You just made someone incredibly happy 🥰
        </p>
        <div className="mt-6 text-3xl">💘💘💘</div>
      </motion.div>
    )
  }   else {
    return (
      <motion.div
            initial={{ scale: 0.6, opacity: 0 }}

            animate={{ scale: 1, opacity: 1 }}
            className="rounded-3xl bg-white/80 p-10 text-center shadow-xl backdrop-blur-md"
      >
            <h1 className="text-4xl font-extrabold text-pink-600">
            Will You Be My Valentine? 💖
            </h1>
            <div className="mt-6 flex justify-center gap-6">
            <button
                onClick={() => setAccepted(true)}
                  className="rounded-full bg-pink-500 px-6 py-3 text-white shadow-lg transition hover:bg-pink-600"
            >
                  Yes
            </button>
            <motion.button
                  onMouseEnter={moveNo}
                  style={{
                        x: noPosition.x,
                        y: noPosition.y,
                  }}
                  className="rounded-full bg-gray-300 px-6 py-3 text-gray-700 shadow-lg transition hover:bg-gray-400"
            >
                  No
            </motion.button>
            </div>
      </motion.div>
    )
  }   
}