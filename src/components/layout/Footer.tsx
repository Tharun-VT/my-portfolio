import { Heart } from 'lucide-react'
import { NAV_LINKS, PROFILE, SOCIAL_LINKS } from '../../data/resume'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
        <a href="#hero" className="font-mono text-lg font-semibold">
          <span className="gradient-text">v.tharun</span>
          <span className="text-muted">()</span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-text"
              >
                <Icon size={17} />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-1 text-center text-xs text-faint">
          <p className="flex items-center gap-1.5">
            Built with <Heart size={12} className="text-accent" aria-label="love" /> using React,
            TypeScript &amp; Tailwind CSS
          </p>
          <p>
            © {year} {PROFILE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
