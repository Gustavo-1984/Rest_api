const Sequelize = require('sequelize');
const db = require('../config/db');


const Cprecio = db.define('precios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: Sequelize.STRING,
    time: Sequelize.STRING,
    precio: Sequelize.FLOAT

});



module.exports = Cprecio;