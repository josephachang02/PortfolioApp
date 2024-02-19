import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NDVI2 from '/src/Images/GIS/NDVI2.png'
import NDVI3 from '/src/Images/GIS/NDVI3.png'
import Classifciation from '/src/Images/GIS/Classification.jpg'

const data = [
    {
     image: (NDVI2), 
    },
    {
      image:(NDVI3), 
     },
     {
      image:(Classifciation), 
     }, 
  ]

function NDVI () {
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

export default NDVI