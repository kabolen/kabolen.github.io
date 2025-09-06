import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <nav className="main-nav">
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/projects">
                Projects
            </NavLink>
            <NavLink to="/about">
                About Me
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
        </nav>
    );
}

export default Header;