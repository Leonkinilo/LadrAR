const ubicaciones = [];

const Models = require('../modelos/puntosdeinteres.modelos');

perros.Crear = async (req, res) => {
    const { nombre, latitud, longitud, descripcion, contacto, tipo, creador } = req.body;
    if (!latitud || !longitud || !tipo) return res.status(400).json({message: "Faltan 1 o mas parametros requeridos!"});
    const nuevaubicacion = new Models ({
        nombre,
        latitud, 
        longitud,
        descripcion,
        contacto,
        tipo,
        creador
    });
    await nuevaubicacion.save();
    res.json({nuevo: nuevaubicacion}); 
}

perros.BuscarTodas = async (req, res) => {
    const Ubicaciones = await Models.find();
    res.json(Ubicaciones);
    
}
perros.Buscar = async (req, res) => {
    const ubicacion = await Models.findById(req.params.id);
    res.json(ubicacion);
}


perros.Actualizar = async (req, res) => {
    const { nombre, latitud, longitud, descripcion, contacto, tipo, creador } = req.body;
    const puntodeinteres = await Models.findOneAndUpdate({_id: req.params.id}, {
        nombre,
        latitud,
        longitud,
        descripcion,
        contacto,
        tipo,
        creador
    });
    res.json(puntodeinteres);
}

perros.Borrar = async (req, res) => {
    await Models.findByIdAndDelete(req.params.id);
    res.send('objeto borrado MAMASA');
}

module.exports = ubicaciones;