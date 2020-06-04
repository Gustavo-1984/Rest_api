const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearUsuario = async(req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    // extraer usuario y password
    const { usuario, password } = req.body;

    try {
        //validar usuario existente
        let user = await Usuario.findOne({ where: { usuario } });

        if (user) {
            return res.status(400).json({
                msg: "El usuario ya existe",
            });
        }

        //Crea User
        user = new Usuario(req.body);

        //hashear el password

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        //guardar User
        await user.save();

        const payload = {
            user: {
                id: user.id,
                rol: user.rol,
                usuario: user.usuario
            },
        };

        // firmar jwt
        jwt.sign(payload, "secreta", { expiresIn: "3d" }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        });
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error");
    }
};