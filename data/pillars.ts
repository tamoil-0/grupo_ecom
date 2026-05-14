import { ShieldCheck, Leaf, Users, Star, Scale } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Pillar {
  icon: LucideIcon
  title: string
  description: string
  accent: 'gold' | 'blue'
}

export const pillars: Pillar[] = [
  {
    icon: ShieldCheck,
    title: 'Seguridad y Salud',
    description:
      'Cero accidentes como principio rector. Protocolos SST certificados en cada obra.',
    accent: 'gold',
  },
  {
    icon: Leaf,
    title: 'Medio Ambiente',
    description:
      'Operaciones con bajo impacto ambiental y cumplimiento estricto de normativa vigente.',
    accent: 'blue',
  },
  {
    icon: Users,
    title: 'Participación y Consulta',
    description:
      'Diálogo activo con comunidades y autoridades locales en cada proyecto que ejecutamos.',
    accent: 'gold',
  },
  {
    icon: Star,
    title: 'Calidad',
    description:
      'Procesos auditados bajo estándares internacionales y mejora continua.',
    accent: 'blue',
  },
  {
    icon: Scale,
    title: 'Normativa Legal',
    description:
      'Cumplimiento riguroso del Código Nacional de Electricidad y regulaciones del MINEM.',
    accent: 'gold',
  },
]
