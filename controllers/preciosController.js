const Cprecio = require("../models/Cprecio");

exports.cambiarPrecio = async(req, res) => {

    try {
        //Crear nueco consumo
        const precios = new Cprecio(req.body)

        //Guardar usuarioId
        precios.usuarioId = req.user.id
        precios.save()
        res.json(precios)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//Obtener Proyectos

exports.obtenerPrecio = async(req, res) => {
    try {
        const precios = await Cprecio.findAll({ where: { usuarioId: req.user.id } })
        res.json({ precios })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}