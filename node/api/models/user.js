const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');

const User = Sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.TEXT
    },
    password: {
        type: DataTypes.TEXT
    },
    role: {
        type: DataTypes.ENUM('admin', 'guest'),
        defaultValue: 'guest'
    },
    col_dt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'user_data',
    timestamps: false
});

module.exports = User;