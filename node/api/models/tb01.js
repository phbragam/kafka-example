const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');

const Tb01 = Sequelize.define('Tb01', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    col_texto: {
        type: DataTypes.TEXT,
    },
    col_dt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'tb01',
    timestamps: false
});

module.exports = Tb01;