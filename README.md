# SNP-Seek Landing Page

> Static landing page for the **SNP-Seek** multi-crop genomic variant database,  
> maintained by [CIMMYT Breeding Resources & Services (BRS)](https://www.cimmyt.org/).

| Environment | URL |
|---|---|
|  |
| Production *(future)* | `http://brs-snpseek.duckdns.org/` |

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Local Development](#local-development)
4. [Build for Production](#build-for-production)
5. [Architecture Overview](#architecture-overview)
6. [Component Reference](#component-reference)
   - [App.tsx](#apptsx)
   - [Navbar.tsx](#navbartsx)
   - [Hero.tsx](#herotsx)
   - [DatabasesSection.tsx](#databasessectiontsx)
   - [InstanceCard.tsx](#instancecardtsx)
   - [ComingSoonStrip.tsx](#comingsoonstriptsx)
   - [Footer.tsx](#footertsx)
7. [Data Layer — instances.ts](#data-layer--instancests)
   - [SnpInstance interface](#snpinstance-interface)
   - [CropGroup interface](#cropgroup-interface)
   - [Adding a new crop](#adding-a-new-crop)
   - [Adding a new instance to an existing crop](#adding-a-new-instance-to-an-existing-crop)
   - [Coming-soon list](#coming-soon-list)
8. [Styling & Design Tokens](#styling--design-tokens)
   - [CIMMYT Green scale](#cimmyt-green-scale)
   - [Typography](#typography)
   - [Tailwind v4 @theme](#tailwind-v4-theme)
9. [Configuration Files](#configuration-files)
   - [vite.config.ts](#viteconfigts)
   - [index.css](#indexcss)
   - [index.html](#indexhtml)
10. [CI/CD — GitHub Actions](#cicd--github-actions)
    - [How it works](#how-it-works)
    - [Self-hosted runner setup](#self-hosted-runner-setup)
    - [Promoting to production](#promoting-to-production)
11. [Nginx Deployment](#nginx-deployment)
    - [/dev location block](#dev-location-block)
    - [Production root block](#production-root-block)
12. [Planned Pages](#planned-pages)

---

## Tech Stack

| Layer | Library / Tool | Version |
|---|---|---|
| Build tool | [Vite](https://vitejs.dev/) | 8.x |
| UI framework | [React](https://react.dev/) | 19.x |
| Language | TypeScript | 6.x |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` | 4.3.x |
| Font | [Inter](https://fontsource.org/fonts/inter) via `@fontsource/inter` | 5.x |

No UI component library is used. All components are hand-crafted with Tailwind utility classes.

---

## Project Structure

```
bio-snpseek-tools/
│
├── index.html                        # HTML entry point — page title & meta
├── vite.config.ts                    # Vite config — Tailwind plugin, base: '/'
├── package.json
├── tsconfig.app.json
├── tsconfig.node.json
│
└── src/
    ├── main.tsx                      # React DOM root mount
    ├── App.tsx                       # Root component — assembles all sections
    ├── index.css                     # Global styles: @theme tokens, Inter imports
    │
    ├── data/
    │   └── instances.ts              # ★ All content lives here — crops & instances
    │
    └── components/
        ├── Navbar.tsx                # Sticky top nav with mobile hamburger
        ├── Hero.tsx                  # Full-width hero with stats row
        ├── DatabasesSection.tsx      # Grouped crop sections with instance cards
        ├── InstanceCard.tsx          # Individual database card (opens new tab)
        ├── ComingSoonStrip.tsx       # Dark green banner with coming-soon chips
        └── Footer.tsx                # Three-column footer with brand + links
```

---

## Local Development

### Prerequisites

- **Node.js ≥ 20** (LTS recommended)
- npm ≥ 10

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The dev server starts at **`http://localhost:5173`** with hot module replacement enabled.

### Lint

```bash
npm run lint
```

---

## Build for Production

```bash
npm run build
```

This runs `tsc -b` (TypeScript type-check) then `vite build`. Output goes to `dist/`.

To preview the production build locally before deploying:

```bash
npm run preview
# → http://localhost:4173
```

---

## Architecture Overview

The application is a **single React component tree** with no client-side router. All navigation links are either hash anchors (`#databases`) or placeholder `#` hrefs ready to be replaced with real routes when sub-pages are added.

```
main.tsx
  └─ <App>
       ├─ <Navbar>           sticky, z-50
       └─ <main>
            ├─ <Hero>
            ├─ <DatabasesSection>
            │    └─ <InstanceCard> × N   (one per instance)
            └─ <ComingSoonStrip>
       └─ <Footer>
```

**Data flows one way:** `instances.ts` → imported by `DatabasesSection` and `ComingSoonStrip` → passed as props to `InstanceCard`. No state management library is needed.

---

## Component Reference

### `App.tsx`

Root component. Imports and composes every section in document order. No logic — purely structural.

```tsx
export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DatabasesSection />
        <ComingSoonStrip />
      </main>
      <Footer />
    </>
  );
}
```

---

### `Navbar.tsx`

**Sticky top navigation bar.** Sits at `z-50` with a white background and a subtle bottom border/shadow so it always floats over page content.

| Feature | Detail |
|---|---|
| Logo | CIMMYT-green rounded square icon + "SNP-Seek" wordmark + "CIMMYT BRS" sub-label |
| Desktop links | Inline horizontal list; hidden below `md` breakpoint |
| Mobile | Hamburger button toggles a dropdown below the bar |
| Active state | Hover shifts text to `cimmyt-600` with a `cimmyt-50` background pill |

**Nav links** are declared at the top of the file in a plain array — easy to extend:

```ts
const NAV_LINKS = [
  { label: "Databases", href: "#databases" },
  { label: "API",           href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Publications",  href: "#" },
  { label: "About",         href: "#" },
];
```

Replace `"#"` with real paths once sub-pages exist.

---

### `Hero.tsx`

**Full-width hero section.** White background with two decorative elements (a CSS grid pattern overlay and a radial green gradient blob in the top-right corner) that add depth without distracting from content.

| Sub-element | Description |
|---|---|
| Eyebrow badge | Pill with animated green pulse dot and org name |
| `<h1>` | "SNP-Seek" with `-Seek` in CIMMYT green |
| Subtitle | "Multi-Crop Genomic Variant Database" |
| Description | Two-sentence platform overview |
| CTA buttons | Primary (green, filled) → `#databases`; Secondary (outlined) → API docs |
| Stats row | 5-cell grid: Crop Species, DB Instances, Accessions, SNP Variants, Genotyped Lines |

**Stats** are hardcoded in the component as a local array — all values are **placeholders**:

```ts
const STATS = [
  { label: "Crop Species",     value: "1+"    },
  { label: "Database Instances", value: "4"   },
  { label: "Accessions",       value: "~29 K" },
  { label: "SNP Variants",     value: "~64 M" },
  { label: "Genotyped Lines",  value: "~50 K" },
];
```

Update these values directly in `Hero.tsx` when real figures are available.

---

### `DatabasesSection.tsx`

**Main content section** (`id="databases"`). Reads from `cropGroups` in `instances.ts` and renders one subsection per crop group.

Each crop group renders:
1. A header row — emoji + common name + italic scientific name + horizontal rule + instance count
2. A responsive card grid — `1 col → 2 col (sm) → 4 col (lg)` — of `<InstanceCard>` components

```tsx
import { cropGroups } from "../data/instances";
import InstanceCard from "./InstanceCard";
```

To add crops, edit `instances.ts` only — this component requires no changes.

---

### `InstanceCard.tsx`

**Clickable card** for a single database instance. The entire card is an `<a>` tag with `target="_blank" rel="noopener noreferrer"`.

| Visual zone | Content |
|---|---|
| Header | Instance name (left) + optional reference genome badge (right) |
| Body | One-sentence description |
| Footer | Accession count — divider — SNP count — external link arrow icon |

On hover: border shifts to `cimmyt-300`, shadow deepens, title shifts to `cimmyt-700`, the link arrow turns green.

**Props** — single `instance: SnpInstance` object (see [Data Layer](#data-layer--instancests)).

---

### `ComingSoonStrip.tsx`

**Full-width dark green banner** (`bg-cimmyt-700`) between the databases section and the footer. Reads from `comingSoonCrops` in `instances.ts`.

Layout (desktop): `[Coming Soon label] | [crop chips…] | [note text]`  
Layout (mobile): stacks vertically; divider and right-aligned note hide below `sm`.

Each chip is a pill showing the crop emoji and name. No links — purely informational.

---

### `Footer.tsx`

**Dark footer** (`bg-slate-900`) with a 4-column grid:

| Column | Content |
|---|---|
| 1 (brand) | DNA icon + SNP-Seek wordmark + one-line description |
| 2 (Platform) | Databases, API, Documentation |
| 3 (Research) | Publications, Tutorials, Data Downloads |
| 4 (Organization) | About CIMMYT BRS, Contact, Privacy Policy |

Bottom bar: copyright line (year computed from `new Date()`) + domain name.

All footer links use `href="#"` as placeholders. Replace them when real pages exist.

---

## Data Layer — `instances.ts`

> **`src/data/instances.ts` is the single source of truth for all crop and database content.**  
> No other file needs to be edited when adding crops or instances.

### `SnpInstance` interface

```ts
export interface SnpInstance {
  name: string;        // Card title, e.g. "3K RG SNP-Seek"
  url: string;         // Full URL — opens in a new tab
  description: string; // One-sentence dataset description
  accessions: string;  // Displayed as-is, e.g. "3,024" or "~18,000"
  snpCount: string;    // Displayed as-is, e.g. "~29 M"
  badge?: string;      // Optional — reference genome tag, e.g. "IRGSP-1.0"
}
```

### `CropGroup` interface

```ts
export interface CropGroup {
  emoji: string;         // Shown large in the section header
  commonName: string;    // e.g. "Rice"
  scientificName: string;// Shown in italic, e.g. "Oryza sativa"
  instances: SnpInstance[];
}
```

### Current data (Rice — 4 instances)

| Instance | Accessions | SNPs | Badge |
|---|---|---|---|
| 3K RG SNP-Seek | 3,024 | ~29 M | IRGSP-1.0 |
| IRIS SNP-Seek | ~18,000 | ~15 M | IRGSP-1.0 |
| Indica SNP-Seek | ~6,500 | ~12 M | 93-11 v7 |
| Wild Rice SNP-Seek | ~1,200 | ~8 M | Multi-ref |

> ⚠️ All values above are **placeholders**. Replace them in `instances.ts` before publishing.

### Adding a new crop

Append to the `cropGroups` array in `src/data/instances.ts`:

```ts
{
  emoji: "🌽",
  commonName: "Maize",
  scientificName: "Zea mays",
  instances: [
    {
      name: "Maize SNP-Seek v1",
      url: "https://brs-snpseek.duckdns.org/maize",
      description: "Genome-wide SNP data for the Maize Diversity Panel.",
      accessions: "1,000",
      snpCount: "~5 M",
      badge: "B73 RefGen_v4",
    },
  ],
},
```

The `DatabasesSection` component will automatically render the new group — no component changes needed.

### Adding a new instance to an existing crop

Push an `SnpInstance` object into the target crop's `instances` array. The card grid re-flows automatically (`sm:grid-cols-2 lg:grid-cols-4`).

### Coming-soon list

Edit `comingSoonCrops` in the same file. Each entry needs only `emoji` and `name`:

```ts
export const comingSoonCrops = [
  { emoji: "🌽", name: "Maize" },
  { emoji: "🌱", name: "Sorghum" },
  { emoji: "🫘", name: "Cowpea" },
  { emoji: "🌿", name: "Chickpea" },
  { emoji: "🌾", name: "Wheat" },
];
```

Move a crop from this list to `cropGroups` once its database is ready to launch.

---

## Styling & Design Tokens

### CIMMYT Green scale

Defined in `src/index.css` inside the Tailwind `@theme` block. Usable as standard Tailwind color utilities (`bg-cimmyt-500`, `text-cimmyt-700`, `border-cimmyt-200`, etc.).

| Token | Hex | Usage |
|---|---|---|
| `cimmyt-50` | `#f0f7ef` | Subtle tinted backgrounds (badge fill, hover pill) |
| `cimmyt-100` | `#d9ecda` | Light borders |
| `cimmyt-200` | `#b3d9b4` | Badge borders, card hover borders |
| `cimmyt-300` | `#80bf83` | Card hover border |
| `cimmyt-400` | `#4fa854` | Secondary text accents |
| **`cimmyt-500`** | **`#4a7c3f`** | **Primary brand green — buttons, logo, icons** |
| `cimmyt-600` | `#3d6934` | Hover state for primary green elements |
| `cimmyt-700` | `#31542a` | Coming-soon strip background; heading hover |
| `cimmyt-800` | `#264020` | Deep dark green |
| `cimmyt-900` | `#1a2e15` | Deepest shade |

### Typography

- **Font family:** Inter (self-hosted via `@fontsource/inter`)
- **Weights loaded:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Base color:** `#1e293b` (Slate 800)
- **Base background:** `#f8fafc` (Slate 50)
- **Anti-aliasing:** `-webkit-font-smoothing: antialiased` applied globally

### Tailwind v4 `@theme`

Tailwind v4 uses a CSS-first config. There is **no `tailwind.config.js`**. All custom tokens live in `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --color-cimmyt-500: #4a7c3f;
  /* … full scale … */
}
```

The `@tailwindcss/vite` Vite plugin processes this file at build time.

---

## Configuration Files

### `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dev/',       // ← staging path; change to '/' when promoting to production
  plugins: [
    tailwindcss(),     // must come before react()
    react(),
  ],
})
```

> **Switching environments:** change `base` to `'/'` and redeploy when the site is ready to go live at the domain root.

### `index.css`

```css
/* 1. Self-host Inter at weights 300–700 */
@import "@fontsource/inter/300.css";
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/500.css";
@import "@fontsource/inter/600.css";
@import "@fontsource/inter/700.css";

/* 2. Pull in Tailwind v4 */
@import "tailwindcss";

/* 3. Custom design tokens */
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --color-cimmyt-50: #f0f7ef;
  /* … */
  --color-cimmyt-500: #4a7c3f;
  /* … */
}

/* 4. Global resets */
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-sans); background-color: #f8fafc; color: #1e293b; margin: 0; }
#root { width: 100%; min-height: 100svh; display: flex; flex-direction: column; }
```

### `index.html`

```html
<title>SNP-Seek | CIMMYT BRS — Multi-Crop Genomic Variant Database</title>
<meta name="description" content="SNP-Seek — Multi-Crop Genomic Variant Database maintained by CIMMYT Breeding Resources & Services." />
<meta name="theme-color" content="#4a7c3f" />
```

---

## CI/CD — GitHub Actions

The workflow file is at **`.github/workflows/deploy-dev.yml`**.

### How it works

```
push to main
    └─▶ self-hosted runner (on brs-snpseek.duckdns.org)
            ├─ actions/checkout@v4
            ├─ actions/setup-node@v4  (Node 20, npm cache)
            ├─ npm ci
            ├─ npm run build          (Vite outputs to dist/ with base='/dev/')
            └─ rsync -av --delete dist/ /var/www/html/dev/
```

Every push to `main` triggers a clean build and syncs only changed files to `/var/www/html/dev/`. No secrets are needed — the runner executes directly on the server.

### Self-hosted runner setup

Run these commands **on the server** once to register the runner with your GitHub repository:

```bash
# 1. Create a dedicated directory
mkdir -p ~/actions-runner && cd ~/actions-runner

# 2. Download the runner (check https://github.com/actions/runner/releases for latest)
curl -o actions-runner-linux-x64.tar.gz -L \
  https://github.com/actions/runner/releases/download/v2.323.0/actions-runner-linux-x64-2.323.0.tar.gz
tar xzf actions-runner-linux-x64.tar.gz

# 3. Configure — get the token from:
#    GitHub repo → Settings → Actions → Runners → New self-hosted runner
./config.sh --url https://github.com/<YOUR_ORG>/<YOUR_REPO> --token <RUNNER_TOKEN>

# 4. Install and start as a system service
sudo ./svc.sh install
sudo ./svc.sh start
```

**Permissions** — the runner user must be able to write to `/var/www/html/dev`:

```bash
# Option A: change directory ownership to the runner user
sudo chown -R <runner-user>: /var/www/html/dev

# Option B: add runner user to www-data group (if Nginx runs as www-data)
sudo usermod -aG www-data <runner-user>
sudo chmod -R g+w /var/www/html/dev
```

### Promoting to production

When the `/dev` deployment is approved:

1. Change `base` in `vite.config.ts` from `'/dev/'` to `'/'`
2. Update the workflow's `rsync` destination from `/var/www/html/dev/` to the production path
3. Push to `main` — CI/CD handles the rest

---

## Nginx Deployment

### /dev location block

Add this inside your existing `server {}` block to serve the staging deployment:

```nginx
# Staging — deployed by GitHub Actions on every push to main
location /dev/ {
    alias /var/www/html/dev/;
    index index.html;
    try_files $uri $uri/ /dev/index.html;

    # Long-lived cache for Vite's content-hashed assets
    location ~* \.(js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
}
```

Reload Nginx after adding the block:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### Production root block

Use this when promoting the site to the domain root (change `base` to `'/'` in `vite.config.ts` first):

```nginx
server {
    listen 80;
    server_name brs-snpseek.duckdns.org;

    root /var/www/html/snpseek;
    index index.html;

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Long-lived cache for Vite's content-hashed assets
    location ~* \.(js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1024;
}
```

> **HTTPS via Let's Encrypt:**
> ```bash
> sudo certbot --nginx -d brs-snpseek.duckdns.org
> ```
> Certbot rewrites the config and adds auto-renewal.

---

## Planned Pages

The following pages are linked in the navbar and footer as `href="#"` placeholders. They are **not yet implemented**.

| Path | Description |
|---|---|
| `/api` | REST / BrAPI v2 reference documentation |
| `/docs` | User guides and tutorials |
| `/publications` | Curated list of research papers using SNP-Seek data |
| `/about` | About CIMMYT BRS, team, and contact information |

When adding a page, install `react-router-dom`, replace `href="#"` values in `Navbar.tsx` and `Footer.tsx` with `<Link to="...">`, and update `vite.config.ts` if the base path changes.

---

© CIMMYT Breeding Resources & Services · [cimmyt.org](https://www.cimmyt.org/)
