const express = require('express');
const rutas = express.Router();

const usuarios = require ('../Funciones/usuarios.funciones');

//rutas.post('/', perros.Crear);
//rutas.get('/', perros.Metodoget);
//rutas.delete('/', perros.borrar);
rutas.route('/')
    .post(usuarios.Crear)
    .delete(usuarios.Borrar)


rutas.route('/:id')


module.exports = rutas;