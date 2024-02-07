import React from 'react'
import Card from '@mui/material/Card'
import CardContent  from '@mui/material/CardContent'
import Hazards from '/src/Images/UrbanPlanning/Environmental/HazardsMitigationPlan.png'
import SeattleTransportation from '/src/Images/UrbanPlanning/seattleTransportation.jpg'
import "./index.css"
import { Carousel } from 'react-responsive-carousel'
import { useState , useEffect} from 'react'
import FerndaleCarousel from './ferndale'
import HAPCarousel from './hap'
import MonroeCarousel from './monroe'
import UPAnimation from "../../../src/Images/CSS/UP.json";
import Lottie from 'react-lottie'




const urbanPlanning = () => {
  const [shrink, setShrink] = useState(false);

  const MapAnimation = {
    loop: true,
    autoplay: true,
    animationData: UPAnimation,
  };

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
    <div className={`up-section${shrink ? 'shrink' : ''}`}>
      <div id = "intro">
      <Lottie options={MapAnimation} height={450} width={450} style={{ margin: '2px !important', pointerEvents: "none", backgroundColor: "transparent", boxShadow: "0 0 10px #000", borderRadius: "25px"}} />
        <p>Urban Planning encompasses the intricate systems governing city development and design worldwide. These systems interconnect in complex ways, shaping our cities into cohesive environments. Within Urban Planning, various topics and sectors converge to address the intricate challenges of sustainable city development and environmental preservation.
        </p>
        <p>During my undergraduate studies in Urban Planning, I acquired the necessary toolsets to analyze, collaborate, and propose solutions to urban challenges. This page showcases projects relevant to my academic experiences, demonstrating my ability to apply theoretical knowledge to practical scenarios.
        </p>
      </div>
        <div id ="CardContainer">
        <Card id = "UP-Card">
          <CardContent class = "content">
            {/* Left Content (Image) */}
            <img
              src= {Hazards}
              alt="example"
              className="image"
            />
        <div className="TextCard">
        <h3>Hazard Mitigation Plan</h3>
          <p>2019</p>
          <p>Case-Study Mitigation Plan for San Diego to develop; Risk Assessments, Vulnerability Assessments, and Implementation Plans to enact on future long-term plans to build for resilient communities within San Diego. </p>
          <button className ="button">Link to Thing</button>
        </div>
      </CardContent>
    </Card>
<Card id = "UP-Card">
<CardContent class = "CarouselContent">
  <FerndaleCarousel />
<div className="TextCard">
<h3>Ferndale Comphrehensive Plan</h3>
<p>2018</p>
<p>Your example text goes here. You can add multiple lines or customize the content as needed.</p>
<button className ="button">Link to Thing</button>
</div>
</CardContent>
</Card>
<Card id = "UP-Card">
<CardContent class = "CarouselContent">
  <HAPCarousel />
<div className="TextCard">
<h3>Title</h3>
<p>Date</p>
<p>Your example text goes here. You can add multiple lines or customize the content as needed.</p>
<button className ="button">Link to Thing</button>
</div>
</CardContent>
</Card>
<Card id = "UP-Card">
<CardContent class = "content">
  <img
    src= {SeattleTransportation}
    alt="example"
    className="image"
  />
<div className="TextCard">
<h3>Title</h3>
<p>Date</p>
<p>Your example text goes here. You can add multiple lines or customize the content as needed.</p>
<button className ="button">Link to Thing</button>
</div>
</CardContent>
</Card>
<Card id = "UP-Card">
<CardContent class = "CarouselContent">
  <MonroeCarousel />
<div className="TextCard">
<h3>Title</h3>
<p>Date</p>
<p>Your example text goes here. You can add multiple lines or customize the content as needed.</p>
<button className ="button">Link to Thing</button>
</div>
</CardContent>
</Card>
</div>
</div>
  );
};

export default urbanPlanning