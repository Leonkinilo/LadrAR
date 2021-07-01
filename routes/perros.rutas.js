const express = require('express');
const rutas = express.Router();

const perros = require ('../Funciones/perros.funciones');

rutas.post('/', perros.Crear);
rutas.get('/', perros.Metodoget);

module.exports = rutas;