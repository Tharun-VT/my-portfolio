import { AnimatePresence } from 'framer-motion'
import { Suspense, lazy, useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Loader } from './components/layout/Loader'
import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'
import { SECTION_IDS } from './data/resume'
import { useActiveSection } from './hooks/useActiveSection'

// Below-the-fold sections are lazy-loaded to keep the initial bundle small.
const Skills = lazy(() =>
  import('./components/sections/Skills').then((m) => ({ default: m.Skills })),
)
const Experience = lazy(() =>
  import('./components/sections/Experience').then((m) => ({ default: m.Experience })),
)
const Projects = lazy(() =>
  import('./components/sections/Projects').then((m) => ({ default: m.Projects })),
)
const Certifications = lazy(() =>
  import('./components/sections/Certifications').then((m) => ({ default: m.Certifications })),
)
const Contact = lazy(() =>
  import('./components/sections/Contact').then((m) => ({ default: m.Contact })),
)

const LOADER_MIN_MS = 900

export default function App() {
  const [loading, setLoading] = useState(true)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADER_MIN_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <ScrollProgress />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Suspense fallback={null}>
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
