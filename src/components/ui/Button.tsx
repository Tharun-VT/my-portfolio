import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-accent-solid text-white shadow-lg shadow-accent-solid/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-solid/30',
  secondary:
    'glass text-text hover:-translate-y-0.5 hover:border-accent/50',
  ghost: 'text-muted hover:text-text',
}

/** Anchor styled as a button — every CTA on the page is a link. */
export function ButtonLink({ variant = 'primary', children, className = '', ...rest }: ButtonLinkProps) {
  return (
    <a className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
