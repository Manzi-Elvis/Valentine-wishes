'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-red-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="rounded-3xl bg-white/70 p-10 shadow-xl backdrop-blur-md"
      >
        <motion.h1
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-center text-4xl font-extrabold text-pink-600"
        >
          Will you be my Valentine? ❤️
        </motion.h1>

        <p className="mt-4 text-center text-lg text-gray-700">
          I made this just for you 💕
        </p>
      </motion.div>
    </main>
  )
}