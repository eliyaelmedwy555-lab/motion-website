const skills = ['Cinema 4D','Blender','After Effects','Houdini','Octane Render','Redshift','ZBrush','Unreal Engine','עיצוב תנועה','אנימציית דמויות','VFX','המחשת מוצרים']

export function MarqueeSection() {
  const doubled = [...skills, ...skills]
  return (
    <div className="relative py-6 overflow-hidden border-y border-white/[0.06] bg-white/[0.015]">
      <div className="flex gap-5 marquee-track w-max">
        {doubled.map((s, i) => (
          <div key={i} className="flex items-center gap-5 shrink-0">
            <span className="text-white/80 font-heebo font-medium text-[15px] tracking-wide whitespace-nowrap">{s}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
