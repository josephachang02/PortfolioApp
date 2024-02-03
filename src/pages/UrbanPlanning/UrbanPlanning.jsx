import React from 'react'
import Card from '@mui/material/Card'
import CardContent  from '@mui/material/CardContent'
import Hazards from '/src/Images/UrbanPlanning/Environmental/HazardsMitigationPlan.png'
import "./index.css"
import {useState, useEffect} from 'react'

const urbanPlanning = () => {
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
    <div className={`up-section${shrink ? 'shrink' : ''}`}>
      
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
        <h3>Title</h3>
          <p>Date</p>
          <p>Your example text goes here. You can add multiple lines or customize the content as needed.</p>
          <button className ="button">Link to Thing</button>
        </div>
      </CardContent>
    </Card>
<br></br>
<Card id = "UP-Card">
<CardContent class = "content">
  {/* Left Content (Image) */}
  <img
    src= {Hazards}
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
</div>
</div>
  );
};

export default urbanPlanning