import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  y = 20,
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: prefersReducedMotion ? 0.3 : 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
