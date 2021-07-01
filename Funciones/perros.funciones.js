const perros = [];

const Model = require('../modelos/UbicacionesSchema');

perros.Crear = async (req, res) => {
res.send("juan")
}
perros.Metodoget = async (req, res) => {
    const ubicaciones = await Model.find();
    res.json(ubicaciones)
}


module.exports = perros;