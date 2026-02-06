'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ValentineCard() {
  const [accepted, setAccepted] = useState(false)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })

  const dodgeNo = () => {
    setNoPos({
      x: Math.random() * 240 - 120,
      y: Math.random() * 180 - 90,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative mx-auto max-w-md rounded-[2.5rem] bg-white/70 p-10 text-center shadow-2xl backdrop-blur-xl"
    >
      {!accepted ? (
        <>
          <h1 className="text-4xl font-extrabold tracking-tight text-pink-600">
            Will you be my Valentine?
          </h1>

          <p className="mt-5 text-lg text-gray-700">
            I don’t need chocolates or roses —
            <br />
            <span className="font-semibold text-pink-500">
              I just need you ❤️
            </span>
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={() => setAccepted(true)}
              className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-pink-300"
            >
              YES 💖
            </button>

            <motion.button
              animate={noPos}
              transition={{ type: 'spring', stiffness: 300 }}
              onMouseEnter={dodgeNo}
              className="rounded-full bg-white px-10 py-4 text-lg font-semibold text-gray-600 shadow-md"
            >
              NO 💔
            </motion.button>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-pink-600">
            SHE SAID YES 💘
          </h1>
          <p className="mt-4 text-lg">
            This just became my favorite Valentine ever 🥰
          </p>
          <div className="mt-6 text-4xl">💖💖💖</div>
        </motion.div>
      )}
    </motion.div>
  )
}