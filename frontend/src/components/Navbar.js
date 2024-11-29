// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Add custom styles here
import { Link } from 'react-router-dom'; // For routing links

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-logo">My Dashboard</div>
        <ul className="navbar-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/devices">Devices</Link>
            </li>
            <li>
                <Link to="/cameras">Cameras</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
