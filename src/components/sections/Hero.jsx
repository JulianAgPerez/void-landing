import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen overflow-hidden bg-void-900"
    >
      {/* Editorial image bleeding off edge, subtle parallax */}
      {!prefersReducedMotion && (
        <motion.div
          style={{ y: imageY }}
          className="absolute right-[-12%] bottom-[-20%] w-[70%] md:w-[55%] opacity-80"
        >
          <motion.img
            src="/images/hero.svg"
            alt="A steaming cup of matcha in a hand-thrown bowl — line drawing"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 2.4, delay: 0.8, ease: EASE }}
            className="h-auto w-full select-none"
          />
        </motion.div>
      )}

      {/* Vertical Japanese accent — right edge */}
      {!prefersReducedMotion && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.4, ease: EASE }}
          className="absolute right-8 top-1/2 hidden translate-y-[-50%] select-none text-[11px] tracking-[1.2em] text-void-400/50 md:block"
          style={{ writingMode: 'vertical-rl' }}
          aria-hidden="true"
        >
          静寂 · 虚空
        </motion.span>
      )}

      {/* Main content */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: contentY, opacity }}
        className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-24 pb-40 lg:px-24"
      >
        {/* Spec label — top left corner (editorial touch) */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 1.1, delay: 0.3, ease: EASE }}
          className="mb-10 font-mono text-[10px] tracking-[0.25em] text-void-500 uppercase"
        >
          VOID / EST. 2026 / No.001
        </motion.span>

        {/* Oversized wordmark */}
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 1.3, delay: 0.5, ease: EASE }}
          className="text-[20vw] leading-[0.85] font-light text-void-50 select-none lg:text-[17rem]"
          style={{ letterSpacing: '0.14em' }}
        >
          VOID
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 1.1, delay: 0.9, ease: EASE }}
          className="mt-10 max-w-md font-mono text-sm tracking-[0.2em] text-void-300 uppercase leading-relaxed"
        >
          A study in negative space.
          <br />
          The beauty of nothing.
        </motion.p>
      </motion.div>

      {/* Scroll indicator — bottom */}
      {!prefersReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6, ease: EASE }}
          className="absolute bottom-0 left-6 z-20 lg:left-24"
        >
          <div className="flex flex-col items-start gap-3 pb-8">
            <span className="font-mono text-[10px] tracking-[0.25em] text-void-500 uppercase">
              scroll
            </span>
            <div className="h-16 w-px overflow-hidden bg-void-700/50">
              <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: '100%' }}
                transition={{
                  duration: 2.6,
                  delay: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 0.4,
                }}
                className="h-1/2 w-full bg-void-400/70"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
