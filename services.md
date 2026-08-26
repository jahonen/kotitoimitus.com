# Services

This document lists every callable or deployable service in the project.

## Newsletter signup worker

- **Name:** `kotitoimitus-newsletter-worker`
- **Path:** `workers/newsletter-worker/`
- **Runtime:** Cloudflare Workers
- **Entry point:** `workers/newsletter-worker/src/index.js`
- **Deployment config:** `workers/newsletter-worker/wrangler.toml`
- **Status:** beta

### Inputs

HTTP `POST` request to the worker URL with JSON body:

```json
{
  "email": "subscriber@example.com"
}
```

The request must include a valid `Origin` header matching the allowed site domain (CORS).

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
2. Sends a notification email to `OWNER_EMAIL` via the Resend API.

### Required secrets

Set these with `wrangler secret put`:

- `RESEND_API_KEY` – API key from Resend.
- `OWNER_EMAIL` – The address that receives the signup notification.

### Optional environment variables

- `RESEND_FROM_EMAIL` – Sender address (default: `newsletter@kotitoimitus.com`).

### Local development

```bash
cd workers/newsletter-worker
npm install
npx wrangler dev
```

### Deployment

```bash
cd workers/newsletter-worker
npx wrangler deploy
```
