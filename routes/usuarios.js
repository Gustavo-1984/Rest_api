//Rutas para crear usuarios

const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const { check } = require("express-validator");
//Crea un usuario
//api/usuarios
router.post(
    "/", [
        check("usuario", "El usuario es obligatorio").not().isEmpty(),
        check("password", "El password es obligatorio").not().isEmpty(),
    ],
    usuarioController.crearUsuario
);

module.exports = router;