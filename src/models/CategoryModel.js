const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

let CategoryModel = connection.define("Category",{
    name: DataTypes.STRING(25),
});

module.exports = CategoryModel