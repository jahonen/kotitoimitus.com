# External services and integrations

## Resend

- **Purpose:** Transactional email delivery for newsletter signup notifications.
- **Endpoint:** `https://api.resend.com/emails`
- **Auth:** Bearer token via `RESEND_API_KEY` secret.
- **Docs:** https://resend.com/docs
- **Notes:** A free Resend account is sufficient for low-volume notifications. You must verify a sending domain or use a shared domain before emails can be delivered reliably.

## Cloudflare Workers

- **Purpose:** Serverless backend for the newsletter signup form.
- **Resource:** `workers/newsletter-worker/`
- **Secrets:** `RESEND_API_KEY`, `OWNER_EMAIL`
- **Optional binding:** Cloudflare KV namespace `SUBSCRIBERS` for storing emails.
- **Docs:** https://developers.cloudflare.com/workers/

## Cloudflare domain / DNS

- **Purpose:** Custom domain for the static site.
- **Action required:** Point the domain's DNS A/AAAA or CNAME records to DanubeData once the site is created.
- **Docs:** https://developers.cloudflare.com/dns/

## DanubeData Static Sites

- **Purpose:** Static site hosting with custom domain, TLS, and global caching.
- **Deployment methods:** Git repository (recommended), ZIP upload, or CLI push.
- **Publish directory:** `dist`
- **Config file:** `danube.json`
- **Docs:** https://docs.danubedata.ro/static-sites

## Google Fonts

- **Purpose:** Loads the Noto Sans font family.
- **Endpoint:** `https://fonts.googleapis.com` and `https://fonts.gstatic.com`
- **Notes:** Loaded with `preconnect` for performance.
