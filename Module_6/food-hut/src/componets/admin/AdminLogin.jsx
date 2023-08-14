import React from 'react'
import { Container, Col, Row, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Login1 } from '../../js/file';
import Adminsidebar from './AdminSidebar';

function AdminLogin() {
  return (
    <Container fluid className='m-0 p-0'  >
      <Row>

        <Col >

          <Container fluid id='login' className=''>

            <Row className='overlay-adminlogin text-white d-flex justify-content-center '>
              <p className='h1 text-white text-center mt-5'>Welcome To Admin Log In</p>
              <Form className='form-width' >
                <InputGroup className="mb-3 form-detail">
                  <InputGroup.Text id="basic-addon1" className='form-input'><b className='bi bi-envelope fs-5'></b></InputGroup.Text>
                  <Form.Control className='form-input' id='em'
                    placeholder="name@example.com"

                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3 mt-5 form-detail">
                  <InputGroup.Text id="basic-addon1" className='form-input'><b className='bi bi-lock fs-5'></b></InputGroup.Text>
                  <Form.Control type="password" className='form-input' id='pwd'
                    placeholder="********"

                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <input type="submit" value="Log In" className="btn btn-danger w-50 text-white fs-5 mt-4" id="exampleFormControlInput1" />

                <Link to="#" className='ms-4 text-white'>Forget password ?</Link>   
              </Form>
            </Row>
          </Container>

        </Col>
      </Row>
    </Container>
  )




}

export default AdminLogin;
