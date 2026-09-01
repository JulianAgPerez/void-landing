import SectionReveal from '../ui/SectionReveal'
import MangaPanel from '../ui/MangaPanel'
import PaperPanel from '../ui/PaperPanel'
import Container from '../ui/Container'

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
      className="relative border-t border-white/15 bg-void-850 py-64 md:py-80 lg:py-[30rem]"
    >
      {/* Decorative escaped panel borders */}
      <MangaPanel
        variant="frame"
        className="absolute right-[4%] top-[18%] hidden h-40 w-40 border-white/6 lg:flex items-center justify-center"
        style={{ transform: 'rotate(2deg)' }}
      >
        <span className="text-4xl text-void-500/20" aria-hidden="true">静</span>
      </MangaPanel>
      <MangaPanel
        variant="frame"
        className="absolute left-[3%] bottom-[20%] hidden h-28 w-2 border-white/8 lg:block"
      />
      {/* Paper accent — Ma (間) stamp */}
      <PaperPanel
        tone="dark"
        className="absolute left-[8%] top-[38%] hidden flex-col items-center gap-2 p-4 lg:flex"
        style={{ transform: 'rotate(-1.5deg)' }}
      >
        <span
          className="text-2xl leading-none text-void-100"
          style={{ fontFamily: 'var(--font-serif)' }}
          aria-hidden="true"
        >
          間
        </span>
        <span className="font-mono text-[8px] tracking-[0.2em] text-void-400">
          Ma
        </span>
      </PaperPanel>

      <Container className="text-center">
        {/* Header */}
        <SectionReveal>
          <span className="mb-8 block font-mono text-[10px] tracking-[0.3em] text-void-500 uppercase">
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
          <p className="mt-8 mx-auto max-w-2xl text-base leading-relaxed text-void-300 md:text-lg">
            VOID exists at the intersection of craft and quiet. We design objects
            that ask you to slow down — not to consume, but to be present. Each piece
            is an invitation to pause, to notice, to return to what matters.
          </p>
        </SectionReveal>

        {/* Pillars — each in its own MangaPanel frame */}
        <div className="mt-24 grid grid-cols-1 gap-6 md:mt-32 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.kanji} delay={0.2 + i * 0.1}>
              <MangaPanel variant="frame" className="flex flex-col gap-4 p-6 md:p-8 h-full">
                {/* Kanji + label */}
                <div className="flex shrink-0 items-baseline gap-4">
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
              </MangaPanel>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
