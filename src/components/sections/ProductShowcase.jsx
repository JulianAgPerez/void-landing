import { products } from '../../data/products'
import SectionReveal from '../ui/SectionReveal'
import ProductCard from '../ui/ProductCard'

const STAGGER_DELAY = 0.12

export default function ProductShowcase() {
  return (
    <section
      id="shop"
      aria-label="Shop products"
      className="relative bg-void-900 py-32 md:py-44"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-24">
        {/* Section header */}
        <SectionReveal>
          <span className="mb-4 block font-mono text-[10px] tracking-[0.3em] text-void-500 uppercase">
            02 — Objects
          </span>
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
              <ProductCard product={products[0]} index={0} />
            </div>
          </SectionReveal>
          <SectionReveal delay={STAGGER_DELAY * 1} className="md:col-span-4 md:row-span-1">
            <div className="md:-translate-y-2">
              <ProductCard product={products[1]} index={1} />
            </div>
          </SectionReveal>

          {/* Row 2: small card (4 cols) + large card (8 cols) — inverted */}
          <SectionReveal delay={STAGGER_DELAY * 2} className="md:col-span-4 md:row-span-1">
            <div className="md:translate-y-2">
              <ProductCard product={products[2]} index={2} />
            </div>
          </SectionReveal>
          <SectionReveal delay={STAGGER_DELAY * 3} className="md:col-span-8 md:row-span-1">
            <div className="md:-translate-y-4">
              <ProductCard product={products[3]} index={3} />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
