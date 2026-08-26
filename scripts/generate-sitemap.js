/**
 * Sitemap generator for Kotitoimitus.com.
 *
 * Scans public/blog/ for HTML posts and writes public/sitemap.xml with
 * the homepage and all blog posts.
 *
 * Usage:
 *   SITE_URL=https://kotitoimitus.com node scripts/generate-sitemap.js
 */

import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const SITE_URL = process.env.SITE_URL?.replace(/\/$/, '') || 'https://kotitoimitus.com';
const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;
const BLOG_DIR = join(PUBLIC_DIR, 'blog');

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function getLastModified(filePath) {
  try {
    return formatDate(statSync(filePath).mtime);
  } catch {
    return formatDate(new Date());
  }
}

const pages = [{ loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' }];

try {
  const entries = readdirSync(BLOG_DIR, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile() && extname(entry.name) === '.html') {
      const filePath = join(BLOG_DIR, entry.name);
      const urlPath = `/blog/${entry.name}`;
      pages.push({
        loc: `${SITE_URL}${urlPath}`,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: getLastModified(filePath),
      });
    }
  }
} catch (error) {
  if (error.code !== 'ENOENT') {
    console.error('Error reading blog directory:', error);
    process.exit(1);
  }
}

const urlEntries = pages
  .map((page) => {
    const lastmod = page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${page.loc}</loc>${lastmod}\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const outputPath = join(PUBLIC_DIR, 'sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf8');
console.log(`Generated sitemap with ${pages.length} URLs at ${outputPath}`);
