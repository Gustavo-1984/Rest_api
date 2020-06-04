const Sequelize = require('sequelize');
const db = require('../config/db');




const Consumos = db.define('consumos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vehiculo: Sequelize.STRING,
    date: Sequelize.STRING,
    time: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    placas: Sequelize.STRING,
    unidad: Sequelize.STRING,
    precio: Sequelize.FLOAT,
    litros: Sequelize.FLOAT,
    total: Sequelize.FLOAT

});



module.exports = Consumos;