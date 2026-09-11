# NOCTRA COFFEE

A concept website for **NOCTRA COFFEE** — a fictional premium, cinematic specialty coffee house. Built as a frontend portfolio piece: no backend, no auth, no real ordering system, just an intentional piece of interface and brand design.

> *Coffee after dark. Specialty coffee for slow mornings and late conversations.*

## Concept

NOCTRA is designed as an editorial, atmosphere-first site rather than a template-driven "coffee shop landing page." Each section has its own composition instead of a repeating title/cards/title pattern — an editorial philosophy spread, a menu built around one featured drink and a minimal price list, an asymmetric mood collage, a stylized (non-literal) location map, and a typographic hours table.

**Palette** — espresso, charcoal, warm cream, caramel, and copper, alternated across sections (dark editorial ↔ warm cream) rather than one flat background for the whole page, with a very subtle grain texture for depth.

**Type** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (warm, editorial serif) for display headings against [Manrope](https://fonts.google.com/specimen/Manrope) (clean geometric sans) for body copy.

**3D element** — a small field of procedurally-generated coffee beans (Three.js / React Three Fiber), each an individually seeded, noise-roughened geometry with the characteristic center crease — no two identical. They drift down slowly with a gentle sway and a very slow tumble, with a heavily damped, clamped reaction to the cursor so nothing accelerates near the viewport edges.

## Technology

- **React 19 + TypeScript + Vite**
- **CSS Modules** with a hand-written design-token system (no CSS framework) — colors, type scale, spacing, and motion easing all live in [`src/styles/tokens.css`](src/styles/tokens.css)
- **Framer Motion** for scroll reveals, the mobile menu transition, and the magnetic CTA hover
- **Three.js / @react-three/fiber** for the hero's coffee-bean field, lazy-loaded on its own chunk so the rest of the site never waits on it

## Features

- Fully custom, non-templated section compositions (hero, editorial philosophy spread, featured-product menu, asymmetric photo collage, a real interior photo with a stylized location badge, typographic hours, closing CTA)
- A field of ~9–17 procedurally generated coffee beans in the hero, each individually seeded so no two are identical, falling slowly with a clamped, damped reaction to the cursor — with a static SVG fallback for `prefers-reduced-motion`, missing WebGL support, or small/touch viewports
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
  components/     Shared UI: navbar, footer, buttons, scroll-reveal wrapper, the 3D bean field
    beans/        The R3F scene, procedural bean geometry, and the static fallback poster
  sections/       One file + one CSS module per page section
  data/           Menu, hours, and "experience" content as plain data (incl. image imports)
  hooks/          prefers-reduced-motion, media query, and scroll-position hooks
  styles/         Design tokens and global/reset styles
  assets/photos/  Optimized WebP photography (see "Imagery" below)
```

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
