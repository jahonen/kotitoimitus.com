# Components

This document lists every visual component in the Kotitoimitus.com static site.

## Layout / page shells

| Component | Path | Purpose |
|-----------|------|---------|
| App | `src/App.jsx` | Root layout shell. Renders Header, main content sections, and Footer. |

## Visual components

| Component | Path | Purpose | Inputs | Outputs | Side effects |
|-----------|------|---------|--------|---------|--------------|
| Header | `src/components/Header/Header.jsx` | Site header with title and tagline. | None | Rendered DOM | None |
| Hero | `src/components/Hero/Hero.jsx` | Introduction section with the law change summary. | None | Rendered DOM | None |
| Services | `src/components/Services/Services.jsx` | Lists B2B service offerings. | None | Rendered DOM | None |
| Audience | `src/components/Audience/Audience.jsx` | Lists target customer groups. | None | Rendered DOM | None |
| Compliance | `src/components/Compliance/Compliance.jsx` | Legal compliance summary. | None | Rendered DOM | None |
| Blog | `src/components/Blog/Blog.jsx` | Lists latest blog posts with links. | Hardcoded `posts` array | Rendered DOM + links | None |
| Newsletter | `src/components/Newsletter/Newsletter.jsx` | Email signup form for the newsletter. | Optional `VITE_NEWSLETTER_WORKER_URL` env var (defaults to `/api/newsletter`) | Rendered DOM + `fetch` POST to function | Calls Cloudflare Pages Function on submit |
| Footer | `src/components/Footer/Footer.jsx` | Site footer with copyright. | None | Rendered DOM | None |

## Styling

- Shared variables and resets are in `src/main.scss`.
- Each component has its own SCSS file co-located in its folder.
- Class naming follows BEM-ish block/element conventions.
