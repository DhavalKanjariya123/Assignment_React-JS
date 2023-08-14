import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from "react-scroll";
import { Outlet } from 'react-router-dom'
import logo from "../../imgs/logo.svg";
import "../../js/Jquerylist.js";
import Branches from './Branches';
import "../../js/Jquerylist.js";
import "../../js/Navbar.js"
import Placeorder from './Placeorder';



function NavbarList() {
    return (
        <>

            <div className='fixed-top' >
                <nav id="mainnav" className='navbar navbar-expand-lg navbar-dark  position-sticky top-0' >
                    <div fluid="true" className='container-fluid '>

                        <Navbar.Brand className='navbar-brand-text py-3'>
                            <span id="logoname-text" className='text-center navbar-brand-text logo-text'><h2 className='text-danger d-inline'>DHAVAL</h2> <span >Food Hut</span></span>
                        </Navbar.Brand>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navlist" id="navbarSupportedContent">
                            <ul className='navbar-nav fw-bold mx-auto' >

                                <li className='nav-item text-white mt-2'>
                                    <Link style={{ fontFamily: "Roboto, sans-serif" }}
                                        // activeClassName="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</Link>
                                </li>
                                <li className='nav-item text-white mt-2'>
                                    <Link style={{ fontFamily: "Roboto, sans-serif" }}
                                        // activeClassName="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About Us</Link>
                                </li>
                                <li className='nav-item text-white mt-2'>
                                    <Link style={{ fontFamily: "Roboto, sans-serif" }}
                                        // activeClassName="active"
                                        to="gallery"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gallery</Link>
                                </li>
                                <li className='nav-item text-white mt-2'>
                                    <Link style={{ fontFamily: "Roboto, sans-serif" }}
                                        // activeClassName="active"
                                        to="booktable"
                                        spy={true}
                                        smooth={true}
                                        offset={-40}
                                        duration={500}
                                        data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >Book-Table</Link>
                                </li>

                                <Navbar.Brand className='navbar-brand mt-1 mx-5'>
                                    <img id="navbar-brand" src={logo} className="brand-img" alt="logo" />
                                    <span id="logoname" className='logoname text-center logo-text'><h2 className='text-danger fw-bold'>DHAVAL</h2> <h3 className='fw-bold'>Food Hut</h3></span>
                                </Navbar.Brand>
                                <li className='nav-item text-white mt-2'>
                                    <Link style={{ fontFamily: "Roboto, sans-serif" }}
                                        // activeClassName="active"
                                        to="blog"
                                        spy={true}
                                        smooth={true}
                                        offset={-140}
                                        duration={500}
                                        data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Blog</Link>
                                </li>
                                <li className='nav-item text-white mt-2'>
                                    <Link style={{ fontFamily: "Roboto, sans-serif" }}
                                        // activeClassName="active"
                                        to="review"
                                        spy={true}
                                        smooth={true}
                                        offset={-160}
                                        duration={500}
                                        data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Reviews</Link>
                                </li>
                                <li className='nav-item text-white mt-2'>
                                    <Link style={{ fontFamily: "Roboto, sans-serif" }}
                                        // activeClassName="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact Us</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link style={{ fontFamily: "Roboto, sans-serif" }} className="nav-link" to="/" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><Branches /></Link>

                                </li>

                            </ul>

                           

                        </div>

                        {/* <Nav className='nav fw-bold mx-auto dhk' id="dhk">

                        <Nav.Link className='nav-link nav-list'>
                            <Link to="/home" >Home</Link>
                        </Nav.Link>
                        <Nav.Link className='nav-list'>
                            <Link to="/about" >About Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/gallery" >Gallery</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/book-table" >Book-Table</Link>
                        </Nav.Link>

                        <Navbar.Brand className='navbar-brand mt-1 mx-5'>
                            <img id="navbar-brand" src={logo} className="brand-img" alt="logo" />
                            <span id="logoname" className='text-center'><h2 className='text-danger'>DHAVAL</h2> <h3>Food Hut</h3></span>
                        </Navbar.Brand>
                        <Nav.Link>
                            <Link to="/blog" >Blog</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/reviews" >Reviews</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact-us" >Contact Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Button className='btn btn-danger px-3'>Branches</Button>
                        </Nav.Link>
                    </Nav> */}
                    </div>
                </nav>
            </div>
            <Outlet />
        </>

    )
}

export default NavbarList
