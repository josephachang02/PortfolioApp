import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cover from '/src/Images/GIS/SP_Cover.png'
import Intro from '/src/Images/GIS/SeniorProject.jpg'
import Table from '/src/Images/GIS/SeniorProjectTable.jpg'
import Population from '/src/Images/GIS/Population.png'
import Destroyed from '/src/Images/GIS/Destroyed.png'
import Median from '/src/Images/GIS/Median.png'
import Minority from '/src/Images/GIS/Minority.png'



const data = [
    {
     image: (Cover), 
    },
    {
      image:(Intro), 
    },
    {
      image:(Table), 
    }, 
    {
      image:(Destroyed), 
    }, 
    {
      image:(Population), 
    }, 
    {
      image:(Median), 
    },
    {
        image:(Minority), 
    }, 
     
  ]

function senior () {
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

export default senior