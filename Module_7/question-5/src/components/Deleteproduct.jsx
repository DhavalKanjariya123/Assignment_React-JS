import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Deleteproduct() {
    const [deleteproduct, setDeleteProduct] = useState([])
    const { id } = useParams();
    

    useEffect(() => {
        axios.delete(`http://localhost:5000/products/${id}`)
            .then((res) => {
                setDeleteProduct(res.data)
                alert("Successfully deleted")
                window.location="/";
            })
    }, []);
    return (
        <div>

        </div>
    )
}

export default Deleteproduct;
