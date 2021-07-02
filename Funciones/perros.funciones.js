const perros = [];

const Models = require('../modelos/puntosdeinteres.modelos');

perros.Crear = async (req, res) => {
    
    const { nombre, ubicacion, descripcion, contacto, tipo } = req.body;
    const nuevaubicacion = new Models ({
        nombre: nombre,
        ubicacion: ubicacion,
        descripcion: descripcion,
        contacto: contacto,
        tipo: tipo
    });
    await nuevaubicacion.save();
    res.json({nuevo: nuevaubicacion});
}

perros.Metodoget = async (req, res) => {
    const Ubicaciones = await Models.find();
    res.json(Ubicaciones);
}


module.exports = perros;