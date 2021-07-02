const perros = [];

const Models = require('../modelos/puntosdeinteres.modelos');

perros.Crear = async (req, res) => {
    console.log(req.body);
    res.send(req.body);
}
perros.Metodoget = async (req, res) => {
    const Ubicacionesschema = await Models.find();
    res.json(Ubicacionesschema);
}


module.exports = perros;