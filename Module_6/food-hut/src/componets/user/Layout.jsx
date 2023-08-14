import React from 'react'
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import BookTable from './BookTable';
import Blog from './Blog';
import Reviews from './Reviews';
import Contactus from './Contactuss';
import Footer from './Footer';


import { Circles } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useState } from 'react';
import { useEffect } from 'react';



function Layout() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an API call or some asynchronous operation
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div>
            {loading ? (
                <Circles wrapperClass='d-flex  justify-content-center loader-time'
                    type="TailSpin"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={2000} // optional prop, defines the time to wait for the loader to display before stopping
                />
            ) : (
                <div>
                    {
                        <>
                            <Home />
                            <About />
                            <Gallery />
                            <BookTable />
                            <Blog />
                            <Reviews />
                            <Contactus />
                            <Footer />

                        </>
                    }
                </div>
            )}
        </div>
        // <>
        //     <Home />
        //     <About />
        //     <Gallery />
        //     <BookTable />
        //     <Blog />
        //     <Reviews />
        //     <Contactus />
        //     <Footer />

        // </>
    )
}

export default Layout;
