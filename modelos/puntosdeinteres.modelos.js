const { Schema, model} = require('mongoose');

const PuntoDeInteresSchema = new Schema({
    nombre: String,
    ubicacion: {
        type: String
    },
    descripcion: String,
    Contacto: {
        type: String,
        trim: true
    },
    tipo: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = model('Ubicaciones', PuntoDeInteresSchema);