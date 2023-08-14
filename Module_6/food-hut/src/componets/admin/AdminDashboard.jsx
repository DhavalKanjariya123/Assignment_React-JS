import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Adminheader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Chart from "react-apexcharts";
import { useState } from 'react';
import { useEffect } from 'react';
// import PieRechartComponent from './Adminchart';
// import Appd from "./Adminchart";

function AdminDashboard() {
    
    const [tabledatavalue, setTabledatavalue] = useState([])
    const [tabledate, setTabledate] = useState([])
    const [tablename, setTablename] = useState([])
    useEffect(() => {
        const TableDetailValue = [];
        const TableDetaildate = [];
        const TableDetailname = [];

        const GetSocial = async () => {
            // const dataReq = await fetch("http://localhost:4000/chart");
            const dataReq = await fetch("http://localhost:4000/tablebooking");
            const dataRes = await dataReq.json();

            for (let i = 0; i < dataRes.length; i++) {
            
                TableDetaildate.push(dataRes[i].tabledate);
                TableDetailValue.push(dataRes[i].tableperson);
                TableDetailname.push(dataRes[i].tablename);

                
               
            }
            setTabledate(TableDetaildate);
            setTabledatavalue(TableDetailValue);
            setTablename(TableDetailname);
        }
        GetSocial();



    }, [])

    return (
        <>
            <Adminheader />
            <AdminSidebar />
            <div className='content'>
                <div className='admin-dashboard-content'>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Row className='justify-content-around'>
                                    <Col md={5} className="dashboard-detail p-1 mt-3">
                                        <Row>
                                            <Col xs={5} className='d-flex flex-column justify-content-center align-items-center'>
                                                <i class="bi bi-graph-up fw-bold"></i>
                                            </Col>
                                            <Col xs={7}>
                                                <p className='text-color fs-6'>Today Order</p>
                                                <h6 className='text-white'>1000</h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={5} className="dashboard-detail p-1 mt-3">
                                        <Row>
                                            <Col xs={5} className='d-flex flex-column justify-content-center align-items-center'>
                                                <i className="bi bi-bar-chart-line-fill fw-bold"></i>
                                            </Col>
                                            <Col xs={7}>
                                                <p className='text-color fs-6'>Total Order</p>
                                                <h6 className='text-white' >10000</h6>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={5} className="dashboard-detail p-1 mt-3">
                                        <Row>
                                            <Col xs={5} className='d-flex flex-column justify-content-center align-items-center'>
                                                <i className="bi bi-graph-up fw-bold"></i>
                                            </Col>
                                            <Col xs={7}>
                                                <p className='text-color fs-6'>Today Revenue</p>
                                                <h6 className='text-white'>&#8377;  5000</h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={5} className="dashboard-detail p-1 mt-3">
                                        <Row>
                                            <Col xs={5} className='d-flex flex-column justify-content-center align-items-center'>
                                                <i className="bi bi-bar-chart-line-fill fw-bold"></i>
                                            </Col>
                                            <Col xs={7}>
                                                <p className='text-color fs-6'>Total Revenue</p>
                                                <h6 className='text-white'>&#8377;  50000</h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                {/* <PieRechartComponent/> */}
                                {/* <Appd/> */}
                                {/* <h1>Dhaval</h1> */}
                            </Col>
                        </Row>
                    </Container>
                    <Container className="barchart-detail">
                        <Row>
                            <h2 className="mb-4 fw-bold text-white text-center mt-5" style={{ fontFamily: "Roboto, sans-serif" }}>TABLE &nbsp;BOOKING &nbsp;CHART</h2>
                            <Col className="chartdet">
                                <Chart 
                                    type='bar'
                                    width={1000}
                                    height={500}
                                    series={[
                                        {
                                            name: "Total Number of Person",
                                            data: tabledatavalue
                                        }
                                    ]}

                                    options={{
                                        colors: ["#f90000"],
                                        theme: { mode: "dark" },
                                        xaxis: {
                                            tickPlacement: "on",
                                            
                                            categories: tabledate ,
                                            
                                            title: {
                                                text: "Date",
                                                style: { fontSize: "18px" }
                                            }
                                        },
                                        
                                        yaxis: {

                                            labels: {
                                                formatter: (val) => {
                                                    return `${val}`
                                                },
                                                style: { colors: ["#ffffff"], fontSize: ["16px"] },
                                            },

                                            title: {
                                                text: "Total Number of  Person",
                                                style: { fontSize: "18px" }
                                            }
                                        },

                                        dataLabels: {
                                            style: { colors: ["#ffffff"], fontSize: 18 },

                                        }
                                    }}
                                >

                                </Chart>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>














        </>
    )
}

export default AdminDashboard;
