import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro_Login.css'; // Asegúrate de actualizar el nombre del archivo CSS si es necesario

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const Registrarse = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { ...errors };

    // Validación de campos
    if (!formData.nombre) {
      newErrors.nombre = 'El nombre es obligatorio.';
      valid = false;
    } else {
      newErrors.nombre = '';
    }

    if (!formData.email) {
      newErrors.email = 'El email es obligatorio.';
      valid = false;
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'El email debe contener un @.';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria.';
      valid = false;
    } else {
      newErrors.password = '';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
      valid = false;
    } else {
      newErrors.confirmPassword = '';
    }

    if (!document.querySelector('input[type="checkbox"]').checked) {
      newErrors.terms = 'Debes aceptar los Términos y Condiciones.';
      valid = false;
    } else {
      newErrors.terms = '';
    }

    setErrors(newErrors);

    if (valid) {
      // Aquí puedes agregar el código para enviar el formulario
      console.log('Formulario enviado');
    }
  };

  const handlePaste = (e) => {
    e.preventDefault(); // Evita que se pueda pegar
  };

  return (
    <div>
      <header className="custom-header">
        <h1>La Servitk</h1>
      </header>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <div className="text">
              Registro
            </div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="User icon" />
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder='Nombre'
              />
              {errors.nombre && <p className="error-message">{errors.nombre}</p>}
            </div>
            <div className="input">
              <img src={email_icon} alt="Email icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="input">
              <img src={password_icon} alt="Password icon" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Contraseña'
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div className="input">
              <img src={password_icon} alt="Password icon" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onPaste={handlePaste} // Añade el evento para manejar el pegado
                placeholder='Confirmar Contraseña'
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
          </div>
          <div className="terms-container">
            <label>
              <input type="checkbox" required />
              Acepto los 
              <a href="/terminos" target="_blank" rel="noopener noreferrer"> Términos y Condiciones</a>
            </label>
            {errors.terms && <p className="error-message">{errors.terms}</p>}
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">
              Registrarse
            </button>
          </div>
          <div className="forgot-password">
            ¿Ya tienes una cuenta?
            <span> <br></br>
            <Link to="/ingreso">Click Aqui</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrarse;
