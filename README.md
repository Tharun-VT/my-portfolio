# V Tharun — Portfolio

Personal portfolio of **V Tharun**, Software Engineer (Bengaluru).
Built with React, TypeScript, Vite, Tailwind CSS 4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build → dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Loader, ScrollProgress, ScrollToTop
│   ├── sections/     # Hero, About, Skills, Experience, Projects, Certifications, Contact
│   └── ui/           # Reusable primitives (Section, Reveal, Badge, Button, Counter…)
├── data/resume.ts    # Single source of truth for all portfolio content
├── hooks/            # useTypewriter, useActiveSection, useTheme
├── types/            # Shared TypeScript interfaces
└── index.css         # Tailwind config + dark/light design tokens
```

To update content (experience, projects, skills, links), edit `src/data/resume.ts` —
no component changes needed. To replace the downloadable resume, overwrite
`public/V_Tharun_Resume.pdf`.

## Deployment (GitHub Pages)

The Vite `base` is set to `/my-portfolio/` in `vite.config.ts`.
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages (enable **Settings → Pages → Source: GitHub Actions** once).

## Notes

- Dark theme by default, with a persisted light-mode toggle.
- The previous static site is archived in `_old-site/`.
- Project GitHub / Live Demo buttons are placeholders (`#`) — fill in real URLs in `src/data/resume.ts`.
