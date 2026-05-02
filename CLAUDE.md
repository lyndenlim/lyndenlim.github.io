# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at localhost:3000
npm run build      # production build → ./build
npm run deploy     # build + push to gh-pages branch (manual deploy fallback)
```

Deployment happens automatically via GitHub Actions on every push to `main` — the workflow builds with `CI=false` (suppresses lint warnings) and deploys the `./build` artifact to GitHub Pages at `lyndenlim.github.io`.

## Architecture

Single-page React portfolio (Create React App + SCSS). No backend.

**Entry point flow:** `index.js` → `App.js` (React Router) → `HomePage.js` is the primary experience at `/`. The other routes (`/about`, `/projects`, etc.) render individual section components standalone but are not linked anywhere — the real UX is a single full-page scroll.

**Section scroll architecture:** `HomePage.js` owns all state. A scroll listener computes `activeSectionId` by comparing `window.scrollY` against section `ref.current.offsetTop`. This drives the NavBar's sliding pill (Framer Motion `layoutId="navPill"`). The NavBar only mounts after scrolling past the hero (`showTopButton` gate). `scrollTo(id)` uses `react-scroll` scroller and is passed down as a single prop.

**Shared constants (`src/constants.js`):** Single source of truth for:
- `SECTION_MOTION` — Framer Motion props spread onto every section's root `motion.div`
- `SCROLL_DURATION` — used by all scroll calls
- `RESUME_URL` — Google Drive link used in NavBar and Contact

**Styling:** All styles live in one file — `src/index.scss`. CSS custom properties on `:root` drive the dark theme; `body.light` overrides them for light mode. The theme class is applied directly to `document.body` in a `useEffect`. No CSS modules or component-scoped styles.

**Key design details:**
- Fonts: `Bricolage Grotesque` (display/headings, variable font) + `Syne` (UI/body)
- Accent color: `#2dd4bf` (teal) — referenced as `var(--accent)`
- NavBar pill is a Framer Motion shared layout animation (`layoutId="navPill"`) with spring physics `stiffness: 240, damping: 16, mass: 0.8`
- Hero animations are CSS keyframes (`nameReveal`, `fadeSlideUp`) with explicit `animation-delay` stagger — not Framer Motion
- All section wrappers use `{...SECTION_MOTION}` for consistent scroll-triggered reveal

**Projects modal:** `ProjectModal` in `Projects.js` is a single component driven by the `projects` data array (module scope). `modalProject` state holds the full project object or `null`.
