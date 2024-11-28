import React from 'react';
import './Nosotros.css';

const nosotros: React.FC = () => {
  return (
    <section className="nosotros-container">
      <h2>Sobre Nosotros</h2>
      <p>
        Bienvenido a nuestro sitio web dedicado a la fascinante
        <strong> PokeAPI</strong>! Aquí puedes explorar el mundo de los Pokémon
        de manera interactiva, con acceso a información detallada sobre más de
        800 Pokémon.
      </p>
      <p>
        La PokeAPI es una API pública y gratuita que proporciona datos sobre los
        Pokémon, sus estadísticas, tipos, habilidades, movimientos y mucho más.
        Nuestro sitio ofrece una interfaz simple para que puedas buscar y explorar
        estos datos fácilmente.
      </p>
      <p>
        <strong>Características principales:</strong>
      </p>
      <ul>
        <li>Visualiza los detalles de cualquier Pokémon, desde su altura hasta sus movimientos.</li>
        <li>Filtra Pokémon por tipo, habilidades o movimientos.</li>
        <li>Accede a imágenes de cada Pokémon en diferentes formas.</li>
      </ul>
      <p>
        Estamos muy emocionados de compartir esta maravillosa base de datos con
        todos los fans de los Pokémon. ¡Esperamos que disfrutes explorando el
        mundo de Pokémon tanto como nosotros!
      </p>
    </section>
  );
};

export default nosotros;
