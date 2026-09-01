import SectionReveal from '../ui/SectionReveal'

const pillars = [
  {
    kanji: '出',
    label: 'The Ritual',
    text: 'Every object invites a practice. Not habit — intention. The repeated gesture that centers the day.',
  },
  {
    kanji: '簡',
    label: 'Simplicity',
    text: 'Nothing extra. Nothing missing. What remains after the unnecessary has been considered and released.',
  },
  {
    kanji: '静',
    label: 'Stillness',
    text: 'Not the absence of movement, but the presence of attention. Calm as a material, not a mood.',
  },
]

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-label="Philosophy"
      className="relative bg-void-850 py-32 md:py-44"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-24">
        {/* Header */}
        <SectionReveal>
          <span className="mb-4 block font-mono text-[10px] tracking-[0.3em] text-void-500 uppercase">
            03 — Philosophy
          </span>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2
            className="text-3xl font-light text-void-100 md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '0.02em' }}
          >
            The art of less.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-void-300 md:text-lg">
            VOID exists at the intersection of craft and quiet. We design objects
            that ask you to slow down — not to consume, but to be present. Each piece
            is an invitation to pause, to notice, to return to what matters.
          </p>
        </SectionReveal>

        {/* Pillars — editorial list with thin dividers */}
        <div className="mt-20 md:mt-28">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.kanji} delay={0.2 + i * 0.1}>
              <div
                className={`flex flex-col gap-4 py-8 md:flex-row md:items-baseline md:gap-12 ${
                  i < pillars.length - 1 ? 'border-b border-void-700' : ''
                }`}
              >
                {/* Kanji + label */}
                <div className="flex shrink-0 items-baseline gap-4 md:w-56">
                  <span
                    className="text-3xl text-void-500/50 md:text-4xl"
                    aria-hidden="true"
                  >
                    {pillar.kanji}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-void-400 uppercase">
                    {pillar.label}
                  </span>
                </div>

                {/* Prose */}
                <p className="text-sm leading-relaxed text-void-400 md:text-base">
                  {pillar.text}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
