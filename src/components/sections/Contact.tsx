import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { PROFILE } from '../../data/resume'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const CONTACT_ITEMS = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'LinkedIn', value: 'v-tharun', href: PROFILE.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'dev-tharun-v', href: PROFILE.github, icon: Github },
  { label: 'Location', value: PROFILE.location, href: undefined, icon: MapPin },
]

const INPUT_CLASSES =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text placeholder:text-faint transition-colors duration-200 focus:border-accent/60 focus:outline-none'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // Frontend-only form: composes a prefilled email in the visitor's mail client.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" className="bg-bg-soft/50">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="I'm open to software engineering roles and interesting projects. My inbox is always open — I'll get back to you as soon as I can."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <ul className="space-y-4">
            {CONTACT_ITEMS.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-solid/15 text-accent">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wide text-faint uppercase">{label}</span>
                    <span className="mt-0.5 block text-sm font-medium">{value}</span>
                  </span>
                </>
              )
              const classes =
                'glass flex items-center gap-4 rounded-2xl p-4 transition-all duration-300'

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className={`${classes} hover:-translate-y-0.5 hover:border-accent/40`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={classes}>{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm text-muted">Name</span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={INPUT_CLASSES}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-muted">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={INPUT_CLASSES}
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm text-muted">Message</span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or opportunity…"
                className={`${INPUT_CLASSES} resize-none`}
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-solid px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-solid/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
