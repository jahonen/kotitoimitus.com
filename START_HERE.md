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
├── functions/
│   └── api/
│       └── newsletter.js   # Cloudflare Pages Function for newsletter signups
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
3. Build command: `npm run build`
4. Build output directory: `dist`

Then point your Cloudflare domain to the Pages project. See `integration.md` for details.
