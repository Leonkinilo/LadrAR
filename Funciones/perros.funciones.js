const perros = [];

const Models = require('../modelos/puntosdeinteres.modelos');

perros.Crear = async (req, res) => {
    const { nombre, ubicacion, descripcion, contacto, tipo, creador } = req.body;
    if (!ubicacion || !tipo) return res.status(400).json({message: "Faltan 1 o mas parametros requeridos!"});
    const nuevaubicacion = new Models ({
        nombre: nombre,
        ubicacion: ubicacion,
        descripcion: descripcion,
        contacto: contacto,
        tipo: tipo,
        creador: creador
    });

    await nuevaubicacion.save();
    res.json({nuevo: nuevaubicacion});
}

perros.Metodoget = async (req, res) => {
    const Ubicaciones = await Models.find();
    res.json(Ubicaciones);
}
perros.buscar = async (req, res) => {
    const ubicacion = await Models.findById(req.params.id);
    res.json(ubicacion);
}

perros.borrar = async (req, res) => {
    await Models.findByIdAndDelete(req.params.id);
    res.send('objeto borrado MAMASA');
}



module.exports = perros;