import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Form, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import "../../index.css";
import { useParams } from 'react-router-dom';
import { useRef } from 'react';



function Placeorder() {

    const price = useRef("")
    const subheading = useRef("")
    const { id } = useParams("")

    useEffect(() => {
        axios.get(`http://localhost:4000/addmenudetail/${id}`)
            .then((res) => {
                price.current.value = res.data.price
                subheading.current.value = res.data.subheading
            })
    }, [])



    return (

        <>

            

                    <Container className='cart-detail' >
                        <h2 className="mb-4 fw-bold text-white text-center" style={{ fontFamily: "Roboto, sans-serif" }}>Cart </h2>

                        <Table className='table table-bordered table-dark'>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    
                                    <td>Quantity</td>
                                    <td>Total Price</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th><input ref={subheading} className='border border-0 bg-dark text-white'readOnly="true" /></th>
                                    
                                    <th><input value="1" className='border border-0 bg-dark text-white' /></th>
                                    <th><input ref={price} className='border border-0 bg-dark text-white' readOnly="true" /></th>
                                    {/* <th><input ref={price} readOnly="true" /></th> */}
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                
        </>
    );


}
export default Placeorder;
