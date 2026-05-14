'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Zap } from 'lucide-react'

const titleLine = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const titleContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
}

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], ['0%', '20%'])
  const contentY = useTransform(scrollY, [0, 600], ['0%', '-10%'])
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.3])

  return (
    <section
      id="inicio"
      className="relative flex h-screen min-h-[680px] items-center overflow-hidden bg-navy"
    >
      {/* Capa 1 — Imagen con parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="/hero_bg.svg"
          alt="Torres de transmisión eléctrica en montañas andinas"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
      </motion.div>

      {/* Capa 2 — Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/60 to-transparent" />

      {/* Capa 3 — Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'url(/grid-pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Capa 4 — Chevron decorativo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-16 select-none font-display text-[18rem] leading-none text-gold/[0.08] sm:text-[22rem] lg:text-[26rem]"
      >
        ›
      </span>

      {/* Glow radial */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 bg-radial-gold" />

      {/* CONTENIDO */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12"
      >
        <div className="max-w-2xl lg:ml-[5%]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 font-body text-sm text-gold"
          >
            <Zap size={16} className="fill-gold" />
            Ingeniería Eléctrica de Alta Tensión
          </motion.div>

          <motion.h1
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl lg:text-[8rem]"
          >
            <motion.span variants={titleLine} className="block text-white">
              CONECTAMOS
            </motion.span>
            <motion.span
              variants={titleLine}
              className="block bg-gradient-gold bg-clip-text text-transparent"
            >
              ENERGÍA
            </motion.span>
            <motion.span variants={titleLine} className="block text-white">
              Y FUTURO
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-6 max-w-md font-body text-base font-light leading-relaxed text-gray-text sm:text-lg"
          >
            Empresa peruana especializada en transmisión de energía,
            subestaciones y obras electromecánicas para el desarrollo del Perú.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="#contacto"
              className="rounded-md bg-gradient-gold px-9 py-4 font-condensed text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40"
            >
              Solicitar Cotización
            </Link>
            <Link
              href="#servicios"
              className="rounded-md border-2 border-white px-9 py-4 font-condensed text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-navy"
            >
              Nuestros Servicios
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Tarjeta flotante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.6 },
          scale: { delay: 1.5, duration: 0.6 },
          y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 },
        }}
        className="absolute bottom-20 right-[5%] hidden rounded-xl border border-gold/30 bg-white/5 p-6 text-center backdrop-blur-xl lg:block"
      >
        <span className="font-display text-5xl text-gold">10+</span>
        <p className="mt-1 font-body text-sm text-gray-text">
          Años de Experiencia
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70"
        aria-hidden="true"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}
