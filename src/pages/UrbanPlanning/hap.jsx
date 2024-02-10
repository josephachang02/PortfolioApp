import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CaseStudies from '/src/Images/UrbanPlanning/HousingActionPlan/CaseStudies.jpg'
import EmployeeSurvey from '/src/Images/UrbanPlanning/HousingActionPlan/EmployeeSurvey.jpg'
import Procedure from '/src/Images/UrbanPlanning/HousingActionPlan/procedure.jpg'
import SurveyCollection from '/src/Images/UrbanPlanning/HousingActionPlan/SurveyCollection.jpg'
import WhatcomRental from '/src/Images/UrbanPlanning/HousingActionPlan/whatcomRental.jpg'

const data = [
    {
     image: (CaseStudies), 
    },
    {
      image:(EmployeeSurvey), 
     },
     {
      image:(Procedure), 
     }, 
     {
      image:(SurveyCollection), 
     }, 
     {
      image:(WhatcomRental), 
     }, 
  ]

function HAPCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Container style={{ overflow: "hidden", height: "300px", position: "relative" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} >
            <div id="Carousel">
              <Carousel activeIndex={index} onSelect={handleSelect} controls={false}
            indicators={false} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, }} >
                {data.map((slide, i) => (
                  <Carousel.Item key={i} style={{ position: "relative", height: "100%", width: "100%" }}>
                    <img
                     
                      src={slide.image}
                      alt="slider image"
                      style={{ objectFit: "contain", minHeight: "100px", maxHeight: "320px", maxWidth: "400px", minWidth: "300px"}}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  
  export default HAPCarousel;