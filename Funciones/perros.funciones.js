const perros = [];

const Models = require('../modelos/puntosdeinteres.modelos');

perros.Crear = async (req, res) => {
    
    const { nombre, ubicacion, descripcion, Contacto, tipo } = req.body;
    const nuevaubicacion = new Models ({
        nombre: nombre,
        ubicacion: ubicacion,
        descripcion: descripcion,
        Contacto: Contacto,
        tipo: tipo
    });
    console.log(nuevaubicacion);
    res.json(nuevaubicacion);
}

perros.Metodoget = async (req, res) => {
    const Ubicaciones = await Models.find();
    res.json(Ubicaciones);
}


module.exports = perros;