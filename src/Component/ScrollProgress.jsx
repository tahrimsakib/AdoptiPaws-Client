"use client"
import React from "react"
import { motion, useSpring, useScroll } from "framer-motion"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 6,
        originX: 0,
        backgroundColor: "#ff6d2d",
        zIndex: 9999,
      }}
    />
  )
}

export default ScrollProgress
