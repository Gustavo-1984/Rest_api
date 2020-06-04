//Rutas para crear usuarios

const express = require("express");
const router = express.Router();
const seriesController = require("../controllers/seriesController");
const auth = require('../middleware/auth')

//Crea un usuario
//api/consumos
router.post(
    "/",
    auth,
    seriesController.agregarSerie
);

router.get(
    "/",
    auth,
    seriesController.obtenerSerie
);

module.exports = router;