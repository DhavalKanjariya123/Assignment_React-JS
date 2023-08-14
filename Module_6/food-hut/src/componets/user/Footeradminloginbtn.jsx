import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Footeradminloginbtn() {
    
    return (
        <>
            <Container fluid className='bg-dark'>
                <Row>
                    <Col md={6} className='text-center text-white my-auto'>
                        <Row  >
                            <Col md={6} className='text-center'>
                                <Link style={{fontFamily: "Roboto, sans-serif", width:"180px"}}
                                to="/admin-login">Admin Login</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footeradminloginbtn;
