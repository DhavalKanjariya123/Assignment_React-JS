import React, { useRef, useState } from "react";
import Axios from "axios";
import { Button, Modal } from "react-bootstrap";


function Addproduct(props) {

    const name = useRef("")
    const price = useRef("")
    const category = useRef("")
    

    const Clk = () => {
        var insert = {
            name: name.current.value,
            price: price.current.value,
            category: category.current.value
        }

        
            Axios.post("http://localhost:5000/products", insert)
                .then(() => {
                    alert("Product is successfully added")
                    window.location=("/")
                })
        

    }


        return (
            <>

                <Modal {...props} size="md" centered >
                    <Modal.Header closeButton>
                        <h1 className="m-1">Add Product</h1>
                    </Modal.Header>


                    <Modal.Body>
                        <div className="input-group">
                            <input ref={name} type="text" className="input-group-text w-100 m-2" placeholder="Add Product here..." />
                            <input ref={price} type="number" className="input-group-text w-100 m-2" placeholder="Enter Price here..." />
                            <input ref={category} type="text" className="input-group-text w-100 m-2" placeholder="Enter Category here..." />
                            <Button className="btn w-25 btn-primary m-2" onClick={Clk}>Save</Button>
                        </div>
                    </Modal.Body>

                </Modal>
                
            </>
            
            
        )
    

}
    function Addmodal() {
        const [show, setShow] = useState(false);
        return (
            <>
                <Button onClick={() => setShow(true)}><b className="bi bi-plus" ></b>Add Products</Button>
                <Addproduct show={show} onHide={() => setShow(false)} />
                
            </>
        )

    }

    export default Addmodal;
