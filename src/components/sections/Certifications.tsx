import { CERTIFICATIONS, EDUCATION, EDUCATION_ICON } from '../../data/resume'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const GraduationIcon = EDUCATION_ICON

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading eyebrow="Credentials" title="Education & Certifications" />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Education */}
        <Reveal>
          <h3 className="mb-5 text-sm font-semibold tracking-widest text-faint uppercase">
            Education
          </h3>
          <div className="glass flex items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-solid/15 text-accent">
              <GraduationIcon size={20} />
            </span>
            <div>
              <h4 className="font-semibold">{EDUCATION.degree}</h4>
              <p className="mt-1 text-sm text-muted">{EDUCATION.institution}</p>
              <p className="mt-2 font-mono text-xs text-faint">
                {EDUCATION.period} &nbsp;•&nbsp; {EDUCATION.score}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={0.1}>
          <h3 className="mb-5 text-sm font-semibold tracking-widest text-faint uppercase">
            Certifications
          </h3>
          <ul className="space-y-4">
            {CERTIFICATIONS.map((cert) => {
              const Icon = cert.icon
              return (
                <li
                  key={cert.title}
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-solid/15 text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
