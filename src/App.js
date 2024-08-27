import './App.css';
import Registro from './pages/Registrarse';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terminos from './pages/Terminos';
import Ingreso from './pages/Ingreso' ;
import Dashboard from './pages/dashboard';
import Tienda from './pages/tienda';
import InfoClientes from './pages/infoclientes';


function App() {
  return (
    <Routes>
      {/* Rutas que usan el Layout */}
      <Route path="/" element={<Home />}>
      </Route>

      {/* Ruta independiente */}
      <Route path="/registro" element={<Registro />} />
      <Route path="/ingreso" element={<Ingreso />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/info-clientes" element={<InfoClientes />} />


    </Routes>
        
  );
}

export default App;
