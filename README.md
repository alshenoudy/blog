# Monograph Terminal — Text-First Astro Blog Theme

[![Monograph Terminal theme preview](/preview.png)](https://monograph.xocoweb.workers.dev/)

[![Astro 7](https://img.shields.io/badge/Astro-7-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Configured-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-84cc16?style=for-the-badge)](./LICENSE)

**Live preview:** https://monograph.xocoweb.workers.dev/

Monograph Terminal is a free Astro theme for essays, notes, and long-form writing. It is text-first by design: the feed is a reading list rather than a card grid, so titles and excerpts carry the page and covers appear on the post itself. Type is monochrome with a single ink-blue accent held back for links, dates, and hover states, articles read in one centred column, and every hover runs on the same easing curve so nothing calls attention to itself.

Everything site-wide is driven from one file — [src/config/customize.ts](./src/config/customize.ts) — which splits the website brand (wordmark, page titles, RSS and OG metadata) from the author identity (name, role, CV) and also holds the full résumé (experience, education, projects, publications, skills), socials, navigation, and form settings. Content is Markdown or MDX validated by Astro content collections, and the output is static: fast pages, crawlable articles, and no framework islands to hydrate.

## Features

- Text-first front page: a compact CV hero (name, role caption, intro, contact pills, and experience) rendered from the shared identity header, featured posts as whitespace-separated cards, category pills, and archive/topics links — no thumbnails
- CV-style About page reusing the same identity header (name, role, intro) above Experience, Education, Projects, Publications, Skills, Interests, and contact sections with a uniform vertical rhythm
- Article pages with a single centred reading column, a byline with category and tags, a sticky floating table of contents (fixed rail on wide screens, collapsible above the article on narrow ones, with scroll-tracking highlight), a share block at the end of the article, copy-link, previous/next navigation, and related posts
- Two-level taxonomy: a short configured list of categories (`/categories/` index with descriptions and counts, one generated archive per category) plus free-form per-post tags with a `/topics/` index and a generated archive per topic
- Archive, search, about, contact, and 404 pages, plus RSS, sitemap, and `robots.txt`
- Built-in client-side search with a keyboard-friendly command palette (`Ctrl`/`⌘ K`) and a dedicated results page — no search service and no database, and nothing listed until the first keystroke
- System-aware light and dark modes behind a header toggle switch, applied before first paint with the reader's choice remembered
- Read time calculated from the post body at build time, so nothing to maintain by hand
- Markdown and MDX content powered by Astro content collections, with dual light/dark syntax-highlighted code blocks (plus a copy button), styled lists, and blockquotes
- Reusable MDX content components — `Callout` (note/tip/warning/danger) and tabbed `CodeGroup` code samples — available in any post with no imports
- Frontmatter validation for titles, excerpts, categories, dates, covers, featured, and drafts
- Sticky header that hides while scrolling down and slides back in on the way up, with a focus-trapped mobile menu overlay
- Restrained hover motion on one easing curve: titles pick up the accent, inline links wipe an underline in, arrows lean toward their destination, and icon buttons lift
- Optional feature images, capped in height and shown on the post only, never in a feed
- One standalone config file for identity, CV, socials, metadata, navigation, and forms — no config sprawl, no re-export shims
- Canonical URLs, sitemap generation, RSS, Open Graph, Twitter/X cards, and JSON-LD
- Accessible skip link, landmarks, labels, a `role="switch"` theme toggle, keyboard-friendly controls, visible focus states, and reduced-motion support
- Provider-neutral newsletter and contact forms that run as working demos until an endpoint is configured
- Tailwind CSS 4 tokens in cascade layers, with no external font requests by default

## Tech Stack

- Astro 7
- Tailwind CSS 4 via the Vite plugin
- TypeScript
- Astro content collections
- `@astrojs/sitemap`, `@astrojs/mdx`, `rehype-slug`
- Sharp for image processing

## Requirements

- Node.js `22.12.0` or newer
- npm

## Getting Started

```bash
npm install
npm run dev
```

Build for production and preview the output:

```bash
npm run build
npm run preview
```

Before deploying, edit [src/config/customize.ts](./src/config/customize.ts) — the brand, your identity and CV, socials, navigation, and form settings all live there. Set `siteUrl` before building for production: canonical URLs, RSS, the sitemap, social images, and JSON-LD all derive from it.

## Content

Posts live in [src/content/posts](./src/content/posts). Each post is a folder containing an
`index.md` or `index.mdx` and, optionally, a `cover.jpg`:

```yaml
---
title: "Design Tokens That Survive Product Growth"
excerpt: "Tokens work when they describe decisions."
category: "Articles" # must match src/config/categories.ts
tags: ["design-tokens", "component-libraries"] # optional, free-form
date: 2026-07-05
updatedDate: 2026-07-11 # optional
cover: # optional; shown on the post, never in the feed
  src: "./cover.jpg"
  alt: "Soft gradient mesh"
  creditName: "Credits to Codioful via Unsplash"
  creditUrl: "https://unsplash.com/photos/..."
featured: false # true lists it in the home Featured section
draft: false
---
```

Read time is calculated from the body at build time. The schema in
[src/content.config.ts](./src/content.config.ts) is enforced, so a typo fails the build rather than
shipping a broken page, and `category` must match an entry in
[src/config/categories.ts](./src/config/categories.ts). Tags are free-form — any string works, and
each tag gets an archive page at `/topic/<slug>/`.

## Routes

| Route                                                           | Page                                    |
| --------------------------------------------------------------- | --------------------------------------- |
| `/`                                                             | CV hero, featured posts, and categories |
| `/about/`                                                       | CV-style About page                     |
| `/archive/[page]/`                                              | Paginated archive                       |
| `/post/<slug>/`                                                 | Article                                 |
| `/categories/`                                                  | Category index with counts              |
| `/category/<slug>/`                                             | Posts in one category                   |
| `/topics/`                                                      | Tag index with counts                   |
| `/topic/<slug>/`                                                | Posts with one tag                      |
| `/search/`                                                      | Full search page (`?q=...`)             |
| `/contact/`, `/404`                                             | Starter pages                           |
| `/rss.xml`, `/sitemap.xml`, `/robots.txt`, `/search-index.json` | Feeds and generated endpoints           |

## Customization

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for site settings, navigation, categories, tags, the
newsletter and contact forms, search, reading mode, motion, theme tokens, fonts, and icons.

## Support

Monograph Terminal is free and provided as-is. Bug reports and questions are welcome as GitHub
issues; custom design and feature work is not included.

## License

MIT — free for personal and commercial projects. See [LICENSE](./LICENSE), which also lists the
licenses of the bundled fonts, icons, and demo images.
