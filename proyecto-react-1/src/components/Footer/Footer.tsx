import React from "react";
import './Footer.css';

const Footer=()=>{
    return(
        <footer className="footer">
            <p>Síguenos en nuestras redes sociales</p>
       
        <ul>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li> {/* Enlace a Facebook */}
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li> {/* Enlace a Twitter */}
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li> {/* Enlace a Instagram */}
   
        </ul>
        </footer>
    );
};
export default Footer;