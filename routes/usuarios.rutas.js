const express = require('express');
const rutas = express.Router();

const usuarios = require ('../Funciones/usuarios.funciones');

//rutas.post('/', perros.Crear);
//rutas.get('/', perros.Metodoget);
//rutas.delete('/', perros.borrar);
rutas.route('/')
    .get(usuarios.Crear)


rutas.route('/:id')


module.exports = rutas;