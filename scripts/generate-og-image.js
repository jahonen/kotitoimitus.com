/**
 * Generate a PNG fallback for the Open Graph image.
 *
 * Renders public/og-image.svg with resvg and saves a 1200x630 PNG to
 * public/og-image.png. Platforms such as Facebook and LinkedIn prefer a
 * raster image for og:image, so this runs as part of the production build.
 *
 * Usage:
 *   node scripts/generate-og-image.js
 */

import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;
const SVG_PATH = resolve(PUBLIC_DIR, 'og-image.svg');
const OUTPUT_PATH = resolve(PUBLIC_DIR, 'og-image.png');

async function generate() {
  try {
    const svgContent = await readFile(SVG_PATH, 'utf8');
    const resvg = new Resvg(svgContent, {
      fitTo: {
        mode: 'width',
        value: 1200,
      },
      font: {
        loadSystemFonts: true,
      },
    });

    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    await writeFile(OUTPUT_PATH, pngBuffer);
    console.log(`Generated ${OUTPUT_PATH} (${resvg.width}x${pngData.height} PNG)`);
  } catch (error) {
    console.error('OG image generation failed:', error);
    process.exit(1);
  }
}

generate();
