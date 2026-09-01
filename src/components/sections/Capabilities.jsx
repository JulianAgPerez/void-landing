import SectionReveal from '../ui/SectionReveal'
import MangaPanel from '../ui/MangaPanel'
import WhitePanel from '../ui/WhitePanel'
import Container from '../ui/Container'

const specs = [
  {
    number: '5°',
    label: 'Water Temperature',
    description:
      'The precise threshold for ceremonial matcha. Not boiling — listening.',
  },
  {
    number: '∞',
    label: 'Negative Space',
    description:
      'What empty space affords: room to think, to breathe, to begin again.',
  },
  {
    number: '01',
    label: 'Single Origin',
    description:
      'Stone-milled from a single harvest. One field, one season, one bowl.',
  },
  {
    number: '3.5',
    label: 'Minutes of Presence',
    description:
      'The minimum duration of a complete brewing ritual. Measured in breath, not seconds.',
  },
  {
    number: '72',
    label: 'Hour Cure',
    description:
      'Each ceramic bowl is slow-cured for three days before leaving the studio.',
  },
  {
    number: '0',
    label: 'Additives',
    description:
      'Nothing synthetic. Every material is traceable to its source.',
  },
]

const panelStyles = [
  { as: 'white', span: 'col-span-1 row-span-2', pad: 'p-8 md:p-10', offset: '' },
  { as: 'dark', span: 'col-span-1', pad: 'p-6 md:p-8', offset: '' },
  { as: 'dark', span: 'col-span-1', pad: 'p-6 md:p-8', offset: 'md:translate-y-8' },
  { as: 'white', span: 'col-span-1', pad: 'p-6 md:p-8', offset: '' },
  { as: 'dark', span: 'col-span-1 md:col-span-2', pad: 'p-6 md:p-8', offset: 'md:-translate-y-4' },
  { as: 'dark', span: 'col-span-1', pad: 'p-6 md:p-8', offset: '' },
]

function SpecCard({ spec, style }) {
  const isWhite = style.as === 'white'

  const monoLabel = (
    <span className="mt-4 block font-mono text-[10px] tracking-[0.25em] uppercase text-void-600">
      {spec.label}
    </span>
  )

  const description = (
    <p className="mt-3 text-sm leading-relaxed text-void-500">
      {spec.description}
    </p>
  )

  const number = (
    <span
      className="block text-5xl font-light md:text-6xl lg:text-7xl"
      style={{ fontFamily: 'var(--font-serif)', lineHeight: 1 }}
    >
      {spec.number}
    </span>
  )

  if (isWhite) {
    return (
      <WhitePanel className={`${style.span} ${style.pad} ${style.offset}`}>
        {number}
        {monoLabel}
        {description}
      </WhitePanel>
    )
  }

  return (
    <MangaPanel
      variant="frame"
      className={`${style.span} ${style.pad} ${style.offset} h-full`}
    >
      {number}
      {monoLabel}
      {description}
    </MangaPanel>
  )
}

export default function Capabilities() {
  return (
    <section
      id="details"
      aria-label="Details"
      className="relative border-t border-white/15 bg-void-800 py-64 md:py-80 lg:py-[30rem]"
    >
      {/* Subtle decorative MangaPanel frames */}
      <MangaPanel
        variant="accent"
        className="absolute left-[5%] top-[12%] hidden h-32 w-px bg-white/8 lg:block"
      />
      <MangaPanel
        variant="accent"
        className="absolute right-[8%] bottom-[15%] hidden h-20 w-20 border border-white/6 lg:block"
        style={{ transform: 'rotate(3deg)' }}
      />

      <Container>
        {/* Header */}
        <SectionReveal>
          <span className="mb-8 block font-mono text-[10px] tracking-[0.3em] text-void-500 uppercase">
            04 — Details
          </span>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2
            className="mb-16 text-3xl font-light text-void-100 md:mb-24 md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '0.02em' }}
          >
            A quiet technical document.
          </h2>
        </SectionReveal>

        {/* Asymmetric two-zone magazine spread */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-10">
          {/* Left zone — editorial feature column (5/12) */}
          <div className="flex flex-col gap-8 md:col-span-5">
            {/* Editorial statement — big serif quote on white */}
            <SectionReveal delay={0.15}>
              <WhitePanel className="p-8 md:p-10 lg:p-12">
                <span
                  className="block text-6xl font-light md:text-7xl lg:text-8xl"
                  style={{ fontFamily: 'var(--font-serif)', lineHeight: 0.9 }}
                >
                  Craft
                </span>
                <span
                  className="mt-2 block text-4xl font-light md:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'var(--font-serif)', lineHeight: 1 }}
                >
                  is quiet.
                </span>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-void-500">
                  Six specifications. Each one a considered decision — not a feature list,
                  but a philosophy made measurable.
                </p>
              </WhitePanel>
            </SectionReveal>

            {/* Ink illustration in a white panel */}
            <SectionReveal delay={0.25}>
              <WhitePanel className="flex items-center justify-center p-8 md:p-10">
                <img
                  src="/images/matcha.svg"
                  alt="Ceremonial matcha preparation — ink line drawing"
                  className="h-48 w-full object-contain md:h-56 lg:h-64"
                />
              </WhitePanel>
            </SectionReveal>

            {/* Figure caption */}
            <SectionReveal delay={0.3}>
              <span className="block font-mono text-[10px] tracking-[0.2em] text-void-500/60 uppercase">
                Fig. 04 — Specifications, 2026
              </span>
            </SectionReveal>
          </div>

          {/* Right zone — specs editorial list (7/12) */}
          <div className="grid grid-cols-1 gap-6 md:col-span-7 md:grid-cols-2 md:gap-8">
            {specs.map((spec, i) => (
              <SectionReveal key={spec.label} delay={0.2 + i * 0.08}>
                <SpecCard spec={spec} style={panelStyles[i]} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
