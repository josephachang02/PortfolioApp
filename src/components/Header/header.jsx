import React from "react";
import linkedinIcon from "../../../src/Images/CSS/linkedin.png"
import instagramIcon from "../../../src/Images/CSS/ig.png"
import gitHubIcon from "../../../src/Images/CSS/github.png"
import './index.css'



const Header = () => {
return (
<header>
    <div className="header-title">Joe Chang Portfolio</div>
      <nav>
    <ul className="navbar">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
        <a href="gis">GIS</a>
            <div className="dropdown">
              <a href="Classification">Classification</a>
              <a href="ClientConsultant">Client Consultant</a>
              <a href="DensityRelation">Density Relation</a>
              <a href="SeniorProject2020">Senior Project 2020</a>
            </div>
        </li>
        <li>
        <a href="urban-planning">Urban Planning</a>
            <div className="dropdown">
              <a href="FerndaleWA">Ferndale, WA Comprehensive Plan</a>
              <a href="HazardsMitigationPlan">Hazards Mitigation Plan</a>
              <a href="HousingActionPlan">Housing Action Plan 2019</a>
              <a href="MonroeWA">Monroe, WA Community Outreach</a>
            </div>
        </li>
        <li>
        <a href="software-engineering">Software Engineering</a>
            <div className="dropdown">
              <a href="/FinanceApplication">Personal Finance Breakdown</a>
              <a href="/NBA">NBA Application</a>
              <a href="/WorkoutApplication">Workout Application</a>
            </div>
        </li>
        </ul>
    </nav>
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/joechang022/">
          <img src={linkedinIcon} alt="LinkedIn" className="icon"/>
        </a>
        <a href="https://www.instagram.com/joea_chang/">
          <img src={instagramIcon} alt="Instagram" className="icon"/>
        </a>
        <a href="https://github.com/josephachang02">
          <img src={gitHubIcon} alt="GitHub" className="icon"/>
        </a>
    </div>
    </header>
  );
};

export default Header;