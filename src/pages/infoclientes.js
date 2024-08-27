import React, { useState } from 'react';
import '../styles/infos.css';

function HistorialCliente() {
    const [activeSection, setActiveSection] = useState('historialServicios');

    const renderSection = () => {
        switch (activeSection) {
            case 'informacionPersonal':
                return <InformacionPersonal />;
            case 'informacionVehiculos':
                return <InformacionVehiculos />;
            case 'historialServicios':
                return <HistorialServicios />;
            default:
                return <HistorialServicios />;
        }
    };

    return (
        <div className="historial-cliente-layout">
            <Sidebar setActiveSection={setActiveSection} />
            <div className="historial-cliente-container">
                {renderSection()}
            </div>
        </div>
    );
}

function Sidebar({ setActiveSection }) {
    return (
        <div className="sidebar">
            <ul>
                <li onClick={() => setActiveSection('informacionPersonal')}>Información Personal</li>
                <li onClick={() => setActiveSection('informacionVehiculos')}>Información Vehículos</li>
                <li onClick={() => setActiveSection('historialServicios')}>Historial de servicios</li>
            </ul>
            <button className="add-service-btn">Agregar nuevo servicio</button>
        </div>
    );
}

function InformacionPersonal() {
    // Aquí puedes reemplazar estos valores con la información real del cliente
    const nombreCompleto = "Juan Pérez";
    const documentoIdentificacion = "123456789";
    const correoElectronico = "juan.perez@example.com";
    const numeroTelefono = "555-1234";

    return (
        <div className="informacion-personal">
            <div className="perfil-container">
                <div className="foto-perfil">
                    <img src="ruta-de-la-imagen" alt="Foto de perfil" />
                </div>
                <div className="informacion-basica">
                    <h1>Perfil y visibilidad</h1>
                    <p>Administra la información personal.</p>
                </div>
            </div>
            <div className="informacion-personal-detalles">
                <h2>Información Personal</h2>
                <p><strong>Nombre Completo:</strong> {nombreCompleto}</p>
                <p><strong>Documento de Identificación:</strong> {documentoIdentificacion}</p>
                <p><strong>Correo Electrónico:</strong> {correoElectronico}</p>
                <p><strong>Número de Teléfono:</strong> {numeroTelefono}</p>
            </div>
        </div>
    );
}



function InformacionVehiculos() {
    // Aquí puedes reemplazar estos valores con la información real del vehículo
    const vehiculoPrincipal = {
        modelo: "Toyota Corolla",
        marca: "Toyota",
        año: "2020",
        placa: "ABC123",
        vin: "1HGCM82633A123456",
        kilometraje: "15,000 km",
        color: "Azul"
    };

    const vehiculoSecundario = {
        modelo: "Honda Civic",
        marca: "Honda",
        año: "2018",
        placa: "XYZ789",
        vin: "2HGCM82633A123456",
        kilometraje: "45,000 km",
        color: "Negro"
    };

    return (
        <div className="informacion-vehiculos">
            <h1>Vehículos</h1>

            <div className="vehiculo-principal">
                <h2>Vehículo principal</h2>
                <div className="foto-vehiculo">
                    <img src="ruta-de-la-imagen" alt="Foto vehículo principal" />
                </div>
                <div className="detalles-vehiculo">
                    <p><strong>Modelo del Vehículo:</strong> {vehiculoPrincipal.modelo}</p>
                    <p><strong>Marca del Vehículo:</strong> {vehiculoPrincipal.marca}</p>
                    <p><strong>Año del Vehículo:</strong> {vehiculoPrincipal.año}</p>
                    <p><strong>Número de Placa:</strong> {vehiculoPrincipal.placa}</p>
                    <p><strong>Número de VIN:</strong> {vehiculoPrincipal.vin}</p>
                    <p><strong>Kilometraje Actual:</strong> {vehiculoPrincipal.kilometraje}</p>
                    <p><strong>Color del Vehículo:</strong> {vehiculoPrincipal.color}</p>
                </div>
            </div>

            <div className="vehiculo-secundario">
                <h2>Vehículo Secundario</h2>
                <div className="foto-vehiculo">
                    <img src="ruta-de-la-imagen" alt="Foto vehículo secundario" />
                </div>
                <div className="detalles-vehiculo">
                    <p><strong>Modelo del Vehículo:</strong> {vehiculoSecundario.modelo}</p>
                    <p><strong>Marca del Vehículo:</strong> {vehiculoSecundario.marca}</p>
                    <p><strong>Año del Vehículo:</strong> {vehiculoSecundario.año}</p>
                    <p><strong>Número de Placa:</strong> {vehiculoSecundario.placa}</p>
                    <p><strong>Número de VIN:</strong> {vehiculoSecundario.vin}</p>
                    <p><strong>Kilometraje Actual:</strong> {vehiculoSecundario.kilometraje}</p>
                    <p><strong>Color del Vehículo:</strong> {vehiculoSecundario.color}</p>
                </div>
            </div>
        </div>
    );
}


function HistorialServicios() {
    return (
        <div className="historial-servicios">
            <h1>Historial</h1>
            <h2>Historial de Vehículo principal</h2>
            <img className="vehicle-photo" src="ruta-de-la-imagen" alt="Foto vehículo" />
            <section className="service-details">
                <h3>1. Detalles Generales del Servicio:</h3>
                <p>Detalles generales del servicio aquí...</p>

                <h3>2. Detalles del Vehículo:</h3>
                <p>Detalles del vehículo aquí...</p>

                <h3>3. Repuestos y Materiales Utilizados:</h3>
                <p>Detalles de los repuestos y materiales aquí...</p>

                <h3>4. Mano de Obra:</h3>
                <p>Detalles de la mano de obra aquí...</p>

                <h3>5. Costo Total del Servicio:</h3>
                <p>Detalles del costo total aquí...</p>
            </section>
            <section className="secondary-vehicle-history">
                <h2>Historial de Vehículo Secundario (recién agregado)</h2>
                <p>Detalles del historial del vehículo secundario aquí...</p>
            </section>
        </div>
    );
}

export default HistorialCliente;
