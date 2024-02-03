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
    <div id ="footer">
    <div id = "footerContainer">
<a href="https://www.linkedin.com/in/joechang022/" target ="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
<div className= "footer-divider"></div>
<a href="https://github.com/josephachang02" target ="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
<div className= "footer-divider"></div>
<a href="https://www.instagram.com/joea_chang/" target ="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
<div className= "footer-divider"></div>
<a href={Resume} download target="_blank" rel="noopener noreferrer" alt = "Download Resume"><DescriptionIcon /></a>
  </div>
  <div className='copyright'>
    <p>fdsa</p>
  </div>
  </div>
);
}

export default footer