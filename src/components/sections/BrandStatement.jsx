import { motion, useReducedMotion } from 'framer-motion'
import SectionReveal from '../ui/SectionReveal'
import MangaPanel from '../ui/MangaPanel'
import Container from '../ui/Container'

const EASE = [0.22, 1, 0.36, 1]

const lines = [
  'We remove',
  'until only',
  'the essential remains.',
]

export default function BrandStatement() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="brand"
      aria-label="Brand statement"
      className="relative border-t border-void-700/20 bg-void-850 py-48 md:py-64 lg:py-72"
    >
      {/* Decorative floating panels — editorial depth */}
      <MangaPanel
        variant="frame"
        className="absolute left-[6%] top-[12%] hidden h-[40%] w-28 border-white/6 lg:block"
        style={{ transform: 'rotate(-1deg)' }}
      />
      <MangaPanel
        variant="frame"
        className="absolute right-[8%] bottom-[15%] hidden h-20 w-[28%] border-white/5 lg:block"
        style={{ transform: 'rotate(0.5deg)' }}
      />

      <Container className="text-center">
        {/* Mono label */}
        <SectionReveal>
          <span className="mb-12 block font-mono text-[10px] tracking-[0.3em] text-void-500 uppercase">
            01 — Philosophy
          </span>
        </SectionReveal>

        {/* Statement lines — progressive reveal, centered */}
        <div className="space-y-1">
          {lines.map((line, i) => (
            <SectionReveal key={i} delay={0.15 * (i + 1)} y={prefersReducedMotion ? 0 : 16}>
              <span
                className="block text-3xl font-light leading-[1.15] text-void-100 md:text-5xl lg:text-6xl"
                style={{ letterSpacing: '0.02em' }}
              >
                {line}
              </span>
            </SectionReveal>
          ))}
        </div>

        {/* Japanese accent */}
        <SectionReveal delay={0.7}>
          <span
            className="mt-16 block font-mono text-xs tracking-[0.5em] text-void-500/60"
            aria-hidden="true"
          >
            侘寂 — Wabi-sabi
          </span>
        </SectionReveal>
      </Container>
    </section>
  )
}
