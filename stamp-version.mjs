// Post-build: stamp a content hash of assets/app.bundle.js into index.html's
// <script src="/assets/app.bundle.js?v=..."> so the cache busts automatically
// whenever (and only when) the bundle's contents change. Run after `vite build`.
import { readFileSync, writeFileSync } from 'fs';
import { createHash } from 'crypto';

const bundle = readFileSync('assets/app.bundle.js');
const hash = createHash('sha256').update(bundle).digest('hex').slice(0, 8);

const htmlPath = 'index.html';
let html = readFileSync(htmlPath, 'utf8');

const ref = /(\/assets\/app\.bundle\.js)(\?v=[^"']*)?/;
if (!ref.test(html)) {
  console.error('stamp-version: could not find /assets/app.bundle.js reference in index.html');
  process.exit(1);
}

// Re-stamping the same hash is expected when the bundle is unchanged (cache stays warm).
html = html.replace(ref, `$1?v=${hash}`);
writeFileSync(htmlPath, html);
console.log(`stamp-version: index.html → app.bundle.js?v=${hash}`);
