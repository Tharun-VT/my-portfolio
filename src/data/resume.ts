import {
  Apple,
  Award,
  BatteryCharging,
  Code2,
  Database,
  FlaskConical,
  Flower2,
  Github,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Linkedin,
  Mail,
  Server,
  Smartphone,
  Wrench,
  Zap,
} from 'lucide-react'
import type {
  Certification,
  Education,
  Experience,
  Project,
  ProjectCategory,
  SkillCategory,
  SocialLink,
  Stat,
} from '../types'

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: 'V Tharun',
  role: 'Software Engineer',
  location: 'Bengaluru, India',
  email: 'tharun.venkataswamy@gmail.com',
  phone: '+91 97018 61099',
  github: 'https://github.com/dev-tharun-v',
  linkedin: 'https://linkedin.com/in/v-tharun-6b49ab2b2',
  resumeFile: 'V_Tharun_Resume.pdf',
  photo: 'profile.webp',
  tagline:
    'I build production-grade backend systems and full-stack applications — from real-time IoT battery telemetry platforms to mobile apps and admin dashboards.',
  summary: [
    'I am a Software Engineer with 1 year of internship experience building production applications using Java, Spring Boot, React, React Native, and PostgreSQL. My work spans the full stack, but my core strength is backend engineering — designing scalable REST APIs, real-time systems, and secure authentication flows.',
    'At Turno, I build an IoT battery-monitoring platform that processes real-time EV battery telemetry with Spring Boot, WebSocket/STOMP, TimescaleDB, and Redis — shipping everything from the consumer mobile app to the fleet admin dashboard from a single backend. I have also automated OCR-based document validation for loan onboarding across multiple NBFC partners.',
    'I am passionate about designing reliable, scalable systems and solving complex engineering problems end to end.',
  ],
} as const

export const TYPING_ROLES = [
  'Software Engineer',
  'Backend Developer',
  'Full-Stack Developer',
  'React Native Developer',
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: PROFILE.github, icon: Github },
  { label: 'LinkedIn', href: PROFILE.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${PROFILE.email}`, icon: Mail },
]

export const STATS: Stat[] = [
  { value: 1, suffix: '+', label: 'Year of Experience' },
  { value: 2, suffix: '', label: 'Internships' },
  { value: 3, suffix: '+', label: 'Projects Shipped' },
  { value: 20, suffix: '+', label: 'Technologies Used' },
]

export const ABOUT_HIGHLIGHTS = [
  'Backend Engineering',
  'Full-Stack Development',
  'IoT & Battery Monitoring',
  'Real-Time Systems',
  'Scalable REST APIs',
  'Authentication & Security',
]

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'Python', 'SQL', 'TypeScript', 'JavaScript', 'C'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'Spring Boot',
      'Spring Security (JWT)',
      'Hibernate',
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSocket / STOMP',
    ],
  },
  {
    title: 'Frontend',
    icon: Layers,
    skills: [
      'React',
      'React Native (Expo)',
      'Tailwind CSS',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Recharts',
      'Leaflet',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'TimescaleDB', 'Redis', 'MongoDB', 'MySQL'],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: ['Git & GitHub', 'Jenkins (CI/CD)', 'Liquibase', 'Postman', 'Webflow', 'Shopify'],
  },
  {
    title: 'Testing',
    icon: FlaskConical,
    skills: ['API Testing', 'Integration Testing'],
  },
]

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const EXPERIENCES: Experience[] = [
  {
    company: 'Turno',
    role: 'Software Development Engineer (Intern)',
    location: 'Bengaluru',
    period: 'Apr 2026 – Present',
    highlights: [
      'Built an IoT battery-monitoring platform using Spring Boot, WebSocket/STOMP, PostgreSQL, TimescaleDB, Redis, and Liquibase to process real-time EV battery telemetry.',
      'Developed a React Native mobile application providing real-time battery analytics, live charging status, and STOMP-based updates.',
      'Designed and shipped an admin dashboard in React + TypeScript (Vite, Tailwind, Zustand) with fleet-wide battery-health views, Leaflet device maps, Recharts analytics, and one-click PDF report exports.',
      'Implemented shared authentication across mobile and web using Spring Security with JWT access/refresh token rotation and role-based access, from a single backend serving both consumer and admin surfaces.',
      'Built OCR-based document auto-validation for loan onboarding, automating extraction and field-level validation across document types (PAN, Aadhaar, insurance, vehicle RC) for multiple NBFC partners.',
    ],
    tech: [
      'Spring Boot',
      'Redis',
      'TimescaleDB',
      'WebSocket',
      'JWT',
      'React Native',
      'React',
      'OCR',
    ],
  },
  {
    company: 'KineticAge',
    role: 'Software Developer (Intern)',
    location: 'Bengaluru',
    period: 'Aug 2025 – Feb 2026',
    highlights: [
      'Built and integrated backend REST APIs (Node.js) with the admin panel and mobile app, including MongoDB CRUD, aggregation pipelines, and JSON import/export.',
      'Wired REST APIs into the UI — data rendering, form submissions, error states — and validated and debugged endpoints in Postman.',
      'Customized Shopify themes and managed products and orders; built webhook-driven notification workflows delivering real-time updates to team channels.',
    ],
    tech: ['Node.js', 'MongoDB', 'REST APIs', 'Shopify', 'Postman'],
  },
]

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const PROJECT_FILTERS: Array<'All' | ProjectCategory> = [
  'All',
  'Full-Stack',
  'Mobile',
  'E-Commerce',
  'Machine Learning',
]

export const PROJECTS: Project[] = [
  {
    title: 'Turno Battery — Customer App & Admin Dashboard',
    description:
      'React Native mobile app and React (TypeScript) admin dashboard for EV battery monitoring and fleet management, powered by a single Spring Boot backend.',
    highlights: [
      'Real-time battery telemetry over WebSocket/STOMP',
      'JWT authentication with role-based access control',
      'Fleet-wide battery analytics and PDF report generation',
    ],
    tech: ['React Native', 'React', 'TypeScript', 'Spring Boot', 'JWT', 'WebSocket', 'TimescaleDB', 'Redis'],
    categories: ['Full-Stack', 'Mobile'],
    icon: BatteryCharging,
    links: [
      {
        label: 'Admin Dashboard',
        href: 'https://intelligence.turnobattery.com',
        icon: LayoutDashboard,
      },
      {
        label: 'Android APK',
        href: 'https://mobile-app.turnobattery.com/volt-0.1.3-build.apk',
        icon: Smartphone,
      },
      {
        label: 'iOS TestFlight',
        href: 'https://testflight.apple.com/join/NyCDpna3',
        icon: Apple,
      },
    ],
  },
  {
    title: 'FloralNest',
    description:
      'Flower-delivery platform spanning a Shopify web store and mobile app, with custom product pages and a complete purchase flow.',
    highlights: [
      'Custom product pages and checkout experience',
      'Integrated payments',
      'End-to-end order tracking',
    ],
    tech: ['Shopify', 'JavaScript', 'Payments', 'Webhooks'],
    categories: ['E-Commerce', 'Mobile'],
    icon: Flower2,
  },
  {
    title: 'Grid Stability Prediction',
    description:
      'Machine-learning model that predicts grid instability in smart-energy networks from real-time and historical data.',
    highlights: [
      'Trained on real-time and historical grid data',
      'Predicts instability in smart-energy networks',
      'Built with Python and standard ML tooling',
    ],
    tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    categories: ['Machine Learning'],
    icon: Zap,
  },
]

/* ------------------------------------------------------------------ */
/* Certifications & Education                                          */
/* ------------------------------------------------------------------ */

export const CERTIFICATIONS: Certification[] = [
  { title: 'Full-Stack Web Development', issuer: 'Tap Academy', icon: Award },
  { title: 'Full-Stack Java', issuer: 'SkillDzire', icon: Award },
  { title: 'Product Intern', issuer: 'VISIST AI Technologies Pvt. Ltd.', icon: Award },
]

export const EDUCATION: Education = {
  degree: 'B.Tech, Computer Science & Engineering',
  institution: 'Kuppam Engineering College',
  period: '2021 – 2025',
  score: '75%',
}

export const EDUCATION_ICON = GraduationCap

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const

export const SECTION_IDS = ['hero', ...NAV_LINKS.map((l) => l.id)]

/** Prefix public assets with the Vite base so links work on GitHub Pages. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
