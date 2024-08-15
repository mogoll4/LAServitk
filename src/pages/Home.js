import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Home.css';
import miImagen from '../Components/Assets/mecanico.jpg'; // Ajusta la ruta según la ubicación de tu imagen

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-text">La Servitk</div>
        <nav className="home-nav">
          <ul>
            <li>
              <Link to="/registro">Registrarse</Link>
            </li>
            <li>
              <Link to="/ingreso">Ingresar</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="home-content">
        <div className="image-space">
          <img src={miImagen} alt="Descripción de la imagen" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="text-space">
          <div className="text-content">
            <h2>Servicio Rápido y Eficiente para Tu Auto</h2>
            <p>
              En La Servitk, nos especializamos en ofrecer un servicio integral para tu vehículo. 
              Desde reparaciones rápidas hasta mantenimiento completo, nuestro equipo de expertos está 
              listo para atender tus necesidades automotrices con la mayor eficiencia y profesionalismo.
            </p>
            <p>
              Además, contamos con una amplia gama de repuestos de alta calidad para asegurar que tu auto 
              funcione de la mejor manera. Ya sea que necesites un cambio de aceite, revisión de frenos, 
              o repuestos específicos, en La Servitk tenemos lo que buscas.
            </p>
            <p>
              No pierdas tiempo en largos períodos de espera en otros talleres. Con nosotros, puedes 
              estar seguro de que recibirás un servicio rápido, confiable y a precios competitivos. 
              Visítanos y comprueba la calidad de nuestro servicio por ti mismo.
            </p>
          </div>
        </div>
        <Outlet /> {/* Aquí se renderizarán las rutas anidadas */}
      </div>
      <footer className="home-footer">
        <p>&copy; 2024 LA Servitk. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
