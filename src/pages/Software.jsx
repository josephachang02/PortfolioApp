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
        </div>
      </section>
    </div>
  );
}
