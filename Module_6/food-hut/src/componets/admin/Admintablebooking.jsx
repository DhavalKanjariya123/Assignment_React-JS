import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Adminheader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Container } from 'react-bootstrap';
import ReactWhatsapp from 'react-whatsapp';

function AdminTablebooking() {
    const [data, setData] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:4000/tablebooking")
            .then((res) => {
                setData(res.data)
            })
    }, [])
    return (
        <>
            <Adminheader />
            <AdminSidebar />
            <div className='content'>
                <div className='admin-contact-content'>
                    <Container className='contact-content'>
                    <h2 className="mb-4 fw-bold text-white text-center" style={{ fontFamily: "Roboto, sans-serif" }}>TABLE &nbsp; BOOKING</h2>

                        <table className="table table-bordered table-dark text-center table-striped" id="mytable">
                            <thead  >
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Total Person</th>
                                    <th>Number</th>
                                    <th>Action</th>

                                </tr>
                            </thead>

                            {data && data.map((item) => {
                                return (
                                    <>

                                        <tbody  >
                                            <tr >
                                                <td width="20%" >{item.tablename}</td>
                                                <td width="15%">{item.tabledate}</td>
                                                <td width="20%">{item.tabletime}</td>
                                                <td width="20%">{item.tableperson}</td>
                                                <td width="13%">{item.tablenumber}</td>
                                                <td width="5%"><ReactWhatsapp number={item.tablenumber} className='bi bi-whatsapp bg-light text-dark ps-1 pe-1 fs-5  rounded-circle' message="Thank you for booking a table at our hotel. Please be on time." /></td>
                                            </tr>
                                        </tbody>
                                    </>
                                )
                            })

                            }

                        </table>
                    </Container>

                </div>
            </div>
        </>
    )
}

export default AdminTablebooking;
