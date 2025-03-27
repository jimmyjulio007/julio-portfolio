// components/Preloader.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setLoading(false)
    }, 2500) // durée du preloader

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center"
          initial={{ opacity: 1  }}
          animate={{ opacity: 1 , transition: { mass: 10 , stiffness: 100, damping: 20, type: "tween"} }}
          exit={{ opacity: 0, x: 0, y: 600 ,transition: { duration: 0.5, delay: 0.1, ease: "easeInOut"} }}
        >
            <BackgroundBeamsWithCollision>
            <Image src='/logo.svg' alt='logo' className="animate-bounce delay-75 transition" width={150} height={150} />
            </BackgroundBeamsWithCollision>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
