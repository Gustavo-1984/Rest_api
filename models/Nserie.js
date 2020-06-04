const Sequelize = require('sequelize');
const db = require('../config/db');


const Nserie = db.define('series', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    serie: Sequelize.STRING,
    estado: Sequelize.STRING,

});



module.exports = Nserie;