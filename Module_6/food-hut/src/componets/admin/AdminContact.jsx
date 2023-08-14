import axios from 'axios';
import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Adminheader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import ReactWhatsapp from 'react-whatsapp';
import { ExportToExcel } from './ExportToExcel';



function AdminContact() {
    const [data, setData] = useState(0);
    const [searchAPIData, setsearchAPIData] = useState([]);
    const [filtervalue, setFiltervalue] = useState("");
    const fileName = "myfile"; // here enter filename for your excel file

    useEffect(() => {
        axios.get("http://localhost:4000/inquiry")
            .then((res) => {
                setData(res.data)
                setsearchAPIData(res.data)
            })
    }, [])

    const Handlefilter = (e) => {
        if (e.target.value == '') {
            setData(searchAPIData)
        }
        else {
            const filterResult = searchAPIData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.cityname.toLowerCase().includes(e.target.value.toLowerCase()) || item.mobile.toLowerCase().includes(e.target.value.toLowerCase()))
            if (filterResult.length > 0) {
                setData(filterResult)
            }
            else {
                setData([{ "mobile": "no data found" }])

            }
        }
        setFiltervalue(e.target.value)
    }
    return (
        <>
            <Adminheader />
            <AdminSidebar />
            <div className='content'>
                <div className='admin-contact-content'>
                    <Container className='contact-content'>
                    <h2 className="mb-4 fw-bold text-white text-center" style={{ fontFamily: "Roboto, sans-serif" }}>MANAGE &nbsp; CONTACT</h2>
                        <input className='bg-dark mb-2 border-0 ps-3 p-2 rounded-pill' type="search" placeholder='Search here' value={filtervalue} onInput={(e) => Handlefilter(e)} />

                        <ExportToExcel apiData={data} fileName={fileName} />

                        <table className="table table-bordered table-dark text-center table-striped" id="mytable">
                            <thead  >
                                <tr>
                                    <th>Name</th>
                                    <th>Mobile Number</th>
                                    <th>E-mail</th>
                                    <th>City</th>
                                    <th>Message</th>
                                    <th>Action</th>

                                </tr>
                            </thead>

                            {data && data.map((item) => {
                                return (
                                    <>

                                        <tbody  >
                                            <tr >
                                                <td width="20%" >{item.name}</td>
                                                <td width="15%">{item.mobile}</td>
                                                <td width="20%">{item.email}</td>
                                                <td width="13%">{item.cityname}</td>
                                                <td width="30%">{item.message}</td>
                                                <td width="5%"><ReactWhatsapp number={item.mobile} className='bi bi-whatsapp bg-light text-dark ps-1 pe-1 fs-5  rounded-circle' message="We will send a detail on your E-mail." /></td>
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

export default AdminContact;
