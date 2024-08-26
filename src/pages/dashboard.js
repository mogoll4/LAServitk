import React, { useState } from 'react';
import '../styles/dashboard.css';

function Dashboard() {
    const [activeView, setActiveView] = useState('overview');

    const renderContent = () => {
        switch (activeView) {
            case 'asistencia':
                return <Asistencia />;
            case 'informacionEmpleados':
                return <InformacionEmpleados />;
            case 'informacionClientes':
                return <InformacionClientes />;
            case 'inventario':
                return <Inventario />;
            case 'gestion':
                return <Gestion />;
            case 'register':
                return <Register />;
            case 'error':
                return <Error />;
            default:
                return (
                    <div className="dashboard-content">
                        <div className="stats-cards">
                            <Card title="Budget" value="$24k" growth="12%" />
                            <Card title="Total Customers" value="1.6k" growth="-16%" />
                            <Card title="Task Progress" value="75.5%" growth="" />
                            <Card title="Total Profit" value="$15k" growth="" />
                        </div>
                        <div className="charts">
                            <div className="sales-chart">
                                {/* Aquí iría un gráfico de ventas */}
                            </div>
                            <div className="traffic-source-chart">
                                {/* Aquí iría un gráfico de fuente de tráfico */}
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="dashboard-container">
            <Sidebar setActiveView={setActiveView} />
            <div className="main-content">
                <Navbar />
                {renderContent()}
            </div>
        </div>
    );
}

function Sidebar({ setActiveView }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="toggle-btn" onClick={toggleSidebar}>
                ☰
            </div>
            <h2>{!isCollapsed && 'Hola!'}</h2>
            {!isCollapsed && (
                <ul>
                    <li onClick={() => setActiveView('overview')}>Inicio</li>
                    <li onClick={() => setActiveView('asistencia')}>Asistencia</li>
                    <li onClick={() => setActiveView('informacionEmpleados')}>Informacion Empleados</li>
                    <li onClick={() => setActiveView('informacionClientes')}>Informacion Clientes</li>
                    <li onClick={() => setActiveView('inventario')}>Inventario</li>
                    <li onClick={() => setActiveView('gestion')}>Gestion</li>
                    <li onClick={() => setActiveView('register')}>Register</li>
                    <li onClick={() => setActiveView('error')}>Error</li>
                </ul>
            )}
        </div>
    );
}

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <h1>LAServitk</h1>
            <div className="user-menu">
                <span>Bienvenido X</span>
                <button className="user-btn" onClick={toggleMenu}>▼</button>
                {isMenuOpen && (
                    <div className="user-dropdown">
                        <ul>
                            <li>Perfil</li>
                            <li>Salir</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

function Card({ title, value, growth }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{value}</p>
            {growth && <span>{growth}</span>}
        </div>
    );
}

function Asistencia() {
    return (
        <div className="asistencia-content">
            <h2 className="section-title">Asistencia</h2>
            <div className="asistencia-table-container">
                <table className="asistencia-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Última Asistencia</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Ejemplo de fila */}
                        <tr>
                            <td>Juan Pérez</td>
                            <td>24/08/2024</td>
                            <td><button className="confirm-btn">Confirmar Asistencia</button></td>
                            <td><button className="confirm-btn">Solicitar Permiso</button></td>
                        </tr>
                        {/* Puedes agregar más filas aquí */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function InformacionClientes() {
    // Ejemplo de datos para la tabla
    const clientes = [
        { id: 1, nombre: 'Carlos Martínez', modeloVehiculo: 'Toyota Corolla', servicio: 'Cambio de aceite' },
        { id: 2, nombre: 'Laura Gómez', modeloVehiculo: 'Honda Civic', servicio: 'Revisión de frenos' },
        // Agrega más clientes según sea necesario
    ];

    const handleEdit = (id) => {
        // Lógica para editar la información del cliente
        console.log(`Editar cliente con ID: ${id}`);
    };

    const handleDelete = (id) => {
        // Lógica para borrar el cliente
        console.log(`Borrar cliente con ID: ${id}`);
    };

    return (
        <div className="informacion-clientes-content">
            <h2 className="section-title">Información de Clientes</h2>
            <div className="clientes-table-container">
                <table className="clientes-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Modelo de Vehículo</th>
                            <th>Servicio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.modeloVehiculo}</td>
                                <td>{cliente.servicio}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => handleEdit(cliente.id)}>Editar Información</button>
                                    <button className="delete-btn" onClick={() => handleDelete(cliente.id)}>Borrar Cliente</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


function InformacionEmpleados() {
    return <div className="informacion-empleados-content"><h2>Información de Empleados</h2></div>;
}

function Inventario() {
    // Datos de ejemplo para la tabla
    const [inventario, setInventario] = useState([
        { id: 1, nombre: 'Artículo A', costo: '$100' },
        { id: 2, nombre: 'Artículo B', costo: '$150' },
    ]);

    // Estado para el formulario de nuevo producto
    const [showForm, setShowForm] = useState(false);
    const [newItem, setNewItem] = useState({ nombre: '', costo: '' });

    const handleEdit = (id) => {
        // Lógica para editar el inventario
        console.log(`Editar inventario con ID: ${id}`);
    };

    const handleDelete = (id) => {
        // Lógica para borrar el artículo del inventario
        setInventario(inventario.filter(item => item.id !== id));
        console.log(`Borrar inventario con ID: ${id}`);
    };

    const handleAddItem = () => {
        if (newItem.nombre && newItem.costo) {
            setInventario([...inventario, { id: Date.now(), ...newItem }]);
            setNewItem({ nombre: '', costo: '' });
            setShowForm(false);
        }
    };

    return (
        <div className="inventario-content">
            <h2 className="section-title">Inventario</h2>
            <button className="add-btn" onClick={() => setShowForm(true)}>Agregar Producto</button>
            <div className="inventario-table-container">
                <table className="inventario-table">
                    <thead>
                        <tr>
                            <th>Nombre del Artículo</th>
                            <th>Costo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventario.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.costo}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => handleEdit(item.id)}>Editar Inventario</button>
                                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>Borrar Inventario</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showForm && (
                <div className="add-item-form">
                    <h3>Agregar Nuevo Producto</h3>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            value={newItem.nombre}
                            onChange={(e) => setNewItem({ ...newItem, nombre: e.target.value })}
                        />
                    </label>
                    <label>
                        Costo:
                        <input
                            type="text"
                            value={newItem.costo}
                            onChange={(e) => setNewItem({ ...newItem, costo: e.target.value })}
                        />
                    </label>
                    <button onClick={handleAddItem}>Agregar</button>
                    <button onClick={() => setShowForm(false)}>Cancelar</button>
                </div>
            )}
        </div>
    );
}


function Gestion() {
    return <div className="gestion-content"><h2>Gestión</h2></div>;
}

function Register() {
    return <div className="register-content"><h2>Register</h2></div>;
}

function Error() {
    return <div className="error-content"><h2>Error</h2></div>;
}

export default Dashboard;
