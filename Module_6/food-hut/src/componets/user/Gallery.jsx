import React, {useEffect} from 'react'
import AOS from "aos";
import { Container, Row, Col } from "react-bootstrap";
import menu_1 from "../../imgs/gallary-1.jpg";
import menu_2 from "../../imgs/gallary-2.jpg";
import menu_3 from "../../imgs/gallary-3.jpg";
import menu_4 from "../../imgs/gallary-4.jpg";
import menu_5 from "../../imgs/gallary-5.jpg";
import menu_6 from "../../imgs/gallary-6.jpg";
import menu_7 from "../../imgs/gallary-7.jpg";
import menu_8 from "../../imgs/gallary-8.jpg";
import menu_9 from "../../imgs/gallary-9.jpg";
import menu_10 from "../../imgs/gallary-10.jpg";
import menu_11 from "../../imgs/gallary-11.jpg";
import menu_12 from "../../imgs/gallary-12.jpg";



function Gallery() {
  useEffect(() => {
    AOS.init(
        {
            once: true
        }
    );
}, [])
  return (
    <>
      
        <div className='pt-3' id="gallery" >
          <h2 className='text-center text-white fw-bold section-title-gallery' style={{fontFamily: "Roboto, sans-serif"}} data-aos="fade-up" data-aos-duration="1500">
            OUR MENU
          </h2>
          <Container fluid >
            <Row className='text-center' data-aos="fade-up" data-aos-duration="1500">
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_1} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_2} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_3} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_4} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_5} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_6} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_7} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_8} alt="not found" />
              </Col>

              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_9} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_10} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_11} alt="not found" />
              </Col>
              <Col md={3} className="m-0 p-0">
                <img className='img-fluid border border-1 border-warning' src={menu_12} alt="not found" />
              </Col>
            </Row>
          </Container>
        </div>
      
    </>
  )
}

export default Gallery;
