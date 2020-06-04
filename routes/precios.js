//Rutas para crear usuarios

const express = require("express");
const router = express.Router();
const preciosController = require("../controllers/preciosController");
const auth = require('../middleware/auth')

//Crea un usuario
//api/consumos
router.post(
    "/",
    auth,
    preciosController.cambiarPrecio
);

router.get(
    "/",
    auth,
    preciosController.obtenerPrecio
);

module.exports = router;