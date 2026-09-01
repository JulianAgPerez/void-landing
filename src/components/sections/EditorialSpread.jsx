import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import SectionReveal from '../ui/SectionReveal'
import MangaPanel from '../ui/MangaPanel'

const EASE = [0.22, 1, 0.36, 1]

export default function EditorialSpread() {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      id="editorial"
      aria-label="Editorial spread"
      ref={ref}
      className="relative overflow-hidden bg-void-900"
    >
      <div className="relative min-h-screen">
        {/* Parallax background image */}
        {!prefersReducedMotion ? (
          <motion.div
            style={{ y: imageY }}
            className="absolute -top-[10%] -bottom-[10%] inset-0"
          >
            <img
              src="/images/candle.svg"
              alt="Seijaku night ritual candle — line drawing"
              className="h-full w-full object-cover opacity-30 grayscale"
            />
          </motion.div>
        ) : (
          <img
            src="/images/candle.svg"
            alt="Seijaku night ritual candle — line drawing"
            className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale"
          />
        )}

        {/* MangaPanel frame overlay — editorial photo frame inside the image */}
        <MangaPanel
          variant="frame"
          className="absolute inset-8 md:inset-16 z-20 pointer-events-none border-white/[0.10]"
        />

        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-void-900/80 via-void-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-void-900/70 via-transparent to-void-900/30" />

        {/* Content — asymmetric placement */}
        <div className="relative z-10 flex h-full flex-col justify-end items-end px-6 pb-16 md:px-24 md:pb-24">
          <div className="max-w-xl text-right">
            <SectionReveal>
              <span className="mb-6 block font-mono text-[10px] tracking-[0.3em] text-void-500/70 uppercase">
                Campaign
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2
                className="text-4xl font-light text-void-50/90 md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.03em' }}
              >
                Night ritual.
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="mt-6 ml-auto max-w-md text-base leading-relaxed text-void-300/80 md:text-lg">
                When the day dissolves, light returns inward.
                A single flame. A slow breath. The quiet hour that belongs to you.
              </p>
            </SectionReveal>
          </div>

          {/* Photo credit caption */}
          <SectionReveal delay={0.4}>
            <span className="mt-12 block font-mono text-[10px] tracking-[0.2em] text-void-500/50 uppercase">
              Fig. 01 — Night Ritual, 2026
            </span>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
