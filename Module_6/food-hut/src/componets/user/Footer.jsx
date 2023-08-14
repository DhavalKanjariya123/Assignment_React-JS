import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-scroll";
import logo from "../../imgs/logo.svg";
import { Facebook, Insta, Youtube, Twitter } from '../../js/file';
import Footeradminloginbtn from './Footeradminloginbtn';
import AdminLogin from '../admin/AdminLogin';
import { Portfolio } from '../../js/file';





function navigateToPage() {
    window.location.href = "https://admin-login";
  }

function Footer() {
    
    return (
        <>
        
            <Container fluid className='bg-dark'>
                <Row>
                    <Col md={6}>
                        <Row className='p-3'>
                            <Col md={6} className='footer-img m-auto'>
                                <img className='img-fluid' src={logo} alt="not found"></img>
                            </Col>
                            <Col md={6} className='text-white m-auto'>
                                <p align="justify" style={{fontFamily: "Roboto, sans-serif"}}>
                                    <b className='fs-5'>Location : </b>
                                    100023, Sarvaswa-1, Wing-B, Sector-4, Amba Township, B/h Trimandir; Adalaj, Gandhinagar, Gujarat-382421.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className='text-center text-white my-auto'>
                        <Row  >
                            <Col md={6} className='text-center usefull-link'>
                                <h3 className=' fw-bold' style={{fontFamily: "Roboto, sans-serif"}}>Usefull Links</h3>
                                <Link style={{fontFamily: "Roboto, sans-serif"}}
                                // activeClassName="active"
                                    to="home"
                                spy={false}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                >Home</Link>
                                <Link style={{fontFamily: "Roboto, sans-serif"}}
                                // activeClassName="active"
                                    to="about"
                                spy={false}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                >About Us</Link>
                                <Link style={{fontFamily: "Roboto, sans-serif"}}
                                // activeClassName="active"
                                to="contact"
                                spy={false}
                                smooth={true}
                                offset={-65}
                                duration={500}
                                >Contact Us</Link>
                                <Button className='btn-outline-dark btn-dark' style={{fontFamily: "Roboto, sans-serif"}}><Footeradminloginbtn/></Button>
                                {/* <span><Footeradminloginbtn/></span> */}
                                {/* <Button style={{fontFamily: "Roboto, sans-serif"}} onClick={navigateToPage}>Admin Login</Button> */}
                            </Col>
                            <Col md={6} className="socialmedia text-center" >
                                <h3 className='fw-bold text-center' style={{fontFamily: "Roboto, sans-serif"}}>Social Media</h3>
                                <Row className='d-flex justify-content-center'>
                                    <Col xs={2}>
                                        <Button className='social-btn' onClick={Facebook}>
                                            <b className='bi bi-facebook fs-4'></b>
                                        </Button>

                                    </Col>
                                    <Col xs={2}>
                                        <Button className='social-btn' onClick={Twitter}>
                                            <b className='bi bi-twitter fs-4'></b>
                                        </Button>


                                    </Col>
                                    <Col xs={2}>
                                        <Button className='social-btn' onClick={Insta}>
                                            <b className='bi bi-instagram fs-4'></b>
                                        </Button>

                                    </Col>
                                    <Col xs={2}>
                                        <Button className='social-btn' onClick={Youtube}>
                                            <b className='bi bi-youtube fs-4'></b>
                                        </Button>


                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row className='text-white text-center footer-bottom' style={{fontFamily: "Roboto, sans-serif"}}>
                    <Col md={6}>
                        <p className='m-0 p-2'>Copyright @ 2023 <b className='line me-1'></b>  All Rights Reserved</p>
                    </Col>
                    <Col md={6}>
                        <p className='m-0 p-md-2 footer-bottom-developername'>Designed & Developed by: <b className='text-danger portfolio' onClick={Portfolio}><u>Dhaval Kanjariya</u></b></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;
