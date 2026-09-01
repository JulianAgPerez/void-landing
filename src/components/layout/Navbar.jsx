import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useScrollDirection } from '../../hooks/useScrollDirection'

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Details', href: '#details' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { scrollDirection, isAtTop } = useScrollDirection({ threshold: 10 })
  const prefersReducedMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hidden = scrollDirection === 'down' && !isAtTop

  return (
    <motion.header
      initial={false}
      animate={
        prefersReducedMotion
          ? { opacity: 1 }
          : { y: hidden ? '-100%' : '0%' }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
      }
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-void-900/80 backdrop-blur-md border-b border-void-700/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.35em] text-void-50 transition-opacity hover:opacity-70"
          aria-label="VOID — back to top"
        >
          VOID
        </a>

        {/* Nav links — center */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-[0.2em] text-void-400 uppercase transition-colors duration-300 hover:text-void-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#shop"
          className="font-mono text-xs tracking-[0.15em] text-void-300 uppercase border border-void-700/50 px-4 py-2 transition-all duration-300 hover:border-void-400 hover:text-void-50"
        >
          Explore
        </a>
      </nav>
    </motion.header>
  )
}
