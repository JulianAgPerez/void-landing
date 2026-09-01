import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

const SPRING = { stiffness: 150, damping: 20, mass: 0.5 }

export default function ProductCard({ product, index = 0 }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const imageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), SPRING)
  const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), SPRING)

  function handleMouseMove(e) {
    if (prefersReducedMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-void-800"
      aria-label={`${product.name} — ${product.category}`}
    >
      {/* Image container */}
      <div className="relative overflow-hidden p-10 md:p-14">
        <motion.img
          src={product.image}
          alt={product.description}
          style={
            prefersReducedMotion
              ? undefined
              : { x: imageX, y: imageY }
          }
          className="h-48 w-full object-contain opacity-80 grayscale transition-opacity duration-700 group-hover:opacity-100 md:h-64"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="border-t border-void-700 px-6 pb-6 pt-5 md:px-8 md:pt-6">
        <span className="block font-mono text-[10px] tracking-[0.25em] text-void-500 uppercase">
          {product.category}
        </span>

        <div className="mt-3 flex items-baseline justify-between">
          <h3 className="relative font-light text-void-100 text-lg md:text-xl">
            {product.name}
            {/* Underline draws on hover */}
            <span
              className="absolute -bottom-1 left-0 h-px bg-void-300 transition-all duration-700 ease-out"
              style={{
                width: isHovered ? '100%' : '0%',
              }}
            />
          </h3>
          <span className="font-mono text-sm text-void-400 tabular-nums">
            ${product.price}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-void-500">
          {product.description}
        </p>
      </div>
    </motion.article>
  )
}
