import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { PROJECTS, PROJECT_FILTERS } from '../../data/resume'
import type { Project } from '../../types'
import { Badge } from '../ui/Badge'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

type Filter = (typeof PROJECT_FILTERS)[number]

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/15"
    >
      {/* Gradient banner */}
      <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-accent-solid/25 via-transparent to-accent-2/20">
        <Icon
          size={52}
          className="text-accent transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.5}
        />
        <div className="absolute right-3 bottom-3 flex flex-wrap justify-end gap-1.5">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-bg/70 px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted backdrop-blur-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-muted">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-6">
            {project.links.map(({ label, href, icon: LinkIcon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-accent/50 hover:text-text"
              >
                <LinkIcon size={15} />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const visibleProjects = useMemo(
    () =>
      filter === 'All'
        ? PROJECTS
        : PROJECTS.filter((project) => project.categories.includes(filter)),
    [filter],
  )

  return (
    <Section id="projects" className="bg-bg-soft/50">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="Production work and personal projects across mobile, web, e-commerce and machine learning."
      />

      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {PROJECT_FILTERS.map((option) => {
          const active = filter === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                active ? 'text-white' : 'glass text-muted hover:text-text'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-accent-solid"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{option}</span>
            </button>
          )
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
