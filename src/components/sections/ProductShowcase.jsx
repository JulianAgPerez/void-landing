import { products } from '../../data/products'
import SectionReveal from '../ui/SectionReveal'
import ProductCard from '../ui/ProductCard'
import MangaPanel from '../ui/MangaPanel'
import WhitePanel from '../ui/WhitePanel'
import Container from '../ui/Container'

const STAGGER_DELAY = 0.12

export default function ProductShowcase() {
  return (
    <section
      id="shop"
      aria-label="Shop products"
      className="relative border-t border-white/10 bg-void-900 py-40 md:py-56"
    >
      {/* Decorative floating panel — overlaps EditorialSpread boundary */}
      <MangaPanel
        variant="frame"
        className="absolute right-0 bottom-8 hidden h-48 w-3 border-r border-t border-white/[0.07] lg:block"
        style={{ transform: 'rotate(-1deg)' }}
      />
      <Container>
        {/* Section header */}
        <SectionReveal>
          <WhitePanel className="mb-8 inline-block px-4 py-1.5 rounded-sm">
            <span className="font-mono text-[10px] tracking-[0.3em] text-void-900 uppercase">
              02 — Objects
            </span>
          </WhitePanel>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h2
            className="mb-20 text-3xl font-light text-void-100 md:mb-28 md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '0.02em' }}
          >
            Objects of stillness
          </h2>
        </SectionReveal>

        {/* Editorial grid — asymmetric layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {/* Row 1: large card (8 cols) + small card (4 cols) with offset */}
          <SectionReveal delay={STAGGER_DELAY * 0} className="md:col-span-8 md:row-span-1">
            <div className="md:translate-y-4">
              <ProductCard product={products[0]} index={0} frame />
            </div>
          </SectionReveal>
          <SectionReveal delay={STAGGER_DELAY * 1} className="md:col-span-4 md:row-span-1">
            <div className="md:-translate-y-2">
              <ProductCard product={products[1]} index={1} frame />
            </div>
          </SectionReveal>

          {/* Row 2: small card (4 cols) + large card (8 cols) — inverted */}
          <SectionReveal delay={STAGGER_DELAY * 2} className="md:col-span-4 md:row-span-1">
            <div className="md:translate-y-2">
              <ProductCard product={products[2]} index={2} frame />
            </div>
          </SectionReveal>
          <SectionReveal delay={STAGGER_DELAY * 3} className="md:col-span-8 md:row-span-1">
            <div className="md:-translate-y-4">
              <ProductCard product={products[3]} index={3} frame />
            </div>
          </SectionReveal>
        </div>
      </Container>
    </section>
  )
}
