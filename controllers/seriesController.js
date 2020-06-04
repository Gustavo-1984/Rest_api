const Nserie = require("../models/Nserie");

exports.agregarSerie = async(req, res) => {

    try {
        //Crear nueco consumo
        const series = new Nserie(req.body)

        //Guardar usuarioId
        series.usuarioId = req.user.id
        series.save()
        res.json(series)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//Obtener Proyectos

exports.obtenerSerie = async(req, res) => {
    try {
        const series = await Nserie.findAll({ where: { usuarioId: req.user.id } })
        res.json({ series })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}