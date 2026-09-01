import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'framer-motion'

const NAV_OFFSET = 80

export default function SmoothScroll({ children }) {
  const prefersReducedMotion = useReducedMotion()
  const lenisRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Keep in-page anchor links (#shop, #contact, ...) smooth under Lenis,
    // with an offset so the fixed navbar doesn't cover the section heading.
    function handleAnchorClick(e) {
      const anchor = e.target.closest?.('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      history.replaceState(null, '', href)
      lenis.scrollTo(target, { offset: -NAV_OFFSET, duration: 1.4 })
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [prefersReducedMotion])

  return <>{children}</>
}
