import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Home.css';
import miImagen1 from '../Components/Assets/mecanico.jpg'; // Imagen para el carousel
import miImagen2 from '../Components/Assets/2.jpg'; // Imagen para el carousel
import miImagen3 from '../Components/Assets/3.jpg'; // Imagen para el carousel
import miImagen4 from '../Components/Assets/3.jpg'; // Imagen nueva

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-text">La Servitk</div>
        <nav className="home-nav">
          <ul>
          <li>
              <Link to="/tienda">Tienda</Link>
            </li>
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
          <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false} 
            showStatus={false} 
            showArrows={true}
          >
            <div>
              <img src={miImagen1} alt="Descripción de la imagen 1" />
              <p className="legend">Descripción de la imagen 1</p>
            </div>
            <div>
              <img src={miImagen2} alt="Descripción de la imagen 2" />
              <p className="legend">Descripción de la imagen 2</p>
            </div>
            <div>
              <img src={miImagen3} alt="Descripción de la imagen 3" />
              <p className="legend">Descripción de la imagen 3</p>
            </div>
          </Carousel>
        </div>
        <div className="text-image-container">
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
          <div className="additional-image">
            <img src={miImagen4} alt="Descripción de la nueva imagen" />
          </div>
        </div>
        <Outlet /> {/* Aquí se renderizarán las rutas anidadas */}
      </div>
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section contact-info">
            <h4>Contacto</h4>
            <p>Dirección: Calle 17A # 102 - 56, Fontibon</p>
            <p>Teléfono: 3203565617</p>
            <p>Email: contacto@laservitk.com</p>
          </div>
          <div className="footer-section map">
    <h3>Visítanos</h3>
    <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCZYOFtmDTCHduH5bVOR97wwRhyGCbIPB8&q=La+servitk,+Bogotá"
        allowFullScreen
        loading="lazy"
        title="Ubicación"
    ></iframe>
</div>

        </div>
      </footer>
    </div>
  );
}


export default Home;
