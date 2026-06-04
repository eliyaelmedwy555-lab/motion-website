import { createRequire } from 'module';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

// puppeteer-core is installed in a sibling tooling project; resolve it from there.
const require = createRequire('C:/Users/smoke/Downloads/website builder/');
const puppeteer = require('puppeteer-core');

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const mode  = process.argv[4] || 'full'; // 'full' | 'view'

const dir = './temporary screenshots';
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const existing = existsSync(dir) ? readdirSync(dir) : [];
let n = 1;
while (existing.some(f => f.startsWith(`screenshot-${n}`))) n++;
const filename = `screenshot-${n}${label ? '-' + label : ''}.png`;
const filepath = join(dir, filename);

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];
const executablePath = CHROME_PATHS.find(p => existsSync(p));
if (!executablePath) { console.error('Chrome not found.'); process.exit(1); }

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: filepath, fullPage: mode === 'full' });
await browser.close();

console.log(`Screenshot saved: ${filepath}`);
