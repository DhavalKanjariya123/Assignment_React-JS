import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img from "../../assets/images/img1.jpg"
import img1 from "../../assets/images/img2.jpg"
import img2 from "../../assets/images/img3.jpg"


function Content() {
  return (
    <Container className='mt-5'>
    <Row>
    <Carousel interval={1000}>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{"height":"70vh"}}
          src={img}
          alt="First slide"
        />
         <Carousel.Caption className='caption'>
          <h1>Don't miss amazing </h1>
          <h1>grocery deals</h1>
          <p>sing up for the daily newsletter</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  " style={{"height":"70vh"}}
          src={img1}
          alt="Second slide"
        />
         <Carousel.Caption className='caption'>
          <h1>Don't miss amazing </h1>
          <h1>grocery deals</h1>
          <p>sing up for the daily newsletter</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 " style={{"height":"70vh"}}
          src={img2}
          alt="Third slide"
        />
         <Carousel.Caption className='caption'>
          <h1>Don't miss amazing </h1>
          <h1>grocery deals</h1>
          <p>sing up for the daily newsletter</p>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    </Row>
    </Container>
  );
}

export default Content;