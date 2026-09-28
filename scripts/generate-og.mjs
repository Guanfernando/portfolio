/**
 * Generates public/assets/og.png (1200×630) — the social share thumbnail.
 *
 * If public/assets/juan-uribe.jpg exists it is composited into the image;
 * otherwise the gradient "JU" mark is used.
 *
 * Requires a Chromium binary. Run with:
 *   npm i -D puppeteer   # one time, downloads Chromium
 *   node scripts/generate-og.mjs
 *
 * Or point CHROME_PATH at an existing Chrome/Edge install and it will use that.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const portraitFile = path.join(root, 'public/assets/juan-uribe.jpg');
const outFile = path.join(root, 'public/assets/og.png');

const photoDataUri = fs.existsSync(portraitFile)
  ? `data:image/jpeg;base64,${fs.readFileSync(portraitFile).toString('base64')}`
  : null;

const html = `<!doctype html><html><head><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@500&display=swap');
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; font-family: 'Space Grotesk', system-ui, sans-serif; background: #06070d; color: #f4f6fb; position: relative; }
  .blob { position: absolute; border-radius: 50%; filter: blur(90px); }
  .b1 { width: 620px; height: 620px; top: -220px; left: -160px; background: radial-gradient(circle at 30% 30%, #22d3ee, transparent 70%); opacity: .5; }
  .b2 { width: 680px; height: 680px; bottom: -300px; right: -220px; background: radial-gradient(circle at 60% 40%, #818cf8, transparent 70%); opacity: .45; }
  .b3 { width: 460px; height: 460px; bottom: -180px; left: 380px; background: radial-gradient(circle, #e879f9, transparent 70%); opacity: .32; }
  .grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 48px 48px; mask-image: radial-gradient(120% 90% at 0% 0%, #000, transparent 70%); }
  .wrap { position: relative; height: 100%; display: flex; align-items: center; justify-content: space-between; padding: 80px 90px; }
  .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 20px; letter-spacing: .22em; text-transform: uppercase; color: #5eead4; margin-bottom: 26px; }
  h1 { font-size: 76px; font-weight: 700; line-height: 1.04; letter-spacing: -.03em; max-width: 620px; }
  h1 .g { background: linear-gradient(120deg, #22d3ee, #818cf8 50%, #e879f9); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .role { margin-top: 30px; font-size: 24px; color: #c3c9da; max-width: 620px; }
  .tags { margin-top: 40px; display: flex; gap: 12px; flex-wrap: wrap; max-width: 640px; }
  .tag { font-family: 'JetBrains Mono', monospace; font-size: 16px; color: #c3c9da; border: 1px solid rgba(255,255,255,.14); border-radius: 999px; padding: 8px 16px; }
  .photoWrap { position: relative; flex-shrink: 0; }
  .photo { width: 300px; height: 300px; border-radius: 28px; object-fit: cover; object-position: 50% 18%; border: 1px solid rgba(255,255,255,.16); filter: grayscale(1) contrast(1.05) brightness(.92); }
  .photoWrap::after { content: ''; position: absolute; inset: 0; border-radius: 28px; background: linear-gradient(155deg, rgba(34,211,238,.55), rgba(129,140,248,.4) 45%, rgba(232,121,249,.5)); mix-blend-mode: color; }
  .mark { width: 300px; height: 300px; border-radius: 28px; display: grid; place-items: center; font-size: 120px; font-weight: 700; color: #04121a; background: linear-gradient(120deg, #22d3ee, #818cf8 50%, #e879f9); flex-shrink: 0; }
  .foot { position: absolute; left: 90px; bottom: 66px; font-family: 'JetBrains Mono', monospace; font-size: 18px; color: #8a91a6; }
</style></head>
<body>
  <div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>
  <div class="grid"></div>
  <div class="wrap">
    <div>
      <div class="eyebrow">Portafolio</div>
      <h1>Juan Fernando <span class="g">Uribe Medina</span></h1>
      <div class="role">Infraestructura, redes y desarrollo full stack</div>
      <div class="tags">
        <span class="tag">Node.js</span><span class="tag">TypeScript</span><span class="tag">React</span>
        <span class="tag">Hosting / WordPress</span><span class="tag">Soporte técnico</span><span class="tag">Fortinet NSE 1</span>
      </div>
    </div>
    ${photoDataUri ? `<div class="photoWrap"><img class="photo" src="${photoDataUri}"></div>` : `<div class="mark">JU</div>`}
  </div>
  <div class="foot">github.com/Guanfernando · linkedin.com/in/juan-uribe-72aab6132</div>
</body></html>`;

async function loadPuppeteer() {
  try {
    return (await import('puppeteer')).default;
  } catch {
    return (await import('puppeteer-core')).default;
  }
}

const puppeteer = await loadPuppeteer();
const launchOptions = { headless: 'new', args: ['--force-color-profile=srgb', '--hide-scrollbars'] };
if (process.env.CHROME_PATH) launchOptions.executablePath = process.env.CHROME_PATH;

const browser = await puppeteer.launch(launchOptions);
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: outFile, type: 'png' });
await browser.close();

console.log(`✓ ${path.relative(root, outFile)} (photo: ${photoDataUri ? 'incluida' : 'iniciales JU'})`);
