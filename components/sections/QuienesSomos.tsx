'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Zap, Building2, ShieldCheck } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

const features = [
  { Icon: Zap, label: 'Alta Tensión' },
  { Icon: Building2, label: 'Gran Envergadura' },
  { Icon: ShieldCheck, label: 'Certificados' },
]

export default function QuienesSomos() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-20 bg-gray-light py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl shadow-navy/30">
            <Image
              src="/workers.svg"
              alt="Equipo de Group EMG Perú en obra"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-4 aspect-square w-1/2 overflow-hidden rounded-lg border-4 border-white shadow-xl sm:-right-8">
            <Image
              src="/tower.svg"
              alt="Torres de transmisión de alta tensión"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>

          <span className="absolute -left-4 -top-4 rounded border border-gold bg-navy px-4 py-2 font-condensed text-sm font-semibold uppercase tracking-widest text-white">
            Desde 2014
          </span>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <SectionLabel>— Quiénes Somos</SectionLabel>
          <h2 className="mt-3 font-display text-4xl leading-none text-navy md:text-5xl lg:text-6xl">
            Referentes en
            <br />
            Ingeniería Eléctrica
          </h2>

          <div className="mb-6 mt-6 h-1 w-16 rounded bg-gradient-gold" />

          <p className="font-body text-base font-normal leading-relaxed text-navy/70">
            <strong className="font-medium text-navy">
              GROUP EMG PERÚ EIRL
            </strong>{' '}
            nace con la visión de aportar al desarrollo del Perú mediante
            soluciones integrales de ingeniería eléctrica de alta tensión.
            Operamos en proyectos de transmisión, subestaciones y obras
            electromecánicas con los más altos estándares de seguridad y
            calidad.
          </p>

          <p className="mt-4 font-body text-base font-normal leading-relaxed text-navy/70">
            Nuestro equipo combina experiencia técnica certificada,
            equipamiento especializado y un compromiso firme con las
            comunidades donde trabajamos.
          </p>

          <ul className="mt-8 flex flex-wrap gap-6">
            {features.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2"
              >
                <Icon className="h-5 w-5 text-gold" strokeWidth={2} />
                <span className="font-condensed text-sm font-semibold uppercase text-navy">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
