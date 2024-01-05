import React from "react";
import './index.css'
import Logo from "../../../src/Images/CSS/Logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
// import ActiveLastBreadcrumb from "../Breadcrumbs/breadcrumbs.jsx";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';



const Header = () => {
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
        <Link href="gis" underline="hover" sx={{
            fontSize: '30px',
            '&:hover': {
              fontSize: '33px', // Adjust the size as needed
            },
          }}
        >
        {'GIS'}
        </Link >
        </li>
        <li>
        <Link href="urban-planning" size="medium" underline="hover" 
          sx={{
          fontSize: '30px',
          '&:hover': {
          fontSize: '33px', // Adjust the size as needed
          },
          }}>
        {'Urban Planning'}
        </Link>
        </li>
        <li>
        <Link href="software-engineering" underline="hover" 
          sx={{
            fontSize: '30px',
            '&:hover': {
            fontSize: '33px', // Adjust the size as needed
            },
          }}>
        {'Software Engineering'}
        </Link>
        </li>
        <li>
        <Link href="contact" underline="hover" 
        sx={{
            fontSize: '30px',
            '&:hover': {
            fontSize: '33px', // Adjust the size as needed
            },
          }}>
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
          borderRadius: '35%',
          display: 'inline-block',
          overflow: 'hidden',
          color: "white"
        }}
      />
        </a>
        <a href="https://github.com/josephachang02" target ="_blank" rel="noopener noreferrer" >
          <GitHubIcon sx={{ fontSize: '3em', color: 'black'}}/>
        </a>
    </div>
    </header>
  );
};

export default Header;