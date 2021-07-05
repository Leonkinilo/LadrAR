const express = require('express');
const rutas = express.Router();

const perros = require ('../Funciones/perros.funciones');

//rutas.post('/', perros.Crear);
//rutas.get('/', perros.Metodoget);
//rutas.delete('/', perros.borrar);
rutas.route('/')
    .post(perros.Crear)
    .get(perros.Metodoget)

rutas.route('/:id')
    .delete(perros.borrar)
    .get(perros.buscar)

module.exports = rutas;