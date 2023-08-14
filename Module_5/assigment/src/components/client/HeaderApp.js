import React from "react";
import logo from "../../assets/images/1.png";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";

function Headers() {
  return (
    <>
       
        <Row >
          <Col lg={3} md={2} sm={8} className="logo">
            <img src={logo} className="img-fluid w-50 mb-4 p-5 mt-5" alt="hii" />
          </Col>
          <Col lg={5} md={4} sm={12}className="mt-4 ">
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Button
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
              <Button variant="outline-secondary" id="button-addon1">
                <i class="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Col>
          <Col lg={4} md={6} sm={12} className="mt-4 d-flex ">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="d-non ">
                Loction
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            
            </Dropdown>
             <div className="icon p-2 fs-5 ms-5">
              <span className="me-4" ><i class="bi bi-bag-check"></i>cart</span>
              <span className="me-4"><i class="bi bi-person"></i>account</span>
              </div>
          </Col>
          <hr className="hr1" />
        </Row>
    </>
  );
};

export default Headers;
