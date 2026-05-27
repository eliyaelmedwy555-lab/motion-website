export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm font-light">
        <span className="font-kanit font-black text-white/60">JACK<span className="text-accent">.</span></span>
        <span>© {new Date().getFullYear()} ג'ק — יוצר תלת-ממד ומעצב תנועה</span>
        <a href="#" className="hover:text-white transition-colors duration-200 text-xs tracking-wider">חזרה למעלה ↑</a>
      </div>
    </footer>
  )
}
