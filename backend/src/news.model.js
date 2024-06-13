const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const News = sequelize.define('News', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    keywords: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = News;

