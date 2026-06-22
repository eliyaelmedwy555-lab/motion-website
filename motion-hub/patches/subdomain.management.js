"use strict";
// PATCHED for self-hosting behind tunnel domains.
//
// Upstream computes the auth-cookie Domain from FRONTEND_URL via tldts, e.g.
// `https://x.trycloudflare.com` -> `Domain=.trycloudflare.com`. But
// trycloudflare.com / ngrok-free.dev are on the Public Suffix List, so browsers
// REJECT a cookie scoped to them -> login silently bounces back.
//
// Returning undefined makes the cookie host-only (no Domain attribute), which the
// browser always accepts. Correct for a single-host self-hosted instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookieUrlFromDomain = getCookieUrlFromDomain;
function getCookieUrlFromDomain(domain) {
    return undefined;
}
//# sourceMappingURL=subdomain.management.js.map
