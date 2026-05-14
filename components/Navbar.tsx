'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-400 ${
          scrolled
            ? 'bg-navy/95 shadow-lg shadow-black/30 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="#inicio" className="flex items-center gap-3" aria-label="Group EMG Perú">
            <Image
              src="/logo_emg.svg"
              alt="Group EMG Perú"
              width={150}
              height={44}
              className="object-contain"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative font-body text-sm uppercase tracking-widest text-white/80 transition-colors duration-300 hover:text-gold after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contacto"
            className="hidden rounded bg-gradient-gold px-6 py-3 font-condensed text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30 md:inline-block"
          >
            Cotizar
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-navy p-6 md:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <Image
                  src="/logo_emg.svg"
                  alt="Group EMG Perú"
                  width={130}
                  height={38}
                />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded p-2 text-white/80 hover:text-gold"
                  aria-label="Cerrar menú"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block font-condensed text-lg uppercase tracking-widest text-white/80 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-auto rounded bg-gradient-gold py-3 text-center font-condensed text-sm font-semibold uppercase tracking-widest text-white"
              >
                Cotizar
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
