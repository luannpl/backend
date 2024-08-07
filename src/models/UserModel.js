const connection = require('../database/connection')
const {DataTypes} = require('sequelize');

let UserModel = connection.define("User", {

    
    firstName: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    surName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },


});


module.exports = UserModel;