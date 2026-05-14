'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import PillarCard from '@/components/ui/PillarCard'
import { pillars } from '@/data/pillars'

export default function PorQueElegirnos() {
  return (
    <section className="bg-gray-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <SectionLabel>— Por Qué Elegirnos</SectionLabel>
          <h2 className="mt-3 font-display text-5xl text-navy lg:text-7xl">
            CINCO PILARES
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-navy/60">
            Los principios que guían cada decisión técnica y operativa en
            nuestros proyectos.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              Icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              accent={pillar.accent}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
