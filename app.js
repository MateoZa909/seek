// app.js
const express = require('express');
const dbSeek = require('./db'); 

const app = express();

// Ruta Inicio
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});