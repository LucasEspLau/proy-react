import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Pokémon logo"
            className="navbar-logo-image"
          />
          <span>Pokédex</span> {/* Nombre de la aplicación */}
        </Link>
      </div>
      <div className="navbar-toggle">
        <div className="navbar-toggle-bar"></div>
        <div className="navbar-toggle-bar"></div>
        <div className="navbar-toggle-bar"></div>
      </div>
      <ul className="navbar-links">
        <li><Link to="/pokedex">Pokédex</Link></li> {/* Enlace a la Pokédex */}
        <li><Link to="/types">Tipos</Link></li> {/* Enlace a tipos de Pokémon */}
        <li><Link to="/nosotros">Acerca de</Link></li> {/* Información sobre la API */}
        <li><Link to="/contact">Contacto</Link></li> {/* Información de contacto */}
      </ul>
    </nav>
  );
};

export default Navbar;
