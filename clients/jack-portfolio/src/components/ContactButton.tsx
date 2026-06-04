import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function ContactButton({ label = 'צרו קשר', href = '#contact', variant = 'primary', className = '' }: { label?: string; href?: string; variant?: 'primary' | 'ghost'; className?: string }) {
  const p = variant === 'primary'
  return (
    <motion.a href={href} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3 font-heebo font-medium text-[15px] transition-colors duration-300 ${p ? 'bg-accent text-bg hover:bg-white' : 'border border-white/20 text-white hover:border-white/50 hover:bg-white/5'} ${className}`}>
      {label}
      <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${p ? 'bg-bg/15 group-hover:bg-bg/25 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' : 'bg-white/10 group-hover:bg-white/20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`}>
        <ArrowUpRight size={14} strokeWidth={2} />
      </span>
    </motion.a>
  )
}
