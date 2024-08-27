const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'LaServitk'
});

connection.connect();

app.post('/registro', (req, res) => {
  const { nombre, email, password } = req.body;

  const query = 'INSERT INTO usuario (nombre, correo, contraseña, rol_id) VALUES (?, ?, ?, ?)';
  connection.query(query, [nombre, email, password, 1], (error, results) => {
    if (error) {
      console.error('Error al registrar el usuario:', error); // Agrega un log de error para depurar
      res.status(500).json({ error: 'Error al registrar el usuario' });
    } else {
      res.status(200).json({ message: 'Usuario registrado correctamente' });
    }
  });
});

app.listen(3006, () => {
  console.log('Servidor corriendo en http://localhost:3006');
});
