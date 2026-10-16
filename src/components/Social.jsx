import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { site } from '../data/content.js';

// Round icon links to profiles; reused in the hero and footer
export default function Social() {
  const items = [
    { href: site.links.linkedin, label: 'LinkedIn', icon: <FaLinkedinIn /> },
    { href: site.links.github, label: 'GitHub', icon: <FaGithub /> },
    { href: site.links.instagram, label: 'Instagram', icon: <FaInstagram /> },
  ];
  return items.map((i) => (
    <a key={i.label} className="icon-link" href={i.href} target="_blank" rel="noopener noreferrer" aria-label={i.label} title={i.label}>
      {i.icon}
    </a>
  ));
}
