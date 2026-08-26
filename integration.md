# External services and integrations

## SendGrid

- **Purpose:** Transactional email delivery for newsletter signup notifications.
- **Endpoint:** `https://api.sendgrid.com/v3/mail/send`
- **Auth:** Bearer token via `SENDGRID_API_KEY` secret.
- **Docs:** https://docs.sendgrid.com/api-reference/mail-send/mailsend
- **Notes:** A free SendGrid account is sufficient for low-volume notifications. You should verify a sending domain or use a domain that SendGrid has authenticated to ensure reliable delivery.

## Cloudflare Pages

- **Purpose:** Static site hosting, serverless functions, and CDN for Kotitoimitus.com.
- **Function path:** `functions/api/newsletter.js`
- **Build command:** `npm run build` (use `npm run build && npm run indexnow` to auto-submit URLs to IndexNow after each build)
- **Build output directory:** `dist`
- **Config file:** `wrangler.toml`
- **Secrets:** `SENDGRID_API_KEY`, `OWNER_EMAIL` (set via the Cloudflare Pages dashboard or `wrangler pages secret put`)
- **Environment variables for IndexNow:** `SITE_URL`, `INDEXNOW_API_KEY` (only needed if you run `npm run indexnow` in the build pipeline)
- **Optional binding:** Cloudflare KV namespace `SUBSCRIBERS` for storing emails.
- **Docs:** https://developers.cloudflare.com/pages/

## Cloudflare domain / DNS

- **Purpose:** Custom domain for the static site.
- **Action required:** Add a CNAME record in Cloudflare DNS pointing to the Cloudflare Pages project domain.
- **Docs:** https://developers.cloudflare.com/dns/

## IndexNow

- **Purpose:** Notify Bing, Yandex, Naver, Seznam.cz and other participating search engines about new or updated URLs immediately.
- **Endpoint:** `https://api.indexnow.org/IndexNow`
- **Script:** `scripts/submit-indexnow.js`
- **Required env vars:** `INDEXNOW_API_KEY`, `SITE_URL`
- **Verification:** The script creates `public/<api-key>.txt` automatically.
- **Docs:** https://www.indexnow.org/documentation

## Google Search Console / Bing Webmaster Tools

- **Purpose:** Monitor indexing status, submit sitemaps, and diagnose SEO issues.
- **Action required:** Add the property in each console and submit `https://kotitoimitus.com/sitemap.xml`.
- **Notes:** For Google, use the Search Console sitemap submission. For Bing, use IndexNow or Webmaster Tools.

## Google Fonts

- **Purpose:** Loads the Noto Sans font family.
- **Endpoint:** `https://fonts.googleapis.com` and `https://fonts.gstatic.com`
- **Notes:** Loaded with `preconnect` for performance.
