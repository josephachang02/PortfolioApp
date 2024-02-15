import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PythonCert from '/src/Images/GIS/PythonCert.png'
import VisualCert from '/src/Images/GIS/3DVisualizationCert.png'
import ArcGISOnline from '/src/Images/GIS/ArcGISOnlineCert.png'
import UWCert from '/src/Images/GIS/UWCertificate.png'

const data = [
    {
     image: (PythonCert), 
    },
    {
      image:(VisualCert), 
     },
     {
      image:(ArcGISOnline), 
     }, 
     {
      image:(UWCert), 
     }, 
     
  ]

  function Atlas() {
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
  
  
  export default Atlas;