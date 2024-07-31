const { Sequelize } = require('sequelize');

const connection = new Sequelize({
    dialect: "mysql",
    database: "Loja",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "luan1010"
})

module.exports = connection;