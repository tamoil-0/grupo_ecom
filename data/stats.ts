export interface Stat {
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Años de Experiencia' },
  { value: 500, suffix: '+', label: 'Proyectos Ejecutados' },
  { value: 8, suffix: '', label: 'Servicios Especializados' },
  { value: 100, suffix: '%', label: 'Compromiso con la Calidad' },
]
