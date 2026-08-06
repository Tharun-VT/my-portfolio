import { animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CounterProps {
  to: number
  suffix?: string
}

/** Number that counts up from 0 the first time it scrolls into view. */
export function Counter({ to, suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    const node = ref.current
    if (!inView || !node) return
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (value) => {
        node.textContent = String(Math.round(value))
      },
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span className="gradient-text text-4xl font-bold tabular-nums sm:text-5xl">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}
