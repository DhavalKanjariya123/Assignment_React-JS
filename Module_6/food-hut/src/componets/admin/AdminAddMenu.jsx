import React from 'react'
import axios from 'axios';
import Adminheader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';


function AdminAddMenu() {
    const image = useRef("");
    const subheading = useRef("");
    const description = useRef("");
    const category = useRef("");
    const price = useRef("");
    // const id = useRef("");
    const Navigate = useNavigate("");

    const Clkmenu = () => {
        var insert = {
            image:image.current.value,
            subheading:subheading.current.value,
            description:description.current.value,
            category:category.current.value,
            price:price.current.value,
            // id:id.current.value
        }

        axios.post(" http://localhost:4000/addmenudetail", insert)
            .then(() => {
                alert("Successfully submited your data on blog ")
                window.location="/admin-login/admin-managemenu";
                
            }, [])
    }

    return (
        <>
            <Adminheader />
            <AdminSidebar />
            <div className='content'>
                <div className='admin-addmenu-content'>

                    <Container >
                        <h2 className="mb-4 fw-bold text-white text-center" style={{ fontFamily: "Roboto, sans-serif" }}>ADD  BLOG</h2>
                        <Form >
                            <Row className='justify-content-center inquiry-form'>
                                <Col md={5}>
                                    <div class="input-group mb-5 inquiry-form">
                                        <span class="input-group-text className='bi bi-image bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="URL" ref={image} class="form-control form-bg" placeholder="Enter Food image URL" aria-label="Username" required />
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text className='bi bi-card-heading bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="text" ref={subheading} class="form-control form-bg" placeholder="Enter Name of Food" aria-label="Username" required />
                                    </div>
                                </Col>
                                

                                <Col md={5}>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text className='bi bi-bookmark bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="text" ref={category} class="form-control form-bg" placeholder="Enter Category of Food" aria-label="Username" required />
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text className='bi bi-currency-rupee bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="number" ref={price} class="form-control form-bg" placeholder="Enter Price of Food" aria-label="Username" required />
                                    </div>
                                </Col>

                                <Col md={10}>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text className='bi bi-text-paragraph bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="text" ref={description} class="form-control form-bg" placeholder="Enter Description of Food" aria-label="Username" required />
                                    </div>
                                </Col>

                               

                                
                                <Col xs={12} md={6}>
                                    <div class="d-grid gap-2 col-7 mx-auto mb-5">
                                        <button name="sub" class="btn btn-danger " type="button" value="Send" onClick={Clkmenu}>Send
                                            to Blog</button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>

                    </Container>

                   

                </div>
            </div>
        </>
    )
}

export default AdminAddMenu;
