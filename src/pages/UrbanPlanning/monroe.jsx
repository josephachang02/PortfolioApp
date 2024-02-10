import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '/src/Images/UrbanPlanning/MonroeCommunity/website.jpg'
import BackgroundPurpose from '/src/Images/UrbanPlanning/MonroeCommunity/BackgroundPurpose.jpg'
import ConceptualDesign from '/src/Images/UrbanPlanning/MonroeCommunity/ConceptualDesign.jpg'
import Feedback from '/src/Images/UrbanPlanning/MonroeCommunity/Feedback.jpg'
import MonroeFeedback from '/src/Images/UrbanPlanning/MonroeCommunity/MonroeFeedback.jpg'
import Monroeslide from '/src/Images/UrbanPlanning/MonroeCommunity/Monroeslide.jpg'
import Presenting from '/src/Images/UrbanPlanning/MonroeCommunity/Presenting.png'

const data = [
    {
     image: (Home), 
    },
    {
     image:(BackgroundPurpose), 
    },
    {
     image:(ConceptualDesign), 
    }, 
    {
     image:(Feedback), 
    }, 
    {
     image:(MonroeFeedback), 
    }, 
    {
     image:(Monroeslide), 
    }, 
    {
     image:(Presenting), 
    }, 
  ]

function MonroeCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Container style={{ overflow: "hidden", height: "200px", position: "relative" }}>
        <Row className="justify-content-center">
          <Col >
            <div id="Carousel">
              <Carousel activeIndex={index} onSelect={handleSelect} controls={false}
            indicators={false} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, }}>
                {data.map((slide, i) => (
                  <Carousel.Item key={i} style={{ position: "relative", height: "100%" }}>
                    <img
                      className="d-block w-100"
                      src={slide.image}
                      alt="slider image"
                      style={{ objectFit: "contain", minHeight: "400px", width: "100%" }}
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
  
  
  export default MonroeCarousel;