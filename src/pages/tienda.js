import React from 'react';
import '../styles/Tienda.css';

const productos = [
  { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: '$100' },
  { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: '$200' },
  { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del producto 3', precio: '$300' },
  // Añade más productos según sea necesario
];

function Tienda() {
  return (
    <div className="tienda-container">
      <header className="tienda-header">
        <h1>Tienda</h1>
      </header>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p className="precio">{producto.precio}</p>
            <button className="btn-agregar">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tienda;
