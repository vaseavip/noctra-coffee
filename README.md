# NOCTRA COFFEE

A concept website for **NOCTRA COFFEE** — a fictional premium, cinematic specialty coffee house. Built as a frontend portfolio piece: no backend, no auth, no real ordering system, just an intentional piece of interface and brand design.

> *Coffee after dark. Specialty coffee for slow mornings and late conversations.*

## Concept

NOCTRA is designed as an editorial, atmosphere-first site rather than a template-driven "coffee shop landing page." Each section has its own composition instead of a repeating title/cards/title pattern — an editorial philosophy spread, a menu built around one featured drink and a minimal price list, an asymmetric mood collage, a stylized (non-literal) location map, and a typographic hours table.

**Palette** — espresso, charcoal, warm cream, caramel, and copper, alternated across sections (dark editorial ↔ warm cream) rather than one flat background for the whole page, with a very subtle grain texture for depth.

**Type** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (warm, editorial serif) for display headings against [Manrope](https://fonts.google.com/specimen/Manrope) (clean geometric sans) for body copy.

**Hero** — a looping cinematic video (cappuccino, dark studio lighting) as the full-bleed background, framed so the cup sits right and the headline sits left over a soft gradient scrim. A very subtle (≤8px), heavily damped cursor parallax sits on top of the video's own motion; both the parallax and playback stop under `prefers-reduced-motion`, leaving a still frame.

## Technology

- **React 19 + TypeScript + Vite**
- **CSS Modules** with a hand-written design-token system (no CSS framework) — colors, type scale, spacing, and motion easing all live in [`src/styles/tokens.css`](src/styles/tokens.css)
- **Framer Motion** for scroll reveals, the mobile menu transition, and the magnetic CTA hover

## Features

- Fully custom, non-templated section compositions (video hero, editorial philosophy spread, featured-product menu, asymmetric photo collage, a real interior photo with a stylized location badge, typographic hours, closing CTA)
- Full-bleed looping video hero with a responsive gradient scrim (re-framed for portrait phones/tablets so the cup never covers the headline) and a subtle cursor parallax that's disabled under `prefers-reduced-motion`
- Real photography throughout the menu and experience sections (sourced from Unsplash, see "Imagery" below), color-graded to one consistent warm palette, lazy-loaded and sized to avoid layout shift
- Scroll-triggered reveals and a magnetic CTA hover, both disabled under `prefers-reduced-motion`
- Fully responsive layout re-composed (not just shrunk) for mobile, including a full-screen mobile navigation panel
- Semantic HTML, single `h1`, logical heading order, visible focus states, skip-to-content link, and a keyboard-dismissible (`Esc`) mobile menu
- Basic SEO: descriptive title/meta description, Open Graph + Twitter card tags, semantic structure, custom favicon

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Type-checks the project (`tsc -b`) and produces a production build in `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  components/     Shared UI: navbar, footer, buttons, scroll-reveal wrapper
  sections/       One file + one CSS module per page section
  data/           Menu, hours, and "experience" content as plain data (incl. image imports)
  hooks/          prefers-reduced-motion, media query, and scroll-position hooks
  styles/         Design tokens and global/reset styles
  assets/photos/  Optimized WebP photography (see "Imagery" below)
```

The hero's background video lives in `public/` (served as a static asset, not bundled) and is referenced directly by `src/sections/Hero.tsx`.

## Imagery

Every photograph on the site is a real, unaltered (aside from a shared color grade) photo — none are AI-generated. All are sourced from [Unsplash](https://unsplash.com) and used under the [Unsplash License](https://unsplash.com/license) (free for commercial and personal use, no permission or attribution required). Credited here anyway, because it's their work:

| Section | Subject | Photographer |
|---|---|---|
| Signature coffee — featured | Midnight Espresso | Nathan Dumlao |
| Signature coffee | Velvet Latte | Nathan Dumlao |
| Signature coffee | Noctra Cold Brew | Nathan Dumlao |
| Signature coffee | Ember Mocha | Giancarlo Duarte |
| The experience | Late mornings | Aimee Giles |
| The experience | Quiet work | Inka Kapturewska |
| The experience | Conversations | Florian Siedl |
| The experience | Evening coffee | Nathan Dumlao |
| Our space | Interior | Yuda Laurensius |

Downloaded once and committed as optimized WebP under `src/assets/photos/` — the site never calls the Unsplash API at runtime. Every `<img>` shares a `.photo` filter (see `src/styles/global.css`) that nudges saturation/contrast/warmth so photos from different shoots read as one consistent palette.
