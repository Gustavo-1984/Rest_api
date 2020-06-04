//Rutas para crear usuarios

const express = require("express");
const router = express.Router();
const vehiculoController = require("../controllers/vehiculoController");
const auth = require('../middleware/auth')

//Crea un usuario
//api/consumos
router.post(
    "/",
    auth,
    vehiculoController.altaVehiculo
);

router.get(
    "/",
    auth,
    vehiculoController.obtenerVehiculo
);

module.exports = router;