import {
  Zap,
  Cable,
  Radio,
  Plug,
  Cpu,
  Route,
  Settings,
  HardHat,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: '01',
    icon: Zap,
    title: 'Ingeniería Electromecánica',
    description:
      'Diseño, montaje y mantenimiento de sistemas electromecánicos para proyectos industriales y de generación de energía.',
  },
  {
    id: '02',
    icon: Cable,
    title: 'Redes Eléctricas Aéreas y Subterráneas',
    description:
      'Instalación y modernización de redes de distribución en media y baja tensión, aéreas o subterráneas.',
  },
  {
    id: '03',
    icon: Radio,
    title: 'Montaje de Torres de Transmisión',
    description:
      'Armado e izaje de estructuras metálicas para torres de transmisión en zonas urbanas y de gran altitud.',
  },
  {
    id: '04',
    icon: Plug,
    title: 'Tendido de Líneas de Transmisión',
    description:
      'Tendido, tensado y flechado de conductores de alta y extra alta tensión bajo normativa internacional.',
  },
  {
    id: '05',
    icon: Cpu,
    title: 'Subestaciones de Alta y Extra Alta Tensión',
    description:
      'Construcción y puesta en servicio de subestaciones eléctricas con tecnología SCADA y protección moderna.',
  },
  {
    id: '06',
    icon: Route,
    title: 'Construcción de Accesos y Carreteras',
    description:
      'Apertura, mejoramiento y mantenimiento de accesos para obras eléctricas y proyectos energéticos.',
  },
  {
    id: '07',
    icon: Settings,
    title: 'Montaje de Transformadores de Potencia',
    description:
      'Recepción, montaje, pruebas y energización de transformadores de potencia bajo estándares IEEE/IEC.',
  },
  {
    id: '08',
    icon: HardHat,
    title: 'Construcción de Obra Civil en General',
    description:
      'Cimentaciones, edificaciones y obras complementarias para proyectos de infraestructura energética.',
  },
]
