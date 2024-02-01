import React from 'react'
import './footer.css'
import Resume from "../../../src/Images/CSS/GIS_Resume.pdf";
import Logo from "../../../src/Images/CSS/Logo.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const footer = () => {
  return (
    <div id = "footerContainer">
    

    <ul className="links">
      <li><a href="/GIS">GIS</a></li>
      <li><a href="/UrbanPlanning">Urban Planning</a></li>
      <li><a href="/SoftwareEngineering">Software Engineering</a></li>
      <li><a href="/Experience">Experience</a></li>
    </ul>

<div className= "footer-divider"></div>

    <div className="logo">
      <a href = "/">
      <img src= {Logo} alt="Logo" />
      </a>
    </div>

    <div className="icons">
      <a href="https://www.linkedin.com/in/joechang022/" target ="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      <a href="https://github.com/josephachang02" target ="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
      <a href="https://www.instagram.com/joea_chang/" target ="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
      <a href={Resume} download target="_blank" rel="noopener noreferrer"><DescriptionIcon /></a>
    </div>
  </div>
);
}

export default footer