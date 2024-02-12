import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Atlas1 from '/src/Images/GIS/Atlas1.png'
import Atlas2 from '/src/Images/GIS/Atlas2.png'
import Atlas3 from '/src/Images/GIS/Atlas3.png'
import Atlas4 from '/src/Images/GIS/Atlas4.png'
import Atlas5 from '/src/Images/GIS/Atlas5.png'
import Atlas6 from '/src/Images/GIS/Atlas6.png'
import Atlas7 from '/src/Images/GIS/Atlas7.png'
import Atlas8 from '/src/Images/GIS/Atlas8.png'
import Atlas9 from '/src/Images/GIS/Atlas9.png'
import Atlas10 from '/src/Images/GIS/Atlas10.png'

const data = [
    {
     image: (Atlas1), 
    },
    {
      image:(Atlas2), 
     },
     {
      image:(Atlas3), 
     }, 
     {
      image:(Atlas4), 
     }, 
     {
      image:(Atlas5), 
     }, 
     {
      image: (Atlas6), 
     },
     {
      image:(Atlas7), 
     },
     {
      image:(Atlas8), 
     }, 
     {
      image:(Atlas9), 
     }, 
     {
      image:(Atlas10), 
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