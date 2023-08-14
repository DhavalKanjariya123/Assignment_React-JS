import React from "react";
import { Container, Dropdown , Col, Row, Nav , Navbar ,} from "react-bootstrap";

function NavbarApp() {
    return(
        <>
        <section className="navbar1">
        <Container >
        <Row>
        <Col lg={3} className="mt-2">
          <Dropdown>
         <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-75">
         Vegatables
        </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Col>
    <Col lg={8} className="d-flex">
    <Navbar id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="ms-2 " href="#">Home</Nav.Link>
            <Nav.Link className="ms-3" href="#">About</Nav.Link>
            <Nav.Link className="ms-3" href="#">Shop</Nav.Link>
            <Nav.Link className="ms-3" href="#">Venddrs</Nav.Link>
            <Nav.Link className="ms-2" href="#">Mego Menu</Nav.Link>
            <Nav.Link className="ms-3" href="#">Blog</Nav.Link>
            <Nav.Link className="ms-3" href="#">Pages</Nav.Link>
            <Nav.Link className="ms-3" href="#">Contact</Nav.Link>
          </Nav>
        </Navbar>

    </Col>

    <Col lg={1}>
      <div className="icon mt-3" >
       <span><i class="bi bi-facebook "></i></span>
       <span><i class="bi bi-instagram ms-2"></i></span>
       <span><i class="bi bi-whatsapp ms-2"></i></span>
      </div>
    </Col>
    </Row>
    </Container>
    
</section>
        </>
    )
}

export default NavbarApp;