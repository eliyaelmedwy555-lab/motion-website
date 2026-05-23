/* Motion landing page — v2 with comprehensive Tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#4F46E5",
  "bg": "#FFFFFF",
  "displayFont": "Inter",
  "displayWeight": 800,
  "displayScale": 1,
  "letterSpacing": -2.5,
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
  "showConnectors": true,
  "stickyStack": true,
  "workBg": "ink"
} /*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  "#4F46E5", // indigo (brand)
  "#0F172A", // ink
  "#10B981", // green
  "#E24B4A", // red
  "#F59E0B", // amber
  "#0EA5E9"  // sky
];

const BG_OPTIONS = ["#FFFFFF", "#F6F6F8", "#F5F1EA", "#EFEFE9"];

const FONT_OPTIONS = [
  "Inter", "Heebo", "Manrope", "Space Grotesk", "Plus Jakarta Sans", "DM Sans"
];

/* ───────────────────────── Logo ───────────────────────── */

function Logo({ variant = "light" }) {
  const isDark = variant === "dark";
  const barColor = isDark ? "#818CF8" : "#4F46E5";
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
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useCounter(target, inView, duration = 1200) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
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
    return () => obs.disconnect();
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
    const sections = ["services", "work", "pricing", "contact"];
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
  const [statsRef, statsInView] = useReveal(0.5);
  const [parallaxY, setParallaxY] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setParallaxY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const py = parallaxY * 0.28;
  return (
    <section className="hero-new" data-screen-label="01 Hero">
      <div className="aurora-bg" style={{ transform: `translateY(${parallaxY * 0.12}px)` }}>
        <div className="aurora-layer" />
      </div>
      <div className="hero-grid-bg" style={{ transform: `translateY(${parallaxY * 0.08}px)` }} />
      <div className="hero-radial-accent" />

      <div className="hero-new-inner" style={{ transform: `translateY(${-py}px)` }}>
        <span className="hero-eyebrow-link">
          <span className="hero-eyebrow-badge">
            <ChevronLeft />
            שירותי בניית אתרים · ישראל
          </span>
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
            <AnimatedStat num="∞" label="עדכונים לאחר השקה" inView={statsInView} />
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
        <span className="hero-float-icon">📈</span>
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
  { n: "02", name: "דף נחיתה",  desc: "דף ממוקד אחד שמייצר לידים לקמפיין בלי הסחות, רק מסר ופעולה. כולל חיבור לפיקסל ו CRM.", tag: "₪1,500" },
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
  { n: "01", name: "שיחה",  desc: "30 דקות בזום או טלפון. מבינים מה צריך, מה לא, ולמי זה מדבר." },
  { n: "02", name: "עיצוב", desc: "מקבלים מוקאפ ראשון תוך 48 שעות לא פאוורפוינט, אלא קישור חי." },
  { n: "03", name: "בנייה", desc: "בונים את האתר בצד שלנו. אתם רואים את ההתקדמות, מעירים, מאשרים." },
  { n: "04", name: "השקה",  desc: "מעלים לדומיין, מחברים אנליטיקס, מסירים לידיים שלכם." },
];

function Process({ tweaks }) {
  const stepsRef = React.useRef(null);
  const sectionRef = React.useRef(null);
  useRevealList(stepsRef, '.step', 110);
  const [headRef, headInView] = useReveal();
  const [activeStep, setActiveStep] = React.useState(-1);

  React.useEffect(() => {
    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const r = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progress: 0 when top of section hits bottom of viewport, 1 when section is scrolled past
      const progress = Math.max(0, Math.min(1, (-r.top + viewH * 0.55) / (r.height * 0.6)));
      setActiveStep(Math.floor(progress * STEPS.length) - 1);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="section section-process" data-screen-label="04 Process">
      <div className="container">
        <div ref={headRef} className={`section-head section-head-row reveal${headInView ? ' in-view' : ''}`}>
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              תהליך
            </span>
            <h2 className="section-title section-title-xl">איך זה<br />עובד.</h2>
          </div>
          <p className="section-sub" style={{ maxWidth: 380 }}>
            ארבעה שלבים. ממוצע שבוע מהבריף ועד שהאתר באוויר, בלי הפתעות באמצע הדרך.
          </p>
        </div>

        <ol ref={stepsRef} className="steps">
          {STEPS.map((s, i) =>
            <li key={s.n} className={`step${i <= activeStep ? ' step-active' : ''}`}>
              <div className="step-top">
                <span className="step-num">{s.n}</span>
                {tweaks.showConnectors && i < STEPS.length - 1 &&
                  <span className={`step-line${i < activeStep ? ' step-line-lit' : ''}`} aria-hidden="true" />}
              </div>
              <h3 className="step-name">{s.name}</h3>
              <p className="step-desc">{s.desc}</p>
            </li>
          )}
        </ol>
      </div>
    </section>
  );
}


/* ───────────────────────── Work ───────────────────────── */

const WORK = [
  { n: "01", client: "זיו חשמל+",      kind: "חנות אונליין",  line: "ציוד חשמלי לבית ולמקצוע. 3,000+ מוצרים במלאי, משלוח תוך 24 שעות וייעוץ טכני חינם.",         metric: "3,000+ מוצרים במלאי", palette: ["#0f172a", "#1e3a5f", "#3b82f6"], url: "https://smoke-spkh.vercel.app" },
  { n: "02", client: "ירון נדל\"ן",     kind: "דף נחיתה",      line: "סוכן נדל\"ן מוביל בתל אביב. דף ממוקד שמייצר פגישות ישירות עם לקוחות פוטנציאליים דרך טופס חכם.", metric: "+180% פגישות",         palette: ["#1a1209", "#2d1f0a", "#c9a84c"], url: "#" },
  { n: "03", client: "גלי עיצוב שיער", kind: "אתר תדמית",     line: "מספרה בוטיק בהרצליה. אתר 5 עמודים שמציג את הסגנון, השירותים וקביעת תור אונליין.",              metric: "5 עמודים מושלמים",     palette: ["#1a0a12", "#3d1a2e", "#e879a0"], url: "#" },
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
    if (!sticky) { setScale(1); return; }
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
            <span className="work-card-url">{project.client.replace(/\s+/g, "").toLowerCase()}.co.il</span>
          </div>
          {project.url && project.url !== '#' ? (
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

/* ───────────────────────── Pricing ───────────────────────── */

const PRICING = [
  {
    name: "דף נחיתה",
    badge: null,
    desc: "דף ממוקד אחד לקמפיין או עסק.",
    setupFrom: "1,500",
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
    monthly: "300",
    features: [
      "עיצוב UI/UX מותאם",
      "5 עמודים",
      "אנליטיקס + SEO בסיסי",
      "וואטסאפ שיחה מהאתר",
      "עד 3 סבבי תיקונים",
      "מותאם לנייד",
    ],
    cta: "מתחילים",
    highlight: true,
  },
];

/* ── Pricing sub-components ── */

function PricingCard({ plan }) {
  const [ref, inView] = useReveal(0.1);
  return (
    <div ref={ref} className={`pricing-dark-card${plan.highlight ? ' pricing-dark-card-pop' : ''}${inView ? ' in-view' : ''}`}>
      {plan.badge && <div className="pricing-dark-badge">{plan.badge}</div>}
      <div className="pricing-dark-name">{plan.name}</div>
      <p className="pricing-dark-desc">{plan.desc}</p>
      <div className="pricing-dark-price-block">
        <div className="pricing-dark-price-row">
          <span className="pricing-dark-currency">₪</span>
          <span className="pricing-dark-price">{plan.setupFrom}</span>
          <span className="pricing-dark-price-label">הקמה מ</span>
        </div>
        <div className="pricing-dark-monthly-row">
          <span className="pricing-dark-plus">+</span>
          <span className="pricing-dark-monthly-price">₪{plan.monthly}</span>
          <span className="pricing-dark-monthly-label">/חודש תחזוקה</span>
        </div>
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
  { n: "01", name: "אפיון" },
  { n: "02", name: "עיצוב" },
  { n: "03", name: "פיתוח" },
  { n: "04", name: "בדיקות" },
  { n: "05", name: "עלייה לאוויר" },
];

function PricingProcess() {
  return (
    <div className="pricing-process-strip">
      <div className="pricing-process-label">תהליך העבודה</div>
      <div className="pricing-process-steps">
        {PHASES.map((phase, i) => (
          <React.Fragment key={phase.n}>
            <div className="pricing-process-step">
              <span className="pricing-process-num">{phase.n}</span>
              <span className="pricing-process-name">{phase.name}</span>
            </div>
            {i < PHASES.length - 1 && <span className="pricing-process-line" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const MONTHLY_INCLUDES = [
  { icon: "🖥️", label: "אחסון מאובטח" },
  { icon: "🌐", label: "דומיין שנה ראשונה" },
  { icon: "🔒", label: "SSL מוגן" },
  { icon: "🔧", label: "תיקוני באגים קטנים" },
  { icon: "💬", label: "תמיכה טכנית" },
];

function PricingMonthly() {
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
  return (
    <section
      id="pricing"
      className="section section-pricing"
      data-screen-label="06 Pricing"
    >
      <div className="container">

        {/* [A] Header */}
        <div ref={headRef} className={`section-head reveal${headInView ? ' in-view' : ''}`}
          style={{ textAlign: 'center', marginBottom: 56 }}>
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

        {/* [B] Package cards */}
        <div className="pricing-dark-cards">
          {PRICING.map((plan, i) => (
            <PricingCard key={i} plan={plan} />
          ))}
        </div>

        {/* [C] Process */}
        <PricingProcess />

        {/* [D] Monthly includes */}
        <PricingMonthly />

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
  { icon: "⚡", text: "חזרה תוך 24 שעות בימי עסקים" },
  { icon: "🎯", text: "שיחת ייעוץ ראשונה, בחינם לחלוטין" },
  { icon: "📋", text: "הצעת מחיר מפורטת ללא התחייבות" },
  { icon: "🔒", text: "פרטיות מלאה, המידע שלכם אצלנו בלבד" },
];

function Contact() {
  const [headRef, headInView] = useReveal();
  const [formRef, formInView] = useReveal(0.1);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", phone: "", type: "", message: "" });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
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
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <div className="contact-success-title">קיבלנו!</div>
                <p className="contact-success-sub">נחזור אליכם תוך יום עסקים אחד.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="cf-name">שם מלא *</label>
                    <input id="cf-name" className="contact-input" name="name" required
                      value={form.name} onChange={handleChange} placeholder="ישראל ישראלי" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="cf-phone">טלפון / מייל *</label>
                    <input id="cf-phone" className="contact-input" name="phone" required
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
                <button type="submit" className="contact-submit">שלחו פנייה →</button>
                <p className="contact-form-note">* שדות חובה · לא שולחים ספאם, לעולם לא.</p>
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
    if (!gsap) return;
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
  "מותאם לכל מכשיר", "✦", "SEO אמיתי", "✦",
];

function CinematicFooter() {
  const wrapperRef = React.useRef(null);
  const giantTextRef = React.useRef(null);
  const headlineRef = React.useRef(null);
  const linksRef = React.useRef(null);

  React.useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <Cf2MagneticBtn href="https://wa.me/972500000000" variant="primary">
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </Cf2MagneticBtn>
            <Cf2MagneticBtn href="mailto:hello@motion.co.il">
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
            <span className="cf2-heart">❤</span>
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
      <ScrollProgress />
      <Nav />
      <main>
        <Hero tweaks={t} />
        <Services tweaks={t} />
        <Process tweaks={t} />
        <Work tweaks={t} />
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

        <TweakSection label="תהליך" />
        <TweakToggle label="קווי חיבור" value={t.showConnectors}
          onChange={(v) => setTweak("showConnectors", v)} />

        <TweakSection label="עבודות" />
        <TweakToggle label="הצמדה ודחיסה" value={t.stickyStack}
          onChange={(v) => setTweak("stickyStack", v)} />
        <TweakRadio label="רקע" value={t.workBg} options={["ink", "light"]}
          onChange={(v) => setTweak("workBg", v)} />

      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
