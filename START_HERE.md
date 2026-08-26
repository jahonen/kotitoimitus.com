# Start here – Kotitoimitus.com

This repository contains the static website for Kotitoimitus.com.

## Project structure

```
.
├── index.html              # Vite entry HTML
├── src/
│   ├── main.jsx            # React app mount
│   ├── main.scss           # Shared SCSS variables and resets
│   ├── App.jsx             # Root page layout
│   ├── App.scss
│   └── components/         # One folder per component
│       └── ComponentName/
│           ├── ComponentName.jsx
│           └── ComponentName.scss
├── workers/
│   └── newsletter-worker/  # Cloudflare Worker for newsletter signups
├── asset/
│   └── kotitoimitus.com-mockup.html  # Original draft
├── component.md            # Component documentation
├── services.md             # Service documentation
├── integration.md          # External service documentation
├── danube.json             # DanubeData static site config
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

# Run local dev server
npm run dev

# Build static files for production
npm run build
```

The production build is output to `dist/`.

## Newsletter signup

1. Create a Resend account and generate an API key.
2. Deploy the Cloudflare Worker in `workers/newsletter-worker/`.
3. Set `RESEND_API_KEY` and `OWNER_EMAIL` secrets via `wrangler secret put`.
4. Copy the worker URL into `.env` as `VITE_NEWSLETTER_WORKER_URL`.
5. Rebuild and redeploy the site.

## Hosting

This site is designed for DanubeData Static Sites. Connect this GitHub repository in the DanubeData dashboard and set the publish directory to `dist`. See `integration.md` for details.
