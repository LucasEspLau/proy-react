import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Síguenos en nuestras redes sociales</p>
      <ul>
        <li>
          <a href="https://facebook.com/Pokemon" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li> {/* Enlace a la página oficial de Pokémon en Facebook */}
        <li>
          <a href="https://twitter.com/Pokemon" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li> {/* Enlace a la cuenta oficial de Pokémon en Twitter */}
        <li>
          <a href="https://instagram.com/pokemon" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li> {/* Enlace a la cuenta oficial de Pokémon en Instagram */}
      </ul>
      <p>Datos proporcionados por <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">PokeAPI</a></p> {/* Enlace a PokeAPI */}
    </footer>
  );
};

export default Footer;
