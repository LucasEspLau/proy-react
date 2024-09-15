import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css'
import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      
      <header className='header'>
        <h1>Bienvenido a ALfresco</h1>
        <p>Descubre el maravillo mundo de los útiles</p>
      </header>
      
      <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}
          <Route path="/catalog" element={<Catalog />} /> {/* Ruta para el catálogo */}
          {/* Puedes añadir más rutas aquí */}
      </Routes>

      <Footer />
      </div>
    </Router>
  );
}
const Home = () => (
  <section className="featured-movies">
    <h2>Catálogo de Productos</h2> {/* Subtítulo de la sección */}
    <div className="movie-grid">
      {/* Aquí se pueden agregar tarjetas de películas */}
    </div>
  </section>
);
export default App;
