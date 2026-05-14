'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/data/services'

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="scroll-mt-20 bg-gradient-to-b from-navy to-navy-mid py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <SectionLabel>— Qué Hacemos</SectionLabel>
          <h2 className="mt-3 font-display text-5xl text-white lg:text-7xl">
            NUESTROS SERVICIOS
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-gray-text">
            Ocho líneas de servicio especializadas para cubrir el ciclo
            completo de proyectos de transmisión, distribución y obras
            electromecánicas.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              Icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
