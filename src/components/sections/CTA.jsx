import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import SectionReveal from '../ui/SectionReveal'
import MangaPanel from '../ui/MangaPanel'
import Container from '../ui/Container'

const EASE = [0.22, 1, 0.36, 1]

function MagnetButton({ children }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const translateX = useSpring(mouseX, { stiffness: 180, damping: 18, mass: 0.6 })
  const translateY = useSpring(mouseY, { stiffness: 180, damping: 18, mass: 0.6 })

  function handleMouseMove(e) {
    if (prefersReducedMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - (rect.left + rect.width / 2)) * 0.12)
    mouseY.set((e.clientY - (rect.top + rect.height / 2)) * 0.12)
  }

  function handleMouseLeave() {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href="#shop"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={prefersReducedMotion ? undefined : { x: translateX, y: translateY }}
      animate={
        prefersReducedMotion
          ? { scale: 1 }
          : { scale: isHovered ? 1.03 : 1 }
      }
      transition={{ type: 'tween', duration: 0.4, ease: EASE }}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-void-500/60 px-14 py-5 font-mono text-xs tracking-[0.25em] text-void-100 uppercase transition-colors duration-500"
      aria-label="Explore the objects of stillness"
    >
      {/* Fill — eases from transparent to near-white on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 rounded-full bg-void-50/95 transition-transform duration-500 ease-out"
        style={{
          transform: prefersReducedMotion || isHovered ? 'scale(1)' : 'scale(0.06)',
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Label — reverses to dark on hover */}
      <span
        className="relative z-10 transition-colors duration-500"
        style={{ color: isHovered ? 'var(--color-void-900)' : 'var(--color-void-100)' }}
      >
        {children}
      </span>
    </motion.a>
  )
}

export default function CTA() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="contact"
      aria-label="Begin"
      className="relative overflow-hidden border-t border-white/10 bg-void-850 py-56 md:py-72 lg:pt-96"
    >
      {/* Giant watermark — final editorial mark, fades as you leave */}
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-15%' }}
          transition={{ duration: 2, ease: EASE }}
          className="pointer-events-none absolute inset-x-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-center text-[38vw] leading-none font-light whitespace-nowrap text-void-100/4 lg:text-[30vw]"
          style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.16em' }}
        >
          静寂
        </motion.span>
      )}

      {/* MangaPanel frame around CTA content */}
      <MangaPanel
        variant="frame"
        className="absolute left-1/2 top-1/2 hidden w-[80%] max-w-2xl -translate-x-1/2 -translate-y-1/2 border-white/8 lg:block pointer-events-none"
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Mono label */}
        <SectionReveal>
          <span className="mb-12 block font-mono text-[10px] tracking-[0.3em] text-void-500 uppercase">
            05 — Ritual
          </span>
        </SectionReveal>

        {/* Headline — a quiet invitation */}
        <SectionReveal delay={0.1}>
          <h2
            className="text-4xl font-light leading-[1.12] text-void-50 md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.02em' }}
          >
            Find your
            <br />
            quiet hour.
          </h2>
        </SectionReveal>

        {/* CTA button */}
        <SectionReveal delay={0.25}>
          <div className="mt-16 md:mt-20">
            <MagnetButton>Begin the ritual</MagnetButton>
          </div>
        </SectionReveal>

        {/* Quiet note */}
        <SectionReveal delay={0.35}>
          <p className="mt-12 max-w-sm font-mono text-[11px] leading-relaxed tracking-[0.15em] text-void-400 uppercase">
            No noise. No rush.
            <br />
            Just an object of stillness.
          </p>
        </SectionReveal>
      </Container>
    </section>
  )
}
