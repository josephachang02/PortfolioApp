import Gallery from './Gallery.jsx';

// Formats lon/lat as "48.75° N, 122.48° W" for the project meta line
const coord = ({ lat, lon }) => `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lon).toFixed(2)}° ${lon >= 0 ? 'E' : 'W'}`;

export default function Project({ p }) {
  return (
    <article className="project" id={p.id}>
      <Gallery images={p.images} title={p.title} />
      <div>
        <div className="meta">
          <span className="year">{p.year}</span>
          {p.place && <span>{p.place.name}</span>}
          {p.place && <span title="Map location">{coord(p.place)}</span>}
        </div>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        {p.tools && <ul className="tags" aria-label="Tools and methods">{p.tools.map((t) => <li key={t}>{t}</li>)}</ul>}
        {p.links?.length > 0 && (
          <div className="links">
            {p.links.map((l, i) => (
              <a key={l.href} className={`btn ${i ? 'ghost' : ''}`} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
