# Joe Chang · Portfolio

Live: https://joechangportfolio.onrender.com

React + Vite portfolio covering GIS, Urban Planning, Software Engineering, and Experience. The home page opens on an interactive map of project locations (Pacific Northwest / World), drawn with `d3-geo` from bundled GeoJSON, so it needs no map API key.

## Editing content

All text, links, images, and map locations live in **`src/data/content.js`**.

- **Add a project:** push an object onto `gis.projects`, `planning.projects`, or `software.projects`. Give it a `place: { name, lon, lat }` and it appears on the home-page map automatically.
- **Images:** drop a `.webp` into `src/assets/img/<folder>/` and reference it as `'<folder>/<name>'`.
- Lines marked `DRAFT` or `TODO` in that file still need your review.

## Scripts

```bash
npm install
npm run dev            # local dev server
npm run build          # production build → dist/
npm run build:preview  # hash-routed build → dist-preview/ (works on any static host without rewrites)
npm run geo            # regenerate src/data/geo/*.json if you change the map extent
```

## Deploying on Render

Build command `npm install && npm run build`, publish directory `dist`.
Add a rewrite rule **`/*` → `/index.html`** so routes like `/GIS` work on refresh.
