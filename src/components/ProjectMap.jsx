import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { geoMercator, geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3-geo';
import world from '../data/geo/world.json';
import pnw from '../data/geo/pnw.json';

const COLORS = { gis: 'var(--gis)', plan: 'var(--plan)', dev: 'var(--dev)', work: 'var(--work)' };
const LABELS = { gis: 'GIS', plan: 'Urban Planning', work: 'Professional' };
const inPNW = (p) => p.lon > -125.5 && p.lon < -119 && p.lat > 45 && p.lat < 50; // places shown in the regional view
// Label for a pin: the place name without the state suffix, or the first name + count
const shortName = (items) => {
  const names = [...new Set(items.map((p) => p.name.replace(/, (WA|CA)$/, '')))];
  return names.length > 1 ? `${names[0]} +${names.length - 1}` : names[0];
};
const CLUSTER_PX = 16; // pins closer than this on screen merge into one numbered pin

// Track the container's pixel size so the projection refits on resize
function useSize(ref) {
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
  return size;
}

export default function ProjectMap({ places, padLeft = 0 }) {
  const ref = useRef(null);
  const { w, h } = useSize(ref);
  const [view, setView] = useState('pnw');
  const [active, setActive] = useState(null); // index of the open cluster

  useEffect(() => setActive(null), [view, w]); // drop the tooltip when the map changes

  const { path, clusters, layers } = useMemo(() => {
    if (!w || !h) return { clusters: [], layers: [] };
    const pad = padLeft && w > 860 ? padLeft : 0; // leave room for the intro panel on wide screens
    let projection, layers;
    if (view === 'pnw') {
      const pts = { type: 'MultiPoint', coordinates: places.filter(inPNW).map((p) => [p.lon, p.lat]) };
      projection = geoMercator().fitExtent([[pad + 60, 90], [w - 60, h - 70]], pts);
      layers = [
        { cls: 'land', data: pnw.land },
        { cls: 'county', data: pnw.counties },
      ];
    } else {
      projection = geoNaturalEarth1().fitExtent([[pad + 24, 64], [w - 24, h - 48]], { type: 'Sphere' });
      layers = [
        { cls: 'graticule', data: geoGraticule10() },
        { cls: 'land', data: world },
      ];
    }
    const path = geoPath(projection);

    // Greedy screen-space clustering so overlapping pins stay readable
    const clusters = [];
    places.forEach((p) => {
      const [x, y] = projection([p.lon, p.lat]);
      if (x < 0 || x > w || y < 0 || y > h) return; // off-screen in this view
      const near = clusters.find((c) => Math.hypot(c.x - x, c.y - y) < CLUSTER_PX);
      if (near) {
        near.items.push(p);
        near.x = (near.x * (near.items.length - 1) + x) / near.items.length;
        near.y = (near.y * (near.items.length - 1) + y) / near.items.length;
      } else clusters.push({ x, y, items: [p] });
    });
    return { path, clusters, layers };
  }, [w, h, view, places, padLeft]);

  const open = active != null ? clusters[active] : null;
  const kinds = [...new Set(places.map((p) => p.kind))];

  return (
    <div className="map" ref={ref} onClick={() => setActive(null)}>
      <div className="map-controls" onClick={(e) => e.stopPropagation()}>
        <div className="segmented" role="group" aria-label="Map extent">
          <button aria-pressed={view === 'pnw'} onClick={() => setView('pnw')}>Pacific Northwest</button>
          <button aria-pressed={view === 'world'} onClick={() => setView('world')}>World</button>
        </div>
      </div>

      <svg viewBox={`0 0 ${w || 1} ${h || 1}`} role="img" aria-label="Map of project locations">
        {path && layers.map((l) => <path key={l.cls} className={l.cls} d={path(l.data)} />)}
        {clusters.map((c, i) => {
          const many = c.items.length > 1;
          const kindSet = new Set(c.items.map((p) => p.kind));
          const fill = kindSet.size === 1 ? COLORS[c.items[0].kind] : 'var(--ink)';
          return (
            <g
              key={i}
              className={`pin ${active === i ? 'selected' : ''}`}
              transform={`translate(${c.x},${c.y})`}
              tabIndex={0}
              role="button"
              aria-label={`${c.items.length} project${many ? 's' : ''}: ${c.items.map((p) => p.title).join(', ')}`}
              onClick={(e) => { e.stopPropagation(); setActive(active === i ? null : i); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(active === i ? null : i); } }}
            >
              <circle className="ring" r={many ? 15 : 11} />
              <circle className="dot" r={many ? 12 : 7} fill={fill} />
              {many && <text className="n" textAnchor="middle" dy="4">{c.items.length}</text>}
              {view === 'pnw' && w > 600 && ( // place labels only in the regional view where there's room
                <text className="label" x={many ? 18 : 13} dy="4">{shortName(c.items)}</text>
              )}
            </g>
          );
        })}
      </svg>

      {open && (
        <div
          className={`map-tip ${open.y < h * 0.5 ? 'below' : ''}`} // open downward for pins in the top half
          style={{ left: Math.min(Math.max(open.x, 150), w - 150), top: open.y }} onClick={(e) => e.stopPropagation()}>
          <div className="place">{[...new Set(open.items.map((p) => p.name))].slice(0, 3).join(' / ')}{new Set(open.items.map((p) => p.name)).size > 3 ? ' and more' : ''}</div>
          <ul>
            {open.items.slice(0, 6).map((p) => (
              <li key={p.title + p.name}>
                <Link to={p.to}><i style={{ background: COLORS[p.kind] }} /><span>{p.title}</span></Link>
              </li>
            ))}
            {open.items.length > 6 && <li className="muted">and {open.items.length - 6} more</li>}
          </ul>
          {view === 'world' && open.items.some(inPNW) && (
            <button onClick={() => setView('pnw')}>Zoom to the Pacific Northwest</button>
          )}
        </div>
      )}

      <div className="legend" aria-hidden="true">
        {kinds.map((k) => <span key={k}><i style={{ background: COLORS[k] }} />{LABELS[k]}</span>)}
      </div>
    </div>
  );
}
