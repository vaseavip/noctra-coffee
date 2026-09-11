# NOCTRA COFFEE

A concept website for **NOCTRA COFFEE** — a fictional premium, cinematic specialty coffee house. Built as a frontend portfolio piece: no backend, no auth, no real ordering system, just an intentional piece of interface and brand design.

> *Coffee after dark. Specialty coffee for slow mornings and late conversations.*

## Concept

NOCTRA is designed as an editorial, atmosphere-first site rather than a template-driven "coffee shop landing page." Each section has its own composition instead of a repeating title/cards/title pattern — an editorial philosophy spread, a menu built around one featured drink and a minimal price list, an asymmetric mood collage, a stylized (non-literal) location map, and a typographic hours table.

**Palette** — espresso, charcoal, warm cream, caramel, and copper, alternated across sections (dark editorial ↔ warm cream) rather than one flat background for the whole page, with a very subtle grain texture for depth.

**Type** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (warm, editorial serif) for display headings against [Manrope](https://fonts.google.com/specimen/Manrope) (clean geometric sans) for body copy.

**3D element** — a sculptural, abstract ceramic vessel (not a literal coffee mug) rendered with Three.js / React Three Fiber. It idles with a slow auto-rotation and drifts toward the cursor with heavy damping — no fast spins, nothing that competes for attention with the copy.

## Technology

- **React 19 + TypeScript + Vite**
- **CSS Modules** with a hand-written design-token system (no CSS framework) — colors, type scale, spacing, and motion easing all live in [`src/styles/tokens.css`](src/styles/tokens.css)
- **Framer Motion** for scroll reveals, the mobile menu transition, and the magnetic CTA hover
- **Three.js / @react-three/fiber / @react-three/drei** for the hero's 3D vessel, lazy-loaded on its own chunk so the rest of the site never waits on it

## Features

- Fully custom, non-templated section compositions (hero, editorial philosophy spread, featured-product menu, asymmetric mood collage, stylized map, typographic hours, closing CTA)
- 3D hero element with a static SVG fallback for `prefers-reduced-motion`, missing WebGL support, or small/touch viewports
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
  components/     Shared UI: navbar, footer, buttons, scroll-reveal wrapper, the 3D vessel
    vessel/       The R3F scene, its lathe-geometry profile, and the static fallback poster
  sections/       One file + one CSS module per page section
  data/           Menu, hours, and "experience" content as plain data
  hooks/          prefers-reduced-motion, media query, and scroll-position hooks
  styles/         Design tokens and global/reset styles
```

## Notes on imagery

This is a concept brand with no real photoshoot to draw from. Rather than mix in stock photography that would break the site's art direction, the "photographic" moments (the mood collage, the menu marks, the location map) are built as custom SVG/CSS compositions in the same warm, graded palette — coherent by construction. They're structured so real photography could drop in later without a rebuild.
