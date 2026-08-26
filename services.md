# Services

This document lists every callable or deployable service in the project.

## Newsletter signup function

- **Name:** `newsletter`
- **Path:** `functions/api/newsletter.js`
- **Runtime:** Cloudflare Pages Functions
- **Route:** `/api/newsletter`
- **Status:** beta

### Inputs

HTTP `POST` request to `/api/newsletter` with JSON body:

```json
{
  "email": "subscriber@example.com"
}
```

Because the function runs on the same origin as the site, no cross-origin setup is required for production. CORS headers are still returned for flexibility.

### Outputs

JSON response:

```json
{
  "success": true,
  "message": "Kiitos! Olemme vastaanottaneet tilauksesi."
}
```

On error:

```json
{
  "error": "Human-readable Finnish or English error message"
}
```

### Side effects

1. Stores the subscriber email in a Cloudflare KV namespace if `SUBSCRIBERS` is bound.
2. Sends a notification email to `OWNER_EMAIL` via the SendGrid API.

### Required secrets

Set these in the Cloudflare Pages dashboard or with `wrangler pages secret put`:

- `SENDGRID_API_KEY` – API key from SendGrid.
- `OWNER_EMAIL` – The address that receives the signup notification.

### Optional environment variables

- `SENDGRID_FROM_EMAIL` – Sender address (default: `newsletter@kotitoimitus.com`).

### Local development

```bash
npm install
npm run build
npx wrangler pages dev dist --compatibility-date=2026-08-26
```

The function will be available at `http://localhost:8788/api/newsletter`.

### Deployment

Cloudflare Pages deploys the function automatically when the project is connected to this GitHub repository. Build command: `npm run build`. Build output directory: `dist`.
