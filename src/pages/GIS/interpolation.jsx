import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SurfaceInterpolation from '/src/Images/GIS/InterpolationSurface.png'
import ModelBuilder from '/src/Images/GIS/ModelBuilderInterpolation.png'
import WWUInterpolation from '/src/Images/GIS/Interpolation.jpg'

const data = [
    {
     image: (SurfaceInterpolation), 
    },
    {
      image:(ModelBuilder), 
     },
     {
      image:(WWUInterpolation), 
     }, 
  ]

function Interpolation () {
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

export default Interpolation