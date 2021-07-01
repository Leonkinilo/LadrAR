const express = require('express');
const rutas = express.Router();

const perros = require ('../Funciones/perros.funciones');

rutas.post('/', perros.Crear);

module.exports = rutas;