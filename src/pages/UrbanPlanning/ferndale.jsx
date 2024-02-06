import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloodMap from '/src/Images/UrbanPlanning/Ferndale/FloodMap.jpg'
import PED_Bike from '/src/Images/UrbanPlanning/Ferndale/PED_Bicycles.jpg'
import ROW from '/src/Images/UrbanPlanning/Ferndale/ROW.jpg'
import StudyArea from '/src/Images/UrbanPlanning/Ferndale/StudyArea.jpg'
import UrbanForm from '/src/Images/UrbanPlanning/Ferndale/UrbanForm.jpg'

const data = [
    {
     image: (FloodMap), 
    },
    {
      image:(PED_Bike), 
     },
     {
      image:(ROW), 
     }, 
     {
      image:(StudyArea), 
     }, 
     {
      image:(UrbanForm), 
     }, 
  ]

  function FerndaleCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Container style={{ overflow: "hidden", height: "200px", position: "relative" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div id="Carousel">
              <Carousel activeIndex={index} onSelect={handleSelect} controls={false}
            indicators={false} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, }}>
                {data.map((slide, i) => (
                  <Carousel.Item key={i} style={{ position: "relative", height: "100%" }}>
                    <img
                      className="d-block w-100"
                      src={slide.image}
                      alt="slider image"
                      style={{ objectFit: "contain" }}
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
  
  
  export default FerndaleCarousel;