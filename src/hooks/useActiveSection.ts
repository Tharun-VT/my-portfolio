import { useEffect, useState } from 'react'

/**
 * Tracks which page section currently occupies the middle band of the
 * viewport, for active-link highlighting in the navbar.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      // A section becomes "active" while it crosses the 40%-of-viewport line
      { rootMargin: '-40% 0px -55% 0px' },
    )

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
