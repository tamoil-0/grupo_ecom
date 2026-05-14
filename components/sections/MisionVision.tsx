'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

const cards = [
  {
    Icon: Target,
    title: 'Misión',
    text: 'Brindar servicios especializados de ingeniería eléctrica de alta tensión con los más altos estándares de seguridad, calidad y cumplimiento, generando valor para nuestros clientes, colaboradores y las comunidades donde operamos.',
    border: 'border-l-gold',
    hoverBorder: 'hover:border-l-blue-light',
    iconColor: 'text-gold',
  },
  {
    Icon: Eye,
    title: 'Visión',
    text: 'Ser reconocidos al 2030 como la empresa líder del sur del Perú en ingeniería eléctrica y transmisión de energía, contribuyendo activamente al desarrollo energético y económico del país.',
    border: 'border-l-blue-light',
    hoverBorder: 'hover:border-l-gold',
    iconColor: 'text-blue-light',
  },
]

export default function MisionVision() {
  return (
    <section
      id="filosofia"
      className="scroll-mt-20 bg-navy py-24 lg:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url(/grid-pattern.svg)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <SectionLabel>— Nuestra Filosofía</SectionLabel>
          <h2 className="mt-3 font-display text-5xl text-white lg:text-7xl">
            MISIÓN & VISIÓN
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {cards.map(({ Icon, title, text, border, hoverBorder, iconColor }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`group rounded-r-xl border-l-4 ${border} ${hoverBorder} bg-white/[0.04] p-10 transition-all duration-300 hover:bg-white/[0.07]`}
            >
              <Icon
                className={`mb-5 h-12 w-12 ${iconColor} transition-transform duration-300 group-hover:scale-110`}
                strokeWidth={1.5}
              />
              <h3 className={`mb-4 font-condensed text-2xl font-semibold uppercase ${iconColor}`}>
                {title}
              </h3>
              <p className="font-body font-light leading-relaxed text-gray-text">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
