const { Schema, model} = require('mongoose');
const PuntoDeInteresSchema = new Schema({
    nombre: {
        type: String,
    },
    ubicacion: {
        type: String,
        required: true
    },
    /*
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
      type: Number,
        required: true
    },
    */
    contacto: String,
    descripcion: {
        type: String,
        trim: true
    },
    tipo: {
        type: String,
        required: true
    },
    creador: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Ubicaciones', PuntoDeInteresSchema);