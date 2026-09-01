import { motion, useReducedMotion } from 'framer-motion'
import SectionReveal from '../ui/SectionReveal'

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
      className="relative bg-void-850 py-40 md:py-52 lg:py-60"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-24">
        {/* Mono label */}
        <SectionReveal>
          <span className="mb-12 block font-mono text-[10px] tracking-[0.3em] text-void-500 uppercase">
            01 — Philosophy
          </span>
        </SectionReveal>

        {/* Statement lines — progressive reveal */}
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
      </div>
    </section>
  )
}
