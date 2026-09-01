import SmoothScroll from './components/effects/SmoothScroll'
import GrainOverlay from './components/effects/GrainOverlay'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-void-900 text-void-100">
        <Navbar />

        <main>
          <Hero />

          {/* To be built in the next task */}
          <section id="brand" aria-label="Brand statement" />

          {/* ProductShowcase */}
          <section id="shop" aria-label="Shop products" />

          {/* EditorialSpread */}
          <section id="editorial" aria-label="Editorial spread" />

          {/* Philosophy */}
          <section id="philosophy" aria-label="Philosophy" />

          {/* Capabilities */}
          <section id="details" aria-label="Details" />

          {/* CTA */}
          <section id="contact" aria-label="Contact" />
        </main>

        <Footer />

        <GrainOverlay />
      </div>
    </SmoothScroll>
  )
}
