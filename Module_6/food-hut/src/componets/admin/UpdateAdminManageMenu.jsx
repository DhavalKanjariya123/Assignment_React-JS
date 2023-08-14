import React from 'react';
import axios from 'axios';
import Adminheader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

function UpdateAdminManageMenu() {


    const image = useRef("")
    const subheading = useRef("")
    const description = useRef("")
    const category = useRef("")
    const price = useRef("")
    const { id } = useParams("")

    useEffect(() => {
        axios.get(`http://localhost:4000/addmenudetail/${id}`)
            .then((res) => {
                image.current.value = res.data.image
                subheading.current.value = res.data.subheading
                description.current.value = res.data.description
                category.current.value = res.data.category
                price.current.value = res.data.price
            })
    }, [])


    function UpdateMenu() {
        const Upd = {
            image: image.current.value,
            subheading: subheading.current.value,
            description: description.current.value,
            category: category.current.value,
            price: price.current.value
        }
        axios.put(`http://localhost:4000/addmenudetail/${id}`, Upd)
            .then(() => {
                alert("Successfully updated Blog Menu")
                window.location = "/admin-login/admin-managemenu"
            })
    }
    return (
        <>
            <Adminheader />
            <AdminSidebar />
            <div className='content'>
                <div className='admin-addmenu-content'>

                    <Container >
                        <h2 className="mb-4 fw-bold text-white text-center" style={{ fontFamily: "Roboto, sans-serif" }}>UPDATE &nbsp;  BLOG</h2>
                        <Form >
                            <Row className='justify-content-center inquiry-form'>
                                <Col md={5}>
                                    <div class="input-group mb-5 inquiry-form">
                                        <span class="input-group-text className='bi bi-image bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="URL" ref={image} class="form-control form-bg" placeholder="Update Food image URL" aria-label="Username" required />
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text className='bi bi-card-heading bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="text" ref={subheading} class="form-control form-bg" placeholder="Update Name of Food" aria-label="Username" required />
                                    </div>
                                </Col>


                                <Col md={5}>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text className='bi bi-bookmark bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="text" ref={category} class="form-control form-bg" placeholder="Update Category of Food" aria-label="Username" required />
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text className='bi bi-currency-rupee bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="number" ref={price} class="form-control form-bg" placeholder="Update Price of Food" aria-label="Username" required />
                                    </div>
                                </Col>

                                <Col md={10}>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text className='bi bi-text-paragraph bg-light text-dark'" id="basic-addon1"></span>
                                        <input type="text" ref={description} class="form-control form-bg" placeholder="Update Description of Food" aria-label="Username" required />
                                    </div>
                                </Col>




                                <Col xs={12} md={6}>
                                    <div class="d-grid gap-2 col-7 mx-auto mb-5">
                                        <button name="sub" class="btn btn-danger " type="button" value="Send" onClick={UpdateMenu}>Update
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

export default UpdateAdminManageMenu;
