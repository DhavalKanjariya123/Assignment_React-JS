import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
// import validateForm from '../../js/file';


function BookTable() {

  const tablename = useRef("");
  const tabledate = useRef("");
  const tabletime = useRef("");
  const tableperson=useRef("");
  const tablenumber = useRef("");
  const Navigate = useNavigate("");

  const Clktable = () => {
    var insert = {
      tablename: tablename.current.value,
      tabledate: tabledate.current.value,
      tabletime: tabletime.current.value,
      tableperson:tableperson.current.value,
      tablenumber: tablenumber.current.value,
    }
    axios.post(" http://localhost:4000/tablebooking", insert)
      .then(() => {
        alert("Thank you for booking a table at our hotel. We look forward to welcoming you! Please note that your reservation is confirmed. Should you have any special requests or need to make any changes, please feel free to contact us at [Hotel Contact Information].")
        window.location="/"
      });
  }

  return (
    <>

      <Container fluid className="booking-table text-center m-0 p-0" id="booktable">
        <div className='booking-table-bg'>
          <h2 className='text-white fw-bold  section-title-booking-table' style={{ fontFamily: "Roboto, sans-serif" }}>
            BOOK A TABLE
          </h2>
          <Row className='mx-auto'>

            <Col md={3}>
              <form name="myForm" className='table-book-input' action="/action_page.php" method="post" required>
                <label className='text-white float-start mb-1'>Enter Name :</label>
                <input type="text" ref={tablename} className='form-control custom-form-control table-form' placeholder='' required />
              </form>
            </Col>
            <Col md={2}>
              <form name="myFormdate" className='table-book-input' action="/action_page.php" method="post" required>
                <label className='text-white float-start mb-1'>Enter Date :</label>
                <input type="date" ref={tabledate} className='form-control custom-form-control table-form' placeholder="" required />
              </form>
            </Col>
            <Col md={2}>
              <form name="myFormtime" className='table-book-input' action="/action_page.php" method="post" required>
                <label className='text-white float-start mb-1'>Enter Time :</label>
                <input type="time" ref={tabletime} className='form-control custom-form-control table-form' placeholder='' required />
              </form>
            </Col>
            <Col md={2}>
              <form name="myFormnum" className='table-book-input' action="/action_page.php" method="post" required>
                <label className='text-white float-start mb-1'>Total Person :</label>
                <input type="number" ref={tableperson} className='form-control custom-form-control table-form' placeholder='' required />
              </form>
            </Col>
            <Col md={3}>
              <form name="myFormnum" className='table-book-input' action="/action_page.php" method="post" required>
                <label className='text-white float-start mb-1'>Enter Mobile Number :</label>
                <input type="number" ref={tablenumber} className='form-control custom-form-control table-form' placeholder='' required />
              </form>
            </Col>

          </Row>

          <Button type='submit' className="btn btn-danger btn-lg booking-table-btn px-4" onClick={Clktable}>FIND TABLE</Button>

        </div>


      </Container>

    </>
  )
}

export default BookTable;
