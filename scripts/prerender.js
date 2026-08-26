/**
 * Build-time prerendering for Kotitoimitus.com.
 *
 * Uses Vite's SSR module loader to render the React app into static HTML at
 * build time. This produces a `dist/index.html` file that contains the full
 * rendered page body, so search engines, AI crawlers and social preview tools
 * can read the content without executing JavaScript.
 *
 * Usage:
 *   node scripts/prerender.js
 */

import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import * as React from 'react';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const DIST_DIR = new URL('../dist', import.meta.url).pathname;
const INDEX_PATH = resolve(DIST_DIR, 'index.html');
const APP_MODULE = '/src/App.jsx';

async function prerender() {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const module = await server.ssrLoadModule(APP_MODULE);
    const App = module.default;

    if (!App || typeof App !== 'function') {
      throw new Error(`Expected a default React component export from ${APP_MODULE}`);
    }

    const renderedBody = renderToString(React.createElement(App));
    const indexHtml = await readFile(INDEX_PATH, 'utf8');
    const finalHtml = indexHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedBody}</div>`
    );

    await writeFile(INDEX_PATH, finalHtml, 'utf8');
    console.log('Prerendered dist/index.html with full rendered content.');
  } catch (error) {
    console.error('Prerendering failed:', error);
    process.exit(1);
  } finally {
    await server.close();
  }
}

prerender();
