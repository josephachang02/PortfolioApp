// One-off script: trims Natural Earth / US Census atlases down to small GeoJSON files for the hero map.
// Run with `node scripts/build-geo.mjs` (only needed if you change the map extent).
import { readFileSync, writeFileSync } from 'node:fs';
import { feature } from 'topojson-client';
import bboxClip from '@turf/bbox-clip';

const load = (p) => JSON.parse(readFileSync(new URL(`../node_modules/${p}`, import.meta.url)));
const BBOX = [-132, 43.5, -116.5, 51.5];               // Pacific Northwest window (lon/lat), wide so the map can pan for the intro panel
const round = (n, d) => Math.round(n * 10 ** d) / 10 ** d;

// Round every coordinate to d decimals to shrink the file
const roundGeom = (g, d) => JSON.parse(JSON.stringify(g, (k, v) => (typeof v === 'number' ? round(v, d) : v)));

// True if any vertex of a polygon ring set falls inside the bbox (cheap but fine at this scale)
const touches = (rings) => rings.some((r) => r.some(([x, y]) => x >= BBOX[0] && x <= BBOX[2] && y >= BBOX[1] && y <= BBOX[3]));
const keepPolys = (geom) => {
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  const kept = polys.filter(touches);
  return kept.length ? { type: 'MultiPolygon', coordinates: kept } : null;
};

// World: 110m countries, 2-decimal precision
const world = load('world-atlas/countries-110m.json');
const countries = feature(world, world.objects.countries).features.map((f) => ({ type: 'Feature', properties: {}, geometry: roundGeom(f.geometry, 2) }));
writeFileSync('src/data/geo/world.json', JSON.stringify({ type: 'FeatureCollection', features: countries }));

// PNW: 10m land (for Canada/coastline) + WA/OR counties from us-atlas
const land10 = load('world-atlas/land-10m.json');
// Clip to the window so the huge North America polygon doesn't ship whole
const clip = (g) => bboxClip({ type: 'Feature', properties: {}, geometry: g }, BBOX).geometry;
const land = feature(land10, land10.objects.land).features.map((f) => keepPolys(f.geometry)).filter(Boolean).map(clip);
const us = load('us-atlas/counties-10m.json');
const counties = feature(us, us.objects.counties).features
  .filter((f) => ['53', '41'].includes(f.id.slice(0, 2)))   // 53 = Washington, 41 = Oregon (FIPS)
  .map((f) => ({ type: 'Feature', properties: { name: f.properties.name, state: f.id.slice(0, 2) }, geometry: roundGeom(clip(f.geometry), 3) }))
  .filter((f) => f.geometry.coordinates.length);
writeFileSync('src/data/geo/pnw.json', JSON.stringify({
  land: { type: 'FeatureCollection', features: land.map((g) => ({ type: 'Feature', properties: {}, geometry: roundGeom(g, 3) })) },
  counties: { type: 'FeatureCollection', features: counties },
}));
console.log('world.json + pnw.json written');
