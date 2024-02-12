import './index.css'
import ReactMap from '../../components/ReactMap/reactmap'
import TabularMap from '../../components/ReactMap/tabs'
import { useState , useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent  from '@mui/material/CardContent'
import Classification from '/src/Images/GIS/Classification.jpg'
import Consultant from '/src/Images/GIS/Consultant.jpg'
import Atlas from './Atlas'

const gis = () => {
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

  return (
    <div className={`GIS-section${shrink ? 'shrink' : ''}`}>
    <div>
      <h1>
       See where my Projects have taken me around the World 
      </h1>
      <TabularMap />
    </div>
    <div id = "intro">
        <p>Urban Planning encompasses the intricate systems governing city development and design worldwide. These systems interconnect in complex ways, shaping our cities into cohesive environments. Within Urban Planning, various topics and sectors converge to address the intricate challenges of sustainable city development and environmental preservation.
        </p>
        <p>During my undergraduate studies in Urban Planning, I acquired the necessary toolsets to analyze, collaborate, and propose solutions to urban challenges. This page showcases projects relevant to my academic experiences, demonstrating my ability to apply theoretical knowledge to practical scenarios.
        </p>
      </div>
        <div id ="CardContainer">
        <Card id = "GIS-Card">
          <CardContent class = "content">
            <img
              src= {Classification}
              alt="example"
              className="image"
              style = {{maxWidth: "35%"}}
            />
        <div className="TextCard">
        <h3>Hazard Mitigation Plan</h3>
          <p>2019</p>
          <p>Case-Study Mitigation Plan for San Diego to develop; Risk Assessments, Vulnerability Assessments, and Implementation Plans to enact on future long-term plans to build for resilient communities within San Diego. </p>
          <button className ="button">Link to Thing</button>
        </div>
      </CardContent>
    </Card>
<Card id = "GIS-Card">
<CardContent class = "content">

  <Atlas />
<div className="TextCard">
<h3>Ferndale Comprehensive Plan</h3>
<p>2019</p>
<p>Presentation delivered to Ferndale, WA community members about the significance of Ferndale key assets as well as the components that are needed for future improvement. This presentation breaks down optimal Land-Use/Zoning, Transportation, and Environmental Sustainability.</p>
<button className ="button">Link to Thing</button>
</div>
</CardContent>
</Card>
<Card id = "GIS-Card">
<CardContent class = "content">
  {/* <HAPCarousel />  */}
<div className="TextCard">
<h3>Student Housing Action Plan</h3>
<p>2019</p>
<p>This project highlights a collective action plan created with two other colleagues in proposing future housing plans for students. This document entails survey collections and case studies across other universities that replicated similar housing demands for students. </p>
<button className ="button">Link to Thing</button>
</div>
</CardContent>
</Card>
<Card id = "GIS-Card">
<CardContent class = "content">
  <img
    src= {Consultant}
    alt="example"
    className="image"
  />
<div className="TextCard">
<h3>Seattle Transportation System</h3>
<p>2019</p>
<p>Your example text goes here. You can add multiple lines or customize the content as needed.</p>
<button className ="button">Link to Thing</button>
</div>
</CardContent>
</Card>
<Card id = "GIS-Card">
<CardContent class = "content">
  {/* <MonroeCarousel /> */}
<div className="TextCard">
<h3>Monroe Community Planning</h3>
<p>2019</p>
<p>Your example text goes here. You can add multiple lines or customize the content as needed.</p>
<button className ="button">Link to Thing</button>
</div>
</CardContent>
</Card>
</div>
</div>
);
}; 

export default gis