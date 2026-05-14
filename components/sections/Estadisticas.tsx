'use client'

import StatCounter from '@/components/ui/StatCounter'
import { stats } from '@/data/stats'

export default function Estadisticas() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-navy py-20">
      {/* Decoración SVG líneas eléctricas */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,200 L100,150 L200,250 L300,180 L400,220 L500,140 L600,260 L700,170 L800,230 L900,150 L1000,240 L1100,180 L1200,210"
          fill="none"
          stroke="#F5A623"
          strokeWidth="1.5"
        />
        <path
          d="M0,260 L120,210 L240,290 L360,220 L480,300 L600,200 L720,290 L840,210 L960,280 L1080,200 L1200,270"
          fill="none"
          stroke="#2D7DD2"
          strokeWidth="1"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
