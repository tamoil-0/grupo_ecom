'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useMotionValue, motion } from 'framer-motion'

interface StatCounterProps {
  value: number
  suffix: string
  label: string
}

export default function StatCounter({ value, suffix, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, count, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="px-6 py-12 text-center"
    >
      <div className="font-mono text-6xl font-bold text-gold lg:text-7xl">
        {display}
        {suffix}
      </div>
      <p className="mt-3 font-body text-sm uppercase tracking-widest text-gray-text">
        {label}
      </p>
    </motion.div>
  )
}
