import PageHead from '../components/PageHead.jsx';
import Project from '../components/Project.jsx';
import { software } from '../data/content.js';

export default function Software() {
  const py = software.python;
  return (
    <div style={{ '--accent': 'var(--dev)' }}>
      <PageHead kicker={`${software.projects.length} projects`} title={software.title} intro={software.intro} />
      <div className="wrap">
        {software.projects.map((p) => <Project key={p.id} p={p} />)}
      </div>
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <h2 style={{ marginBottom: 12 }}>{py.title}</h2>
          <p className="muted">{py.text}</p>
          <ul className="tags">{py.tools.map((t) => <li key={t}>{t}</li>)}</ul>
          {py.links && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 16 }}>
              {py.links.map((l) => <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
