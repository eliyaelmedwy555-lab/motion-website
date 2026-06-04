// One-off: capture real screenshots of the 3 showcased project sites into
// assets/work/*.webp, used as static thumbnails in the Work section (replaces
// heavy live iframes). WebP keeps them small and avoids the *.png gitignore.
import { createRequire } from 'module';
import { existsSync, mkdirSync } from 'fs';
const require = createRequire('C:/Users/smoke/Downloads/website builder/');
const puppeteer = require('puppeteer-core');

const CHROME = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].find(p => existsSync(p));

const OUT = 'assets/work';
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const SHOTS = [
  { name: 'ziv',  url: 'https://smoke-spkh.vercel.app' },
  { name: 'sali', url: 'http://localhost:3000/clients/sali-logo.html' },
  { name: 'jack', url: 'http://localhost:3000/clients/jack/index.html' },
];

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});

for (const s of SHOTS) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  try {
    await page.goto(s.url, { waitUntil: 'networkidle0', timeout: 30000 });
  } catch {
    await page.goto(s.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  }
  await new Promise(r => setTimeout(r, 1200)); // let fonts/animations settle
  const path = `${OUT}/${s.name}.webp`;
  await page.screenshot({ path, type: 'webp', quality: 82 });
  console.log(`captured ${s.name} → ${path}`);
  await page.close();
}
await browser.close();
