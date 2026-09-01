import SectionReveal from '../ui/SectionReveal'

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
      className="relative bg-void-900 py-32 md:py-44"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-24">
        {/* Header */}
        <SectionReveal>
          <span className="mb-4 block font-mono text-[10px] tracking-[0.3em] text-void-500 uppercase">
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

        {/* Spec grid — 2 cols desktop, 1 mobile */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {specs.map((spec, i) => (
            <SectionReveal key={spec.label} delay={0.15 + i * 0.08}>
              <div
                className={`py-8 ${
                  i % 2 === 0 && i < specs.length - 1
                    ? 'md:border-r md:border-void-700 md:pr-12'
                    : ''
                } ${
                  i < specs.length - 2 || (i === specs.length - 2 && specs.length % 2 !== 0)
                    ? 'border-b border-void-700'
                    : i < specs.length - 1
                      ? 'border-b border-void-700 md:border-b-0'
                      : ''
                } ${i % 2 === 1 || i === specs.length - 1 ? 'md:pl-12' : ''}`}
              >
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
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
