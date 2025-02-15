const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token')

    if (!token) {
        return res.status(401).json({ msg: 'No hay token, permiso no valido' })
    }

    try {
        const cifrado = jwt.verify(token, 'secreta')
        req.user = cifrado.user
        next()
    } catch (error) {
        res.status(401).json({ msg: 'Token invalido' })
    }
}