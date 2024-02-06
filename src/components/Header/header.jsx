import { useEffect, useState } from "react";
import './index.css'
import Logo from "../../../src/Images/CSS/Logo.png";
import Link from '@mui/material/Link';
import { useLocation } from "react-router-dom";

const Header = () => {
  const [shrink, setShrink] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Get the pathname from the current location
    const { pathname } = location;

    // Function to check if the link is active based on the pathname
    const isActiveLink = (link) => {
      return pathname === link;
    };

    // Find all links and update their active state
    const links = document.querySelectorAll('.NavTitle');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (isActiveLink(href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [location]);

  return (
    <header className={`header ${shrink ? 'shrink-header' : ''}`}>
      <div className="logo-container">
        <a href="/">
          <img id="Logo" src={Logo} alt="Logo" className={`Logo ${shrink ? 'small-logo' : ''}`} />
        </a>
      </div>
      <nav>
        <ul className={`navbar ${shrink ? 'small-navbar' : ''}`}>
          {/* Small Navbar Links */}
          <li>
            <Link href="/GIS" className="NavTitle">
              {'GIS'}
            </Link>
          </li>
          <li>
            <Link href="/UrbanPlanning" className="NavTitle">
              {'Urban Planning'}
            </Link>
          </li>
          <li>
            <Link href="/software-engineering" className="NavTitle">
              {'Software Engineering'}
            </Link>
          </li>
          <li>
            <Link href="/Experience" className="NavTitle">
              {'Experience'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;