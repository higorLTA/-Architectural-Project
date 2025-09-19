const { DataTypes } = require('sequelize');
const dataSource = require('./config/database');

const User = dataSource.define('User', {
     id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
    nome:{
    type: DataTypes.STRING,
    allowNull: true
    },
    emai:{
    type: DataTypes.STRING,
    allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at:{
      type: DataTypes.DATE,
      allowNull: true
    },
    actived: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    activedUpdate: {
      type: DataTypes.DATE,
      allowNull: true
    }, 
      timestamps: false

})

module.exports = User