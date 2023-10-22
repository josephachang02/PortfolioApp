import React from "react";

const Header = () => {
return (
<header>
    <div className="header-title">Joe Chang Portfolio</div>
      <nav>
    <ul className="navbar">
        <li>
            <a href="home">Home</a>
        </li>
        <li>
        <a href="gis">GIS</a>
            <div className="dropdown">
              <a href="Classification">Classification</a>
              <a href="Client Consultant">Client Consultant</a>
              <a href="Density Relation">Density Relation</a>
              <a href="Senior Project 2020">Senior Project 2020</a>
            </div>
        </li>
        <li>
        <a href="urban-planning">Urban Planning</a>
            <div className="dropdown">
              <a href="#">Ferndale, WA Comprehensive Plan</a>
              <a href="#">Hazards Mitigation Plan</a>
              <a href="#">Housing Action Plan 2019</a>
              <a href="#">Monroe, WA Community Outreach</a>
            </div>
        </li>
        <li>
        <a href="software-engineering">Software Engineering</a>
            <div className="dropdown">
              <a href="#">Personal Finance Breakdown</a>
              <a href="#">NBA Application</a>
              <a href="#">Coming Soon</a>
            </div>
        </li>
        </ul>
    </nav>
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/joechang022/">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="icon"/>
        </a>
        <a href="https://www.instagram.com/joea_chang/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" className="icon"/>
        </a>
    </div>
    </header>
  );
};

export default Header;