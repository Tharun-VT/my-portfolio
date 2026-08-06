import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin, Send } from 'lucide-react'
import { PROFILE, SOCIAL_LINKS, TYPING_ROLES, asset } from '../../data/resume'
import { useTypewriter } from '../../hooks/useTypewriter'
import { ButtonLink } from '../ui/Button'

/** Lines rendered inside the decorative code card. */
const CODE_LINES = [
  { indent: 0, code: <><span className="text-accent">const</span> engineer <span className="text-muted">=</span> {'{'}</> },
  { indent: 1, code: <>name: <span className="text-accent-2">'V Tharun'</span>,</> },
  { indent: 1, code: <>role: <span className="text-accent-2">'Software Engineer'</span>,</> },
  { indent: 1, code: <>focus: [<span className="text-accent-2">'backend'</span>, <span className="text-accent-2">'real-time systems'</span>],</> },
  { indent: 1, code: <>stack: [<span className="text-accent-2">'Spring Boot'</span>, <span className="text-accent-2">'React'</span>, <span className="text-accent-2">'PostgreSQL'</span>],</> },
  { indent: 1, code: <>currentlyAt: <span className="text-accent-2">'Turno'</span>,</> },
  { indent: 1, code: <>openToWork: <span className="text-accent">true</span>,</> },
  { indent: 0, code: <>{'}'}</> },
]

export function Hero() {
  const typedRole = useTypewriter(TYPING_ROLES)

  return (
    <section id="hero" className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 md:pt-40 md:pb-28">
      {/* Ambient gradient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: 'var(--glow-1)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-32 h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{ background: 'var(--glow-2)' }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-block rounded-full bg-gradient-to-br from-accent to-accent-2 p-1 shadow-xl shadow-accent-solid/20">
            <img
              src={asset(PROFILE.photo)}
              alt={`Portrait of ${PROFILE.name}`}
              width={128}
              height={128}
              className="h-28 w-28 rounded-full border-4 border-bg object-cover sm:h-32 sm:w-32"
            />
          </div>

          <p className="glass mb-6 flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted">
            <MapPin size={14} className="text-accent" />
            {PROFILE.location}
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&rsquo;m <span className="gradient-text">{PROFILE.name}</span>
          </h1>

          <p className="mt-4 h-8 font-mono text-lg text-muted sm:text-xl" aria-label="Roles">
            <span className="text-text">{typedRole}</span>
            <span className="animate-pulse text-accent-2">|</span>
          </p>

          <p className="mt-5 max-w-xl leading-relaxed text-muted">{PROFILE.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={asset(PROFILE.resumeFile)} download>
              <Download size={16} />
              Download Resume
            </ButtonLink>
            <ButtonLink href="#projects" variant="secondary">
              View Projects
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              <Send size={15} />
              Contact Me
            </ButtonLink>
          </div>

          <ul className="mt-10 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-text"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Decorative code card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="hidden lg:block"
          aria-hidden
        >
          <div className="glass rounded-2xl p-1 shadow-2xl shadow-black/20">
            <div className="flex items-center gap-1.5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-faint">engineer.ts</span>
            </div>
            <div className="rounded-xl bg-bg-soft/80 p-6 font-mono text-sm leading-7">
              {CODE_LINES.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 w-5 text-right text-faint select-none">{i + 1}</span>
                  <span style={{ paddingLeft: `${line.indent * 1.25}rem` }} className="text-text">
                    {line.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
