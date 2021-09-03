const { Schema, model} = require('mongoose');
const UsuariosSchema = new Schema({
    NombreUsuario: {
        type: String,
        required: true,
        unique: true
    },
    Contraseña: {
        type: String,
        required: true
    }
});

module.exports = model('usuario', UsuariosSchema);