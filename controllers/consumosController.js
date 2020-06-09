const Consumos = require("../models/Consumos");

exports.crearConsumo = async(req, res) => {

    try {
        //Crear nueco consumo
        const consumos = new Consumos(req.body)

        //Guardar usuarioId
        consumos.usuarioId = req.user.id
        consumos.save()
        res.json(consumos)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//Obtener Proyectos

exports.obtenerConsumos = async(req, res) => {
    try {

        const consumos = await Consumos.findAll({ where: { usuarioId: req.user.id } })
        res.json({ consumos })

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}