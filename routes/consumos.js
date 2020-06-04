//Rutas para crear usuarios

const express = require("express");
const router = express.Router();
const consumosController = require("../controllers/consumosController");
const auth = require('../middleware/auth')

//Crea un usuario
//api/consumos
router.post(
    "/",
    auth,
    consumosController.crearConsumo
);

router.get(
    "/",
    auth,
    consumosController.obtenerConsumos
);

module.exports = router;