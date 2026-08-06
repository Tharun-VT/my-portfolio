import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
}

/** Standard page section: consistent horizontal padding, max width and vertical rhythm. */
export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
