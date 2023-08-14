import React, { useRef } from 'react'

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'

function Contactus() {

    const name = useRef("");
    const mobile = useRef("");
    const email = useRef("");
    const cityname = useRef("");
    const message = useRef("");
    const Navigate = useNavigate("");

    const Click = () => {
        var insert = {
            name: name.current.value,
            mobile: mobile.current.value,
            email: email.current.value,
            cityname: cityname.current.value,
            message: message.current.value,

        }

        axios.post(" http://localhost:4000/inquiry", insert)
            .then(() => {
                alert("Thanks for submit an inquiry. We will contact you soon.")
                Navigate("/")
            });
    }
    return (
        <>
            <Container className='py-5' id="contact" >
                <Row >
                    <Col md={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4847662528996!2d72.57496957449955!3d23.188997710098608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c29b02fad4279%3A0xf76bae8b26fc493a!2sSarvaswa-1!5e0!3m2!1sen!2sin!4v1686717553999!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>
                    </Col>
                    <Col md={6} className="text-white p-xl-5 pt-5">
                        <h2 className="mb-4 fw-bold" style={{ fontFamily: "Roboto, sans-serif" }}>Find Us</h2>
                        <p align="justify" style={{ fontFamily: "Roboto, sans-serif" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laboriosam doloremque odio delectus, sunt magnam laborum impedit molestiae, magni quae ipsum, ullam eos! Alias suscipit impedit et, adipisci illo quam.</p>
                        <Row className='my-2 opacity-75' style={{ fontFamily: "Roboto, sans-serif" }}>
                            <Col xs={2} className="d-flex flex-column justify-content-center align-items-center fs-3">
                                <b className='bi bi-geo-alt fs-3'></b>
                            </Col>
                            <Col sxs={10} className="my-auto">
                                <span align="justify">100023, Sarvaswa-1, Wing-B, Sector-4, Amba Township, B/h Trimandir; Adalaj, Gandhinagar, Gujarat-382421.</span>
                            </Col>
                        </Row>
                        <Row className='my-2 opacity-75'>
                            <Col xs={2} className="d-flex flex-column justify-content-center align-items-center fs-5">
                                <b className='bi bi-phone-fill'></b>
                            </Col>
                            <Col sxs={10} className="my-auto">
                                <span align="justify">(+91) 9825166515</span>
                            </Col>
                        </Row>
                        <Row className='my-2 opacity-75'>
                            <Col xs={2} className="d-flex flex-column justify-content-center align-items-center fs-5">
                                <b className='bi bi-envelope-at-fill'></b>
                            </Col>
                            <Col sxs={10} className="my-auto">
                                <span align="justify">dhavalhk3091@gmail.com</span>
                            </Col>
                        </Row>

                    </Col>
                </Row>



            </Container>
            <Container >
                <h2 className="mb-4 fw-bold text-white text-center" style={{ fontFamily: "Roboto, sans-serif" }}>Inquiry</h2>
                <Form >
                    <Row className='justify-content-center inquiry-form'>
                        <Col md={5}>
                            <div class="input-group mb-5 inquiry-form">
                                <span class="input-group-text className='bi bi-phone bg-light text-dark'" id="basic-addon1"></span>
                                <input type="text" ref={name} class="form-control form-bg" placeholder="Enter Name" aria-label="Username" required />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div class="input-group mb-5">
                                <span class="input-group-text className='bi bi-phone bg-light text-dark'" id="basic-addon1"></span>
                                <input type="number" ref={mobile} class="form-control form-bg" placeholder="Enter Mobile Number" aria-label="Username" required />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div class="input-group mb-5">
                                <span class="input-group-text className='bi bi-envelope bg-light text-dark'" id="basic-addon1"></span>
                                <input type="email" ref={email} class="form-control form-bg" placeholder="Enter E-mail Address" aria-label="Username" required />
                            </div>
                        </Col>

                        <Col md={5}>
                            <div class="input-group mb-5">
                                <span class="input-group-text className='bi bi-geo-alt bg-light text-dark'" id="basic-addon1"></span>
                                <input type="text" ref={cityname} class="form-control form-bg" placeholder="Enter City Name" aria-label="Username" required />
                            </div>
                        </Col>

                        <Col md={10}>
                            <div class="form-floating  mb-5">
                                <textarea ref={message} class="form-control form-bg h-25" placeholder="Type a Message Here" id="floatingTextarea"></textarea>

                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div class="d-grid gap-2 col-7 mx-auto mb-5">
                                <button name="sub" class="btn btn-danger " type="button" value="Send" onClick={Click}>Send
                                    Message</button>
                            </div>
                        </Col>
                    </Row>
                </Form>

            </Container>


        </>
    )
}

export default Contactus;
