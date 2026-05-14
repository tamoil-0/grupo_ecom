'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  id: string
  Icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function ServiceCard({
  id,
  Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 cursor-pointer transition-colors duration-350 hover:border-gold/40 hover:bg-gold/[0.06] hover:shadow-2xl hover:shadow-black/40"
    >
      <span className="font-mono text-xs tracking-widest text-gold/50">
        {id}
      </span>
      <Icon
        className="mt-3 h-12 w-12 text-gold transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <div className="mt-4 h-[2px] w-10 rounded bg-gradient-gold transition-all duration-400 group-hover:w-full" />
      <h3 className="mt-4 font-condensed text-xl font-semibold uppercase leading-tight text-white">
        {title}
      </h3>
      <p className="mt-3 font-body text-sm font-light leading-relaxed text-gray-text">
        {description}
      </p>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 select-none font-display text-[7rem] leading-none text-gold/0 transition-colors duration-300 group-hover:text-gold/10"
      >
        ›
      </span>
    </motion.article>
  )
}
