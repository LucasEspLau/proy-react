import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import Nosotros from './components/SobreNosotros/nosotros';  
function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Barra de navegación */}
        <Navbar />

        {/* Contenido principal */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/nosotros" element={<Nosotros />} /> 
          </Routes>
        </main>

        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
