import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { LiveProjectButton } from './LiveProjectButton'

const projects = [
  { id:1, title:'נאון דריפט',       category:'עיצוב תנועה',        year:'2024', image:'https://picsum.photos/seed/neon-city/1200/800',          tags:['Cinema 4D','After Effects','Octane'],    color:'#BFFF00' },
  { id:2, title:'מותג Arcform',     category:'זהות מותג',          year:'2024', image:'https://picsum.photos/seed/architecture-brand/1200/800', tags:['Blender','Redshift','Brand'],            color:'#818cf8' },
  { id:3, title:'מולקולות נוזליות', category:'סימולציית VFX',      year:'2023', image:'https://picsum.photos/seed/fluid-vfx/1200/800',          tags:['Houdini','VFX','Simulation'],            color:'#34d399' },
  { id:4, title:'עולמות מראה',      category:'תלת-ממד בזמן אמת',   year:'2023', image:'https://picsum.photos/seed/realtime-3d/1200/800',        tags:['Unreal Engine','WebGL','Three.js'],       color:'#fb923c' },
  { id:5, title:'שעון אובסידיאן',   category:'המחשת מוצרים',       year:'2024', image:'https://picsum.photos/seed/watch-product/1200/800',      tags:['Cinema 4D','Product Viz','Octane'],       color:'#e879f9' },
]

export function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <section id="projects" className="py-36 md:py-48 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <FadeIn delay={0}><div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6"><span className="text-xs font-medium tracking-wide text-white/50">עבודות נבחרות</span></div></FadeIn>
          <FadeIn delay={0.1}><h2 className="font-heebo font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2.4rem,4vw,4.5rem)' }}>פרויקטים שמגדירים<br /><span className="text-accent">את מי שאני.</span></h2></FadeIn>
        </div>
        <FadeIn delay={0.2}><p className="text-white/40 text-sm max-w-xs leading-relaxed">מבחר עבודות אחרונות בתחומי תנועה, המחשה תלת-ממדית וחוויות מותג סוחפות.</p></FadeIn>
      </div>
      <div className="space-y-4">
        {projects.map((p, i) => (
          <FadeIn key={p.id} delay={0.06 * i}>
            <motion.div onHoverStart={() => setHovered(p.id)} onHoverEnd={() => setHovered(null)} className="group relative">
              <div className="p-1 rounded-[1.25rem] border border-white/[0.07] bg-white/[0.02] overflow-hidden">
                <div className="rounded-[calc(1.25rem-0.25rem)] overflow-hidden relative">
                  <AnimatePresence>
                    {hovered === p.id && (
                      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 z-0">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-25" />
                        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-7 py-6">
                    <div className="flex items-center gap-6 min-w-0">
                      <span className="text-white/20 font-kanit font-black text-sm shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="font-heebo font-bold text-white transition-colors duration-300 truncate" style={{ fontSize: 'clamp(1.1rem,2vw,1.5rem)' }}>{p.title}</h3>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0">
                      <div className="hidden md:flex items-center gap-2">
                        {p.tags.map(t => <span key={t} className="text-[11px] text-white/40 border border-white/10 rounded-full px-3 py-1">{t}</span>)}
                      </div>
                      <span className="text-sm font-medium shrink-0" style={{ color: p.color }}>{p.category}</span>
                      <span className="text-sm text-white/30 shrink-0">{p.year}</span>
                      <LiveProjectButton label="צפה" />
                    </div>
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
