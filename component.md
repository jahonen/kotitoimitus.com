# Components

This document lists every visual component in the Kotitoimitus.com static site.

## Layout / page shells

| Component | Path | Purpose | Lifecycle |
|-----------|------|---------|-----------|
| App | `src/App.jsx` | Root layout shell. Renders Header, main content sections, and Footer. | beta |

## Visual components

| Component | Path | Purpose | Inputs | Outputs | Side effects | Lifecycle |
|-----------|------|---------|--------|---------|--------------|-----------|
| Header | `src/components/Header/Header.jsx` | Sticky site header with logo, brand title, tagline, responsive hamburger menu and navigation links. | None | Rendered DOM | Toggles mobile menu state | beta |
| Hero | `src/components/Hero/Hero.jsx` | Introduction section with gradient background, decorative SVG, value proposition and primary/secondary CTAs. | None | Rendered DOM | None | beta |
| Services | `src/components/Services/Services.jsx` | Responsive grid of service cards with inline SVG icons. | Hardcoded `services` array | Rendered DOM | None | beta |
| Audience | `src/components/Audience/Audience.jsx` | Target customer groups as responsive checkmark cards. | Hardcoded `audiences` array | Rendered DOM | None | beta |
| Compliance | `src/components/Compliance/Compliance.jsx` | Legal compliance requirements as responsive cards with highlighted note box. | Hardcoded `requirements` array | Rendered DOM | None | beta |
| Blog | `src/components/Blog/Blog.jsx` | Lists latest blog posts with links, dates and descriptions. | Hardcoded `posts` array | Rendered DOM + links | None | beta |
| Newsletter | `src/components/Newsletter/Newsletter.jsx` | Email signup form with loading, success and error states. | Optional `VITE_NEWSLETTER_WORKER_URL` env var (defaults to `/api/newsletter`) | Rendered DOM + `fetch` POST to function | Calls Cloudflare Pages Function on submit | beta |
| Footer | `src/components/Footer/Footer.jsx` | Multi-column site footer with navigation, links and copyright. | None | Rendered DOM | None | beta |

## Static page templates

| Page | Path | Purpose | Lifecycle |
|------|------|---------|-----------|
| Welcome blog post | `public/blog/tervetuloa-tasta-kotitoimitus-sai-alkunsa.html` | Self-contained SEO-ready blog post with favicons, Ahrefs analytics and logo-branded header. | beta |

## Styling

- Shared variables, resets, dark-mode preferences and breakpoints are in `src/main.scss`.
- Each component has its own SCSS file co-located in its folder.
- Class naming follows BEM-ish block/element conventions.
- The color palette is derived from the Kotitoimitus logo: deep green (`#0f3d36`) as primary and gold (`#c9a86c`) as accent.

## Favicon / logo assets

- Favicon and icon files are copied from `asset/` to `public/` and linked in `index.html` and blog templates.
- The logo is displayed in the Header and blog header using `/apple-touch-icon.png`.
