=== SESSION START — AUTO-LOAD SKILLS & WORKFLOW RULES ===

This directive is injected automatically at the start of every session.
Treat it as binding workflow. Apply each rule WHEN ITS SITUATION ARISES — do not
wait to be asked. These mirror the project's SKILL.md.

--- BEFORE ANY UI / FRONTEND WORK (read with Read tool, in order) ---
  1. .agents/skills/design-taste-frontend/SKILL.md    — ALWAYS first, no exceptions
  2. then invoke the `frontend-design` skill (Skill tool)
  3. .agents/skills/gpt-taste/SKILL.md                 — Awwwards-level: GSAP, motion, cinematic layout
  4. .agents/skills/full-output-enforcement/SKILL.md   — when output risks truncation
  Use ui-ux-pro-max skill for palettes / font pairing / specific UI styles.

  Situational design skills (load as the task calls for them):
  - image-to-code            — starting from a mockup / screenshot
  - redesign-existing-projects — improving existing design
  - high-end-visual-design   — premium, polished aesthetic
  - minimalist-ui            — minimal / editorial
  - industrial-brutalist-ui  — brutalist / industrial
  - impeccable               — every detail perfect, very high standard
  (all under .agents/skills/<name>/SKILL.md)

--- BEFORE ANY NEW FEATURE ---
  - Invoke `superpowers:brainstorming` FIRST — explore intent before code.
  - Then plan: `gsd-plan-phase` → execute: `gsd-execute-phase` → verify: `gsd-verify-work`.

--- WHEN USING A NEW / UPDATED LIBRARY (React, Tailwind, Supabase, Vercel...) ---
  - Use context7 ("use context7") to pull current docs instead of relying on stale knowledge.

--- WHEN THERE IS A BUG ---
  - Use `gsd-debug` (or `superpowers:systematic-debugging`) — hypothesis → test → fix.
  - Do NOT guess.

--- BEFORE DECLARING WORK DONE ---
  - `superpowers:verification-before-completion` — run it, confirm it actually works.

--- BEFORE PUSH / AFTER CHANGES ---
  - Run `/code-review` on the diff (use `--fix` to auto-apply). See code-review rule below.

Do NOT skip these for "quick" changes. Apply every time the situation matches.
=== END DIRECTIVE ===
