import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EditAddmodal from "./Editproduct";
import Addmodal from "./Addproduct";
import { Container, Row, Col } from "react-bootstrap";

function Updateproduct() {
    const [product, setProduct] = useState([])

    const [searchproduct, setSearchproduct] = useState("")



    const Navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((res) => {
                setProduct(res.data)
            })
    }, [])



    return (
        <>
            <Container>
                <Row>
                    <Col md={8}>
                        <input className="form-control w-50" type="search" placeholder="Search products here..." onChange={(e) => setSearchproduct(e.target.value)} />
                    </Col>
                    <Col md={4}>
                        <Button type="button" className="btn btn-primary m-0 p-0 float-end" > <Addmodal /> </Button>
                    </Col>
                </Row>


                <Table className="mt-5">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    {product && product.filter((item) => {
                        return searchproduct.toLowerCase === "" ? item : item.name.toLowerCase().includes(searchproduct) || item.category.toLowerCase().includes(searchproduct)
                    }).map((item) => {
                        return (
                            <>
                                <tbody>
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            <Button className="bg-transparent border-0" onClick={() => Navigate(`/edit-product/${item.id}`)}><b className="bi bi-pencil text-info" ></b></Button>

                                            <b className="border border-right-1 border-secondary me-2 ms-1" ></b>

                                            <Button className="bg-transparent border-0" onClick={() => Navigate(`/delete-product/${item.id}`)}><b className="bi bi-trash text-danger" ></b></Button></td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })

                    }

                </Table>
            </Container>


        </>
    )
}

export default Updateproduct;