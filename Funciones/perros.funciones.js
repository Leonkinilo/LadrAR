const perros = [];

const Models = require('../modelos/puntosdeinteres.modelos');

perros.Crear = async (req, res) => {
    //const mamasa = req.body;
    const { nombre, ubicacion, descripcion, Contacto, tipo } = req.body;
    console.log(req.body);
    res.json(req.body);
    //res.send({mamasa});
}
perros.Metodoget = async (req, res) => {
    const Ubicacionesschema = await Models.find();
    res.json({perros: Ubicacionesschema});
}


module.exports = perros;