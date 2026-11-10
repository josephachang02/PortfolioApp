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

The live site auto-deploys from the `master` branch of this repo. Push or merge to `master` and Render rebuilds within a few minutes.

Render static site settings:

- **Source:** `josephachang02/PortfolioApp`, branch `master`
- **Build command:** `npm ci && npm run build`
- **Publish directory:** `dist`
- **Auto-Deploy:** After CI Checks Pass (waits for the GitHub Actions build check in `.github/workflows/build.yml`)
- **Redirects/Rewrites:** `/*` → `/index.html`, action **Rewrite**, so routes like `/GIS` work on refresh

Workflow for updates:

```bash
git pull
npm run dev                # preview locally at http://localhost:5173
git add -A && git commit -m "Describe the update"
git push                   # build check runs, then Render deploys
```

Add `[skip render]` to a commit message to push without deploying.
