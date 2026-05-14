# GROUP EMG PERÚ — Landing Page

Sitio corporativo de **GROUP EMG PERÚ EIRL**, empresa de ingeniería eléctrica de alta tensión basada en Juliaca, Puno.

> Ingeniería que Conecta Energía y Futuro

## Stack

- **Framework**: Next.js 14 (App Router) + TypeScript estricto
- **Estilos**: Tailwind CSS v3 con paleta custom (navy / gold / blue)
- **Animaciones**: Framer Motion v11 (parallax, stagger, scroll-triggered, counter)
- **Íconos**: Lucide React
- **Fuentes**: next/font (Bebas Neue, Barlow Condensed, DM Sans, JetBrains Mono)
- **Formulario**: React Hook Form + Zod (validación)
- **Imágenes**: next/image con AVIF/WebP automático

## Estructura

```
emg-peru/
├── app/
│   ├── layout.tsx          → Root layout, fuentes, metadata SEO
│   ├── page.tsx            → Composición de secciones
│   └── globals.css         → Tailwind + keyframes custom
├── components/
│   ├── Navbar.tsx
│   ├── ScrollProgress.tsx
│   ├── sections/           → Hero, QuienesSomos, MisionVision,
│   │                         Servicios, PorQueElegirnos,
│   │                         Estadisticas, Clientes, Contacto, Footer
│   └── ui/                 → SectionLabel, ServiceCard, PillarCard, StatCounter
├── data/                   → services, pillars, stats, clients, navigation
├── lib/                    → animations, utils
└── public/                 → logo, hero, workers, tower, grid-pattern, logos clientes
```

## Cómo correr

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Script         | Descripción                       |
| -------------- | --------------------------------- |
| `npm run dev`  | Servidor de desarrollo (puerto 3000) |
| `npm run build`| Build de producción               |
| `npm start`    | Servir el build                   |
| `npm run lint` | Verificar ESLint                  |

## Imágenes

Los archivos en `/public/` son **placeholders SVG generados** (logo, fondo del hero, fotos de obra, logos de clientes).  
Para producción, reemplázalos con activos reales del PDF brochure:

- `logo_emg.svg`         → logo oficial (PNG sin fondo recomendado)
- `hero_bg.svg`          → foto de torres de transmisión (JPG/WebP)
- `workers.svg`          → foto de equipo en campo
- `tower.svg`            → foto de torre
- `logo_electropuno.svg` · `logo_redesur.svg` · `logo_cd.svg` · `logo_ecoing.svg`

> Si reemplazas por JPG/PNG, recuerda actualizar los `src` en:
> - `components/sections/Hero.tsx`
> - `components/sections/QuienesSomos.tsx`
> - `data/clients.ts`

## Personalización

| Elemento        | Archivo                          |
| --------------- | -------------------------------- |
| Paleta colores  | `tailwind.config.ts` → `colors`  |
| Servicios       | `data/services.ts`               |
| Pilares         | `data/pillars.ts`                |
| Estadísticas    | `data/stats.ts`                  |
| Navegación      | `data/navigation.ts`             |
| Animaciones     | `lib/animations.ts`              |
| Metadata SEO    | `app/layout.tsx`                 |

## Contacto

GROUP EMG PERÚ EIRL  
Jr. San Francisco Mza. F Lote 2, Urb. Santa Juana — Juliaca, Puno  
900 757 575 · 996 600 288 · groupemgperu@gmail.com  
RUC: 20610604723
