import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import graduationFamily from '../../../src/Images/CSS/graduation_family.jpg'
import graduation from '../../../src/Images/CSS/graduation.jpg'
import PikeBrochure from '../../../src/Images/CSS/Pike_Brochure.jpg'
import Pike1 from '../../../src/Images/CSS/Pike.jpg'
import Pike2 from '../../../src/Images/CSS/Pike2.jpg'
import Personal from '../../../src/Images/CSS/personal.jpg'

const data = [
  {
   image: (graduationFamily), 
   caption:"",
    description:""
  },
  {
    image:(graduation), 
    caption:"",
    description:""
   },
   {
    image:(PikeBrochure), 
    caption:"",
    description:""
   }, 
   {
    image:(Pike1), 
    caption:"",
    description:""
   }, 
   {
    image:(Pike2), 
    caption:"",
    description:""
   }, 
   {
    image:(Personal), 
    caption:"",
    description:""
   }, 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container style={{ overflow: "hidden", height: "500px", position: "relative" }}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div id="Carousel" style={{ paddingTop: "75%", position: "relative", overflow: "hidden" }}>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
              {data.map((slide, i) => (
                <Carousel.Item key={i} style={{ position: "relative", height: "100%" }}>
                  <img
                    className="d-block w-100"
                    src={slide.image}
                    alt="slider image"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                  <Carousel.Caption style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", color: "white", textAlign: "center" }}>
                    <h3>{slide.caption}</h3>
                    <p>{slide.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default HomeCarousel;