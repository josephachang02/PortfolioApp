import React from 'react'

const experience = () => {
  return (
    <div>
<div id = "education">
    <h1>Education</h1>

    <div id = "educationCard">
        <p>Per Scholas</p>
        <p>Full-Stack Development</p>
        <p>August 2023 - November 2023</p>
        <ul>
            <li>Description</li>
        </ul>
    </div>
    
    <div id = "educationCard">
        <p>Western Washington University</p>
        <p>Bachelors of Science in Urban Planning</p>
        <p>September 2015 - March 2020</p>
        <ul>
            <li>Description</li>
        </ul>
    </div>
</div>

<div id = "certificates">
    <h1>Certificates</h1>

    <div id = "certificateCard">
    <p>University of Illinois</p>
        <p>CyberGIS</p>
        <p>July 2023 - December 2023</p>
        <ul>
            <li>Description</li>
            <li><a href = "https://coursera.org/share/f78992d6170e32445f55f0baac360197">View Certificate</a></li> 
            {/* link above needs to be changed to a physical copy to view */}
        </ul>
        </div>

    <div id = "certificateCard">
        <p>Per Scholas</p>
        <p>Full-Stack Development</p>
        <p>August 2023 - November 2023</p>
        <ul>
        <li>Description</li>
    </ul>
    </div>

    <div id = "certificateCard">
        <p>University of Washington</p>
        <p>Geographic Information Systems</p>
        <p>September 2020 - June 2021</p>
        <ul>
            <li>Description</li>
        </ul>
    </div>
</div>

    <div id = "experience">
        <h1>Experience</h1>
    <div id = "experienceCard">
    <p>Google</p>
        <p>GIS Analyst/Project Lead</p>
        <p>November 2020 - August 2023</p>
        <ul>
            <li>Description</li>
        </ul>
    </div>
</div>
</div>
  )
}

export default experience