import { Briefcase, MapPin } from 'lucide-react'
import { EXPERIENCES } from '../../data/resume'
import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="One year of shipping production software across two internships."
      />

      <div className="relative ml-3 border-l border-line pl-8 sm:ml-6 sm:pl-12">
        {EXPERIENCES.map((job, index) => (
          <Reveal key={job.company} delay={index * 0.08} className="relative pb-12 last:pb-0">
            {/* Timeline node */}
            <span className="absolute top-1 -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-bg sm:-left-[57px]">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-accent to-accent-2" />
            </span>

            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-accent/40 sm:p-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-accent" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent" />
                      {job.location}
                    </span>
                  </p>
                </div>
                <span className="glass rounded-full px-3.5 py-1.5 font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                {job.highlights.map((point) => (
                  <li key={point.slice(0, 40)} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
