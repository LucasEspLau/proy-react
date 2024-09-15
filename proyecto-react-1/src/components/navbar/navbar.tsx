import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () =>{
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Logo</Link> {/*Enlace a la página */}
            </div>
            <div className="navbar-toggle">
                <div className="navbar-toggle-bar"></div>
                <div className="navbar-toggle-bar"></div>
                <div className="navbar-toggle-bar"></div>
            </div>
            <ul className="navbar-links">
                <li><Link to="/about">Sobre Nosotros</Link></li>
                <li><Link to="/catalog">Catálogo</Link></li>
                <li><Link to="#contact">Contacto</Link></li>
            </ul>
        </nav>
    );
};
export default Navbar;
