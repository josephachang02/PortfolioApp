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
      <Container >
        <Row className="justify-content-center">
          <Col>
            <div id="Carousel" >
              <Carousel activeIndex={index} onSelect={handleSelect} controls={false}
            indicators={false}  >
                {data.map((slide, i) => (
                  <Carousel.Item key={i} style={{ position: "relative", height: "100%" ,minHeight: "100%"}}>
                    <img
                      src={slide.image}
                      alt="slider image"
                      style={{ objectFit: "contain", width: "100%", height:"110%",}}
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