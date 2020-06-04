const Sequelize = require('sequelize');
const db = require('../config/db');
const Consumos = require('./Consumos')
const Cprecio = require('../models/Cprecio')
const Nserie = require('../models/Nserie')



const Usuario = db.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: Sequelize.STRING,
    password: Sequelize.STRING,
    rol: Sequelize.STRING,
    estado: Sequelize.STRING,

});
Usuario.hasMany(Consumos)
Usuario.hasMany(Cprecio)
Usuario.hasMany(Nserie)


module.exports = Usuario;