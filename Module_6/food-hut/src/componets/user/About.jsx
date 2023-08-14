import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import about_img from "../../imgs/about-section.jpg"

function About() {
  

  return (
    <>
      
        <Container fluid id="about">
          <Row>
            <Col lg={6} className="m-0 p-0 about-img">
              <img className='img-fluid' src={about_img} alt="not found" />
            </Col>
            <Col lg={6} className="text-white p-xl-5 mt-5">
              <h2 className="mb-4 fw-bold" style={{fontFamily: "Roboto, sans-serif"}}>About Us</h2>
              <p align="justify" style={{fontFamily: "Roboto, sans-serif"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quisquam accusantium nostrum modi, nemo, officia veritatis ipsum facere maxime assumenda voluptatum enim! Labore maiores placeat impedit, vero sed est voluptas!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita alias dicta autem, maiores doloremque quo perferendis, ut obcaecati harum, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum necessitatibus iste, nulla recusandae porro minus nemo eaque cum repudiandae quidem voluptate magnam voluptatum? Nobis, saepe sapiente omnis qui eligendi pariatur. quis voluptas. Assumenda facere adipisci quaerat. Illum doloremque quae omnis vitae.</p>
              <p align="justify" style={{fontFamily: "Roboto, sans-serif"}}><b>Lonsectetur adipisicing elit. Blanditiis aspernatur, ratione dolore vero asperiores explicabo.</b></p>
              <p align="justify" style={{fontFamily: "Roboto, sans-serif"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ab itaque modi, reprehenderit fugit soluta, molestias optio repellat incidunt iure sed deserunt nemo magnam rem explicabo vitae. Cum, nostrum, quidem.</p>
            </Col>
          </Row>
        </Container>
      
    </>
  )
}

export default About;
