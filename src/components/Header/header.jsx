import React from "react";
import './index.css'
import Logo from "../../../src/Images/CSS/Logo.png";

// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
// import ActiveLastBreadcrumb from "../Breadcrumbs/breadcrumbs.jsx";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';



const Header = () => {

  const iconHoverStyles = {
    filter: 'brightness(95%)', // Adjust the brightness for the darker tint
  };
  const GitHubIconStyle = {
    color: '#444444',
  };

return (
<header>
    <div className="logo-container">
      <a href="/">
    <img id="Logo" src ={Logo} alt="Logo" className="Logo"/>
      </a>
    </div>
      <nav>
    <ul className="navbar">
        <li>
        <Link href="gis" className="NavTitle" >
        {'GIS'}
        </Link >
        </li>
        <li>
        <Link href="urban-planning" className="NavTitle">
        {'Urban Planning'}
        </Link>
        </li>
        <li>
        <Link href="software-engineering" className="NavTitle" >
        {'Software Engineering'}
        </Link>
        </li>
        <li>
        <Link href="experience" className="NavTitle">
        {'Experience'}
        </Link>
        </li>
        <li>
        <Link href="projects" className="NavTitle">
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