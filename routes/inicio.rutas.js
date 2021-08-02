const express = require('express');
const rutas = express.Router();

const inicio  = require ('../Funciones/perros.funciones');

//rutas.post('/', perros.Crear);
//rutas.get('/', perros.Metodoget);
//rutas.delete('/', perros.borrar);
rutas.route('/')
    .post(perros.Crear)
    .get(perros.BuscarTodas)

rutas.route('/:id')
    .delete(perros.Borrar)
    .get(perros.Buscar)
    .put(perros.Actualizar)

module.exports = rutas;