import { experience, img } from '../data/content.js';

// One row: logo, role, organization, summary, bullet points, links
function Entry({ e }) {
  return (
    <article className="entry">
      <div className="logo" style={e.logoBg ? { background: e.logoBg, borderColor: e.logoBg } : undefined}>
        <img src={img(e.logo)} alt={`${e.org} logo`} loading="lazy" />
      </div>
      <div>
        <div className="role">{e.role}</div>
        <div className="org">{e.org}</div>
        <p style={{ margin: 0 }}>{e.summary}</p>
        {e.points && <ul className="points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
        {e.links && (
          <div className="links">
            {e.links.map((l) => <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
          </div>
        )}
      </div>
    </article>
  );
}

const Group = ({ title, items }) => (
  <section className="section">
    <div className="wrap">
      <h2 style={{ marginBottom: 24 }}>{title}</h2>
      <div className="entries">{items.map((e) => <Entry key={e.org + e.role} e={e} />)}</div>
    </div>
  </section>
);

export default function Experience() {
  return (
    <div style={{ '--accent': 'var(--work)' }}>
      <header className="page-head">
        <div className="wrap">
          <h1>Experience</h1>
          <div className="intro"><p>{experience.intro}</p></div>
        </div>
      </header>
      <Group title="Professional" items={experience.work} />
      <Group title="Education" items={experience.education} />
      <Group title="Certificates" items={experience.certificates} />
    </div>
  );
}
