import './index.css'
import ReactMap from '../../components/ReactMap/reactmap'
import TabularMap from '../../components/ReactMap/tabs'
import { useState , useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent  from '@mui/material/CardContent'
import Classification from '/src/Images/GIS/Classification.jpg'
import Consultant from '/src/Images/GIS/Consultant.jpg'
import Atlas from './Atlas'
import Cert from './cert'

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
    <p>Geographic Information Systems (GIS) revolutionize the way we understand and manage spatial data, offering powerful tools to analyze, visualize, and interpret geographical information. GIS plays a pivotal role in various fields, from urban planning to environmental management, by providing insights into spatial relationships and patterns.</p>
    <p>My journey with GIS began during my undergraduate studies, where I delved into the fundamentals of spatial analysis, data manipulation, and cartography. Through hands-on projects and coursework, I honed my skills in utilizing GIS software to address real-world challenges, ranging from urban infrastructure planning to natural resource management.</p>
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
        <h3>NDVI Classification</h3>
          <p>2020</p>
          <p>Using LandSat NDVI raster classification, this overlay depicts the general land-use through the Bellingham city-limits. This generalizes the land-use cover throughout the city of where city development extends to while providing an insight as the vegetation cover surrounding the city.</p>
          <button className ="button">Link to Thing</button>
        </div>
      </CardContent>
    </Card>
<Card id = "GIS-Card">
<CardContent class = "content">

  <Atlas />
<div className="TextCard">
<h3>Atlas Mapping</h3>
<p>2020</p>
<p>This map highlights the coverage and upstream network of the Nooksack river in relation to the intersecting cities as well as depicting the areas where floodplains cross into city limits. These images, help to understand the significance of upstream networks as well as understanding the implications. </p>
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
<h3>Consultant Location</h3>
<p>2018</p>
<p>Given a set of parameters to be located within, there are numerous GIS tools to create a scen</p>
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



<Card id = "GIS-Card">
<CardContent class = "content">
  <Cert />
<div className="TextCard">
<h3>GIS Certificates</h3>
<p>2022-2024</p>
<p>Collection of Certificates obtained from Esri and UW that have allowed me to improve upon my GIS Skills and abilities.</p>
<button className ="button">Link to Thing</button>
</div>
</CardContent>
</Card>

</div>
</div>
);
}; 

export default gis