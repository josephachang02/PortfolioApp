
import Resume from "../../../src/Images/CSS/GIS_Resume.pdf";
import ProfilePicture from "../../../src/Images/CSS/Profile.jpg";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useEffect } from 'react';

const Home = () => {
    const onButtonClick = () => {
        const pdfUrl = "../../../src/Images/CSS/GIS_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "JoeResume.pdf"; //name shown in url
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    useEffect(() => {
        
        
        const profilePicture = document.getElementById('profilePicture');
    profilePicture.classList.add('fade-in');

        const aboutContent = document.getElementById('aboutContent');
        aboutContent.classList.add('fade-in');
      }, []);

    const iconHoverStyles = {
        filter: 'brightness(95%)', // Adjust the brightness for the darker tint
      };
      const GitHubIconStyle = {
        color: '#444444',
      };
    return (
        <>
        
        <div id="content-split-container">
        <div id="profilePic">
            <img id="profilePicture" src ={ProfilePicture} alt= "Profile" />
        </div>
            
        <div id="aboutContent">
        <h2>Hi all, I'm Joe</h2>
            <p>
                A passionate Full Stack Software Developer integrating Data/GIS analysis with programming applications. 
            </p>
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
        </div>





            
        </>
    );
};
 
export default Home;