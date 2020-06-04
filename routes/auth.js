//Rutas para autenticar usuarios

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require('../controllers/authController')
    //Crea un usuario
    //api/auth
router.post(
    "/", [
        check("usuario", "El usuario es obligatorio").not().isEmpty(),
        check("password", "El password es obligatorio").not().isEmpty(),
    ],
    authController.autenticarUsuario
);

module.exports = router;