import { motion } from 'framer-motion'
import { Box, Zap, Layers, Film, Sparkles, Wand2 } from 'lucide-react'
import { FadeIn } from './FadeIn'

const services = [
  { icon: Box,      title: 'מידול ופיסול תלת-ממד', desc: 'נכסים באיכות גבוהה מקונספט עד mesh מוכן לייצור — דמויות, סביבות והמחשת מוצרים.', tag: 'בסיסי' },
  { icon: Film,     title: 'עיצוב תנועה',           desc: 'אנימציות קולנועיות וסרטוני הסבר שהופכים מותגים לבלתי נשכחים. תזמון ועקומות מושלמים.', tag: 'בסיסי' },
  { icon: Sparkles, title: 'VFX וסימולציות',        desc: 'דינמיקת נוזלים, מערכות חלקיקים וסימולציות הרס בעזרת Houdini ו-Blender.', tag: 'מתקדם' },
  { icon: Layers,   title: 'המחשת מוצרים',         desc: 'רינדרים פוטוריאליסטיים וסיבובי 360° לאי-קומרס, אריזות וקמפיינים שיווקיים.', tag: 'בסיסי' },
  { icon: Zap,      title: 'חוויות בזמן אמת',       desc: 'תלת-ממד אינטראקטיבי לאינטרנט (Three.js, WebGL) וסביבות Unreal Engine חיות.', tag: 'מתקדם' },
  { icon: Wand2,    title: 'זהות מותג תלת-ממדית',   desc: 'הבאת לוגואים וזהויות מותג לממד השלישי — אנימציות לוגו, טיפוגרפיה 3D וסמלים.', tag: 'יצירתי' },
]
const tagColor: Record<string, string> = { 'בסיסי': 'border-accent/30 text-accent', 'מתקדם': 'border-indigo-400/30 text-indigo-400', 'יצירתי': 'border-purple-400/30 text-purple-400' }

export function ServicesSection() {
  return (
    <section id="services" className="py-36 md:py-48 px-6 max-w-7xl mx-auto">
      <div className="mb-20 max-w-2xl">
        <FadeIn delay={0}><div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6"><span className="text-xs font-medium tracking-wide text-white/50">מה אני עושה</span></div></FadeIn>
        <FadeIn delay={0.1}><h2 className="font-heebo font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2.4rem,4vw,4.5rem)' }}>שירותים שנבנו<br /><span className="text-accent">לחולמים גדולים.</span></h2></FadeIn>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoFlow: 'dense' }}>
        {services.map((svc, i) => (
          <FadeIn key={svc.title} delay={0.05 * i}>
            <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} className="group relative h-full">
              <div className="p-1.5 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] h-full">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white/[0.03] border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-7 h-full flex flex-col gap-5 transition-colors duration-500 group-hover:bg-white/[0.05]">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <svc.icon size={20} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-heebo font-bold text-[17px] text-white leading-tight">{svc.title}</h3>
                    <p className="text-white/45 text-sm leading-[1.7]">{svc.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-white/[0.06]">
                    <span className={`text-[11px] font-medium tracking-[0.15em] border rounded-full px-3 py-1 ${tagColor[svc.tag]}`}>{svc.tag}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
