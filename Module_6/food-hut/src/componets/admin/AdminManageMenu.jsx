import React from 'react'
import axios from 'axios';
import Adminheader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';


function AdminManageMenu() {
    const [managemenu, setManageMenu] = useState(0);

    const Navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:4000/addmenudetail")
            .then((res) => {
                setManageMenu(res.data)
            })
    })


    return (
        <>
            <Adminheader />
            <AdminSidebar />
            <div className='content'>
                <div className='admin-addmenu-content'>
                    <h2 className="mb-4 fw-bold text-white text-center" style={{ fontFamily: "Roboto, sans-serif" }}>MANAGE &nbsp; BLOG</h2>
                    <table className="table table-bordered table-dark text-center table-striped" id="mytable">
                        <thead  >
                            <tr>
                                
                                <th>Menu image</th>
                                <th>Menu Name</th>
                                <th>Menu price</th>
                                <th>Menu Description</th>
                                
                                <th>Action</th>

                            </tr>
                        </thead>

                        {managemenu && managemenu.map((item) => {
                            return (
                                <>

                                    <tbody  >
                                        <tr >
                                            
                                            <td width="20%" ><img className='img-fluid' src={item.image} alt="not found" /></td>
                                            <td width="15%">{item.subheading}</td>
                                            <td width="20%">{item.price}</td>
                                            {/* <td width="13%">{item.cityname}</td> */}
                                            <td width="30%">{item.description}</td>
                                            <td> <button type='button' className='bg-transparent border-0' onClick={() => Navigate(`/admin-login/update-admin-managemenu/${item.id}`)}> <span className='bi bi-pencil text-info'></span></button>
                                               &nbsp; | &nbsp;

                                                <button type='button' className='bg-transparent border-0' onClick={() => Navigate(`/admin-login/delete-admin-managemenu/${item.id}`)}> <span className='bi bi-trash text-danger'></span></button> </td>

                                        </tr>
                                    </tbody>
                                </>
                            )
                        })

                        }

                    </table>




                </div>
            </div>
        </>
    )
}

export default AdminManageMenu;








