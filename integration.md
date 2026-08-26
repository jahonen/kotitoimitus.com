# External services and integrations

## Resend

- **Purpose:** Transactional email delivery for newsletter signup notifications.
- **Endpoint:** `https://api.resend.com/emails`
- **Auth:** Bearer token via `RESEND_API_KEY` secret.
- **Docs:** https://resend.com/docs
- **Notes:** A free Resend account is sufficient for low-volume notifications. You must verify a sending domain or use a Resend-provided shared domain before emails can be delivered reliably.

## Cloudflare Pages

- **Purpose:** Static site hosting, serverless functions, and CDN for Kotitoimitus.com.
- **Function path:** `functions/api/newsletter.js`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Config file:** `wrangler.toml`
- **Secrets:** `RESEND_API_KEY`, `OWNER_EMAIL` (set via the Cloudflare Pages dashboard or `wrangler pages secret put`)
- **Optional binding:** Cloudflare KV namespace `SUBSCRIBERS` for storing emails.
- **Docs:** https://developers.cloudflare.com/pages/

## Cloudflare domain / DNS

- **Purpose:** Custom domain for the static site.
- **Action required:** Add a CNAME record in Cloudflare DNS pointing to the Cloudflare Pages project domain.
- **Docs:** https://developers.cloudflare.com/dns/

## Google Fonts

- **Purpose:** Loads the Noto Sans font family.
- **Endpoint:** `https://fonts.googleapis.com` and `https://fonts.gstatic.com`
- **Notes:** Loaded with `preconnect` for performance.
