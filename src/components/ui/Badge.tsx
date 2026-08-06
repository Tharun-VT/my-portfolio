interface BadgeProps {
  label: string
}

/** Small pill used for tech-stack tags and skill chips. */
export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/50 hover:text-text">
      {label}
    </span>
  )
}
