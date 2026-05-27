import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ContactButton } from './ContactButton'

const links = [
  { label: 'עבודות', href: '#projects' },
  { label: 'אודות', href: '#about' },
  { label: 'שירותים', href: '#services' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between gap-8 rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? 'bg-white/[0.08] backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20' : 'bg-transparent border border-transparent'}`}>
          <a href="#" className="font-kanit font-black text-[17px] tracking-tight text-white">JACK<span className="text-accent">.</span></a>
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.label} href={l.href} className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.05]">{l.label}</a>
            ))}
          </div>
          <div className="hidden md:block"><ContactButton label="שכרו אותי" href="#contact" variant="primary" /></div>
          <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]" aria-label="תפריט">
            <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white origin-center" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-white" />
            <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white origin-center" />
          </button>
        </motion.div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-3">
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-heebo font-black text-5xl text-white hover:text-accent transition-colors duration-200">{l.label}</motion.a>
            ))}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="mt-4">
              <ContactButton label="שכרו אותי" href="#contact" variant="primary" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
