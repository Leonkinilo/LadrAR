const usuarios = [];

const Models = require('../modelos/usuarios.modelos');

usuarios.Crear = async (req, res) => {
    const { NombreUsuario, Contraseña} = req.body;
    if (!NombreUsuario) return res.status(400).json({message: "El nombre de usuario esta vacio"});
    if (!Contraseña) return res.status(400).json({message: "La contraseña esta vacia"});
    const NuevoUsuario = new Models ({
        NombreUsuario,
        Contraseña
    });
    await NuevoUsuario.save(usuarios);
    res.json({nuevo: NuevoUsuario}); 
}

module.exports = usuarios;