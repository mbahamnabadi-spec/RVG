# AGENTS.md — IMEN KIAN site (Base44)

## What this is
The imported repository is **RVG Gateway** (a Python/FastAPI proxy panel), unrelated to the
website the user requested. The IMEN KIAN luxury glass-company homepage lives in `web/` as a
static site served by **Vite** (dev mode) on host port 3000. The original Python files are left
untouched.

## Running the site
```
docker compose -f docker-compose.base44.yml up -d
```
- Service `web` uses `node:22-slim`, bind-mounts the repo, runs `npm install` then `vite` (root `web/`).
- Vite listens on 5173 inside the container, mapped to host **3000**.
- Live reload is on (HMR). `CHOKIDAR_USEPOLLING=true` is set for bind-mount watching.
- Healthcheck: `fetch('http://localhost:5173/')`.
- No secrets required. No env file needed.

## Structure
- `web/index.html` — single-page homepage (header, hero, about, why, services, projects, gallery,
  before/after, process, CTA, contact, footer).
- `web/assets/css/style.css` — all styling (design tokens in `:root`).
- `web/assets/js/main.js` — data + rendering (services/projects/gallery injected from JS arrays),
  carousel, before/after slider, gallery filter, lightbox, mobile menu, header scroll, contact form.
- `web/vite.config.js` — `allowedHosts: true` so the preview origin is accepted.

## Images
All photography is loaded from Unsplash CDN (`images.unsplash.com` / `plus.unsplash.com`) with
verified photo IDs hardcoded in `main.js` and `index.html`. No local image assets.

## Design language
"Structural Luminance": obsidian `#0D0D0D` bg, alabaster `#F2F2F2` text, champagne `#C5A059` accent,
thin hairline dividers, Vazirmatn font, RTL. Respects `prefers-reduced-motion`.

## Verify it works
`curl -s -o /dev/null -w "%{http}" http://localhost:3000/` → `200`.
