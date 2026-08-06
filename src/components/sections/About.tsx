import { CheckCircle2 } from 'lucide-react'
import { ABOUT_HIGHLIGHTS, PROFILE, STATS } from '../../data/resume'
import { Counter } from '../ui/Counter'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Engineer first, framework second" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="space-y-5 leading-relaxed text-muted">
            {PROFILE.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ABOUT_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-text">
                <CheckCircle2 size={16} className="shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass flex flex-col items-center justify-center gap-2 rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <Counter to={stat.value} suffix={stat.suffix} />
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
