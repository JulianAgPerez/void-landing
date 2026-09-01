import SectionReveal from '../ui/SectionReveal'
import PaperPanel from '../ui/PaperPanel'
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

function SpecCard({ spec, wide = false }) {
  const number = (
    <span
      className={`block text-5xl font-light text-paper-ink md:text-6xl ${wide ? 'lg:text-8xl' : 'lg:text-7xl'}`}
      style={{ fontFamily: 'var(--font-serif)', lineHeight: 1 }}
    >
      {spec.number}
    </span>
  )

  const monoLabel = (
    <span className="mt-4 block font-mono text-[10px] tracking-[0.25em] text-paper-mute uppercase">
      {spec.label}
    </span>
  )

  const description = (
    <p className="text-sm leading-relaxed text-paper-mute">
      {spec.description}
    </p>
  )

  if (wide) {
    return (
      <PaperPanel className="h-full">
        <div className="flex h-full flex-col justify-between gap-8 p-8 md:flex-row md:items-end md:p-10">
          <div>
            {number}
            {monoLabel}
          </div>
          <div className="max-w-md">{description}</div>
        </div>
      </PaperPanel>
    )
  }

  return (
    <PaperPanel className="h-full">
      <div className="flex h-full flex-col p-8 md:p-10">
        {number}
        {monoLabel}
        <div className="mt-3">{description}</div>
      </div>
    </PaperPanel>
  )
}

export default function Capabilities() {
  return (
    <section
      id="details"
      aria-label="Details"
      className="relative border-t-2 border-paper-ink bg-paper py-64 md:py-80 lg:py-[30rem]"
    >
      <Container>
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute right-0 top-0 hidden font-mono text-[9px] tracking-[0.3em] text-paper-mute uppercase md:block"
          >
            P.04 — Specifications
          </span>

          <SectionReveal>
            <span className="mb-8 block font-mono text-[10px] tracking-[0.3em] text-paper-mute uppercase">
              04 — Details
            </span>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap items-end gap-6 md:gap-8">
              <h2
                className="text-3xl font-light text-paper-ink md:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.02em' }}
              >
                A quiet technical document.
              </h2>
              <span
                aria-hidden="true"
                className="hidden h-14 w-14 shrink-0 items-center justify-center bg-paper-ink text-paper md:flex"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <span
                  className="text-2xl font-light leading-none"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  静
                </span>
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-mute md:mt-8">
              Six measured facts, set in ink. The quiet specification sheet of a practice.
            </p>
          </SectionReveal>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-2 md:mt-32 md:grid-cols-12">
          <SectionReveal delay={0.2} className="md:col-span-4 md:row-span-2">
            <PaperPanel className="relative flex h-full flex-col items-center justify-center p-8 md:p-10">
              <span
                aria-hidden="true"
                className="absolute right-4 top-8 hidden select-none font-mono text-[10px] tracking-[0.5em] text-paper-ink/60 md:block"
                style={{ writingMode: 'vertical-rl' }}
              >
                トク トク
              </span>
              <img
                src="/images/matcha.svg"
                alt="Ceremonial matcha preparation — ink line drawing"
                className="w-full max-w-[15rem] brightness-0"
              />
              <span className="mt-10 block font-mono text-[9px] tracking-[0.25em] text-paper-mute uppercase">
                Fig. 04 — Specifications, 2026
              </span>
            </PaperPanel>
          </SectionReveal>

          <SectionReveal delay={0.24} className="md:col-span-4">
            <SpecCard spec={specs[0]} />
          </SectionReveal>
          <SectionReveal delay={0.28} className="md:col-span-4">
            <SpecCard spec={specs[1]} />
          </SectionReveal>
          <SectionReveal delay={0.32} className="md:col-span-4">
            <SpecCard spec={specs[2]} />
          </SectionReveal>
          <SectionReveal delay={0.36} className="md:col-span-4">
            <SpecCard spec={specs[3]} />
          </SectionReveal>
          <SectionReveal delay={0.4} className="md:col-span-8">
            <SpecCard spec={specs[4]} wide />
          </SectionReveal>
          <SectionReveal delay={0.44} className="md:col-span-4">
            <SpecCard spec={specs[5]} />
          </SectionReveal>
        </div>
      </Container>
    </section>
  )
}