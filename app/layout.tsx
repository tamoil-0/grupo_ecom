import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Barlow_Condensed, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600'],
  variable: '--font-barlow',
  subsets: ['latin'],
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  variable: '--font-dmsans',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '700'],
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Group EMG Perú | Ingeniería Eléctrica de Alta Tensión',
  description:
    'Soluciones especializadas en líneas de transmisión, subestaciones, redes eléctricas y obras de ingeniería electromecánica en el sur del Perú.',
  keywords: [
    'ingeniería eléctrica',
    'transmisión de energía',
    'subestaciones',
    'líneas de alta tensión',
    'Juliaca',
    'Puno',
    'Perú',
    'Group EMG',
  ],
  authors: [{ name: 'Group EMG Perú EIRL' }],
  openGraph: {
    title: 'Group EMG Perú | Ingeniería que Conecta Energía y Futuro',
    description:
      'Empresa peruana especializada en ingeniería eléctrica de alta tensión, montaje de torres, subestaciones y redes de transmisión.',
    type: 'website',
    locale: 'es_PE',
    siteName: 'Group EMG Perú',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D1B2A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${bebasNeue.variable} ${barlowCondensed.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body bg-navy text-white antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  )
}
