import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to #hash targets (used by map pins) or back to the top on page change
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { requestAnimationFrame(() => el.scrollIntoView()); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
