# Start here – Kotitoimitus.com

This repository contains the static website for Kotitoimitus.com.

## Project structure

```
.
├── index.html              # Vite entry HTML with SEO metadata and JSON-LD
├── public/                 # Static assets copied to dist/ as-is
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest    # PWA manifest
│   ├── og-image.svg        # Social sharing image (source)
│   ├── og-image.png        # Social sharing image (generated PNG fallback)
│   ├── llms.txt
│   └── blog/               # Static blog posts with their own SEO
│       └── tervetuloa-tasta-kotitoimitus-sai-alkunsa.html
├── src/
│   ├── main.jsx            # React app mount
│   ├── main.scss           # Shared SCSS variables and resets
│   ├── App.jsx             # Root page layout
│   ├── App.scss
│   └── components/         # One folder per component
│       └── ComponentName/
│           ├── ComponentName.jsx
│           └── ComponentName.scss
├── functions/
│   └── api/
│       └── newsletter.js   # Cloudflare Pages Function for newsletter signups
├── scripts/                # Build-time scripts
│   ├── generate-sitemap.js
│   ├── generate-og-image.js
│   └── prerender.js
├── asset/
│   └── kotitoimitus.com-mockup.html  # Original draft
├── component.md            # Component documentation
├── services.md             # Service documentation
├── integration.md          # External service documentation
├── wrangler.toml           # Cloudflare Pages configuration
└── package.json
```

## Conventions

- Components are PascalCase and co-located with their SCSS.
- Files and folders are kebab-case unless framework-specific.
- Async fetch functions use the `fetch` prefix.
- Every visual component and service is documented in `component.md` and `services.md`.

## Quick start

```bash
# Install dependencies
npm install

# Run local dev server (site only; functions run separately)
npm run dev

# Build static files for production
npm run build
```

The production build is output to `dist/`.

## Build pipeline

`npm run build` executes the following steps:

1. `npm run sitemap` — regenerates `public/sitemap.xml` from blog posts.
2. `node scripts/generate-og-image.js` — renders `public/og-image.svg` to a 1200×630 PNG.
3. `vite build` — bundles React assets and copies `public/` into `dist/`.
4. `node scripts/prerender.js` — uses Vite's SSR module loader to render the React app to static
   HTML and injects it into `dist/index.html`. This ensures search engines, AI crawlers and social
   preview tools can read the page body without executing JavaScript.

## Newsletter signup

1. Create or use an existing SendGrid account and generate an API key.
2. Create a Cloudflare Pages project from this GitHub repository.
3. In the Pages dashboard, set these secrets:
   - `SENDGRID_API_KEY`
   - `OWNER_EMAIL` (your address)
4. Optionally add a KV namespace binding named `SUBSCRIBERS` if you want to store emails.
5. Cloudflare Pages builds and deploys the site automatically on every push to `main`.

The signup form posts to `/api/newsletter`, which is served by `functions/api/newsletter.js`.

## Hosting

This site is designed for Cloudflare Pages. In the Cloudflare dashboard:

1. Create a new Pages project.
2. Connect this GitHub repository.
3. Build command: `npm run build` (or `npm run build && npm run indexnow` to auto-submit URLs on every build)
4. Build output directory: `dist`

Set `SITE_URL` and `INDEXNOW_API_KEY` as Pages environment variables if you use the auto-submit option. Then point your Cloudflare domain to the Pages project. See `integration.md` for details.

## SEO, structured data and social sharing

- `index.html` contains comprehensive SEO meta tags, Open Graph, Twitter Cards, and Schema.org JSON-LD.
- `public/robots.txt` and `public/sitemap.xml` guide crawlers.
- `public/llms.txt` gives AI crawlers a concise summary.
- `public/og-image.png` is a 1200×630 PNG social sharing image (generated from `og-image.svg`).
- The blog post in `public/blog/` is a standalone static HTML page with its own SEO metadata.

## Adding a blog post

1. Create a new static HTML file under `public/blog/kebab-case-title.html`.
2. In the HTML, set canonical, `og:url`, Twitter URL and Schema.org `url` to the clean URL without `.html` (for example `https://kotitoimitus.com/blog/kebab-case-title`). Cloudflare Pages serves the page at the clean URL via Pretty URLs.
3. Add the post to `src/components/Blog/Blog.jsx` using the clean URL.
4. Regenerate the sitemap with `npm run sitemap` (this also runs automatically before `npm run build`).

## Sitemap and IndexNow

- `npm run sitemap` regenerates `public/sitemap.xml` by scanning `public/blog/`.
- `npm run indexnow` submits all URLs from `public/sitemap.xml` to IndexNow. Set `INDEXNOW_API_KEY` and `SITE_URL` first; the script creates the required verification file automatically.
- Submit the sitemap to Google Search Console and Bing Webmaster Tools for regular indexing.
