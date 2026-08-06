import type { LucideIcon } from 'lucide-react'

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

export interface Experience {
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
  tech: string[]
}

export type ProjectCategory = 'Full-Stack' | 'Mobile' | 'E-Commerce' | 'Machine Learning'

export interface Project {
  title: string
  description: string
  highlights: string[]
  tech: string[]
  categories: ProjectCategory[]
  icon: LucideIcon
  github: string
  demo: string
}

export interface Certification {
  title: string
  issuer: string
  icon: LucideIcon
}

export interface Education {
  degree: string
  institution: string
  period: string
  score: string
}
