import React, {useEffect} from 'react'
import AOS from "aos";
import { Container } from 'react-bootstrap';
import { Link } from "react-scroll";



function Home() {
    useEffect(() => {
        AOS.init(
            {
                once: true
            }
        );
    }, [])
    return (
        <>
        
            <Container fluid className='header m-0 p-0' id="home">
                <div className='overlay text-white text-center d-flex flex-column justify-content-center align-items-center' style={{fontFamily: "Roboto, sans-serif"}}>
                    <h1 className='display-1 fw-bold my-3 home-name' data-aos="zoom-in-down" data-aos-duration="2500">Food Hut</h1>
                    <h2 className='display-4 fw-bold mb-5'>Always fresh & Delightful</h2>
                    <Link className="btn btn-danger btn-lg p-3 px-4" 
                    // activeClassName="active"
                                    to="gallery"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500} 
                     >View our Gallary</Link>
                </div>
            </Container>
            
        </>
    )
}

export default Home;
