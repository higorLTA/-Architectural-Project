const { DataTypes } = require('sequelize');
const dataSource = require('./config/database');

const AcessType = dataSource.define('AcessType', {
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
    created_at:{
        type: DataTypes.DATE,
        allowNull:true
    }, 
        
     timestamps: false
})