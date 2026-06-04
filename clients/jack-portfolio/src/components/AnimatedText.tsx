import { motion } from 'framer-motion'

export function AnimatedText({ text, className, delay = 0, stagger = 0.04 }: { text: string; className?: string; delay?: number; stagger?: number }) {
  return (
    <span className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.25em' }}>
      {text.split(' ').map((w, i) => (
        <motion.span key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }} style={{ display: 'inline-block' }}>
          {w}
        </motion.span>
      ))}
    </span>
  )
}
