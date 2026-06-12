/* Motion landing page v2 with comprehensive Tweaks */

import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  useTweaks, TweaksPanel,
  TweakSection, TweakColor, TweakSelect, TweakRadio,
  TweakSlider, TweakText, TweakToggle,
} from './tweaks-panel.jsx';

/* a11y: when the visitor asks the OS for reduced motion, every JS-driven
   animation (GSAP, counters, parallax, tilt) must collapse to a static state. */
const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#5B2BE0",
  "bg": "#FFFFFF",
  "displayFont": "Frank Ruhl Libre",
  "displayWeight": 800,
  "displayScale": 1,
  "letterSpacing": -0.5,
  "radiusCard": 28,
  "radiusSection": 48,
  "containerWidth": 1280,
  "density": 1,
  "headline": "אתר שמביא לקוחות לא רק נראה טוב.",
  "subhead": "בונים לכם אתר מקצועי תוך שבוע. מהיר, נקי, ומותאם לנייד. בלי עיכובים ובלי הפתעות.",
  "hlMode": "accent",
  "showStats": true,
  "showHeroBadge": true,
  "showPrices": true,
  "stickyStack": true,
  "workBg": "ink"
} /*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  "#5B2BE0", // electric violet (brand)
  "#0F172A", // ink
  "#10B981", // green
  "#E24B4A", // red
  "#F59E0B", // amber
  "#0EA5E9"  // sky
];

const BG_OPTIONS = ["#FFFFFF", "#F6F6F8", "#F0F0F5", "#0c0c0e"];

const FONT_OPTIONS = [
  "Frank Ruhl Libre", "Inter", "Heebo", "Manrope", "Space Grotesk", "Plus Jakarta Sans", "DM Sans"
];

/* ───────────────────────── Logo ───────────────────────── */

function Logo({ variant = "light" }) {
  const isDark = variant === "dark";
  const barColor = isDark ? "#9D7BF2" : "#5B2BE0";
  const textColor = isDark ? "#ffffff" : "#0F0F12";
  return (
    <span className="logo" aria-label="motion">
      <span className="logo-bars" aria-hidden="true">
        <span className="logo-bar" style={{ background: barColor, height: "55%" }} />
        <span className="logo-bar" style={{ background: barColor, height: "82%" }} />
        <span className="logo-bar" style={{ background: barColor, height: "36%" }} />
      </span>
      <span className="logo-word" style={{ color: textColor }}>motion</span>
    </span>
  );
}

function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M9 3L3 9M3 9V4M3 9H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" style={{flexShrink:0}}>
      <path d="M2.5 7.5L6 11L12.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconZap() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
}
function IconTarget() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
}
function IconFileText() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
}
function IconShield() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
function IconServer() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
}
function IconGlobe() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
}
function IconLock() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
}
function IconWrench() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
}
function IconMessageSquare() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}
function IconTrendingUp() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
}
function IconCheck() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
}
function IconX() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
}

/* ───────────────────────── Animation hooks ───────────────────────── */

function useScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return p;
}

function useReveal(threshold = 0.15) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(REDUCED_MOTION);
  React.useEffect(() => {
    if (REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); clearTimeout(timer); } },
      { threshold }
    );
    obs.observe(el);
    const timer = setTimeout(() => setInView(true), 3000);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);
  return [ref, inView];
}

function useCounter(target, inView, duration = 1200) {
  const [value, setValue] = React.useState(REDUCED_MOTION ? target : 0);
  React.useEffect(() => {
    if (REDUCED_MOTION) { setValue(target); return; }
    if (!inView || target <= 0) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return value;
}

function useRevealList(containerRef, selector, staggerMs = 90) {
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll(selector));
    if (REDUCED_MOTION) {
      items.forEach(el => el.classList.add('in-view'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target);
            setTimeout(() => entry.target.classList.add('in-view'), idx * staggerMs);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach(el => obs.observe(el));
    const timer = setTimeout(() => {
      items.forEach((el, idx) => {
        setTimeout(() => el.classList.add('in-view'), idx * staggerMs);
      });
    }, 3000);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);
}

function ScrollProgress() {
  const p = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${p}%` }} />;
}

function AnimatedStat({ num, label, inView }) {
  const match = num.match(/^(\d+)/);
  const targetNum = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? num.slice(match[1].length) : num;
  const count = useCounter(targetNum, inView);
  if (!match) {
    return (
      <li>
        <span className="stat-num">{num}</span>
        <span className="stat-lbl">{label}</span>
      </li>
    );
  }
  return (
    <li>
      <span className="stat-num">{inView ? count + suffix : "0" + suffix}</span>
      <span className="stat-lbl">{label}</span>
    </li>
  );
}

/* ───────────────────────── Nav ───────────────────────── */

function Nav() {
  const [active, setActive] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const sections = ["services", "work", "about", "faq", "pricing", "contact"];
    function onScroll() {
      const scrollY = window.scrollY + 80;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() { setMenuOpen(false); }

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#contact" className="btn btn-primary btn-sm" onClick={closeMenu}>דברו איתנו</a>
        <nav className={`nav-links${menuOpen ? " open" : ""}`}>
          <a href="#services" className={active === "services" ? "nav-active" : ""} onClick={closeMenu}>שירותים</a>
          <a href="#work" className={active === "work" ? "nav-active" : ""} onClick={closeMenu}>עבודות</a>
          <a href="#about" className={active === "about" ? "nav-active" : ""} onClick={closeMenu}>אודות</a>
          <a href="#faq" className={active === "faq" ? "nav-active" : ""} onClick={closeMenu}>שאלות נפוצות</a>
          <a href="#pricing" className={active === "pricing" ? "nav-active" : ""} onClick={closeMenu}>מחירים</a>
          <a href="#contact" className={active === "contact" ? "nav-active" : ""} onClick={closeMenu}>צור קשר</a>
        </nav>
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="תפריט ניווט"
          aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
        <Logo />
      </div>
    </header>
  );
}

/* ───────────────────────── Highlight word ───────────────────────── */

function Highlight({ children, mode }) {
  const cls = `hl hl-${mode || "accent"}`;
  return <span className={cls}>{children}</span>;
}

function renderHeadline(text, hlMode) {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((p, i) => {
    if (p.startsWith("{") && p.endsWith("}")) {
      return <Highlight key={i} mode={hlMode}>{p.slice(1, -1)}</Highlight>;
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
}

function smartHeadline(text, hlMode) {
  if (text.includes("{")) return renderHeadline(text, hlMode);
  const candidates = ["לקוחות", "מהיר", "אתר", "השקה", "אתרים"];
  for (const w of candidates) {
    if (text.includes(w)) {
      const wrapped = text.replace(w, `{${w}}`);
      return renderHeadline(wrapped, hlMode);
    }
  }
  return text;
}

/* ───────────────────────── Hero ───────────────────────── */

function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{marginRight:6}}>
      <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Hero({ tweaks }) {
  const [parallaxY, setParallaxY] = React.useState(0);
  const statsRef = React.useRef(null);
  const [statsInView, setStatsInView] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-new-sec">
      <div className="hero-new-inner">
        <span className="hero-new-tag">
          שירותי בניית אתרים · ישראל
        </span>

        <h1 className="hero-new-title">
          {smartHeadline(tweaks.headline, tweaks.hlMode)}
        </h1>

        <p className="hero-new-sub">{tweaks.subhead}</p>

        <div className="hero-new-cta-row">
          <a href="#contact" className="hero-new-cta-btn">התחל עכשיו</a>
          <a href="#work" className="hero-new-ghost-btn">ראה עבודות</a>
        </div>

        {tweaks.showStats &&
          <ul ref={statsRef} className="stats stats-centered">
            <AnimatedStat num="100%" label="מותאם לנייד" inView={statsInView} />
            <AnimatedStat num="5 ימים" label="ממוצע להשקה" inView={statsInView} />
            <AnimatedStat num="24/7" label="תמיכה טכנית" inView={statsInView} />
          </ul>
        }

        {tweaks.showHeroBadge &&
          <div className="hero-badge hero-badge-centered">
            <span className="pulse" />
            <span>זמין לפרויקטים חדשים</span>
          </div>
        }
      </div>

      <div className="hero-float-card hero-float-card-1" aria-hidden="true"
        style={{ transform: `translateY(calc(${-parallaxY * 0.14}px))` }}>
        <span className="hero-float-icon"><IconTrendingUp /></span>
        <div>
          <div className="hero-float-label">ממוצע המרות</div>
          <div className="hero-float-val">+200%</div>
        </div>
      </div>
      <div className="hero-float-card hero-float-card-2" aria-hidden="true"
        style={{ transform: `translateY(calc(${-parallaxY * 0.2}px))` }}>
        <span className="hero-float-dot" />
        <div>
          <div className="hero-float-label">לקוח חדש הצטרף</div>
          <div className="hero-float-val">השקה תוך 5 ימים</div>
        </div>
      </div>
    </section>
  );
}
/* ───────────────────────── Services ───────────────────────── */

const SERVICES = [
  { n: "01", name: "אתר תדמית", desc: "עמוד הבית של העסק שלכם. בהיר, מקצועי, ומסביר במשפט אחד מה אתם עושים. 5 עמודים בליבה, מותאם לנייד מהיום הראשון.", tag: "₪2,500" },
  { n: "02", name: "דף נחיתה",  desc: "דף ממוקד אחד שמייצר לידים לקמפיין בלי הסחות, רק מסר ופעולה. כולל 3 עמודים, חיבור לפיקסל ו CRM.", tag: "₪1,500" },
];

function Services({ tweaks }) {
  const listRef = React.useRef(null);
  useRevealList(listRef, '.num-row', 110);
  const [headRef, headInView] = useReveal();
  return (
    <section id="services" className="section section-services" data-screen-label="03 Services">
      <div className="container">
        <div ref={headRef} className={`section-head section-head-row reveal${headInView ? ' in-view' : ''}`}>
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              שירותים
            </span>
            <h2 className="section-title section-title-xl">מה אנחנו<br />בונים.</h2>
          </div>
          <p className="section-sub" style={{ maxWidth: 380 }}>
            שתי קופסאות. בלי בלבול, בוחרים מה שמתאים ומתחילים.
          </p>
        </div>

        <ul ref={listRef} className="num-list">
          {SERVICES.map((s) =>
            <li key={s.n} className="num-row">
              <span className="num-row-n">{s.n}</span>
              <div className="num-row-body">
                <h3 className="num-row-name">{s.name}</h3>
                <p className="num-row-desc">{s.desc}</p>
              </div>
              {tweaks.showPrices && <span className="num-row-tag">{s.tag}</span>}
              <a href="#contact" className="num-row-link" aria-label={`התחל עם ${s.name}`}>
                <Arrow size={18} />
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Process ───────────────────────── */

const STEPS = [
  { n: "01", name: "שיחה",  desc: "30 דקות בזום או טלפון. מבינים מה צריך, מה לא, ולמי זה מדבר.", icon: IconMessageSquare },
  { n: "02", name: "עיצוב", desc: "מקבלים מוקאפ ראשון תוך 48 שעות לא פאוורפוינט, אלא קישור חי.", icon: IconFileText },
  { n: "03", name: "בנייה", desc: "בונים את האתר בצד שלנו. אתם רואים את ההתקדמות, מעירים, מאשרים.", icon: IconWrench },
  { n: "04", name: "השקה",  desc: "מעלים לדומיין, מסירים לידיים שלכם.", icon: IconGlobe },
];

function Process() {
  const cardsRef = React.useRef(null);
  useRevealList(cardsRef, '.process-card', 110);
  const [headRef, headInView] = useReveal();

  return (
    <section className="section section-process" data-screen-label="04 Process">
      <div className="container">
        <div className="process-grid">
          <div ref={headRef} className={`process-intro reveal${headInView ? ' in-view' : ''}`}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              תהליך
            </span>
            <h2 className="section-title section-title-xl">איך זה<br />עובד.</h2>
            <p className="section-sub" style={{ maxWidth: 380 }}>
              ארבעה שלבים. ממוצע שבוע מהבריף ועד שהאתר באוויר, בלי הפתעות באמצע הדרך.
            </p>
            <a href="#contact" className="hero-new-cta-btn process-intro-cta">
              בואו נתחיל
              <Arrow />
            </a>
          </div>

          <ol ref={cardsRef} className="process-cards">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.n} className="process-card">
                  <span className="process-card-n" aria-hidden="true">{s.n}</span>
                  <span className="process-card-icon"><Icon /></span>
                  <h3 className="process-card-name">{s.name}</h3>
                  <p className="process-card-desc">{s.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}


/* ───────────────────────── CinematicHeroSection ───────────────────────── */

const CINEMATIC_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
    position: absolute; inset: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
      linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-matte {
    color: var(--color-foreground);
    text-shadow:
      0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent),
      0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }

  .text-silver-matte {
    /* bottom stop kept at >=72% ink so the faded edge still passes 4.5:1 on white */
    background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 72%, transparent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 10px 20px color-mix(in srgb, var(--color-foreground) 15%, transparent))
      drop-shadow(0px 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent));
  }

  .text-card-silver-matte {
    background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
      drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  .premium-depth-card {
    background: linear-gradient(145deg, #1c1040 0%, #0F0F12 100%);
    box-shadow:
      0 40px 100px -20px rgba(0, 0, 0, 0.9),
      0 20px 40px -20px rgba(0, 0, 0, 0.8),
      inset 0 1px 2px rgba(255, 255, 255, 0.2),
      inset 0 -2px 4px rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.04);
    position: relative;
  }

  .card-sheen {
    position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
    mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .iphone-bezel {
    background-color: #111;
    box-shadow:
      inset 0 0 0 2px #52525B,
      inset 0 0 0 7px #000,
      0 40px 80px -15px rgba(0,0,0,0.9),
      0 15px 25px -5px rgba(0,0,0,0.7);
    transform-style: preserve-3d;
  }

  .hardware-btn {
    background: linear-gradient(90deg, #404040 0%, #171717 100%);
    box-shadow:
      -2px 0 5px rgba(0,0,0,0.8),
      inset -1px 0 1px rgba(255,255,255,0.15),
      inset 1px 0 2px rgba(0,0,0,0.8);
    border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare {
    background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
    background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
    box-shadow:
      0 10px 20px rgba(0,0,0,0.3),
      inset 0 1px 1px rgba(255,255,255,0.05),
      inset 0 -1px 1px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.1),
      0 25px 50px -12px rgba(0,0,0,0.8),
      inset 0 1px 1px rgba(255,255,255,0.2),
      inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .btn-modern-light, .btn-modern-dark { transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); }

  .btn-modern-light {
    background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%); color: #0F172A;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px #fff, inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px #fff, inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
    transform: translateY(1px);
    background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1);
  }

  .btn-modern-dark {
    background: linear-gradient(180deg, #27272A 0%, #18181B 100%); color: #FFFFFF;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
    transform: translateY(-3px);
    background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
    box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:active {
    transform: translateY(1px); background: #18181B;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.05), inset 0 3px 8px rgba(0,0,0,0.9);
  }

  .progress-ring {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: 402;
    stroke-dashoffset: 402;
    stroke-linecap: round;
  }
`;

function CinematicHeroSection() {
  const containerRef = React.useRef(null);
  const mainCardRef = React.useRef(null);
  const mockupRef = React.useRef(null);
  const rafRef = React.useRef(null);

  /* Mouse parallax on the iPhone mockup */
  React.useEffect(() => {
    if (REDUCED_MOTION || !window.gsap) return;
    const onMove = (e) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!mainCardRef.current || !mockupRef.current) return;
        const rect = mainCardRef.current.getBoundingClientRect();
        mainCardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        mainCardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
        const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(mockupRef.current, { rotationY: xVal * 12, rotationX: -yVal * 12, ease: "power3.out", duration: 1.2 });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafRef.current); };
  }, []);

  /* Cinematic GSAP scroll timeline */
  React.useEffect(() => {
    /* Reduced motion (or GSAP failed to load): no pin, no scroll-jacking —
       show the headline statically and drop the card/CTA layers entirely. */
    if (REDUCED_MOTION || !window.gsap) {
      const root = containerRef.current;
      if (!root) return;
      root.querySelectorAll(".text-track, .text-days").forEach(el => { el.style.visibility = "visible"; });
      root.querySelectorAll(".main-card, .cta-wrapper").forEach(el => { el.style.display = "none"; });
      return;
    }
    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      /* Initial states */
      gsap.set(".text-track",   { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days",    { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card",    { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper",  { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      /* Entrance animation (fires on mount) */
      gsap.timeline({ delay: 0.3 })
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days",  { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      /* Scroll-driven timeline */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl
        /* Card rises, hero text blurs away */
        .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        /* Card expands fullscreen */
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        /* Mockup flies in */
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8")
        .fromTo(".phone-widget",
          { y: 40, autoAlpha: 0, scale: 0.95 },
          { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        /* Progress ring + counter animate */
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: 100, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        /* Badges and text slide in */
        .fromTo(".floating-badge",
          { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
          { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".card-left-text",
          { x: -50, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text",
          { x: 50, autoAlpha: 0, scale: 0.8 },
          { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        /* Hold */
        .to({}, { duration: 2.5 })
        /* Swap to CTA */
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        /* Card content exits */
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"],
          { scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05 })
        /* Card shrinks back */
        .to(".main-card", {
          width:  isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "32px" : "40px",
          ease: "expo.inOut", duration: 1.8,
        }, "pullback")
        .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        /* Card flies off screen */
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      dir="ltr"
      data-screen-label="05 Sobers Demo"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center font-sans antialiased"
      style={{ background: "var(--bg)", color: "var(--ink)", perspective: "1500px" }}
    >
      <style dangerouslySetInnerHTML={{ __html: CINEMATIC_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      {/* ── Background text layer ── */}
      <div
        className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full px-4 will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <h1 className="m-0">
          <span className="text-track gsap-reveal text-3d-matte block text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2">
            עיצוב ופיתוח
          </span>
          <span className="text-days gsap-reveal text-silver-matte block text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter">
            שמביא לקוחות
          </span>
        </h1>
      </div>

      {/* ── CTA layer (shown at end of scroll) ── */}
      <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full px-4 gsap-reveal pointer-events-auto will-change-transform">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-silver-matte">
          מוכנים להתחיל?
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed" style={{ color: "#6B7280" }}>
          שיחת היכרות בחינם, ללא התחייבות. מהיום ועד השקה — שבוע בממוצע.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="https://wa.me/972535406691" className="btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem]">
            {/* WhatsApp */}
            <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-xl font-bold leading-none tracking-tight">WhatsApp</span>
          </a>
          <a href="#work" className="btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem]">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m0 0l4-4m-4 4l4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-xl font-bold leading-none tracking-tight">ראו עבודות</span>
          </a>
        </div>
      </div>

      {/* ── Foreground: physical deep-blue card ── */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          {/* Responsive grid: flex-col on mobile, 3-col grid on desktop */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">

            {/* Brand name — top on mobile, right on desktop */}
            <div className="card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-6xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter text-card-silver-matte">
                MOTION
              </h2>
            </div>

            {/* iPhone mockup — centre */}
            <div className="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>
              <div className="relative w-full h-full flex items-center justify-center scale-[0.65] md:scale-[0.85] lg:scale-100">

                {/* iPhone bezel */}
                <div ref={mockupRef} className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform" style={{ transformStyle: "preserve-3d" }}>
                  {/* Hardware side buttons */}
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md" aria-hidden="true" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md" aria-hidden="true" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md" aria-hidden="true" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md" style={{ transform: "scaleX(-1)" }} aria-hidden="true" />

                  {/* Screen */}
                  <div className="absolute inset-[7px] rounded-[2.5rem] overflow-hidden z-10 text-white" style={{ background: "#050914", boxShadow: "inset 0 0 15px #000" }}>
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />
                    {/* Dynamic Island */}
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ boxShadow: "0 0 8px rgba(34,197,94,0.8)" }} />
                    </div>

                    {/* App UI */}
                    <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                      <div className="phone-widget flex justify-between items-center mb-8">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: "#a3a3a3" }}>Motion</span>
                          <span className="text-xl font-bold tracking-tight text-white">Lighthouse</span>
                        </div>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: "rgba(124,58,237,0.15)", color: "#c4b5fd", border: "1px solid rgba(124,58,237,0.3)" }}>M</div>
                      </div>

                      {/* Progress ring */}
                      <div className="phone-widget relative w-44 h-44 mx-auto flex items-center justify-center mb-8" style={{ filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.8))" }}>
                        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                          <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="12" />
                          <circle className="progress-ring" cx="88" cy="88" r="64" fill="none" stroke="#7C3AED" strokeWidth="12" />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <span className="counter-val text-4xl font-extrabold tracking-tighter text-white">0</span>
                          <span className="text-[8px] uppercase font-bold mt-0.5" style={{ color: "rgba(196,181,253,0.5)", letterSpacing: "0.1em" }}>Performance</span>
                        </div>
                      </div>

                      {/* Widgets */}
                      <div className="space-y-3">
                        <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0" style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.2),rgba(91,43,224,0.05))", border: "1px solid rgba(167,139,250,0.2)" }}>
                            {/* Zap / speed */}
                            <svg className="w-4 h-4" fill="none" stroke="rgb(167,139,250)" viewBox="0 0 24 24" aria-hidden="true">
                              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-20 rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.15)" }} />
                            <div className="h-1.5 w-10 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />
                          </div>
                          <span className="text-[9px] font-bold" style={{ color: "#a78bfa" }}>0.8s</span>
                        </div>
                        <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0" style={{ background: "linear-gradient(135deg,rgba(16,185,129,0.2),rgba(5,150,105,0.05))", border: "1px solid rgba(52,211,153,0.2)" }}>
                            {/* Mobile */}
                            <svg className="w-4 h-4" fill="none" stroke="rgb(52,211,153)" viewBox="0 0 24 24" aria-hidden="true">
                              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                              <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="2"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-16 rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.15)" }} />
                            <div className="h-1.5 w-24 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />
                          </div>
                          <span className="text-[9px] font-bold" style={{ color: "#34d399" }}>100%</span>
                        </div>
                      </div>

                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
                    </div>
                  </div>
                </div>

                {/* Floating glass badges */}
                <div className="floating-badge absolute flex top-6 floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30" style={{ left: "-15px" }}>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(180deg,rgba(124,58,237,0.25),rgba(91,43,224,0.1))", border: "1px solid rgba(167,139,250,0.35)" }}>
                    <span aria-hidden="true">🚀</span>
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">אתר הושק!</p>
                    <p className="text-[10px] lg:text-xs font-medium" style={{ color: "rgba(196,181,253,0.6)" }}>תוך 5 ימים בלבד</p>
                  </div>
                </div>

                <div className="floating-badge absolute flex bottom-12 lg:bottom-20 floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30" style={{ right: "-15px" }}>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(180deg,rgba(16,185,129,0.2),rgba(5,150,105,0.1))", border: "1px solid rgba(52,211,153,0.3)" }}>
                    <span aria-hidden="true">📈</span>
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">+200% המרות</p>
                    <p className="text-[10px] lg:text-xs font-medium" style={{ color: "rgba(52,211,153,0.6)" }}>תוצאות מדידות</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Copy — bottom on mobile, left on desktop */}
            <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">
                בניית אתרים, מוגדרת מחדש.
              </h3>
              <p className="hidden md:block text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none" style={{ color: "rgba(219,209,254,0.7)" }}>
                <span className="text-white font-semibold">Motion</span> בונה אתרי תדמית ודפי נחיתה לעסקים. עיצוב מרהיב, קוד מהיר, והשקה בממוצע תוך שבוע — בלי עיכובים ובלי הפתעות.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Work ───────────────────────── */

const WORK = [
  { n: "01", client: "זיו חשמל+",      kind: "אתר תדמית",  line: "ציוד חשמלי לבית ולמקצוע. 3,000+ מוצרים במלאי, משלוח תוך 24 שעות וייעוץ טכני חינם.",         metric: "3,000+ מוצרים במלאי", palette: ["#0f172a", "#1e3a5f", "#3b82f6"], url: "https://smoke-spkh.vercel.app", domain: "ziv-electrical.co.il", thumb: "assets/work/ziv.webp" },
  { n: "02", client: "סלי לוגו",       kind: "דף נחיתה",      line: "סטודיו לעיצוב לוגואים ומיתוג. עיצוב מודרני ונועז לעסקים שרוצים להיזכר.",                        metric: "80+ מותגים",           palette: ["#0d0d0d", "#1a0a0e", "#e8445a"], url: "clients/sali-logo.html",                                                domain: "sali-logo.co.il", thumb: "assets/work/sali.webp" },
  { n: "03", client: "Jack 3D",       kind: "פורטפוליו",      line: "יוצר תלת-ממד ומעצב תנועה. אנימציות, גרפיקה בתנועה ואמנות דיגיטלית שדוחפת את גבולות היצירתיות.", metric: "60+ פרויקטים",          palette: ["#0c0c0c", "#111a00", "#bfff00"],  url: "/clients/jack/index.html", domain: "jack-3d.co.il", thumb: "assets/work/jack.webp" },
];

function AnimatedMetric({ raw, inView }) {
  const match = raw.match(/(\d+)/);
  const num = match ? parseInt(match[1], 10) : 0;
  const count = useCounter(num, inView, 1400);
  if (!match) return <span className="work-card-metric">{raw}</span>;
  const display = raw.replace(match[1], inView ? String(count) : "0");
  return <span className="work-card-metric">{display}</span>;
}

function WorkCard({ project, index, total, sticky }) {
  const cardRef = React.useRef(null);
  const [metricRef, metricInView] = useReveal(0.3);
  const [scale, setScale] = React.useState(1);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0, glow: false });
  const targetScale = 1 - (total - 1 - index) * 0.04;

  React.useEffect(() => {
    if (!sticky || REDUCED_MOTION) { setScale(1); return; }
    function onScroll() {
      const el = cardRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const stickyTop = 120;
      const cardH = el.offsetHeight;
      const beyond = stickyTop - r.top;
      const progress = Math.max(0, Math.min(1, beyond / (cardH * 0.8)));
      setScale(1 - progress * (1 - targetScale));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [targetScale, sticky]);

  function onMouseMove(e) {
    if (REDUCED_MOTION) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / (r.width / 2);
    const dy = (e.clientY - cy) / (r.height / 2);
    setTilt({ x: dy * 5, y: -dx * 5, glow: true });
  }
  function onMouseLeave() {
    setTilt({ x: 0, y: 0, glow: false });
  }

  const tiltStyle = sticky
    ? { transform: `scale(${scale}) perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transformOrigin: "top center", transition: tilt.glow ? "transform 0.1s ease" : "transform 0.5s ease" }
    : { transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: tilt.glow ? "transform 0.1s ease" : "transform 0.5s ease" };

  return (
    <div className={`work-slot ${sticky ? "work-slot-sticky" : ""}`}>
      <article
        ref={cardRef}
        className="work-card"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={tiltStyle}>

        <div className="work-card-head">
          <span className="work-card-n">{project.n}</span>
          <div className="work-card-meta">
            <span className="work-card-kind">{project.kind}</span>
            <h3 className="work-card-client">{project.client}</h3>
          </div>
          <a
            className="btn btn-ghost-dark btn-sm"
            href={project.url !== '#' ? project.url : undefined}
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: 'relative', zIndex: 10 }}
            onClick={(e) => {
              e.stopPropagation();
              if (project.url && project.url !== '#') {
                e.preventDefault();
                window.open(project.url, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <span>פרויקט חי</span>
            <Arrow />
          </a>
        </div>

        <div className="work-card-thumb" style={{
          background: `linear-gradient(135deg, ${project.palette[0]} 0%, ${project.palette[1]} 55%, ${project.palette[2]} 100%)`
        }}>
          <div className="work-card-browser">
            <span className="m-tile-dot" />
            <span className="m-tile-dot" />
            <span className="m-tile-dot" />
            <span className="work-card-url">{project.domain}</span>
          </div>
          {project.thumb ? (
            <div className="work-card-iframe-wrap">
              <img
                src={project.thumb}
                alt={`תצוגת האתר של ${project.client}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : project.url && project.url !== '#' ? (
            <div className="work-card-iframe-wrap">
              <iframe
                src={project.url}
                title={project.client}
                scrolling="no"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          ) : (
            <div className="work-card-mockup">
              <div className="mockup-hero">
                <div className="mockup-h" style={{ background: project.palette[2] }} />
                <div className="mockup-h" style={{ background: "rgba(255,255,255,.5)", width: "80%" }} />
                <div className="mockup-h" style={{ background: "rgba(255,255,255,.3)", width: "60%" }} />
              </div>
              <div className="mockup-cta" style={{ background: project.palette[2] }} />
            </div>
          )}
        </div>

        <div ref={metricRef} className="work-card-foot">
          <p className="work-card-line">{project.line}</p>
          <AnimatedMetric raw={project.metric} inView={metricInView} />
        </div>
      </article>
    </div>
  );
}

function Work({ tweaks }) {
  const isDark = tweaks.workBg === "ink";
  const [headRef, headInView] = useReveal();
  return (
    <section id="work" className={`section section-work ${isDark ? "section-work-dark" : "section-work-light"}`} data-screen-label="05 Work">
      <div className="container">
        <div ref={headRef} className={`section-head section-head-row reveal${headInView ? ' in-view' : ''}`}>
          <div>
            <span className={`eyebrow ${isDark ? "eyebrow-light" : ""}`}>
              <span className="eyebrow-dot" />
              עבודות
            </span>
            <h2 className={`section-title section-title-xl ${isDark ? "section-title-light" : ""}`}>תיק עבודות</h2>
          </div>
          <p className={`section-sub ${isDark ? "section-sub-light" : ""}`} style={{ maxWidth: 380 }}>
            כל פרויקט, תוצאה אמיתית. לא תבנית, לא קיצורי דרך.
          </p>
        </div>

        <div className={`work-stack ${tweaks.stickyStack ? "work-stack-sticky" : "work-stack-flat"}`}>
          {WORK.map((p, i) =>
            <WorkCard key={p.n} project={p} index={i} total={WORK.length} sticky={tweaks.stickyStack} />
          )}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Testimonials ───────────────────────── */

const TESTIMONIALS = [
  { name: "רן כהן", role: "בעל עסק, שיפוצניק", text: "קיבלתי אתר מקצועי תוך 6 ימים. הלקוחות מתקשרים דרך האתר כבר מהשבוע הראשון. שווה כל שקל.", result: "+3 לקוחות בשבוע הראשון" },
  { name: "מיכל לוי", role: "קוסמטיקאית עצמאית", text: "פחדתי שיהיה מסובך. הם ניהלו הכל, אני רק אישרתי. התוצאה יפה מכל מה שדמיינתי, ולקוחות מגיעות מגוגל.", result: "לקוחות חדשות מחיפוש" },
  { name: "אבי שמש", role: "עורך דין", text: "אתר תדמית שנראה כמו של משרד גדול. לקוחות חדשים מגיעים דרך גוגל. זה לא קרה לי לפני שבניתי את האתר.", result: "נראות מקצועית מידית" },
];

function Testimonials() {
  const [headRef, headInView] = useReveal();
  const listRef = React.useRef(null);
  useRevealList(listRef, '.testi-card', 110);
  return (
    <section className="section section-testimonials">
      <div className="container">
        <div ref={headRef} className={`section-head section-head-row reveal${headInView ? ' in-view' : ''}`}>
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              לקוחות
            </span>
            <h2 className="section-title section-title-xl">מה אומרים<br />עלינו.</h2>
          </div>
          <p className="section-sub" style={{ maxWidth: 380 }}>
            לא הבטחות, אנשים שעברו את התהליך ומספרים.
          </p>
        </div>
        <div ref={listRef} className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card">
              <p className="testi-quote">{t.text}</p>
              <div className="testi-foot">
                <div className="testi-author">
                  <span className="testi-name">{t.name}</span>
                  <span className="testi-role">{t.role}</span>
                </div>
                <span className="testi-result">{t.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */

const FAQS = [
  {
    q: "כמה זמן זה באמת לוקח?",
    a: "ממוצע 5 עד 7 ימי עבודה מהבריף ועד שהאתר באוויר. אם הפרויקט מורכב יותר, אומרים מראש ומסכימים על לוח זמנים. אין הפתעות באמצע.",
  },
  {
    q: "מה קורה אם אני לא מרוצה מהתוצאה?",
    a: "כל חבילה כוללת 3 סבבי תיקונים. אם משהו לא מדויק, אומרים ומתקנים. לא נשאיר אתכם עם תוצאה שאתם לא אוהבים.",
  },
  {
    q: "למה לא פשוט לבנות אתר לבדי?",
    a: "אפשר. אבל אנחנו בונים אתרי פרמיום עם אנימציות תנועה מתקדמות, חוויית משתמש מחושבת, ועיצוב שמרגיש יוקרתי ולא גנרי. זה לא רק אתר שנראה טוב בתמונה, זה אתר שאנשים זוכרים. רמה כזו לוקחת שנות ניסיון, וזמן שלרוב בעלי עסקים פשוט אין.",
  },
  {
    q: "מה כולל התחזוקה החודשית?",
    a: "אחסון, דומיין, SSL, תיקוני באגים קטנים ותמיכה טכנית. האתר תמיד יעבוד, גם אם משהו ישתבש בצד השרת.",
  },
];

function FaqItem({ item, index }) {
  const [open, setOpen] = React.useState(false);
  const [ref, inView] = useReveal(0.05);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.45s ease ${index * 70}ms, transform 0.45s ease ${index * 70}ms`,
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 16,
          padding: "20px 0", background: "none", border: "none",
          cursor: "pointer", textAlign: "right",
        }}
      >
        <span style={{ fontSize: 16.5, fontWeight: 600, color: "#0F0F12", lineHeight: 1.4, flex: 1 }}>
          {item.q}
        </span>
        <span style={{
          width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
          background: open ? "var(--accent,#5B2BE0)" : "rgba(0,0,0,0.06)",
          color: open ? "#fff" : "#0F0F12",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, lineHeight: 1,
          transition: "background 0.2s, color 0.2s, transform 0.25s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          +
        </span>
      </button>
      {/* aria-hidden when closed: maxHeight:0 hides visually but not from the a11y tree */}
      <div id={`faq-panel-${index}`} role="region" aria-hidden={!open} style={{
        maxHeight: open ? "320px" : "0",
        overflow: "hidden",
        transition: REDUCED_MOTION ? "none" : "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <p style={{
          fontSize: 15, lineHeight: 1.8, color: "#4B5563",
          paddingBottom: 20, margin: 0, paddingRight: 2,
        }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  const [headRef, headInView] = useReveal();
  return (
    <section id="faq" className="section" data-screen-label="07 FAQ" style={{ background: "#F6F6F8" }}>
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headInView ? " in-view" : ""}`}
          style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="eyebrow" style={{ display: "inline-flex", margin: "0 auto 16px" }}>
            <span className="eyebrow-dot" />
            שאלות נפוצות
          </span>
          <h2 className="section-title section-title-xl" style={{ textAlign: "center" }}>
            יש שאלות?
          </h2>
          <p className="section-sub" style={{ textAlign: "center", maxWidth: 440, margin: "12px auto 0" }}>
            כל מה שרצית לשאול לפני שמתחילים.
          </p>
        </div>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {FAQS.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Why a website ───────────────────────── */

const WHY_STATS = [
  {
    target: 75,
    title: "שופטים את אמינות העסק לפי האתר",
    body: "שלושה מכל ארבעה לקוחות מחליטים אם אפשר לסמוך עליכם, לפי האתר בלבד, עוד לפני שדיברתם.",
  },
  {
    target: 80,
    title: "מחפשים בגוגל לפני שקונים",
    body: "עוד לפני שהרימו טלפון, הלקוחות כבר בדקו אתכם אונליין. השאלה היחידה היא מה הם מצאו.",
  },
  {
    display: "24/7",
    title: "האתר עובד גם כשאתם ישנים",
    body: "168 שעות בשבוע של נוכחות ושיווק שמביא פניות בלילה, בשבת ובחג, בלי לשלם משכורת.",
  },
];

const CONVERSION_BARS = [
  { label: "אתר רגיל", value: "עד 3%", w: 12 },
  { label: "דף נחיתה ממוקד", value: "עד 26%", w: 100, strong: true },
];

function WhyStat({ stat }) {
  const [ref, inView] = useReveal();
  const count = useCounter(stat.target || 0, inView);
  const display = stat.target ? count + "%" : stat.display;
  return (
    <div ref={ref} className={`whyx-stat reveal${inView ? ' in-view' : ''}`}>
      <span className="whyx-stat-num">{display}</span>
      <h3 className="whyx-stat-title">{stat.title}</h3>
      <p className="whyx-stat-body">{stat.body}</p>
    </div>
  );
}

function ConversionBars() {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`whyx-conv reveal${inView ? ' in-view' : ''}`}>
      <div className="whyx-conv-head">
        <h3 className="whyx-conv-title">אותו תקציב פרסום, פי כמה לקוחות</h3>
        <p className="whyx-conv-sub">
          אתר תדמית בונה אמון. דף נחיתה ממוקד גורם לפעולה. כשמסירים את כל הסחות הדעת ומשאירים מסר אחד ופעולה אחת, אחוזי ההמרה מזנקים:
        </p>
      </div>
      <div className="whyx-bars">
        {CONVERSION_BARS.map((row, i) => (
          <div key={i} className="whyx-bar-row">
            <div className="whyx-bar-top">
              <span className="whyx-bar-label">{row.label}</span>
              <span className={`whyx-bar-val${row.strong ? ' is-strong' : ''}`}>{row.value}</span>
            </div>
            <div className="whyx-bar-track">
              <div
                className={`whyx-bar-fill${row.strong ? ' is-strong' : ''}${inView ? ' in-view' : ''}`}
                style={{ '--w': row.w + '%', transitionDelay: i * 0.12 + 's' }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="whyx-conv-foot">
        אותם גולשים, אותו תקציב פרסום, אבל פי כמה לקוחות משלמים. זה ההבדל בין לשרוף תקציב לבין להחזיר אותו פי כמה.
      </p>
    </div>
  );
}

function WhyWebsite() {
  const [headRef, headInView] = useReveal();
  const [ctaRef, ctaInView] = useReveal();
  return (
    <section id="why-website" className="section section-need" data-screen-label="Why a website">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headInView ? ' in-view' : ''}`}
          style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="eyebrow" style={{ display: 'inline-flex', margin: '0 auto 16px' }}>
            <span className="eyebrow-dot" />
            למה אתר
          </span>
          <h2 className="section-title section-title-xl" style={{ textAlign: 'center' }}>
            האתר שלך מחליט אם בוחרים בך
          </h2>
          <p className="section-sub" style={{ textAlign: 'center', maxWidth: 600, margin: '16px auto 44px' }}>
            בזמן שאתם קוראים את זה, מישהו חיפש עסק כמו שלכם, ובחר במתחרה שכבר נמצא אונליין. ככה המחקרים מוכיחים את זה:
          </p>
        </div>

        <div className="whyx-stats">
          {WHY_STATS.map((stat, i) => <WhyStat key={i} stat={stat} />)}
        </div>

        <ConversionBars />

        <div ref={ctaRef} className={`need-cta reveal${ctaInView ? ' in-view' : ''}`}>
          <a href="#contact" className="need-cta-link">רוצים אתר שמביא לקוחות? דברו איתי ←</a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Why Motion ───────────────────────── */

const WHYMOTION = [
  {
    icon: <IconMessageSquare />,
    title: "תקשורת ישירה",
    body: "מדברים ישירות עם מי שבונה את האתר. לא מנהל חשבון, לא מתווך.",
  },
  {
    icon: <IconZap />,
    title: "קוד מקצועי",
    body: "React ו-Tailwind, לא Wix. אתר שנטען מהר ועובד בכל מכשיר.",
  },
  {
    icon: <IconTarget />,
    title: "5 ימים בממוצע",
    body: "מתחילים, בונים, משיקים. בלי שבועות של המתנה.",
  },
  {
    icon: <IconGlobe />,
    title: "ישראלי ומקומי",
    body: "מכיר את השוק, זמין בוואטסאפ, מדבר בשפה שלכם.",
  },
  {
    icon: <IconShield />,
    title: "מחיר שקוף",
    body: "אין 'תתקשרו לקבל מחיר'. הכל כתוב, בלי הפתעות בדרך.",
  },
  {
    icon: <IconTrendingUp />,
    title: "מותאם לנייד",
    body: "נבנה ראשית למובייל, לא מותאם בדיעבד. 100% מהיום הראשון.",
  },
];

const SITE_INCLUDES = [
  "אנימציות תנועה ומעברים חלקים בגלילה",
  "עיצוב מותאם אישית, לא תבנית מוכנה",
  "טעינה מהירה (React + Tailwind, לא Wix)",
  "100% מותאם לנייד מהיום הראשון",
  "טופס לידים וכפתור וואטסאפ ישיר מהאתר",
];

const COMPARE_BAD = [
  "תבנית מוכנה שנראית כמו כולם",
  "סטטי, בלי תנועה או חיים",
  "איטי לטעינה",
  "אתה לבד מול תמיכה אוטומטית",
  "\"מספיק טוב\", לא בלתי-נשכח",
];

const COMPARE_GOOD = [
  "עיצוב ייחודי שנבנה רק לכם",
  "אנימציות תנועה חיות שמושכות את העין",
  "נטען מהיר (React + Tailwind)",
  "מדברים ישירות איתי, בלי מתווכים",
  "חוויה שלקוחות זוכרים וחוזרים אליה",
];

function WhyMotion() {
  const [headRef, headInView] = useReveal();
  const [includesRef, includesInView] = useReveal();
  const [compareRef, compareInView] = useReveal();
  const gridRef = React.useRef(null);
  useRevealList(gridRef, ".why-card", 80);
  return (
    <section id="about" className="section section-why" data-screen-label="05 About">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headInView ? ' in-view' : ''}`}
          style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="eyebrow" style={{ display: 'inline-flex', margin: '0 auto 16px' }}>
            <span className="eyebrow-dot" />
            מאחורי Motion
          </span>
          <h2 className="section-title section-title-xl" style={{ textAlign: 'center' }}>
            אז מי אני?
          </h2>
          <p className="section-sub" style={{ textAlign: 'center', maxWidth: 560, margin: '16px auto 40px' }}>
            אני אליה, מפתח אתרים עצמאי מישראל, ואני לא בונה אתרים רגילים.
            אני בונה אתרים עם אנימציות תנועה חיות, חוויית משתמש מחושבת ועיצוב שמרגיש יוקרתי,
            בלי המחיר היוקרתי. הרמה של סטודיו גדול, במחיר שעסק קטן יכול להרשות לעצמו.
            וכשאתם עובדים איתי, אתם מדברים ישירות איתי, בלי מתווכים.
          </p>
        </div>
        <div ref={gridRef} className="why-grid">
          {WHYMOTION.map((item, i) => (
            <div key={i} className="why-card reveal">
              <span className="why-card-icon">{item.icon}</span>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-body">{item.body}</p>
            </div>
          ))}
        </div>

        <div ref={includesRef} className={`includes-block reveal${includesInView ? ' in-view' : ''}`}>
          <h3 className="includes-title">מה כל אתר כולל</h3>
          <ul className="includes-list">
            {SITE_INCLUDES.map((item, i) => (
              <li key={i} className="includes-item">
                <span className="includes-check"><IconCheck /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div ref={compareRef} className={`compare-block reveal${compareInView ? ' in-view' : ''}`}>
          <h3 className="compare-title">ההבדל בין אתר רגיל לאתר של Motion</h3>
          <div className="compare-cols">
            <div className="compare-col compare-col-bad">
              <span className="compare-col-title">אתר תבנית רגיל</span>
              <ul className="compare-list">
                {COMPARE_BAD.map((item, i) => (
                  <li key={i} className="compare-item">
                    <span className="compare-mark"><IconX /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="compare-col compare-col-good">
              <span className="compare-col-title">אתר של Motion</span>
              <ul className="compare-list">
                {COMPARE_GOOD.map((item, i) => (
                  <li key={i} className="compare-item">
                    <span className="compare-mark"><IconCheck /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Pricing ───────────────────────── */

const PRICING = [
  {
    name: "דף נחיתה",
    badge: null,
    desc: "דף ממוקד אחד לקמפיין או עסק.",
    setupFrom: "1,500",
    setupNoMaint: "1,200",
    monthly: "300",
    features: [
      "עיצוב UI/UX מותאם",
      "חיבור פיקסל + CRM",
      "טופס לידים חכם",
      "עד 3 סבבי תיקונים",
      "מותאם לנייד",
    ],
    cta: "מתחילים",
    highlight: false,
  },
  {
    name: "אתר תדמית",
    badge: "הכי פופולרי",
    desc: "אתר 5 עמודים לעסק שרוצה להיראות מקצועי.",
    setupFrom: "2,500",
    setupNoMaint: "2,000",
    monthly: "300",
    features: [
      "עיצוב UI/UX מותאם",
      "5 עמודים",
      "וואטסאפ שיחה מהאתר",
      "עד 3 סבבי תיקונים",
      "מותאם לנייד",
    ],
    cta: "מתחילים",
    highlight: true,
  },
];

/* ── Pricing sub-components ── */

function PricingCard({ plan, withMaintenance }) {
  const [ref, inView] = useReveal(0.1);
  return (
    <div ref={ref} className={`pricing-dark-card${plan.highlight ? ' pricing-dark-card-pop' : ''}${inView ? ' in-view' : ''}`}>
      {plan.badge && <div className="pricing-dark-badge">{plan.badge}</div>}
      <div className="pricing-dark-name">{plan.name}</div>
      <p className="pricing-dark-desc">{plan.desc}</p>
      <div className="pricing-dark-price-block">
        <div className="pricing-dark-price-row">
          <span className="pricing-dark-currency">₪</span>
          <span className="pricing-dark-price">{withMaintenance ? plan.setupFrom : plan.setupNoMaint}</span>
          <span className="pricing-dark-price-label">הקמה מ</span>
        </div>
        {withMaintenance && (
          <div className="pricing-dark-monthly-row">
            <span className="pricing-dark-plus">+</span>
            <span className="pricing-dark-monthly-price">₪{plan.monthly}</span>
            <span className="pricing-dark-monthly-label">/חודש תחזוקה</span>
          </div>
        )}
      </div>
      <ul className="pricing-dark-features">
        {plan.features.map((f, i) => {
          const isInherited = i === 0 && f.startsWith("הכל");
          return (
            <li key={i} className={`pricing-dark-feature${isInherited ? ' pricing-dark-feature-inherit' : ''}`}>
              {!isInherited && <span className="pricing-dark-dot" />}
              {f}
            </li>
          );
        })}
      </ul>
      <a href="#contact" className={`pricing-dark-cta${plan.highlight ? ' pricing-dark-cta-solid' : ' pricing-dark-cta-ghost'}`}>
        {plan.cta}
      </a>
    </div>
  );
}

const PHASES = [
  { n: "01", name: "אפיון",        h: 56 },
  { n: "02", name: "עיצוב",        h: 84 },
  { n: "03", name: "פיתוח",        h: 112 },
  { n: "04", name: "בדיקות",       h: 140 },
  { n: "05", name: "עלייה לאוויר", h: 168 },
];

function PricingProcess() {
  const [ref, inView] = useReveal(0.3);
  return (
    <div ref={ref} className={`pricing-process-strip${inView ? ' in-view' : ''}`}>
      <div className="pricing-process-label">תהליך העבודה</div>
      {/* Ascending pillars — grow from the baseline on scroll, RTL so they rise right→left. */}
      <div className="pricing-process-chart" role="list">
        {PHASES.map((phase, i) => (
          <div key={phase.n} className="pricing-process-pillar" role="listitem">
            <div
              className="pricing-process-bar"
              style={{ '--bar-h': `${phase.h}px`, '--bar-delay': `${i * 0.12}s` }}
            >
              <span className="pricing-process-bar-num">{phase.n}</span>
            </div>
            <span className="pricing-process-pillar-name">{phase.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const MONTHLY_INCLUDES = [
  { icon: <IconServer />, label: "אחסון מאובטח" },
  { icon: <IconGlobe />, label: "דומיין שנה ראשונה" },
  { icon: <IconLock />, label: "SSL מוגן" },
  { icon: <IconWrench />, label: "תיקוני באגים קטנים" },
  { icon: <IconMessageSquare />, label: "תמיכה טכנית" },
];

function PricingMonthly({ withMaintenance }) {
  if (!withMaintenance) {
    return (
      <div className="pricing-no-maint-box">
        <div className="pricing-no-maint-header">
          <span className="pricing-no-maint-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </span>
          <span className="pricing-no-maint-title">ללא תחזוקה, לא כולל:</span>
        </div>
        <div className="pricing-no-maint-grid">
          {MONTHLY_INCLUDES.map((item, i) => (
            <div key={i} className="pricing-no-maint-item">
              <span className="pricing-no-maint-item-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <p className="pricing-no-maint-note">מומלץ למי שכבר יש לו אחסון ומכיר את התחום. תצטרכו לנהל את כל אלה בעצמכם.</p>
      </div>
    );
  }
  return (
    <div className="pricing-monthly-box">
      <div className="pricing-monthly-header">
        <span className="pricing-monthly-price-big">₪300</span>
        <span className="pricing-monthly-price-per">/חודש</span>
        <span className="pricing-monthly-title">מה כולל?</span>
      </div>
      <div className="pricing-monthly-grid">
        {MONTHLY_INCLUDES.map((item, i) => (
          <div key={i} className="pricing-monthly-item">
            <span className="pricing-monthly-icon">{item.icon}</span>
            <span className="pricing-monthly-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



function Pricing() {
  const [headRef, headInView] = useReveal();
  const [withMaintenance, setWithMaintenance] = React.useState(true);
  return (
    <section
      id="pricing"
      className="section section-pricing"
      data-screen-label="06 Pricing"
    >
      <div className="container">

        {/* [A] Header */}
        <div ref={headRef} className={`section-head reveal${headInView ? ' in-view' : ''}`}
          style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="eyebrow" style={{ display: 'inline-flex', margin: '0 auto 16px' }}>
            <span className="eyebrow-dot" />
            מחירים
          </span>
          <h2 className="section-title section-title-xl" style={{ textAlign: 'center' }}>
            ללא הפתעות.
          </h2>
          <p className="section-sub" style={{ textAlign: 'center', maxWidth: 480, margin: '12px auto 0' }}>
            חבילה ברורה, היקף מוגדר, מחיר שקוף. אתם יודעים מה מקבלים לפני שחותמים.
          </p>
        </div>

        {/* [Toggle] */}
        <div className="pricing-toggle-wrap">
          <button
            className={`pricing-toggle-btn${withMaintenance ? ' active' : ''}`}
            onClick={() => setWithMaintenance(true)}
          >
            עם תחזוקה
          </button>
          <button
            className={`pricing-toggle-btn${!withMaintenance ? ' active' : ''}`}
            onClick={() => setWithMaintenance(false)}
          >
            ללא תחזוקה
          </button>
        </div>

        {/* [Launch notice] */}
        <div style={{
          background: "rgba(91,43,224,0.07)",
          border: "1.5px solid rgba(91,43,224,0.18)",
          borderRadius: 14,
          padding: "14px 24px",
          textAlign: "center",
          marginBottom: 32,
          direction: "rtl",
          fontSize: 15,
          color: "#5B2BE0",
          fontWeight: 500,
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "inline-block", verticalAlign: "-2px", marginInlineEnd: 6 }}>
            <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
          </svg>
          <strong>כרגע לא מקבלים תשלומים</strong>. האתר בשלבי הקמה רשמית.{" "}
          <a href="#contact" style={{ color: "#5B2BE0", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
            שלחו פנייה
          </a>{" "}
          ונחזור אליכם ברגע שנפתח רשמית.
        </div>

        {/* [B] Package cards */}
        <div className="pricing-dark-cards">
          {PRICING.map((plan, i) => (
            <PricingCard key={i} plan={plan} withMaintenance={withMaintenance} />
          ))}
        </div>

        {/* [C] Monthly includes / not-included */}
        <PricingMonthly withMaintenance={withMaintenance} />

        {/* [D] Process */}
        <PricingProcess />

        {/* [F] Disclaimer */}
        <p className="pricing-disclaimer">
          * המחיר הסופי עשוי להשתנות בהתאם לדרישות הפרויקט, היקף העבודה וזמן הפיתוח.
        </p>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.6 2.3A8 8 0 0 0 0 8a7.9 7.9 0 0 0 1.1 4L0 16l4.1-1.1A8 8 0 0 0 16 8a7.9 7.9 0 0 0-2.4-5.7zM8 14.7a6.7 6.7 0 0 1-3.4-.9l-.3-.1-2.5.6.7-2.4-.2-.3A6.7 6.7 0 1 1 8 14.7zm3.7-5a4.1 4.1 0 0 1-2-.5 4.5 4.5 0 0 1-1.8-1.6 4.1 4.1 0 0 1-.8-2c0-.6.3-1 .6-1.2.1-.1.3-.2.4-.2H8.5c.2 0 .3 0 .4.3l.4 1c0 .1 0 .2-.1.3l-.2.2-.3.3v.2a4.2 4.2 0 0 0 .8 1c.5.5 1 .7 1.2.8.1 0 .2 0 .3-.1l.6-.7c.1-.1.2-.1.3-.1l1.1.5c.2.1.3.1.3.2v.8c-.1.3-.6.6-.9.7z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 4l6 4 6-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ───────────────────────── Contact ───────────────────────── */

const CONTACT_PROMISES = [
  { icon: <IconZap />, text: "חזרה תוך 24 שעות בימי עסקים" },
  { icon: <IconTarget />, text: "שיחת ייעוץ ראשונה, בחינם לחלוטין" },
  { icon: <IconFileText />, text: "הצעת מחיר מפורטת ללא התחייבות" },
  { icon: <IconShield />, text: "פרטיות מלאה, המידע שלכם אצלנו בלבד" },
];

function Contact() {
  const [headRef, headInView] = useReveal();
  const [formRef, formInView] = useReveal(0.1);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", phone: "", type: "", message: "" });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setSubmitError(false);
    try {
      const res = await fetch("https://formspree.io/f/maqkkjab", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.phone }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section section-contact" data-screen-label="08 Contact">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headInView ? " in-view" : ""}`}
          style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="eyebrow" style={{ display: "inline-flex", margin: "0 auto 16px" }}>
            <span className="eyebrow-dot" />
            צור קשר
          </span>
          <h2 className="section-title section-title-xl" style={{ textAlign: "center" }}>בואו נדבר.</h2>
          <p className="section-sub" style={{ textAlign: "center", maxWidth: 460, margin: "12px auto 0" }}>
            ספרו לנו על הפרויקט, נחזור עם הצעה ברורה תוך יום עסקים.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-left">
            <ul className="contact-promise-list">
              {CONTACT_PROMISES.map((p, i) => (
                <li key={i} className="contact-promise-item">
                  <span className="contact-promise-icon">{p.icon}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={formRef} className={`contact-form reveal${formInView ? " in-view" : ""}`}>
            {submitted ? (
              <div className="contact-success" role="status">
                <div className="contact-success-icon" aria-hidden="true">✓</div>
                <div className="contact-success-title">קיבלנו!</div>
                <p className="contact-success-sub">נחזור אליכם תוך יום עסקים אחד.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="cf-name">שם מלא *</label>
                    <input id="cf-name" className="contact-input" name="name" required
                      autoComplete="name"
                      value={form.name} onChange={handleChange} placeholder="ישראל ישראלי" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="cf-phone">טלפון / מייל *</label>
                    <input id="cf-phone" className="contact-input" name="phone" required
                      autoComplete="tel"
                      value={form.phone} onChange={handleChange} placeholder="050-0000000" />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="cf-type">סוג הפרויקט</label>
                  <select id="cf-type" className="contact-select" name="type"
                    value={form.type} onChange={handleChange}>
                    <option value="">בחרו...</option>
                    <option value="landing">דף נחיתה</option>
                    <option value="identity">אתר תדמית</option>
                    <option value="other">אחר</option>
                  </select>
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="cf-message">ספרו לנו עוד</label>
                  <textarea id="cf-message" className="contact-textarea" name="message"
                    value={form.message} onChange={handleChange}
                    placeholder="תארו בקצרה את העסק, מטרת האתר, ומה חשוב לכם..." />
                </div>
                <button type="submit" className="contact-submit" disabled={sending} aria-busy={sending}>
                  {sending ? "שולח..." : "שלחו פנייה →"}
                </button>
                <p className="contact-form-note">* שדות חובה · לא שולחים ספאם, לעולם לא.</p>
                {/* role=alert announces the failure to screen readers; #C03736 keeps 4.5:1 on white */}
                {submitError && (
                  <p role="alert" style={{ color: "#C03736", fontSize: 13, marginTop: 8 }}>
                    משהו השתבש. נסו שוב או כתבו לנו ישירות.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── New Cinematic Footer ───────────────────────── */

function Cf2MagneticBtn({ href, children, variant, onClick }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const gsap = window.gsap;
    if (!gsap || REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.4;
      const y = (e.clientY - r.top - r.height / 2) * 0.4;
      gsap.to(el, { x, y, rotationX: -y * 0.15, rotationY: x * 0.15, scale: 1.05, ease: "power2.out", duration: 0.4 });
    }
    function onLeave() {
      gsap.to(el, { x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2 });
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const cls = `cf2-pill${variant ? ` cf2-pill-${variant}` : ""}`;
  if (onClick) {
    return <button ref={ref} onClick={onClick} className={cls}>{children}</button>;
  }
  return <a ref={ref} href={href} className={cls}>{children}</a>;
}

const CF2_TICKER = [
  "בניית אתרים מקצועית", "✦", "עיצוב שממיר לקוחות", "✦",
  "חוויית משתמש מושלמת", "✦", "קוד מהיר ונקי", "✦",
  "מותאם לכל מכשיר", "✦",
];

function CinematicFooter() {
  const wrapperRef = React.useRef(null);
  const giantTextRef = React.useRef(null);
  const headlineRef = React.useRef(null);
  const linksRef = React.useRef(null);

  React.useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger || REDUCED_MOTION) return;
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (giantTextRef.current) {
      gsap.fromTo(giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: 0, scale: 1, opacity: 1,
          ease: "power1.out",
          scrollTrigger: { trigger: wrapper, start: "top 80%", end: "bottom bottom", scrub: 1 },
        }
      );
    }

    const targets = [headlineRef.current, linksRef.current].filter(Boolean);
    if (targets.length) {
      gsap.fromTo(targets,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: wrapper, start: "top 40%", end: "bottom bottom", scrub: 1 },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll()
        .filter(t => t.vars && t.vars.trigger === wrapper)
        .forEach(t => t.kill());
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? "auto" : "smooth" });
  }

  return (
    <div ref={wrapperRef} className="cf2-wrapper">
      <footer className="cf2-footer">
        <div className="cf2-aurora" aria-hidden="true" />
        <div className="cf2-bg-grid" aria-hidden="true" />
        <div ref={giantTextRef} className="cf2-giant-text" aria-hidden="true">MOTION</div>

        <div className="cf2-marquee-strip" aria-hidden="true">
          <div className="cf2-marquee-track">
            {[...CF2_TICKER, ...CF2_TICKER].map((item, i) => (
              <span key={i} className={item === "✦" ? "cf2-sep" : ""}>{item}</span>
            ))}
          </div>
        </div>

        <div className="cf2-content">
          <p className="cf2-eyebrow">בואו נדבר</p>
          <h2 ref={headlineRef} className="cf2-headline">מוכנים להתחיל?</h2>
          <p className="cf2-sub">שיחת היכרות בחינם, ללא התחייבות.</p>
          <div ref={linksRef} className="cf2-buttons">
            <Cf2MagneticBtn href="https://wa.me/972535406691" variant="primary">
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </Cf2MagneticBtn>
            <Cf2MagneticBtn href="mailto:eliyaelmedwy555@gmail.com">
              <MailIcon />
              <span>שלחו מייל</span>
            </Cf2MagneticBtn>
          </div>
          <div className="cf2-sub-links">
            <a href="#" className="cf2-pill-sm">תקנון</a>
            <a href="#" className="cf2-pill-sm">פרטיות</a>
            <a href="#" className="cf2-pill-sm">תמיכה</a>
          </div>
        </div>

        <div className="cf2-bottom">
          <Logo variant="dark" />
          <div className="cf2-badge">
            <span>נבנה עם</span>
            <span className="cf2-heart" aria-label="אהבה">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </span>
            <span>על ידי Motion</span>
          </div>
          <button className="cf2-top-btn" onClick={scrollToTop} aria-label="חזרה למעלה">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}

/* ───────────────────────── App + Tweaks ───────────────────────── */

function LaunchBanner() {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  return (
    <div className="launch-banner">
      <span className="launch-banner-dot" aria-hidden="true"></span>
      <span>האתר בשלבי השקה, כרגע לא מקבלים תשלומים. </span>
      <a href="#contact" className="launch-banner-link">
        שלחו פנייה עכשיו ותהיו מהלקוחות הראשונים
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="סגור"
        className="launch-banner-close"
      >×</button>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--bg", t.bg);
    root.style.setProperty("--display-font", `"${t.displayFont}"`);
    root.style.setProperty("--display-weight", String(t.displayWeight));
    root.style.setProperty("--display-scale", String(t.displayScale));
    root.style.setProperty("--display-tracking", `${t.letterSpacing}px`);
    root.style.setProperty("--radius-card", `${t.radiusCard}px`);
    root.style.setProperty("--radius-section", `${t.radiusSection}px`);
    root.style.setProperty("--container-w", `${t.containerWidth}px`);
    root.style.setProperty("--density", String(t.density));
    document.body.style.background = t.bg;
  }, [t.accent, t.bg, t.displayFont, t.displayWeight, t.displayScale, t.letterSpacing, t.radiusCard, t.radiusSection, t.containerWidth, t.density]);

  React.useEffect(() => {
    if (["Inter", "Heebo"].includes(t.displayFont)) return;
    const id = `font-${t.displayFont.replace(/\s+/g, "-")}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(t.displayFont)}:wght@400;500;600;700;800;900&display=swap`;
    document.head.appendChild(link);
  }, [t.displayFont]);

  return (
    <>
      <a href="#main" className="skip-link">דלג לתוכן</a>
      <ScrollProgress />
      <Nav />
      <main id="main" tabIndex={-1}>
        <CinematicHeroSection />
        <WhyWebsite />
        <Services tweaks={t} />
        <Process />
        <Work tweaks={t} />
        <WhyMotion />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
      <CinematicFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection label="צבע" />
        <TweakColor label="Accent" value={t.accent} options={ACCENT_OPTIONS}
          onChange={(v) => setTweak("accent", v)} />
        <TweakColor label="רקע אתר" value={t.bg} options={BG_OPTIONS}
          onChange={(v) => setTweak("bg", v)} />

        <TweakSection label="טיפוגרפיה" />
        <TweakSelect label="גופן תצוגה" value={t.displayFont} options={FONT_OPTIONS}
          onChange={(v) => setTweak("displayFont", v)} />
        <TweakRadio label="עובי" value={t.displayWeight} options={[700, 800, 900]}
          onChange={(v) => setTweak("displayWeight", v)} />
        <TweakSlider label="גודל כותרות" value={t.displayScale}
          min={0.7} max={1.4} step={0.05}
          onChange={(v) => setTweak("displayScale", v)} />
        <TweakSlider label="ריווח אותיות" value={t.letterSpacing}
          min={-6} max={2} step={0.1} unit="px"
          onChange={(v) => setTweak("letterSpacing", v)} />

        <TweakSection label="מבנה" />
        <TweakSlider label="עיגול כרטיסים" value={t.radiusCard}
          min={0} max={48} step={2} unit="px"
          onChange={(v) => setTweak("radiusCard", v)} />
        <TweakSlider label="עיגול סקשנים" value={t.radiusSection}
          min={0} max={80} step={4} unit="px"
          onChange={(v) => setTweak("radiusSection", v)} />
        <TweakSlider label="רוחב מקסימלי" value={t.containerWidth}
          min={1000} max={1600} step={20} unit="px"
          onChange={(v) => setTweak("containerWidth", v)} />
        <TweakSlider label="צפיפות" value={t.density}
          min={0.7} max={1.4} step={0.05}
          onChange={(v) => setTweak("density", v)} />

        <TweakSection label="הירו" />
        <TweakRadio label="הדגשה" value={t.hlMode} options={["accent", "underline", "block"]}
          onChange={(v) => setTweak("hlMode", v)} />
        <TweakText label="כותרת" value={t.headline}
          onChange={(v) => setTweak("headline", v)} />
        <TweakText label="תת-כותרת" value={t.subhead}
          onChange={(v) => setTweak("subhead", v)} />
        <TweakToggle label="מספרי אמון" value={t.showStats}
          onChange={(v) => setTweak("showStats", v)} />
        <TweakToggle label="תגית 'זמין'" value={t.showHeroBadge}
          onChange={(v) => setTweak("showHeroBadge", v)} />

        <TweakSection label="שירותים" />
        <TweakToggle label="הצג תגי מחיר" value={t.showPrices}
          onChange={(v) => setTweak("showPrices", v)} />

        <TweakSection label="עבודות" />
        <TweakToggle label="הצמדה ודחיסה" value={t.stickyStack}
          onChange={(v) => setTweak("stickyStack", v)} />
        <TweakRadio label="רקע" value={t.workBg} options={["ink", "light"]}
          onChange={(v) => setTweak("workBg", v)} />

      </TweaksPanel>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
