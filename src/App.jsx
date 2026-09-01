import SmoothScroll from './components/effects/SmoothScroll'
import GrainOverlay from './components/effects/GrainOverlay'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import BrandStatement from './components/sections/BrandStatement'
import ProductShowcase from './components/sections/ProductShowcase'
import EditorialSpread from './components/sections/EditorialSpread'
import Philosophy from './components/sections/Philosophy'
import Capabilities from './components/sections/Capabilities'
import CTA from './components/sections/CTA'

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-void-900 text-void-100">
        <Navbar />

        <main>
          <Hero />
          <BrandStatement />
          <ProductShowcase />
          <EditorialSpread />
          <Philosophy />
          <Capabilities />
          <CTA />
        </main>

        <Footer />

        <GrainOverlay />
      </div>
    </SmoothScroll>
  )
}
