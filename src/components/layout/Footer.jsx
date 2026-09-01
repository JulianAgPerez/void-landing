const footerLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Details', href: '#details' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-void-700/30 bg-void-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {/* Wordmark */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="font-mono text-sm tracking-[0.35em] text-void-50">
              VOID
            </span>
            <span className="font-mono text-[10px] tracking-[0.15em] text-void-500 uppercase">
              Est. 2026
            </span>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs tracking-[0.15em] text-void-400 uppercase transition-colors duration-300 hover:text-void-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Japanese accent */}
          <span className="font-mono text-xs tracking-widest text-void-500">
            静寂を楽しむ
          </span>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-void-700/20 pt-8 md:flex-row md:justify-between">
          <span className="font-mono text-[10px] tracking-wider text-void-500">
            &copy; {new Date().getFullYear()} VOID. All rights reserved.
          </span>
          <span className="font-mono text-[10px] tracking-wider text-void-500">
            The beauty of nothing.
          </span>
        </div>
      </div>
    </footer>
  )
}
