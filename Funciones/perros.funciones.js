const perros = [];

perros.Crear = async (req, res) => {
res.send("juan")
}
perros.Metodoget = async (req, res) => {
res.json({nombre: 'juan', apellido: 'juancito'})
}


module.exports = perros;