const usuarios = [];

const Models = require('../modelos/usuarios.modelos');

usuarios.Crear = async (req, res) => {
    const { NombreUsuario, Contraseña} = req.body;
    if (!NombreUsuario) return res.status(400).json({message: "El nombre de usuario esta vacio"});
    if (!Contraseña) return res.status(400).json({message: "La contraseña esta vacia"});
    if (await Models.findOne({"NombreUsuario" : NombreUsuario})) return res.json({message: "No sos el verdadero " + NombreUsuario})
    const NuevoUsuario = new Models ({
        NombreUsuario,
        Contraseña
    });
    await NuevoUsuario.save(usuarios);
    res.json("Nuevo Usuario, " + NombreUsuario + ", a sido creado" ); 
}
usuarios.Borrar = async (req, res) => {
    const { NombreUsuario, Contraseña} = req.body;
    const Contra = await Models.findOne({"NombreUsuario": NombreUsuario}).select("Contraseña");
    if ({Contraseña} == {Contra})
    {
       await Models.findOneAndDelete({"NombreUsuario": NombreUsuario});
    }
    else {
        res.json({message: "Contraseña Incorrecta"});
    }
    //res.send('Usuario: ' + NombreUsuario + " a sido borrado");
    //res.json({Contra});
    
}

module.exports = usuarios;