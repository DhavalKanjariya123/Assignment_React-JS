import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import Branch_img1 from "../../imgs/branches_img1.jpg"
import Branch_img2 from "../../imgs/branches_img2.webp"
import Branch_img3 from "../../imgs/branches_img3.jpg"
import Branch_img4 from "../../imgs/branches_img4.webp"
import "../../index.css";


function MydModalWithGrid(props) {
  return (
    <Modal {...props} size="xl"  aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header className="bg-danger"> 
        <Modal.Title id="contained-modal-title-vcenter"  >
          <h1 className='text-white fw-bold'>Our Branches</h1>
        </Modal.Title>
        <Button  onClick={props.onHide} className="bg-danger text-white border-0 bi bi-x-circle fs-2"></Button>
      </Modal.Header>
      <Modal.Body className="grid-example branch-modal" >
        <Container fluid className=''>


          <Row>
            

              <Col md={3}>
                  <Card className='blog-card'>
                    <div className='blog'>
                      <img className='img-fluid branch-img' src={Branch_img1} alt='not found'></img>
                    </div>
                    <div className='text-center text-dark'>
                      <h2 className='bg-warning text-dark pb-1 fw-bold'>Rajkot</h2>
                      <p className='text-white pt-2'><b className='bi bi-geo-alt'></b>  &nbsp; 150 feet ring road, Rajkot</p>
                      <p className='text-white'> <b className='bi bi-phone bg-warning text-dark'></b>  &nbsp;  (+91) 9825166515</p>
                    </div>
                  </Card>
                </Col>

                <Col md={3} className="branch-div">
                  <Card className='blog-card'>
                    <div className='blog'>
                      <img className='img-fluid branch-img' src={Branch_img2} alt='not found'></img>
                    </div>
                    <div className='text-center text-dark'>
                      <h2 className='bg-warning text-dark pb-1 fw-bold'>Ahmedabad</h2>
                      <p className='text-white  pt-2'><b className='bi bi-geo-alt'></b>  &nbsp; Paldi road, Ahmedabad</p>
                      <p className='text-white'> <b className='bi bi-phone bg-warning text-dark'></b>  &nbsp;  (+91) 9825166515</p>
                    </div>
                  </Card>
                </Col>
                <Col md={3} className="branch-div">
                  <Card className='blog-card'>
                    <div className='blog'>
                      <img className='img-fluid branch-img' src={Branch_img3} alt='not found'></img>
                    </div>
                    <div className='text-center text-dark'>
                      <h2 className='bg-warning text-dark pb-1 fw-bold'>Vadodara</h2>
                      <p className='text-white  pt-2'><b className='bi bi-geo-alt'></b>  &nbsp; Alkapuri road, Vadodara</p>
                      <p className='text-white'> <b className='bi bi-phone bg-warning text-dark'></b>  &nbsp;  (+91) 9825166515</p>
                    </div>
                  </Card>
                </Col>
                <Col md={3} className="branch-div">
                  <Card className='blog-card'>
                    <div className='blog'>
                      <img className='img-fluid branch-img' src={Branch_img4} alt='not found'></img>
                    </div>
                    <div className='text-center text-dark'>
                      <h2 className='bg-warning text-dark pb-1 fw-bold'>Surat</h2>
                      <p className='text-white  pt-2'><b className='bi bi-geo-alt'></b>  &nbsp; Varacha road, Surat</p>
                      <p className='text-white'> <b className='bi bi-phone bg-warning text-dark'></b>  &nbsp;  (+91) 9825166515</p>
                    </div>
                  </Card>
                </Col>


            

          </Row>
        </Container>
      </Modal.Body>

    </Modal>
  );
}

function Branches() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className='btn btn-danger px-3 overflow-x-hidden' onClick={() => setModalShow(true)}>Branches</Button>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Branches;