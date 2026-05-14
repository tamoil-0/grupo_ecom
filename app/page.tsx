import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import QuienesSomos from '@/components/sections/QuienesSomos'
import MisionVision from '@/components/sections/MisionVision'
import Servicios from '@/components/sections/Servicios'
import PorQueElegirnos from '@/components/sections/PorQueElegirnos'
import Estadisticas from '@/components/sections/Estadisticas'
import Clientes from '@/components/sections/Clientes'
import Contacto from '@/components/sections/Contacto'
import Footer from '@/components/sections/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <QuienesSomos />
        <MisionVision />
        <Servicios />
        <PorQueElegirnos />
        <Estadisticas />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
