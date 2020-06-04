const Vehiculo = require("../models/Vehiculo");

exports.altaVehiculo = async(req, res) => {

    try {
        //Crear nueco consumo
        const vehiculos = new Vehiculo(req.body)

        //Guardar usuarioId
        vehiculos.usuarioId = req.user.id
        vehiculos.save()
        res.json(vehiculos)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//Obtener Proyectos

exports.obtenerVehiculo = async(req, res) => {
    try {
        const vehiculos = await Vehiculo.findAll({ where: { usuarioId: req.user.id } })
        res.json({ vehiculos })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}