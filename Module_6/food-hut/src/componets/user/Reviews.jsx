import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";


function Reviews() {
  return (
    <>
    
      <Container fluid  id="review" >

        <h2 className='text-center text-white fw-bold section-title' style={{fontFamily: "Roboto, sans-serif"}}>
          REVIEWS
        </h2>
        <Row className='justify-content-evenly pb-5' style={{fontFamily: "Roboto, sans-serif"}}>
          <Col md={4}>
            <Card className='card text-white border-0'>
              <div className='card-header text-center mb-2'>
                <h5>Dhaval Kanjariya</h5>
                <h6 className='opacity-50'>Web Designer</h6>
              </div>
              <div className='card-body m-0 pb-0 p-2 text-center'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!
                </p>
              </div>
            </Card>
          </Col>
          <Col md={4} className="review-det">
          <Card className='card text-white border-0'>
              <div className='card-header text-center mb-2'>
                <h5>Dhaval Kanjariya</h5>
                <h6 className='opacity-50'>Front-end Developer</h6>
              </div>
              <div className='card-body m-0 pb-0 p-2 text-center'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!
                </p>
              </div>
            </Card>
          </Col>
          <Col md={4} className="review-det">
          <Card className='card text-white border-0'>
              <div className='card-header text-center mb-2'>
                <h5>Dhaval Kanjariya</h5>
                <h6 className='opacity-50'>React JS Developer</h6>
              </div>
              <div className='card-body m-0 pb-0 p-2 text-center'>
                <p >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!
                </p>
              </div>
            </Card>
          </Col>

        </Row>




      </Container>
      
    </>
  )
}

export default Reviews;
