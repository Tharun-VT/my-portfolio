import { motion } from 'framer-motion'

/** Full-screen splash shown briefly while the app boots. */
export function Loader() {
  return (
    <motion.div
      key="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-bg"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="font-mono text-2xl font-semibold"
      >
        <span className="gradient-text">v.tharun</span>
        <span className="text-muted">()</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-accent-2"
        >
          _
        </motion.span>
      </motion.p>
    </motion.div>
  )
}
