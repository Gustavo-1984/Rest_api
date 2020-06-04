const Sequelize = require('sequelize');
const db = require('../config/db');




const Vehiculo = db.define('vehiculos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tag: Sequelize.STRING,
    placas: Sequelize.STRING,
    numEconomico: Sequelize.STRING,
    unidad: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    marca: Sequelize.STRING,
    color: Sequelize.FLOAT,
    estato: Sequelize.FLOAT,
    litros: Sequelize.FLOAT

});



module.exports = Vehiculo;