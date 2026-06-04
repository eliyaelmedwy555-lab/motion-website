import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ContactButton } from './ContactButton'
import { BeamsBackground } from '@/components/ui/beams-background'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div ref={ref}>
      <BeamsBackground className="min-h-[100dvh]">
        <div className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6">
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
          <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-6xl w-full">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-white/60">פתוח לפרויקטים פרילנס</span>
            </motion.div>
            <h1 className="font-heebo font-black leading-[0.92] tracking-tight mb-8">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="hero-heading block" style={{ fontSize: 'clamp(4rem,9vw,9rem)' }}>יוצר תלת-ממד</motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block text-accent" style={{ fontSize: 'clamp(4rem,9vw,9rem)' }}>ומעצב תנועה</motion.div>
            </h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/50 font-light text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed">
              יוצר חוויות תלת-ממד סוחפות, גרפיקה בתנועה ואמנות דיגיטלית שדוחפת את גבולות היצירתיות.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center gap-4">
              <ContactButton label="בואו נתחיל" href="#contact" variant="primary" />
              <ContactButton label="לעבודות שלי" href="#projects" variant="ghost" />
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
            <span className="text-[11px] tracking-wide text-white/30">גלול</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="absolute left-8 bottom-32 hidden lg:block z-10">
            <div className="border border-white/10 bg-white/[0.04] backdrop-blur-md rounded-2xl px-5 py-4">
              <div className="text-3xl font-black font-kanit text-accent">4+</div>
              <div className="text-xs text-white/40 mt-0.5">שנות ניסיון</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="absolute right-8 bottom-32 hidden lg:block z-10">
            <div className="border border-white/10 bg-white/[0.04] backdrop-blur-md rounded-2xl px-5 py-4">
              <div className="text-3xl font-black font-kanit text-white">60+</div>
              <div className="text-xs text-white/40 mt-0.5">פרויקטים שנמסרו</div>
            </div>
          </motion.div>
        </div>
      </BeamsBackground>
    </div>
  )
}
