import React from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';

function Adminheader() {
    return (
        <>
            <section className='content'>


                <Container fluid className='m-0 p-0 admin-header'>
                    <Row className='py-3'>
                        <Col className='d-flex admin-header-search'>

                        {/* <button className="navbar-toggler" type="button"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="bi bi-grid-3x3-gap-fill text-danger"></span>
                        </button> */}


                            <Button className='ms-3  rounded-pill admin-toggle-btn' ><b className='bi bi-grid-3x3-gap-fill fs-5'></b></Button>

                            <input className='form-control w-75 ms-3 rounded-pill d-none d-sm-block border border-dark' type="search" placeholder='Search Here' />
                        </Col>
                        <Col >
                            <Row className='d-flex float-end me-2'>
                                <Col >
                                    <img className='img-fluid rounded-circle admin-img d-none d-sm-block' src="https://dhavalportfolio.info/images/my_img/image_sm.png" alt='not found' />
                                </Col>
                                <Col className='my-auto'>
                                    <Dropdown >
                                        <Dropdown.Toggle id="dropdown-basic" className='ms-2 bg-dark'>
                                            Welcome Dhaval
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                                            <Dropdown.Item href="#/setting">Setting</Dropdown.Item>
                                            <Dropdown.Item href="#/logout">Log Out</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Adminheader;
