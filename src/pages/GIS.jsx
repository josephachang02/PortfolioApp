import { useState } from 'react';
import PageHead from '../components/PageHead.jsx';
import Project from '../components/Project.jsx';
import { Lightbox } from '../components/Gallery.jsx';
import { gis, img } from '../data/content.js';

export default function GIS() {
  const [zoom, setZoom] = useState(null);
  const c = gis.certificates;
  return (
    <div style={{ '--accent': 'var(--gis)' }}>
      <PageHead kicker={`${gis.projects.length} projects`} title={gis.title} intro={gis.intro} />
      <div className="wrap">
        {gis.projects.map((p) => <Project key={p.id} p={p} />)}
      </div>
      <section className="section" id="certificates" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="project-meta muted" style={{ color: 'var(--gis)', fontWeight: 600 }}>{c.year}</div>
          <h2 style={{ margin: '6px 0 12px' }}>{c.title}</h2>
          <p className="muted">{c.text}</p>
          <div className="cert-grid">
            {c.images.map((k, i) => (
              <button key={k} onClick={() => setZoom(i)} aria-label={`Enlarge certificate ${i + 1}`}>
                <img src={img(k)} alt={`Certificate ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>
      <Lightbox images={c.images} index={zoom} title={c.title} onClose={() => setZoom(null)} onIndex={setZoom} />
    </div>
  );
}
