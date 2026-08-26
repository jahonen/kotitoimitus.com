/**
 * IndexNow submission helper for Kotitoimitus.com.
 *
 * Submits a list of URLs to search engines that support IndexNow (Bing, Yandex,
 * Naver, Seznam.cz, etc.).
 *
 * Required environment variables:
 *   - INDEXNOW_API_KEY
 *   - SITE_URL
 *
 * Optional:
 *   - INDEXNOW_ENDPOINT (defaults to https://api.indexnow.org/IndexNow)
 *
 * Usage:
 *   INDEXNOW_API_KEY=your-key SITE_URL=https://kotitoimitus.com node scripts/submit-indexnow.js [url1 url2 ...]
 *
 * If no URLs are provided, the script reads public/sitemap.xml and submits all loc entries.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const API_KEY = process.env.INDEXNOW_API_KEY;
const SITE_URL = process.env.SITE_URL?.replace(/\/$/, '');
const ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/IndexNow';
const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;

if (!API_KEY || !SITE_URL) {
  console.error('Error: INDEXNOW_API_KEY and SITE_URL environment variables are required.');
  process.exit(1);
}

function getUrlsFromSitemap() {
  const sitemapPath = join(PUBLIC_DIR, 'sitemap.xml');
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const matches = sitemap.matchAll(/<loc>([^<]+)<\/loc>/g);
  return [...matches].map((match) => match[1].trim());
}

const urls = process.argv.slice(2).length > 0 ? process.argv.slice(2) : getUrlsFromSitemap();

if (urls.length === 0) {
  console.error('No URLs to submit.');
  process.exit(1);
}

// Ensure the verification file exists at the root.
const verificationFile = join(PUBLIC_DIR, `${API_KEY}.txt`);
try {
  readFileSync(verificationFile);
} catch {
  writeFileSync(verificationFile, API_KEY, 'utf8');
  console.log(`Created IndexNow verification file: public/${API_KEY}.txt`);
}

const payload = {
  host: new URL(SITE_URL).host,
  key: API_KEY,
  keyLocation: `${SITE_URL}/${API_KEY}.txt`,
  urlList: urls,
};

async function submit() {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  const bodyText = await response.text();

  if (response.ok) {
    console.log(`IndexNow submission succeeded: ${response.status}`);
    console.log(`Submitted ${urls.length} URL(s) to ${ENDPOINT}`);
  } else {
    console.error(`IndexNow submission failed: ${response.status}`);
    console.error(bodyText);
    process.exit(1);
  }
}

submit().catch((error) => {
  console.error('IndexNow submission error:', error);
  process.exit(1);
});
