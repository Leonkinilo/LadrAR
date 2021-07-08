const { model, Schema} = require('mongoose');

new Schema({
    nombre: String,
    ubicacion: {
        type: String,
        required: true
    },
    descripcion: String,
    Contacto: String,
    tipo: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})