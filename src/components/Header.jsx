import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { site } from '../data/content.js';

const NAV = [
  { to: '/GIS', label: 'GIS', accent: 'var(--gis)' },
  { to: '/UrbanPlanning', label: 'Urban Planning', accent: 'var(--plan)' },
  { to: '/software-engineering', label: 'Software', accent: 'var(--dev)' },
  { to: '/Experience', label: 'Experience', accent: 'var(--work)' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]); // close the mobile menu after navigating

  return (
    <header className="site-header">
      <div className="wrap">
        <Link to="/" className="wordmark">{site.name}</Link>
        <button className="menu-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} style={{ '--accent': n.accent }}>{n.label}</NavLink>
          ))}
          <a className="btn" href={site.resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  );
}
