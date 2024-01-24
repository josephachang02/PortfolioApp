import { useEffect, useState } from "react";
import './index.css'
import Logo from "../../../src/Images/CSS/Logo.png";
import Link from '@mui/material/Link';

const Header = () => {
  const [shrink, setShrink] = useState(false);

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

  return (
    <header className={shrink ? 'shrink' : ''}>
      <div className="logo-container">
        <a href="/">
          <img id="Logo" src={Logo} alt="Logo" className={`Logo ${shrink ? 'small-logo' : ''}`} />
        </a>
      </div>
      <nav>
        <ul className={`navbar ${shrink ? 'small-navbar' : ''}`}>
          {/* Small Navbar Links */}
          <li>
            <Link href="GIS" className="NavTitle">
              {'GIS'}
            </Link>
          </li>
          <li>
            <Link href="urban-planning" className="NavTitle">
              {'Urban Planning'}
            </Link>
          </li>
          <li>
            <Link href="software-engineering" className="NavTitle">
              {'Software Engineering'}
            </Link>
          </li>
          <li>
            <Link href="/Experience" className="NavTitle">
              {'Experience'}
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="NavTitle">
              {'Projects'}
            </Link>
          </li>
          <li>
            <Link href="contact" className="NavTitle">
              {'Contact Me'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;