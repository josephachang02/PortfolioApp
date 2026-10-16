import Social from './Social.jsx';
import { site } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <small>© {new Date().getFullYear()} {site.name}. Designed and built by Joe.</small>
        <div className="social">
          <Social />
          <a className="btn ghost" href={site.resume} target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
        </div>
      </div>
    </footer>
  );
}
