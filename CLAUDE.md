# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at http://localhost:5173 (HMR enabled)
npm run build     # tsc type-check then vite build → dist/
npm run preview   # serve dist/ locally at http://localhost:4173
npm run lint      # eslint across all .ts/.tsx files
```

There are no tests. `npm run build` is the canonical correctness check — it runs `tsc -b` first, so a clean build means zero TypeScript errors.

## Architecture

This is a **single-page, no-router React app**. All navigation links are hash anchors or `#` placeholders; no `react-router-dom` is installed.

### Data → UI flow

All content is declared once in **`src/data/instances.ts`** and flows down as props — no state management, no API calls:

```
src/data/instances.ts
  cropGroups[]  →  DatabasesSection  →  InstanceCard (one per instance)
  comingSoonCrops[]  →  ComingSoonStrip
```

**`src/data/instances.ts` is the only file that needs editing to add/update crops or instances.** `DatabasesSection` reads the array and auto-adjusts the card grid column count (`gridColsClass()` helper maps instance count → Tailwind class, capped at 4 columns).

### Styling

Tailwind CSS v4 — **no `tailwind.config.js`**. All custom tokens live in `src/index.css` inside an `@theme {}` block and are processed by the `@tailwindcss/vite` plugin. The CIMMYT green scale (`cimmyt-50` through `cimmyt-900`) is defined there; `cimmyt-500` (`#4a7c3f`) is the primary brand colour. Use these tokens as standard Tailwind utilities (`bg-cimmyt-500`, `text-cimmyt-700`, etc.).

Inter is self-hosted via `@fontsource/inter` — weights 300–700 are imported at the top of `index.css`. No Google Fonts CDN is used.

### Deployment

**`base` in `vite.config.ts` is set to `'/dev/'`** — all built asset paths are prefixed with `/dev/`. Change to `'/'` when promoting to production. CI/CD runs via a self-hosted GitHub Actions runner on the target server; pushing to `main` triggers `.github/workflows/deploy-dev.yml`, which builds and rsyncs `dist/` to `/var/www/html/dev/`.

### Key constraints

- No UI component library — all components are hand-crafted Tailwind.
- No router — add `react-router-dom` only when sub-pages are implemented.
- `noUnusedLocals` and `noUnusedParameters` are enforced by `tsconfig.app.json`; the build will fail if either is violated.
- Fields marked `[PLACEHOLDER]` in `instances.ts` are intentional — do not replace them with invented data.
