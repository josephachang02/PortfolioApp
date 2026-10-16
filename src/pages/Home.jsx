import { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
const ProjectMap = lazy(() => import('../components/ProjectMap.jsx')); // map + geodata load in their own chunk
import Social from '../components/Social.jsx';
import { Lightbox } from '../components/Gallery.jsx';
import { site, gis, planning, software, mapPlaces, img } from '../data/content.js';

// One row per field of work on the home page
const FIELDS = [
  { to: '/GIS', title: 'GIS', accent: 'var(--gis)', image: 'gis/ndvi3', count: gis.projects.length,
    text: 'Raster classification, interpolation, suitability analysis, and cartography.' },
  { to: '/UrbanPlanning', title: 'Urban Planning', accent: 'var(--plan)', image: 'urbanplanning/ferndale/studyarea', count: planning.projects.length,
    text: 'Comprehensive plans, hazard mitigation, housing, transportation, and community outreach.' },
  { to: '/software-engineering', title: 'Software Engineering', accent: 'var(--dev)', image: 'css/nba_app', count: software.projects.length,
    text: 'Full-stack web apps with React, APIs, and MongoDB, plus Python for data work.' },
  { to: '/Experience', title: 'Experience', accent: 'var(--work)', image: 'css/googlemaps', count: null,
    text: 'Google Maps, Forterra, and my education and certificates.' },
];

export default function Home() {
  const [zoom, setZoom] = useState(null);
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="hero-map">
          <Suspense fallback={null}><ProjectMap places={mapPlaces} padLeft={520} /></Suspense>
        </div>
        <div className="hero-panel">
          <img className="portrait" src={img('css/profile')} alt="Joe Chang" />
          <h1>Hi, I’m Joe.</h1>
          <p className="lede">{site.intro}</p>
          <div className="actions">
            <a className="btn" href={site.resume} target="_blank" rel="noopener noreferrer">View resume</a>
            <Social />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>My work</h2>
            <p className="muted">Each pin on the map links to a project. Browse by field:</p>
          </div>
          <div className="fields">
            {FIELDS.map((f) => (
              <Link key={f.to} to={f.to} className="field" style={{ '--accent': f.accent }}>
                <img src={img(f.image)} alt="" loading="lazy" style={f.image === 'css/googlemaps' ? { objectFit: 'contain', background: '#000' } : undefined} />
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
                {f.count && <span className="count">{f.count} projects</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap about">
          <div>
            <h2 style={{ marginBottom: 20 }}>My background</h2>
            {site.background.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}
          </div>
          <div className="photo-strip" aria-label="Photos">
            {site.photos.map((k, i) => (
              <button key={k} onClick={() => setZoom(i)} aria-label={`Enlarge photo ${i + 1}`}>
                <img src={img(k)} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>
      <Lightbox images={site.photos} index={zoom} title="Photos" onClose={() => setZoom(null)} onIndex={setZoom} />
    </>
  );
}
