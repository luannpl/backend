const connection = require('../database/connection')
const {DataTypes} = require('sequelize');

let ProductModel = connection.define("Product",{
    name: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(5,2),
    price_with_discount: DataTypes.DECIMAL(5,2),
    enabled: DataTypes.BOOLEAN,
    stock: DataTypes.INTEGER
})

module.exports = ProductModel;