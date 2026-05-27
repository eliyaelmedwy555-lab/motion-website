import { FadeIn } from './FadeIn'
import { AnimatedText } from './AnimatedText'

const stats = [
  { value: '4+', label: 'שנות יצירה' },
  { value: '60+', label: 'פרויקטים שנמסרו' },
  { value: '98%', label: 'שביעות רצון לקוחות' },
  { value: '12', label: 'פרסים שזכיתי' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-36 md:py-48 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <FadeIn delay={0}>
          <div className="relative">
            <div className="p-1.5 rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden relative aspect-[4/5]">
                <img src="https://picsum.photos/seed/portrait3d/800/1000" alt="Jack" className="w-full h-full object-cover" style={{ filter: 'grayscale(30%) contrast(1.1) brightness(0.9)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 border border-white/10 bg-bg/80 backdrop-blur-md rounded-2xl px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/40 tracking-wider mb-1">סטטוס</div>
                    <div className="text-sm font-medium flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent animate-pulse" />פתוח לעבודה</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/40 tracking-wider mb-1">ממוקם ב</div>
                    <div className="text-sm font-medium">תל אביב, ישראל</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
          </div>
        </FadeIn>
        <div className="space-y-8">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
              <span className="text-xs font-medium tracking-wide text-white/50">אודותי</span>
            </div>
          </FadeIn>
          <h2 className="font-heebo font-black leading-[1.1] tracking-tight" style={{ fontSize: 'clamp(2.4rem,4vw,4rem)' }}>
            <AnimatedText text="אני הופך רעיונות" delay={0.15} className="block text-white" />
            <AnimatedText text="לעולמות תלת-ממד" delay={0.25} className="block text-accent" />
            <AnimatedText text="חיים ונושמים." delay={0.35} className="block text-white" />
          </h2>
          <FadeIn delay={0.45}>
            <p className="text-white/50 font-light leading-[1.8] text-[15px] max-w-md">עם למעלה מ-4 שנות יצירה בצומת שבין אומנות לטכנולוגיה, אני מתמחה בעיצוב דמויות תלת-ממד, גרפיקה בתנועה וחוויות מותג סוחפות. כל פיקסל הוא כוונה.</p>
          </FadeIn>
          <FadeIn delay={0.55}>
            <p className="text-white/50 font-light leading-[1.8] text-[15px] max-w-md">שיתפתי פעולה עם סוכנויות וסטארטאפים ברחבי אירופה והמזרח התיכון, תוך תרגום רעיונות מורכבים לנרטיבים חזותיים שמרתקים וממירים.</p>
          </FadeIn>
          <FadeIn delay={0.65}>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
              {stats.map(s => (
                <div key={s.label} className="space-y-1">
                  <div className="font-kanit font-black text-3xl text-accent">{s.value}</div>
                  <div className="text-xs text-white/40 tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
