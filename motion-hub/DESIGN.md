# Motion Hub — Cross-Poster (Design Spec)

**Date:** 2026-06-20
**Owner:** Eliya (Motion)
**Status:** Approved design → ready for implementation plan

## Goal

A single dashboard where Eliya uploads a video + caption **once**, selects
Facebook, Instagram, and TikTok, and publishes (or schedules) to all three at
once. Built by self-hosting **Postiz** (open-source) locally via Docker — no
custom app code required, zero ongoing cost.

## In Scope

- Self-hosted Postiz running locally on Eliya's PC via Docker Compose.
- Three connected channels: **Facebook Page**, **Instagram (Business)**, **TikTok**.
- Upload-once → cross-post to all three.
- Free OAuth for Meta/TikTok via a free HTTPS tunnel (Cloudflare Tunnel / ngrok).

## Out of Scope (for now)

- 24/7 hosting on a paid server. Runs only while the PC is on. **Deliberate** —
  user confirmed they don't need always-on yet. Documented as a future option.
- AI caption generation (requires a paid OpenAI key). Optional, off by default.
- Motion branding / theming of the Postiz UI. Future "nice to have".
- Other platforms (YouTube, X, LinkedIn, Threads). Easy to add later — same flow.

## Cost: Free

Everything in scope is free: Postiz self-hosted is free, local Docker is free,
Meta + TikTok developer apps are free, the tunnel has a free tier, local storage
is free. The only future cost is optional 24/7 hosting (~₪15–25/mo).

## Architecture

Runs as containers started by one `docker compose up`:

```
Browser → https://<tunnel>.trycloudflare.com  (and http://localhost:4007)
                     │
        Postiz app (Next.js/Node)
          │        │         │
      Postgres   Redis    Temporal
      (data)    (queue)  (scheduling)
          │
          ├─► Meta Graph API  → Facebook Page + Instagram (Business)
          └─► TikTok Content API → TikTok
   Uploaded videos → local Docker volume (/uploads), STORAGE_PROVIDER=local
```

### Components

| Container | Image | Purpose |
|-----------|-------|---------|
| `postiz` | `ghcr.io/gitroomhq/postiz-app:latest` | Web UI + API + worker |
| `postiz-postgres` | `postgres:17-alpine` | Database |
| `postiz-redis` | `redis:7.2` | Job queue |
| `temporal` | (from official compose) | Scheduling engine |

### Why a tunnel

Meta and TikTok require a public **HTTPS** OAuth redirect URL to authorize
channel connections; `http://localhost` is not accepted by them. A free tunnel
exposes the local Postiz instance over HTTPS so OAuth completes — at no cost.

**Important:** use a tunnel with a **stable URL**, because the OAuth redirect URL
must be registered in the Meta/TikTok apps and stay constant. A Cloudflare
*quick* tunnel rotates its URL on every restart (would break OAuth repeatedly).
Preferred free option: **ngrok free static domain** (one stable `*.ngrok-free.app`
URL), or a **named Cloudflare Tunnel** if Eliya has a domain. `MAIN_URL` /
`FRONTEND_URL` / `NEXT_PUBLIC_BACKEND_URL` are set to this stable URL.

## Prerequisites (Eliya gathers these — all free)

1. **Docker Desktop** installed on the PC.
2. A **Facebook Page** (not just a personal profile).
3. An **Instagram Business or Creator** account, linked to that Facebook Page.
4. A **Meta developer account** (developers.facebook.com).
5. A **TikTok developer account** (developers.tiktok.com).

## Implementation Phases

### Phase 1 — Postiz running locally (no platforms yet)
- Install Docker Desktop.
- Add `docker-compose.yml` (Postiz + Postgres + Redis + Temporal) with a random
  `JWT_SECRET`, `STORAGE_PROVIDER=local`, `IS_GENERAL=true`.
- `docker compose up`, create admin login at `http://localhost:4007`.
- **Success:** can log in and see the empty dashboard.

### Phase 2 — Free HTTPS tunnel + developer apps
- Start a tunnel with a stable URL to `localhost:4007` (ngrok free static domain
  preferred); note the HTTPS URL.
- Set `MAIN_URL` / `FRONTEND_URL` / `NEXT_PUBLIC_BACKEND_URL` to the tunnel URL,
  restart Postiz.
- **Meta app** (covers FB + IG): create app → Facebook Login + Instagram product
  → set the Postiz OAuth redirect URL → copy `FACEBOOK_APP_ID` / `FACEBOOK_APP_SECRET`.
- **TikTok app**: create app → request content-posting scope → copy
  `TIKTOK_CLIENT_ID` / `TIKTOK_CLIENT_SECRET`.
- Paste keys into the compose env, restart.
- **Success:** keys loaded, no startup errors.

### Phase 3 — Connect channels + test one real cross-post
- In Postiz "Add channel" → connect Facebook, Instagram, TikTok via OAuth.
- Upload one test video, select all three, publish.
- **Success:** the same video actually appears on FB, IG, and TikTok.

### Phase 4 — (Future, optional)
- Light Motion branding of the UI.
- Lift-and-shift the same Docker setup to Railway/Hetzner for 24/7.

## Risks & Honest Expectations

- **Phase 2 is the bottleneck.** Meta and TikTok app review for posting can take
  days and may request business verification. **Mitigation:** in developer
  "sandbox/dev mode" you can usually post to your *own* connected accounts
  immediately — which is exactly the use case — so full approval may not be
  needed initially.
- **TikTok** unaudited apps may post as *private/draft* until approved; we verify
  this during Phase 3 and note it.
- **Instagram** will refuse to connect if the account isn't Business/Creator or
  isn't linked to a Facebook Page — checked in prerequisites.

## Success Criteria

One uploaded video + caption, published from the local Postiz dashboard, appears
on the connected Facebook Page, Instagram account, and TikTok account — at zero
cost, running on Eliya's own machine.
