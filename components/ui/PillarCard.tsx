'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface PillarCardProps {
  Icon: LucideIcon
  title: string
  description: string
  accent: 'gold' | 'blue'
  index: number
}

export default function PillarCard({
  Icon,
  title,
  description,
  accent,
  index,
}: PillarCardProps) {
  const borderClass = accent === 'gold' ? 'border-t-gold' : 'border-t-blue-light'
  const iconColor = accent === 'gold' ? 'text-gold' : 'text-blue-light'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className={`rounded-2xl bg-white p-8 text-center shadow-md shadow-navy/10 border-t-4 ${borderClass} transition-all duration-300 hover:shadow-xl hover:shadow-navy/20`}
    >
      <Icon
        className={`mx-auto mb-4 h-14 w-14 ${iconColor}`}
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <h3 className="mb-3 font-condensed text-lg font-semibold uppercase text-navy">
        {title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-navy/60">
        {description}
      </p>
    </motion.div>
  )
}
