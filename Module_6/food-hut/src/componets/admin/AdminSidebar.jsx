import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Container, Row, Col } from 'react-bootstrap';
// import "../../js/Jquerylist.js";
// import {AdminNav} from "../../js/file";
// import AdminNavba from "../../js/AdminNavbar"



function AdminSidebar() {
    return (
        <>
            <Nav className="admin-navbar d-none d-lg-block" >
                <Container>
                    <Row className='pt-3'>

                        <Col>
                            <div className='text-center admin-navbar-text'>
                                <h2 className='d-inline m-0 p-0'>DHAVAL</h2>
                                <span className='fs-5 ms-2'>Food Hut</span>

                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col xs={5} className=' pt-2 d-flex justify-content-center'>
                            <img className='img-fluid rounded-circle admin-img d-none d-sm-block' src="https://dhavalportfolio.info/images/my_img/image_sm.png" alt='not found' />
                        </Col>
                        <Col xs={7} className="my-auto">
                            <div className='text-white'>
                                <h6 >Dhaval Kanjariya</h6>
                                <span className='text-warning'>Online</span>

                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='navbar-nav mt-4' id='dhk'>
                    <ul className="d-flex flex-column admin-nav-tab m-0 p-0" id='dhk'>
                        <li>
                            <Link className="btn1 nav-link fs-5" to="/admin-login/admin-dashboard" >
                                <i className="bi bi-speedometer rounded-circle p-2"></i>
                                <span className='ms-3'>Dashboard</span>
                            </Link>
                        </li>
                         
                        

                        <li className='dropend'><Link className="btn1 nav-link mt-2 fs-5 dropdown-toggle " to="#" data-bs-toggle="dropdown"><i className="bi bi-menu-app rounded-circle p-2"></i> <span className='ms-3'>Menu</span></Link>

                            <ul className="dropdown-menu menu-list shadow " aria-labelledby="navbarDropdown">

                                <li><Link to="/admin-login/admin-addmenu" className="nav-link  dropdown-item" >Add Menu</Link></li>
                                <li><hr className="dropdown-divider bg-light" /></li>
                                <li><Link to="/admin-login/admin-managemenu" className="nav-link  dropdown-item" >Manage Menu</Link></li>
                                <li></li>

                            </ul>
                        </li>

                        <li><Link className="btn1 nav-link mt-2 fs-5" to="/admin-login/admin-tablebooking"><i className="bi bi-person rounded-circle  p-2"></i> <span className='ms-3'>Table Booking</span></Link></li>

                        <li ><Link className="btn1 nav-link mt-2 fs-5" to="/admin-login/admin-contact"><i className="bi bi-phone rounded-circle  p-2"></i> <span className='ms-3'>Contact</span></Link></li>
                        
                    </ul>
                </div>
            </Nav>
        </>
    )
}

export default AdminSidebar;
