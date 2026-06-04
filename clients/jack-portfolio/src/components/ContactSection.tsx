import { FadeIn } from './FadeIn'
import { Magnet } from './Magnet'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Globe, AtSign, Send } from 'lucide-react'

const socials = [
  { icon: Mail,    label: 'אימייל',    href: 'mailto:jack@example.com' },
  { icon: Globe,   label: 'LinkedIn',  href: '#' },
  { icon: AtSign,  label: 'Instagram', href: '#' },
  { icon: Send,    label: 'X',         href: '#' },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-36 md:py-48 px-6 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn delay={0}><div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-10"><span className="text-xs font-medium tracking-wide text-white/50">בואו נדבר</span></div></FadeIn>
        <FadeIn delay={0.1}><h2 className="font-heebo font-black leading-tight tracking-tight mb-8" style={{ fontSize: 'clamp(3rem,6vw,6rem)' }}><span className="text-white">מוכנים לבנות</span><br /><span className="text-accent">משהו מטורף?</span></h2></FadeIn>
        <FadeIn delay={0.2}><p className="text-white/40 text-lg font-light leading-relaxed max-w-md mx-auto mb-14">פתוח לפרויקטים פרילנס, שיתופי פעולה יצירתיים והזדמנויות העסקה מלאה.</p></FadeIn>
        <FadeIn delay={0.3}>
          <Magnet>
            <motion.a href="mailto:jack@example.com" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              className="group inline-flex items-center gap-4 bg-accent text-bg font-heebo font-bold text-lg rounded-full px-10 py-5 hover:bg-white transition-colors duration-300">
              צרו קשר
              <span className="w-9 h-9 rounded-full bg-bg/15 flex items-center justify-center group-hover:bg-bg/25 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"><ArrowUpRight size={18} /></span>
            </motion.a>
          </Magnet>
        </FadeIn>
        <FadeIn delay={0.45}>
          <div className="flex items-center justify-center gap-3 mt-14">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a key={label} href={href} title={label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors duration-300">
                <Icon size={16} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
