import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { navLinks } from '@/data/navigation'

const contactItems = [
  {
    Icon: MapPin,
    text: 'Jr. San Francisco Mza. F Lote 2, Juliaca, Puno',
  },
  { Icon: Phone, text: '900 757 575  /  996 600 288' },
  { Icon: Mail, text: 'groupemgperu@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-3">
          {/* Marca */}
          <div>
            <Image
              src="/logo_emg.svg"
              alt="Group EMG Perú"
              width={170}
              height={50}
              className="object-contain"
            />
            <p className="mt-4 max-w-xs font-body text-sm italic text-gray-text">
              "Ingeniería que Conecta Energía y Futuro"
            </p>
            <div className="mt-4 h-[3px] w-10 rounded bg-gradient-gold" />
            <p className="mt-6 font-body text-xs leading-relaxed text-gray-text/80">
              Empresa peruana especializada en obras de transmisión, redes
              eléctricas y proyectos electromecánicos.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="mb-5 font-condensed text-sm font-semibold uppercase tracking-widest text-gold">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-gray-text transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-5 font-condensed text-sm font-semibold uppercase tracking-widest text-gold">
              Contacto
            </h4>
            <ul className="space-y-3">
              {contactItems.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="font-body text-sm text-gray-text">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs font-body text-gray-text/60 sm:flex-row">
          <span>© 2025 Group EMG Perú EIRL. Todos los derechos reservados.</span>
          <span>RUC: 20610604723</span>
        </div>
      </div>
    </footer>
  )
}
