const { Schema, model} = require('mongoose');

const PuntoDeInteresSchema = new Schema({
    nombre: String,
    ubicacion: {
        type: String,
        required: true
    },
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