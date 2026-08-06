import { SKILL_CATEGORIES } from '../../data/resume'
import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  return (
    <Section id="skills" className="bg-bg-soft/50">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="A toolbox built across backend services, real-time systems, mobile apps and modern web frontends."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, index) => {
          const Icon = category.icon
          return (
            <Reveal key={category.title} delay={index * 0.06}>
              <div className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-solid/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
