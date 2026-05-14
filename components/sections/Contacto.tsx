'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  MapPin,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
} from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { services } from '@/data/services'

const contactSchema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  empresa: z.string().optional(),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(7, 'Teléfono inválido'),
  servicio: z.string().min(1, 'Selecciona un servicio'),
  mensaje: z.string().min(10, 'Mensaje muy corto (mín. 10 caracteres)'),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    Icon: MapPin,
    title: 'Oficina Central',
    text: 'Jr. San Francisco Mza. F Lote 2, Urb. Santa Juana — Juliaca, Puno, Perú',
  },
  {
    Icon: Phone,
    title: 'Teléfonos',
    text: '900 757 575  /  996 600 288',
  },
  {
    Icon: Mail,
    title: 'Correo',
    text: 'groupemgperu@gmail.com',
  },
  {
    Icon: FileText,
    title: 'RUC',
    text: '20610604723',
  },
]

export default function Contacto() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Form submitted:', data)
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contacto" className="scroll-mt-20 bg-navy py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url(/grid-pattern.svg)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] bg-radial-gold" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[55fr_45fr] lg:px-8">
        {/* Columna info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>— Hablemos</SectionLabel>
          <h2 className="mt-3 font-display text-5xl text-white lg:text-7xl">
            CONTÁCTANOS
          </h2>
          <p className="mt-6 max-w-md font-body leading-relaxed text-gray-text">
            Cuéntanos sobre tu proyecto. Nuestro equipo de ingeniería evaluará
            la solución técnica y te enviaremos una propuesta detallada en
            menos de 24 horas.
          </p>

          <ul className="mt-10 flex flex-col gap-5">
            {contactInfo.map(({ Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-condensed text-xs font-semibold uppercase tracking-widest text-gold">
                    {title}
                  </p>
                  <p className="mt-1 font-body text-sm text-gray-text">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre completo *" error={errors.nombre?.message}>
              <input
                type="text"
                placeholder="Juan Pérez"
                {...register('nombre')}
                className={inputClass}
              />
            </Field>
            <Field label="Empresa" error={errors.empresa?.message}>
              <input
                type="text"
                placeholder="Nombre de tu empresa"
                {...register('empresa')}
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Correo electrónico *" error={errors.email?.message}>
              <input
                type="email"
                placeholder="tu@email.com"
                {...register('email')}
                className={inputClass}
              />
            </Field>
            <Field label="Teléfono *" error={errors.telefono?.message}>
              <input
                type="tel"
                placeholder="+51 900 000 000"
                {...register('telefono')}
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Servicio de interés *" error={errors.servicio?.message}>
            <select
              {...register('servicio')}
              className={`${inputClass} cursor-pointer appearance-none`}
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.title} className="bg-navy">
                  {s.title}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Mensaje *" error={errors.mensaje?.message}>
            <textarea
              rows={4}
              placeholder="Describe brevemente tu proyecto..."
              {...register('mensaje')}
              className={`${inputClass} resize-none`}
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting || sent}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold py-5 font-condensed text-lg font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {sent ? (
              <>
                <CheckCircle2 size={20} /> Enviado
              </>
            ) : isSubmitting ? (
              'Enviando...'
            ) : (
              'Enviar Consulta'
            )}
          </button>

          <p className="text-center font-body text-xs text-gray-text">
            Respuesta garantizada en menos de 24 horas
          </p>
        </motion.form>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-lg border border-white/15 bg-white/[0.06] px-5 py-4 font-body text-sm text-white placeholder:text-gray-text outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/20'

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-condensed text-xs font-semibold uppercase tracking-widest text-gray-text">
        {label}
      </span>
      {children}
      {error && (
        <p className="mt-1 font-body text-xs text-accent">{error}</p>
      )}
    </label>
  )
}
