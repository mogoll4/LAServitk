import React, { useState } from 'react';
import './Registro_Login.css'; // Asegúrate de actualizar el nombre del archivo CSS si es necesario

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const Registrarse = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { ...errors };

    // Validación del email
    if (!formData.email) {
      newErrors.email = 'El email es obligatorio.';
      valid = false;
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'El email debe contener un @.';
      valid = false;
    } else {
      newErrors.email = '';
    }

    // Validación de la contraseña
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria.';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);

    if (valid) {
      // Aquí puedes agregar el código para enviar el formulario
      console.log('Formulario enviado');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">
            Ingreso
          </div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
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
        </div>
        <div className="forgot-password">
          ¿Olvidaste tu contraseña?
          <span>
            Click aquí!
          </span>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registrarse;
