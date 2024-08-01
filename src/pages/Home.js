// src/pages/Home.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Home.css'; // Importa el archivo CSS actualizado

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-text">Menu Principal</div>
        <div className="home-underline"></div>
      </div>
      <nav className="home-nav">
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/registro">Registrarse</Link>
          </li>
          <li>
            <Link to="/ingreso">Ingresar</Link>
          </li>
        </ul>
      </nav>
      <footer className="home-footer">
        <p>&copy; 2024 LA ServitK. Todos los derechos reservados.</p>
      </footer>
      <Outlet /> {/* Aquí se renderizarán las rutas anidadas */}
    </div>
  );
}

export default Home;
