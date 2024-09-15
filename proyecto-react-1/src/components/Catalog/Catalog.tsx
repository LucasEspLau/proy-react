import React, { useEffect, useState } from 'react';
import './Catalog.css'; // Asegúrate de que este archivo exista y tenga estilos

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  img: string;
  precio: string;
  stock: number;
}

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch product data from the API
    fetch('https://servidor-qt8f.onrender.com/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="catalog">
      <h2>Catálogo de Productos</h2>
      <div className="movie-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={`${product.nombre} Poster`} className="product-image" />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
