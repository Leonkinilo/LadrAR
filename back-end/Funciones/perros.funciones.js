const perros = [];

import Perros from '../modelos/puntosdeinteres.modelos';

perros.Crear = async (req, res) => {
    const { nombre, latitud, longitud, descripcion, contacto, tipo, creador } = req.body;
    if (!latitud || !longitud || !tipo) return res.status(400).json({message: "Faltan 1 o mas parametros requeridos!"});
    const nuevaubicacion = new Perros ({
        nombre,
        latitud, 
        longitud,
        descripcion,
        contacto,
        tipo,
        creador
    });
    await nuevaubicacion.save(perros);
    res.json({nuevo: nuevaubicacion}); 
}

perros.BuscarTodas = async (req, res) => {
    const Ubicaciones = await Perros.find();
    res.json(Ubicaciones);
    return Ubicaciones;
}
perros.Buscar = async (req, res) => {
    const ubicacion = await Perros.find({"tipo": req.params.id});
    res.json(ubicacion);
}

perros.Actualizar = async (req, res) => {
    const { nombre, latitud, longitud, descripcion, contacto, tipo, creador } = req.body;
    const puntodeinteres = await Perros.findOneAndUpdate({_id: req.params.id}, {
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
    await Perros.findByIdAndDelete(req.params.id);
    res.send('objeto borrado MAMASA');
}

module.exports = perros;