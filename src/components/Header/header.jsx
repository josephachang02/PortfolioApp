import React from "react";
import './index.css'
import Logo from "../../../src/Images/CSS/Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
        <Link href="contact" className="NavTitle">
        {'Contact'}
        </Link>
        </li>
        </ul>
    </nav>
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/joechang022/" target ="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ fontSize: '3em' }}/>
        </a>
        <a href="https://www.instagram.com/joea_chang/" target ="_blank" rel="noopener noreferrer" >
          <InstagramIcon sx={{
          fontSize: '3em',
          background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #FD1D1D, #F56040, #FFC837, #4CAF50)',
          WebkitBackgroundClip: 'icon',
          WebkitTextFillColor: '',
          borderRadius: '40%',
          display: 'inline-block',
          overflow: 'hidden',
          color: "white",
          '&:hover': iconHoverStyles,}}/>
        </a>
        <a href="https://github.com/josephachang02" target ="_blank" rel="noopener noreferrer" >
          <GitHubIcon sx={{ fontSize: '3em', color: 'black', '&:hover': GitHubIconStyle}}/>
        </a>
    </div>
    </header>
  );
};

export default Header;