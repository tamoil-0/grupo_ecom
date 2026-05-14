'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { clients } from '@/data/clients'

export default function Clientes() {
  const loop = [...clients, ...clients]

  return (
    <section id="clientes" className="scroll-mt-20 bg-gray-light py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <SectionLabel>— Confían en Nosotros</SectionLabel>
          <h2 className="mt-3 font-display text-4xl text-navy lg:text-6xl">
            NUESTROS CLIENTES
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-light to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-light to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused] sm:gap-20">
          {loop.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex h-20 w-40 shrink-0 items-center justify-center"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={70}
                className="max-h-full max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
