import './App.css';
import Registro from './pages/Registrarse';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terminos from './pages/Terminos';
import Ingreso from './pages/Ingreso' ;

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

    </Routes>
        
  );
}

export default App;
