import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <ul className="navbar-list">
                    <li className="navbar-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li className="navbar-list-item-login">
                        <Link to="/log-in">Log In</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;