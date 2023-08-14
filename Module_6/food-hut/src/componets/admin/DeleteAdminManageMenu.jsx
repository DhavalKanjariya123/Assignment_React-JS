import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteAdminManageMenu() {
    const [deletemanagemanu, setDeleteManageManu] = useState([]);
    const { id } = useParams();
    const Navigate = useNavigate();
    

    useEffect(() => {
        axios.delete(`http://localhost:4000/addmenudetail/${id}`)
            .then((res) => {
                setDeleteManageManu(res.data)
                alert("Successfully deleted the Menu")
                window.location = '/admin-login/admin-managemenu';
            })
    }, []);
    return (
        <div>

        </div>
    )
}

export default DeleteAdminManageMenu;
