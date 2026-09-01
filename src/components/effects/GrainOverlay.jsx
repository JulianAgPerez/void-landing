import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function GrainOverlay() {
  const canvasRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let frame = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const render = () => {
      frame++

      // Only update every 3rd frame for performance + calm feel
      if (frame % 3 !== 0) {
        animationId = requestAnimationFrame(render)
        return
      }

      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      // Low opacity pulsing — breathing grain
      const pulse = 0.025 + Math.sin(frame * 0.008) * 0.012

      const imageData = ctx.createImageData(width, height)
      const data = imageData.data
      const len = data.length

      // Sparse noise — only ~3% of pixels get a dot
      for (let i = 0; i < len; i += 16) {
        if (Math.random() > 0.03) continue
        const brightness = Math.random() * 180 + 40
        data[i] = brightness
        data[i + 1] = brightness
        data[i + 2] = brightness
        data[i + 3] = pulse * 255
      }

      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    animationId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: 'overlay' }}
    />
  )
}
