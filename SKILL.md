# Skills Reference Guide

כל הסקילים הזמינים עם הוראות שימוש — מתי, למה, ואיך.

---

## פלאגינים מותקנים

אלה הפלאגינים הפעילים ברמת המשתמש:

| פלאגין | גרסה | תיאור |
|--------|------|--------|
| `frontend-design@claude-plugins-official` | installed | עיצוב UI/UX מתקדם |
| `context7@claude-plugins-official` | installed | דוקומנטציה עדכנית של ספריות |
| `code-review@claude-plugins-official` | installed | סקירת קוד אוטומטית |
| `ui-ux-pro-max@ui-ux-pro-max-skill` | 2.5.0 | בסיס נתונים לעיצוב |
| `superpowers@claude-plugins-official` | 5.1.0 | workflow מתקדם |
| `context-mode@context-mode` | 1.0.146 | ניהול context window |
| `claude-mem@thedotmack` | 13.2.0 | זיכרון בין שיחות |

---

## Quick Start — הפרויקט שלי

**בתחילת כל session של UI:**
```
/design-taste-frontend  ← תמיד ראשון
/frontend-design        ← מיד אחריו
```

**לפני בניית פיצ'ר חדש:**
```
/superpowers:brainstorming  ← לחקור דרישות לפני קוד
/gsd-plan-phase             ← לתכנן שלבים
/gsd-execute-phase          ← לבצע
```

**כשיש באג:**
```
/gsd-debug  ← debugging שיטתי
```

**לפני push לגיט:**
```
/code-review  ← סקירת שינויים
```

---

## עיצוב & UI/UX

### סקילים שצריך לטעון בכל session של UI

| סקיל | מתי להשתמש |
|------|------------|
| `/design-taste-frontend` | **תמיד ראשון** — לפני כל שורת UI. מגדיר כללי עיצוב, Tailwind, React |
| `/frontend-design` | מיד אחרי design-taste — מוסיף שכבת עיצוב מתקדמת |
| `/gpt-taste` | כשרוצים עיצוב ברמת Awwwards — GSAP, אנימציות, layout קולנועי |
| `/ui-ux-pro-max` | כשצריך פלטת צבעים, font pairing, או סגנון UI ספציפי |

### סקילים לסיטואציות ספציפיות

| סקיל | מתי להשתמש |
|------|------------|
| `/image-to-code` | כשיש מוקאפ או screenshot ורוצים להפוך לקוד |
| `/redesign-existing-projects` | כשמשפרים/משדרגים עיצוב קיים |
| `/high-end-visual-design` | כשרוצים אסתטיקה פרימיום ומלוטשת |
| `/minimalist-ui` | עיצוב מינימליסטי/אדיטוריאלי |
| `/industrial-brutalist-ui` | סגנון ברוטליסטי/תעשייתי |
| `/impeccable` | כשרוצים שכל פרט יהיה מושלם — standards גבוהים מאוד |
| `/stitch-design-taste` | כשעובדים עם Google Stitch — מייצר DESIGN.md |

---

## ניהול פרויקטים — GSD

### Workflow רגיל לפיצ'ר חדש

```
1. /gsd-discuss-phase    ← להגדיר מה בדיוק בונים
2. /gsd-plan-phase       ← ליצור תוכנית מפורטת עם שלבים
3. /gsd-execute-phase    ← לבצע את התוכנית
4. /gsd-verify-work      ← לוודא שהפיצ'ר עובד כמו שצריך
```

### בדיקת מצב הפרויקט

| סקיל | מתי להשתמש |
|------|------------|
| `/gsd-progress` | לראות איפה עומדים — מה הושלם, מה נשאר |
| `/gsd-health` | לבדוק חסמים, סיכונים, חוב טכני |
| `/gsd-phase` | פרטים על השלב הנוכחי |
| `/gsd-help` | רשימת כל פקודות GSD |

### הגדרת פרויקט חדש

| סקיל | מתי להשתמש |
|------|------------|
| `/gsd-new-project` | לפתוח פרויקט חדש עם roadmap ומיילסטונים |
| `/gsd-new-milestone` | להוסיף מיילסטון לפרויקט קיים |
| `/gsd-import` | לייבא פרויקט קיים למבנה GSD |
| `/gsd-ship` | צ'קליסט אחרון לפני העלאה לאוויר |

### סקילים מיוחדים

| סקיל | מתי להשתמש |
|------|------------|
| `/gsd-ui-phase` | שלב UI/UX עם design contracts |
| `/gsd-spec-phase` | לכתוב spec מפורט לשלב |
| `/gsd-mvp-phase` | לבנות MVP מהיר |
| `/gsd-debug` | debug מדעי — היפותזה → בדיקה → תיקון |
| `/gsd-code-review` | סקירת קוד — bugs, security, איכות |
| `/gsd-secure-phase` | בדיקת אבטחה לשלב |

---

## Superpowers — Workflow

### מתי להשתמש בכל אחד

| סקיל | מתי להשתמש |
|------|------------|
| `/superpowers:brainstorming` | **לפני כל עבודה יצירתית** — לחקור intent לפני קוד |
| `/superpowers:writing-plans` | כשיש spec ורוצים לתכנן multi-step task |
| `/superpowers:executing-plans` | לביצוע תוכנית שלב אחר שלב |
| `/superpowers:systematic-debugging` | לדיבאג שיטתי ומדעי |
| `/superpowers:test-driven-development` | TDD — לכתוב בדיקות לפני קוד |
| `/superpowers:verification-before-completion` | לוודא שהעבודה עובדת לפני שמסמנים done |
| `/superpowers:finishing-a-development-branch` | צעדים אחרונים לפני merge — review, tests, PR |
| `/superpowers:requesting-code-review` | להכין קוד ל-review מובנה |
| `/superpowers:subagent-driven-development` | להריץ tasks מקבילים עם subagents |

---

## כלי מפתח

### Context7 — דוקומנטציה עדכנית
**מתי:** כשעובדים עם ספרייה ורוצים docs עדכניים (React, Tailwind, Supabase, Vercel).
```
use context7
```
מכניס אוטומטית דוקומנטציה עדכנית לשיחה במקום להסתמך על ידע ישן.

### Code Review
**מתי:** לפני כל push — לבדוק שינויים לbאגים, security, ואיכות קוד.
```
/code-review
/code-review --fix   ← מתקן אוטומטית
```

### Claude API
| סקיל | מתי להשתמש |
|------|------------|
| `/claude-api` | לבנות ולדבאג אפליקציות עם Anthropic SDK |
| `/mcp-builder` | לבנות MCP servers |

---

## Context Mode — ניהול context window

**מתי:** כשעובדים על קבצים גדולים או פקודות עם output ארוך.

| סקיל | מתי להשתמש |
|------|------------|
| `ctx stats` | לראות כמה context נצרך |
| `ctx doctor` | לאבחן בעיות ב-context-mode |
| `ctx upgrade` | לעדכן ל-version חדש |
| `ctx purge` | לנקות את ה-knowledge base (בלתי הפיך) |

---

## זיכרון — Claude Memory

**מתי:** לשמור מידע חשוב בין sessions.

| סקיל | מתי להשתמש |
|------|------------|
| `/claude-mem:do` | לבצע tasks עם שמירה בזיכרון |
| `/claude-mem:learn-codebase` | ללמד את קלוד את מבנה הקוד |
| `/claude-mem:mem-search` | לחפש בזיכרון |
| `/claude-mem:make-plan` | לשמור תוכניות בזיכרון |

---

## Utility

| סקיל | מתי להשתמש |
|------|------------|
| `/verify` | לוודא שהשינוי עובד בפועל — מריץ את האפליקציה |
| `/run` | להפעיל ולהציג את האפליקציה |
| `/simplify` | לסקור ולפשט קוד שהשתנה |
| `/update-config` | להגדיר hooks, permissions, env vars ב-settings.json |
| `/keybindings-help` | להתאים קיצורי מקלדת |
| `/fewer-permission-prompts` | להפחית בקשות אישור חוזרות |
| `/loop` | להריץ סקיל על interval קבוע |
| `/schedule` | לתזמן agents על cron |
| `/security-review` | בדיקת אבטחה לשינויים |

---

## טיפים

- **לפני כל UI** — תמיד `/design-taste-frontend` → `/frontend-design`
- **לפני כל פיצ'ר** — `/superpowers:brainstorming` קודם
- **כשיש ספרייה חדשה** — `use context7` לdocs עדכניים
- **לפני push** — `/code-review`
- **כשיש באג** — `/gsd-debug` ולא לנחש
