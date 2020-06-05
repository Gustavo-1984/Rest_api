const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarUsuario = async(req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    // extraer usuario y password del request
    const { usuario, password } = req.body

    try {
        let user = await Usuario.findOne({ where: { usuario } })
        if (!user) {
            return res.status(400).json({ msg: 'El usuario no existe' })
        }

        // Revisar password
        const passCorrecto = await bcrypt.compare(password, user.password)
        if (!passCorrecto) {
            return res.status(400).json({ msg: 'Passwor incorrecto' })
        }
        const payload = {
            user: {
                id: user.id,
                rol: user.rol,
                usuario: user.usuario
            },
        };

        // firmar jwt
        await jwt.sign(payload, "secreta", { expiresIn: "3d" }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        });

    } catch (error) {
        console.log(error);
    }

}