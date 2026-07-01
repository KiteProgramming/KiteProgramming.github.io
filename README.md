# Tasos Panayi — Portfolio

Personal portfolio of **Tasos Panayi**, Senior Software Engineer (Nicosia, Cyprus), and founder of
[PMP Novelty Solutions](https://pmpnoveltysolutions.com).

**Live:** https://kiteprogramming.github.io

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** with brand tokens (navy `#0F172A`, blue→cyan gradient)
- **Space Grotesk** (display) · **Inter** (body) · **JetBrains Mono** (labels/data), self-hosted via `@fontsource`
- Single-page, dark theme, responsive, reduced-motion aware, keyboard-navigable
- Deployed to **GitHub Pages** via GitHub Actions

## Develop

```bash
npm install      # install dependencies
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # typecheck + production build to dist/
npm run preview   # preview the production build locally
```

## Editing content

All copy and data live in one place: [`src/content.ts`](src/content.ts) — identity, experience,
projects, and skills. Edit there and the components re-render from it. Swap the downloadable CV by
replacing [`public/Tasos-Panayi-CV.pdf`](public/).

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds
the site and publishes `dist/` to GitHub Pages. In the repo, set **Settings → Pages → Build and
deployment → Source = GitHub Actions** once.

## Structure

```
src/
  content.ts          # single source of truth for all data/copy
  index.css           # design tokens, components, utilities, motion
  App.tsx             # layout + reveal-on-scroll observer
  components/
    Monogram.tsx      # "TP" gradient mark (nav, footer, favicon seed)
    Nav.tsx  Hero.tsx  About.tsx  Experience.tsx
    Work.tsx  Skills.tsx  Contact.tsx  Footer.tsx
public/
  favicon.svg  404.html  Tasos-Panayi-CV.pdf
```
