const { DataTypes } = require('sequelize');
const dataSource = require('./config/database');

const Roles = dataSource.define('Roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    delete_at:{
        type: DataTypes.DATE,
        allowNull: true
    },
     timestamps: false
})