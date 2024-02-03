
import Resume from "../../../src/Images/CSS/GIS_Resume.pdf";
import ProfilePicture from "../../../src/Images/CSS/Profile.jpg";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import React, { useEffect, useState } from 'react';
import HomeCarousel from "../../components/Carousel/carousel";

const Home = () => {
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
        <div className={`content-split-container${shrink ? 'shrink' : ''}`}>
        <div id="profilePic">
            <img id="profilePicture" src ={ProfilePicture} alt= "Profile" />
        </div>
            
        <div id="aboutContent">
        <h2>Hi all, I'm Joe</h2>
            <p>
                A passionate GIS Analyst integrating Software Engineering with programming applications. Eager to expand my horizon in GIS through story-telling using maps and data to illustrate the intricacies of our world as we know it.
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
        <a href={Resume} download target="_blank" rel="noopener noreferrer">
        <DescriptionIcon sx={{ fontSize: '3em', color: 'black', '&:hover': iconHoverStyles }} />
      </a>
    </div>
    </div>
    <br></br>
    <div id="contAbout">
    <h2>My Background</h2>
<p>With a solid foundation built during my 3 years as a GIS Analyst at Google, I took a bold step into the dynamic world of software engineering. In August 2023, driven by a passion for coding and a desire to deepen my impact in GIS, I chose to embrace the challenges and opportunities of this new journey. Little did I know, the realm of software engineering held a vast array of languages and knowledge, fueling my curiosity to explore further.</p>
<br></br>
<p>Since leaving my full-time role, I've been working part-time at the First Starbucks in Pike Place Market. Simultaneously, I've been wholeheartedly pursuing my passions in GIS and software engineering. This positive journey has not only enriched my skills but has also opened doors to exciting possibilities that continue to fuel my drive and determination.</p>

        </div>
        


<HomeCarousel />


        </>
    );
};
 
export default Home;