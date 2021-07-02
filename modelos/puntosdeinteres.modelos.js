const { Schema, model} = require('mongoose');
var nom = "anonimo";
const PuntoDeInteresSchema = new Schema({
    nombre: {
        type: String,
        deafult: nom
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
    }
}, {
    timestamps: true
});

module.exports = model('Ubicaciones', PuntoDeInteresSchema);