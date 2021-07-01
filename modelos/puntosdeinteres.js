const { model, Schema} = require('mongoose');

const PuntoDeInteresSchema = new Schema({
    nombre: String,
    ubicacion: {
        type: String,
        required: true
    },
    descripcion: String,
    Contacto: {
        type: String,
        trim: true
    },
    tipo: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = model('UbicacionesSchema', PuntoDeInteresSchema);