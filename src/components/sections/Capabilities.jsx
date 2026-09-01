import SectionReveal from '../ui/SectionReveal'
import MangaPanel from '../ui/MangaPanel'
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

export default function Capabilities() {
  return (
    <section
      id="details"
      aria-label="Details"
      className="relative border-t border-white/15 bg-void-800 py-64 md:py-80 lg:py-[30rem]"
    >
      <Container>
        {/* Decorative outer frame around entire specs section */}
        <MangaPanel
          variant="frame"
          className="absolute inset-x-6 top-32 bottom-32 hidden border-white/5 lg:block pointer-events-none sm:inset-x-8 md:inset-x-14 xl:inset-x-32"
        />
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

        {/* Spec grid — each spec wrapped in MangaPanel */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {specs.map((spec, i) => (
            <SectionReveal key={spec.label} delay={0.15 + i * 0.08}>
              <MangaPanel variant="frame" className="p-6 md:p-10 h-full">
                {/* Big number */}
                <span
                  className="block text-4xl font-light text-void-100/80 md:text-5xl"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {spec.number}
                </span>

                {/* Mono label */}
                <span className="mt-3 block font-mono text-[10px] tracking-[0.25em] text-void-400 uppercase">
                  {spec.label}
                </span>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-void-500">
                  {spec.description}
                </p>
              </MangaPanel>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
