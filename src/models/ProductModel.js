const connection = require('../database/connection')
const {DataTypes} = require('sequelize');

let ProductModel = connection.define("Product",{
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: DataTypes.TEXT,
    price: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false,
    },
    price_with_discount: DataTypes.DECIMAL(5,2),
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
    },
    stock: {
        type:  DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = ProductModel;