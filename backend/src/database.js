const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('newsDB', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
