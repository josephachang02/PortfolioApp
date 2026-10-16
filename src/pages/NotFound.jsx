import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="wrap">
        <h1>This page doesn’t exist</h1>
        <p className="muted">The link may be out of date. Head back to the map to find a project.</p>
        <Link className="btn" to="/">Go to home page</Link>
      </div>
    </section>
  );
}
