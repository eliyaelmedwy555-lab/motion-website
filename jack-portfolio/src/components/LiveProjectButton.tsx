import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export function LiveProjectButton({ href = '#', label = 'צפה' }: { href?: string; label?: string }) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors duration-300">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      {label}
      <ExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  )
}
